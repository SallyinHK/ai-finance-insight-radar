"use client";

import React, { useState, useEffect } from "react";

export default function PostsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const [scannedCount, setScannedCount] = useState(1204);
  const [hitsCount, setHitsCount] = useState(28);

  useEffect(() => {
    const interval = setInterval(() => {
      setScannedCount(prev => prev + Math.floor(Math.random() * 3) + 1);
      
      if (Math.random() > 0.9) {
        setHitsCount(prev => prev + 1);
      }
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const posts = [
    {
      title: "AI Reasoning Models and the Structure of Financial Research",
      category: "Investment Research",
      status: "Reviewed",
      score: "24/25",
      audience: "Equity research analysts, buy-side investors, strategy teams",
      tone: "Analytical, restrained, close to an executive summary",
      content: `A lot of discussion around “AI reasoning models” focuses on technical benchmarks.\nWhat matters more is how they change the structure of financial research.\n\nMost equity research today still follows a familiar pattern:\n• Collect fragmented data (earnings calls, filings, transcripts)\n• Summarize into internal notes\n• Build a view through iterative synthesis\n\nThe bottleneck has never been access to information.\nIt is the time required to structure and validate it.\n\nWhat these newer models introduce is not automation of judgment, but compression of the first layer of work.\n\nIn practice, this could mean:\n• Faster cross-referencing of earnings narratives across quarters\n• Earlier identification of inconsistencies between management guidance and historical data\n• More time spent stress-testing assumptions rather than compiling inputs\n\nThe implication is subtle but important.\nResearch may shift from “information gathering” to “assumption validation”.\nThat is where differentiation actually sits.\n\nThe question is not whether AI replaces analysts.\nIt is whether it changes what good analysis looks like.\n\n#InvestmentResearch #AIinFinance #EquityResearch #FinancialAnalysis`,
      image: "[Framework Diagram] Minimalist black-and-white framework diagram showing the evolution of financial research workflow: left side 'Traditional Research', right side 'AI-Augmented Research', clean layout, consulting style, high contrast.",
    },
    {
      title: "Testing Reasoning Models in Financial Operations Workflows",
      category: "Operating Model",
      status: "Reviewed",
      score: "22/25",
      audience: "Banking teams, consulting teams, operations managers",
      tone: "Practical, workflow-focused, grounded",
      content: `I tested a reasoning model on a basic task this week:\nsummarizing an earnings call and highlighting risk signals.\n\nThe output was not “perfect”.\nBut it was directionally useful — and more importantly, fast.\n\nThe interesting part is not accuracy in isolation.\nIt is how this fits into an existing workflow.\n\nIn most teams, the process still looks like:\n• Junior analyst drafts initial summary\n• Manager reviews and restructures\n• Final version goes through multiple approval layers\n\nThe friction is not the task itself.\nIt is the handoffs.\n\nWhat AI changes is the starting point.\nInstead of drafting from scratch, teams may begin with:\n• A pre-structured summary\n• Highlighted inconsistencies\n• Suggested areas for deeper review\n\nThis does not remove oversight.\nIf anything, it increases the importance of it.\nBut it does reduce the time spent on first-pass work.\n\nThe practical question is simple:\nwhere do you insert this without breaking existing controls?\n\n#DigitalTransformation #FinanceOperations #AIWorkflow #Productivity`,
      image: "[Workflow Redesign] Professional workflow diagram showing traditional vs AI-assisted financial team process ('Analyst Draft → Approval' vs 'AI Pre-draft → Analyst Validation'), clean consulting style, minimal colors, structured layout.",
    },
    {
      title: "The Shift from Tool to Product in AI Fintech",
      category: "Fintech Products",
      status: "Pending",
      score: "23/25",
      audience: "Fintech founders, product managers, investors",
      tone: "Sharp, slightly contrarian, high-level",
      content: `Most people are still thinking about AI in finance as a tool.\nThat framing is already outdated.\n\nThe more interesting shift is happening at the product level.\nAI is starting to reshape what a “financial product” actually looks like:\n• Interfaces become conversational\n• Decision logic becomes adaptive\n• Value moves from access to intelligence\n\nThis has two immediate implications for fintech:\n• Products may no longer compete on features alone\n• They compete on how well they interpret user intent\n\nDistribution may change.\nIf interfaces become embedded in workflows, traditional app boundaries matter less.\n\nWe have seen this pattern before in other industries.\nWhat is different here is the regulatory layer.\nNot every innovation scales in finance.\n\nThe winners will likely be the ones that can balance:\n• user experience\n• decision transparency\n• compliance requirements\n\nThe question is not who builds the best model.\nIt is who builds the most trusted product on top of it.\n\n#Fintech #AIProducts #FinancialInnovation #ProductStrategy`,
      image: "[Modern Infographic] Modern fintech infographic showing evolution from traditional financial products to AI-driven products, with layers like 'Interface', 'Decision Logic', 'Value Proposition', clean layout, bold typography.",
    }
  ];

  const categories = ["All", "Investment Research", "Operating Model", "Fintech Products"];
  
  const filteredPosts = posts.filter(
    (post) => activeCategory === "All" || post.category === activeCategory
  );

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
          {/* Pending 数据 */}
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
          
          {/* Header Deleted */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", paddingBottom: "16px" }}>
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
                margin: "0 0 24px 0", 
                lineHeight: "1.3",
                fontWeight: "normal"
              }}>
                {post.title}
              </h3>

              {/* Audience and Tone */}
              <div style={{ display: "flex", gap: "24px", marginBottom: "32px", padding: "16px", background: colors.bgSidebar, border: `1px solid ${colors.border}`, borderRadius: "4px" }}>
                <div>
                  <div style={{ fontSize: "10px", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px", fontWeight: "bold" }}>Target Audience</div>
                  <div style={{ fontSize: "13px", color: colors.textPrimary }}>{post.audience}</div>
                </div>
                <div style={{ borderLeft: `1px solid ${colors.border}` }}></div>
                <div>
                  <div style={{ fontSize: "10px", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px", fontWeight: "bold" }}>Tone & Positioning</div>
                  <div style={{ fontSize: "13px", color: colors.textPrimary }}>{post.tone}</div>
                </div>
              </div>

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