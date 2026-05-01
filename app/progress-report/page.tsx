import React from "react";

export default function ProgressReportPage() {
  // --- 核心数据层 ---
  const optimizations = [
    { area: "Relevance Router", before: "Used 0–5 scoring without clear calibration", issue: "Scores could be inconsistent", after: "Added scoring calibration for 5, 3, 1, and 0", improvement: "More consistent routing decisions" },
    { area: "Insight Card", before: "Included summary, business implication, and risk", issue: "Actionability was not strong enough", after: "Added 'Recommended Action / Next Step'", improvement: "Makes the insight more useful for analysts" },
    { area: "Risk Control", before: "Risk was mentioned only as a limitation", issue: "Financial deployment warnings were not visible", after: "Added 'System Flag'", improvement: "Better fit with compliance needs" },
    { area: "Source Reliability", before: "Source details were not separated from assumptions", issue: "Risk of hallucinated dates, authors, URLs", after: "Added anti-hallucination constraints", improvement: "Better data provenance" },
    { area: "Human Review", before: "Written as explanatory 'review notes'", issue: "Looked like a student explaining edits", after: "Changed to 'System Audit Log'", improvement: "More realistic for financial workflows" },
  ];

  const evidence = [
    { metric: "Insight Implication", v1: "'This will change how analysts work.'", v2: "'Junior analysts may spend less time compiling information and more time checking assumptions.'", impact: "More specific to investment research workflow." },
    { metric: "Risk Control", v1: "'There may be accuracy risks.'", v2: "'⚠️ Requires human-in-the-loop review before using AI-generated summaries for filings analysis.'", impact: "Adds a finance-specific deployment warning." },
    { metric: "LinkedIn Hook", v1: "'AI is transforming financial research.'", v2: "'Investment research does not have an information shortage. It has a filtering problem.'", impact: "More specific, sharper, and aligned with analyst pain points." },
  ];

  // 100% 还原你提供的文本内容
  const posts = [
    {
      title: "AI Reasoning Models in Investment Research",
      category: "Investment Research & Market Intelligence",
      audit: [
        "[Original AI Draft Flagged] Overstated impact as 'fully replacing analysts'.",
        "[Human Override] Adjusted to 'augmenting first-layer research tasks'.",
        "[Compliance Check] Added limitation on data reliability.",
      ],
      content: `A lot of attention is going to generative AI in finance.  
But the real shift may come from reasoning models.

Instead of just summarizing reports, these models can:
• Break down earnings calls  
• Cross-check assumptions  
• Flag inconsistencies across sources  

For junior analysts, this doesn't remove work — it changes it.  
Less time compiling data, more time validating it.

One practical implication:  
Firms could pilot these tools on earnings transcripts before integrating them into core workflows.

The real question isn't whether AI will replace research.  
It's whether teams redesign their process fast enough to use it properly.`,
      image: "Framework diagram of AI-assisted investment research workflow, minimal, professional, 4:5 aspect ratio",
    },
    {
      title: "AI in Internal Finance Workflows",
      category: "Productivity & Operating Model Transformation",
      audit: [
        "[Original AI Draft Flagged] Too much consulting jargon.",
        "[Human Override] Replaced with concrete workflow friction points.",
        "[Compliance Check] Ensured no exaggerated ROI claims.",
      ],
      content: `Most discussions about AI in finance focus on front-office use cases.

But internal workflows may change faster.

Consider approval chains, reporting, and compliance checks.  
These processes are structured, repetitive, and heavily documented.

AI doesn't need to "understand everything" to add value here.  
It only needs to reduce friction in:
• Document processing  
• Internal validation  
• Data reconciliation  

The impact is subtle but cumulative.

Instead of large transformation programs,  
we may see incremental workflow redesign.

The firms that win won't be those with the best models.  
They'll be the ones that redesign their internal processes around them.`,
      image: "Minimal dashboard showing finance workflow automation, high contrast, clean layout, 4:5 aspect ratio",
    },
  ];

  // --- 机构级设计 Token ---
  const colors = {
    bgMain: "#f8f9fa",
    bgCard: "#ffffff",
    textPrimary: "#0f172a",
    textSecondary: "#475569",
    textMuted: "#64748b",
    border: "#e2e8f0",
    accentBlue: "#004b87",
    tableHeader: "#f1f5f9"
  };

  const fonts = {
    serif: "Georgia, 'Times New Roman', Times, serif",
    sans: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" // 添加等宽字体用于 Audit Log
  };

  const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
    <div style={{ marginBottom: "24px" }}>
      <h2 style={{ fontFamily: fonts.serif, fontSize: "28px", margin: "0 0 8px 0", fontWeight: "normal", color: colors.textPrimary }}>
        {title}
      </h2>
      {subtitle && <p style={{ margin: "0", fontSize: "14px", color: colors.textSecondary, textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold" }}>{subtitle}</p>}
    </div>
  );

  const FeatureBlock = ({ num, title, desc }: { num: string, title: string, desc: string }) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", backgroundColor: "rgba(0, 75, 135, 0.08)", color: colors.accentBlue, fontSize: "11px", fontWeight: "bold", border: `1px solid rgba(0, 75, 135, 0.2)` }}>
        {num}
      </div>
      <div style={{ flex: 1 }}>
        <strong style={{ display: "block", color: colors.textPrimary, marginBottom: "4px", fontSize: "15px" }}>{title}</strong>
        <span style={{ color: colors.textSecondary, fontSize: "14px", lineHeight: "1.6" }}>{desc}</span>
      </div>
    </div>
  );

  return (
    <main style={{ minHeight: "100vh", backgroundColor: colors.bgMain, color: colors.textPrimary, fontFamily: fonts.sans, padding: "64px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        {/* Document Header */}
        <div style={{ marginBottom: "72px", textAlign: "center" }}>
          <h1 style={{ fontFamily: fonts.serif, fontSize: "42px", margin: "0 0 16px 0", fontWeight: "normal", color: colors.textPrimary }}>
            Project Deliverables & Progress Report
          </h1>
          <p style={{ margin: "0 auto", maxWidth: "650px", fontSize: "16px", color: colors.textSecondary, lineHeight: "1.6" }}>
            A comprehensive documentation of workflow architecture, prompt optimization evidence, system audit logs, and strategic reflections <br />for the AI Finance Insight Radar.
          </p>
        </div>

        {/* 1. Workflow Architecture */}
        <section style={{ marginBottom: "64px" }}>
          <SectionTitle title="1. Workflow Architecture & Design Logic" subtitle="System Blueprint" />
          <div style={{ backgroundColor: colors.bgCard, padding: "40px", border: `1px solid ${colors.border}`, borderTop: `4px solid ${colors.accentBlue}` }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "36px", padding: "32px", backgroundColor: "#f1f5f9", border: `1px solid ${colors.border}` }}>
              {['Raw Data', 'Relevance Router', 'Insight Card', 'Human Audit', 'Terminal'].map((step, idx, arr) => (
                <React.Fragment key={idx}>
                  <div style={{ 
                    padding: "10px 14px", 
                    backgroundColor: (idx === 1 || idx === 3) ? colors.accentBlue : colors.bgCard, 
                    color: (idx === 1 || idx === 3) ? "#fff" : colors.textPrimary, 
                    border: `1px solid ${(idx === 1 || idx === 3) ? colors.accentBlue : colors.border}`, 
                    fontSize: "12px", 
                    fontWeight: "bold", 
                    textAlign: "center", 
                    width: "110px",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
                  }}>
                    {step}
                  </div>
                  {idx < arr.length - 1 && <div style={{ color: colors.textMuted, fontSize: "16px", fontWeight: "bold" }}>→</div>}
                </React.Fragment>
              ))}
            </div>
            <p style={{ fontSize: "15px", color: colors.textSecondary, lineHeight: "1.8", margin: "0 0 24px 0" }}>
              The core design logic is that content quality depends on the quality of the upstream decision process. If the system moves directly from "AI news" to "LinkedIn post," the final output is likely to become generic or promotional. Therefore, the workflow adds critical control points:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <FeatureBlock num="01" title="Finance Relevance Router" desc="Evaluates information using a strict 25-point rubric calibrated for financial impact." />
              <FeatureBlock num="02" title="Insight Card Generator" desc="Translates abstract technical updates into actionable business intelligence with explicit risk flags." />
              <FeatureBlock num="03" title="KOL Style Application" desc="Applies structural patterns reverse-engineered from institutional finance and tech KOLs." />
              <FeatureBlock num="04" title="System Audit Layer" desc="A mandatory human-in-the-loop checkpoint to catch overstatements and enforce data provenance." />
            </div>
          </div>
        </section>

        {/* 2. Key Challenges & Mitigation */}
        <section style={{ marginBottom: "64px" }}>
          <SectionTitle title="2. Key Challenges & Mitigation" subtitle="Data Provenance & Hallucination Control" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ backgroundColor: colors.bgCard, padding: "32px", border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontFamily: fonts.serif, fontSize: "20px", margin: "0 0 12px 0", color: colors.accentBlue }}>Ensuring Data Provenance</h3>
              <p style={{ fontSize: "14px", color: colors.textSecondary, lineHeight: "1.7", margin: 0 }}>
                Financial thought leadership cannot rely on unverified statements. Early testing revealed the LLM's tendency to hallucinate engagement metrics or source URLs. <br/><br/><strong>Mitigation:</strong> Added strict anti-hallucination constraints ("Do not invent missing dates") and introduced the System Flag for compliance warnings.
              </p>
            </div>
            <div style={{ backgroundColor: colors.bgCard, padding: "32px", border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontFamily: fonts.serif, fontSize: "20px", margin: "0 0 12px 0", color: colors.accentBlue }}>Avoiding Generic Output</h3>
              <p style={{ fontSize: "14px", color: colors.textSecondary, lineHeight: "1.7", margin: 0 }}>
                Initial drafts contained excessive consulting jargon ("fundamentally transforming"). <br/><br/><strong>Mitigation:</strong> Narrowed the target audience to junior analysts, replacing abstract phrases with concrete workflow friction points (e.g., "approval chains," "data reconciliation").
              </p>
            </div>
          </div>
        </section>

        {/* 3. Prompt Optimization Progress */}
        <section style={{ marginBottom: "64px" }}>
          <SectionTitle title="3. Prompt Optimization Progress" subtitle="Iterative Refinement" />
          <div style={{ overflowX: "auto", border: `1px solid ${colors.border}` }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", textAlign: "left", backgroundColor: colors.bgCard }}>
              <thead>
                <tr style={{ backgroundColor: colors.tableHeader, borderBottom: `2px solid ${colors.border}` }}>
                  <th style={{ padding: "16px", color: colors.textPrimary }}>Module Area</th>
                  <th style={{ padding: "16px", color: colors.textPrimary }}>Identified Issue (V1)</th>
                  <th style={{ padding: "16px", color: colors.textPrimary }}>Final Optimization (V2)</th>
                </tr>
              </thead>
              <tbody>
                {optimizations.map((opt, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${colors.border}` }}>
                    <td style={{ padding: "16px", fontWeight: "bold", color: colors.accentBlue, width: "20%" }}>{opt.area}</td>
                    <td style={{ padding: "16px", color: colors.textSecondary, width: "40%" }}>{opt.issue}</td>
                    <td style={{ padding: "16px", color: colors.textPrimary, width: "40%" }}>{opt.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Before vs After Evidence (去除了多余的蓝色竖线) */}
        <section style={{ marginBottom: "64px" }}>
          <SectionTitle title="4. Optimization Evidence" subtitle="Before & After Output Comparisons" />
          <div style={{ overflowX: "auto", border: `1px solid ${colors.border}` }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", textAlign: "left", backgroundColor: colors.bgCard }}>
              <thead>
                <tr style={{ backgroundColor: colors.tableHeader, borderBottom: `2px solid ${colors.border}` }}>
                  <th style={{ padding: "16px", color: colors.textPrimary }}>Component</th>
                  <th style={{ padding: "16px", color: colors.textPrimary }}>V1 Output (Generic)</th>
                  <th style={{ padding: "16px", color: colors.textPrimary }}>V2 Output (Optimized)</th>
                </tr>
              </thead>
              <tbody>
                {evidence.map((ev, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${colors.border}` }}>
                    <td style={{ padding: "16px", fontWeight: "bold", color: colors.accentBlue }}>{ev.metric}</td>
                    <td style={{ padding: "16px", color: colors.textMuted, fontStyle: "italic" }}>{ev.v1}</td>
                    {/* 删除了 borderLeft: `3px solid ${colors.accentBlue}` */}
                    <td style={{ padding: "16px", color: colors.textPrimary, fontWeight: "500" }}>{ev.v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Content Output Showcase (精修UI，取消重边框) */}
        <section style={{ marginBottom: "64px" }}>
          <SectionTitle title="5. Final System Outputs" subtitle="Generated Insights & Audit Logs" />
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {posts.map((post, idx) => (
              <div key={idx} style={{ backgroundColor: colors.bgCard, border: `1px solid ${colors.border}`, padding: "40px" }}>
                
                <div style={{ fontSize: "11px", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: "bold", marginBottom: "16px" }}>
                  {post.category}
                </div>
                
                <h3 style={{ fontFamily: fonts.serif, fontSize: "24px", color: colors.textPrimary, margin: "0 0 24px 0", lineHeight: "1.3", fontWeight: "normal" }}>
                  {post.title}
                </h3>
                
                {/* 升级版 Audit Log：去除笨重边框，增加系统终端感 */}
                <div style={{ backgroundColor: "#f8fafc", border: `1px solid ${colors.border}`, borderRadius: "4px", padding: "16px", marginBottom: "24px" }}>
                  <p style={{ margin: "0 0 8px 0", fontSize: "11px", fontWeight: "bold", color: colors.textSecondary, textTransform: "uppercase", letterSpacing: "1px", fontFamily: fonts.mono }}>
                    <span style={{ color: colors.accentBlue, marginRight: "6px" }}>▶</span> System Audit Log
                  </p>
                  <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "12px", color: colors.textSecondary, lineHeight: "1.6", fontFamily: fonts.mono }}>
                    {post.audit.map((log, i) => <li key={i} style={{ marginBottom: "4px" }}>{log}</li>)}
                  </ul>
                </div>

                <div style={{ whiteSpace: "pre-wrap", fontSize: "15px", color: colors.textSecondary, lineHeight: "1.8", marginBottom: "32px" }}>
                  {post.content}
                </div>

                {/* 升级版 Visual Strategy：做成轻量级的标签尾巴 */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "12px", color: colors.textSecondary, backgroundColor: "#f1f5f9", padding: "8px 12px", borderRadius: "4px" }}>
                  <span style={{ fontWeight: "bold", color: colors.textPrimary, textTransform: "uppercase", letterSpacing: "0.5px", fontSize: "10px" }}>Visual Strategy</span> 
                  <span style={{ color: colors.border }}>|</span>
                  <span style={{ fontStyle: "italic" }}>{post.image}</span>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* 6. Limitations & Future */}
        <section>
          <SectionTitle title="6. Limitations & Future Roadmap" subtitle="Strategic Reflection" />
          <div style={{ backgroundColor: colors.bgCard, padding: "40px", border: `1px solid ${colors.border}` }}>
            <h3 style={{ fontFamily: fonts.serif, fontSize: "20px", margin: "0 0 16px 0", color: colors.textPrimary }}>System Limitations</h3>
            <p style={{ fontSize: "15px", color: colors.textSecondary, lineHeight: "1.8", margin: "0 0 32px 0" }}>
              The model struggles to identify secondary compliance risks (e.g., downstream accountability problems) for entirely novel AI capabilities without human intervention. This reinforces the design principle that this system must operate as a <strong>copilot system</strong> rather than a fully autonomous publishing pipeline.
            </p>

            <h3 style={{ fontFamily: fonts.serif, fontSize: "20px", margin: "0 0 16px 0", color: colors.textPrimary }}>Future Automation Opportunities</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <FeatureBlock num="01" title="Vector Database Integration" desc="Storing historical Insight Cards and audit logs to enable semantic search across past market developments." />
              <FeatureBlock num="02" title="n8n Automation Pipeline" desc="Triggering the Source Monitoring Agent daily via RSS feeds and pushing pending drafts to a Slack/Teams review channel." />
              <FeatureBlock num="03" title="Advanced Metric Tracking" desc="Implementing tracking for 'Content Readiness' (measuring how much editing a draft requires before publication)." />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}