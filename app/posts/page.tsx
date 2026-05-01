"use client";

import React, { useState, useEffect } from "react";

export default function PostsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // 1. 动态数据 State
  const [scannedCount, setScannedCount] = useState(1204);
  const [hitsCount, setHitsCount] = useState(28);

  // 2. 优雅的心跳逻辑：每5秒跳动一次
  useEffect(() => {
    const interval = setInterval(() => {
      setScannedCount(prev => prev + Math.floor(Math.random() * 3) + 1);
      
      // 10% 的概率增加一条高相关命中
      if (Math.random() > 0.9) {
        setHitsCount(prev => prev + 1);
      }
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const posts = [
    {
      title: "AI Research Agents and the Future of Due Diligence",
      category: "Investment Research",
      status: "Reviewed",
      score: "20/25",
      content: `Investment research does not have an information shortage.
It has a filtering problem.

Analysts already have access to filings, earnings transcripts, expert calls, and market news. The harder part is deciding what actually matters before forming a view.

This is where AI research agents become interesting. Not because they can write a polished paragraph, but because they help with the messy middle of research:
• Scanning large volumes of company information
• Comparing management commentary across quarters
• Flagging inconsistencies between filings and earnings calls

The analyst's role does not disappear in this workflow. It moves closer to verification and judgment.

For investment teams, AI may make the first draft of research faster. But conviction still needs to be earned by people.`,
      image: "Research workflow dashboard showing company filings, earnings transcripts, and analyst verification checkpoints.",
    },
    {
      title: "Redesigning the Middle-Office for AI Agents",
      category: "Operating Model",
      status: "Reviewed",
      score: "18/25",
      content: `The easiest AI project to approve is often the least useful one.

A team finds a repetitive task. They add an AI tool. The task becomes faster. That is useful, but it is not the same as changing the operating model.

In financial services, the larger productivity question is usually not: "How many hours can this save?"

It is closer to: "What should the workflow look like now that some work can be done differently?"

For example, if AI is added to a middle-office process, the team still needs to decide:
• Where human judgment is required
• Which outputs need review before they are trusted
• How exceptions are escalated
• Who is accountable when the output is wrong

The better use case is not only automation. It is redesigning the workflow around what AI can and cannot do well.`,
      image: "Before-and-after operating model diagram showing an old approval-heavy process becoming a cleaner AI-supported workflow.",
    },
    {
      title: "The Cost of Software vs. The Cost of Trust",
      category: "Fintech Products",
      status: "Pending",
      score: "22/25",
      content: `AI is making fintech products cheaper to build.
That does not mean fintech companies are easier to build.

A small team can now prototype a financial planning tool, lending assistant, or compliance workflow much faster than before. The cost of building the first version is falling.

But in financial services, product building is only one part of the business model.

The harder questions come later:
• Can users trust the recommendation?
• Can the product explain its logic?
• Can it handle sensitive financial data safely?
• Can it meet regulatory expectations?

AI lowers the cost of software creation. It does not automatically lower the cost of trust. That may become the real divide between AI-native fintech products that scale and those that stay as demos.`,
      image: "Split layout graphic: 'Cheaper to Build' vs. 'Still Hard to Scale' (trust, compliance, data security).",
    },
  ];

  const categories = ["All", "Investment Research", "Operating Model", "Fintech Products"];
  
  const filteredPosts = posts.filter(
    (post) => activeCategory === "All" || post.category === activeCategory
  );

  // Design Tokens - Institutional Style
  const colors = {
    bgMain: "#ffffff",
    bgSidebar: "#f8f9fa",
    textPrimary: "#0f172a",
    textSecondary: "#475569",
    textMuted: "#64748b",
    border: "#e2e8f0",
    accentBlue: "#004b87", 
    statusPass: "#0f5132",
    statusPassBg: "#d1e7dd",
    statusPending: "#664d03",
    statusPendingBg: "#fff3cd"
  };

  const fonts = {
    serif: "Georgia, 'Times New Roman', Times, serif",
    sans: "Arial, 'Helvetica Neue', Helvetica, sans-serif"
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: colors.bgMain, color: colors.textPrimary, fontFamily: fonts.sans }}>
      
      {/* Left Sidebar */}
      <aside style={{ width: "280px", borderRight: `1px solid ${colors.border}`, padding: "40px 32px", background: colors.bgSidebar }}>

        {/* Pseudo-data Metrics */}
        <div style={{ marginBottom: "56px" }}>
          <div style={{ fontSize: "11px", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "24px", fontWeight: "bold" }}>
            Terminal Metrics
          </div>
          
          <div style={{ marginBottom: "20px", borderBottom: `1px solid ${colors.border}`, paddingBottom: "12px" }}>
            <div style={{ fontSize: "12px", color: colors.textSecondary, marginBottom: "4px" }}>Sources Scanned</div>
            {/* 绑定动态数据 */}
            <div style={{ fontSize: "24px", color: colors.textPrimary, fontFamily: fonts.serif }}>
              {scannedCount.toLocaleString()}
            </div>
          </div>
          <div style={{ marginBottom: "20px", borderBottom: `1px solid ${colors.border}`, paddingBottom: "12px" }}>
            <div style={{ fontSize: "12px", color: colors.textSecondary, marginBottom: "4px" }}>High Relevance Hits</div>
            {/* 绑定动态数据 */}
            <div style={{ fontSize: "24px", color: colors.accentBlue, fontFamily: fonts.serif }}>
              {hitsCount.toLocaleString()}
            </div>
          </div>
          <div style={{ borderBottom: `1px solid ${colors.border}`, paddingBottom: "12px" }}>
            <div style={{ fontSize: "12px", color: colors.textSecondary, marginBottom: "4px" }}>Pending Audit</div>
            <div style={{ fontSize: "24px", color: colors.textPrimary, fontFamily: fonts.serif }}>1</div>
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <div style={{ fontSize: "11px", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px", fontWeight: "bold" }}>
            Coverage Areas
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  textAlign: "left",
                  padding: "10px 12px",
                  fontSize: "14px",
                  fontWeight: activeCategory === cat ? "bold" : "normal",
                  color: activeCategory === cat ? colors.accentBlue : colors.textSecondary,
                  background: activeCategory === cat ? "rgba(0, 75, 135, 0.05)" : "transparent",
                  borderLeft: activeCategory === cat ? `3px solid ${colors.accentBlue}` : "3px solid transparent",
                  borderTop: "none",
                  borderRight: "none",
                  borderBottom: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "48px 72px", overflowY: "auto" }}>
        <div style={{ maxWidth: "800px" }}>
          
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", paddingBottom: "24px", borderBottom: `2px solid ${colors.textPrimary}` }}>
            <div>
              <h2 style={{ fontFamily: fonts.serif, color: colors.textPrimary, fontSize: "32px", margin: "0 0 12px 0", fontWeight: "normal" }}>
                Research & Insights
              </h2>
              <p style={{ color: colors.textSecondary, fontSize: "14px", margin: 0, fontFamily: fonts.sans }}>
                Displaying {filteredPosts.length} authorized reports for "{activeCategory}"
              </p>
            </div>
            <div style={{ fontSize: "11px", color: colors.textMuted, letterSpacing: "1px", textTransform: "uppercase" }}>
              Last Updated: Just Now
            </div>
          </div>

          {/* Posts Feed */}
          {filteredPosts.map((post, i) => (
            <article
              key={i}
              style={{
                background: colors.bgMain,
                border: `1px solid ${colors.border}`,
                borderTop: `4px solid ${colors.accentBlue}`, 
                padding: "40px",
                marginBottom: "40px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
              }}
            >
              {/* Meta Data Row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <span style={{ fontSize: "12px", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: "bold" }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: "12px", color: colors.textSecondary, borderLeft: `1px solid ${colors.border}`, paddingLeft: "16px" }}>
                    Relevance Score: <strong>{post.score}</strong>
                  </span>
                </div>
                
                <span style={{ 
                  fontSize: "11px", 
                  color: post.status === "Reviewed" ? colors.statusPass : colors.statusPending,
                  background: post.status === "Reviewed" ? colors.statusPassBg : colors.statusPendingBg,
                  padding: "4px 10px", 
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  letterSpacing: "1px"
                }}>
                  {post.status}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ 
                fontFamily: fonts.serif, 
                color: colors.textPrimary, 
                fontSize: "26px", 
                margin: "0 0 32px 0", 
                lineHeight: "1.3",
                fontWeight: "normal"
              }}>
                {post.title}
              </h3>

              {/* Content */}
              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  color: colors.textSecondary,
                  lineHeight: "1.8",
                  fontFamily: fonts.sans,
                  fontSize: "15px",
                  margin: 0
                }}
              >
                {post.content}
              </pre>

              {/* Divider */}
              <div style={{ borderTop: `1px solid ${colors.border}`, margin: "32px 0 24px 0" }} />

              {/* Image hint */}
              <div style={{ 
                fontSize: "13px", 
                color: colors.textSecondary, 
                background: colors.bgSidebar, 
                padding: "16px 20px", 
                borderLeft: `3px solid ${colors.border}`,
                fontStyle: "italic"
              }}>
                <span style={{ fontWeight: "bold", color: colors.textPrimary, fontStyle: "normal", marginRight: "8px" }}>Visual Strategy:</span> 
                {post.image}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}