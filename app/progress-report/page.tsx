import React from "react";

export default function ProgressReportPage() {
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

  const posts = [
    {
      title: "AI Reasoning Models and the Structure of Financial Research",
      category: "Investment Research & Market Intelligence",
      audit: [
        "[Original AI Draft Flagged] Flagged for overly broad claim that AI could 'transform due diligence completely.'",
        "[Human Override] Replaced with a narrower, more realistic description of compressing the first layer of work.",
        "[Compliance Check] Passed.",
      ],
      content: `A lot of discussion around “AI reasoning models” focuses on technical benchmarks.
What matters more is how they change the structure of financial research.

Most equity research today still follows a familiar pattern:
• Collect fragmented data (earnings calls, filings, transcripts)
• Summarize into internal notes
• Build a view through iterative synthesis

The bottleneck has never been access to information.
It is the time required to structure and validate it.

What these newer models introduce is not automation of judgment, but compression of the first layer of work.
In practice, this could mean:
• Faster cross-referencing of earnings narratives across quarters
• Earlier identification of inconsistencies between management guidance and historical data
• More time spent stress-testing assumptions rather than compiling inputs

The implication is subtle but important.
Research may shift from “information gathering” to “assumption validation”.
That is where differentiation actually sits.

The question is not whether AI replaces analysts.
It is whether it changes what good analysis looks like.

#InvestmentResearch #AIinFinance #EquityResearch #FinancialAnalysis`,
      image: "[Framework Diagram] Minimalist black-and-white framework diagram showing the evolution of financial research workflow: left side 'Traditional Research', right side 'AI-Augmented Research', clean layout, consulting style, high contrast, aspect ratio 4:5.",
    },
    {
      title: "Testing Reasoning Models in Financial Operations Workflows",
      category: "Productivity & Operating Model Transformation",
      audit: [
        "[Original AI Draft Flagged] Contained excessive consulting jargon.",
        "[Human Override] Replaced abstract claims with concrete operational friction points (handoffs, first-pass work).",
        "[Compliance Check] Passed. Tone adjusted to emphasize oversight rather than autonomous execution.",
      ],
      content: `I tested a reasoning model on a basic task this week:
summarizing an earnings call and highlighting risk signals.

The output was not “perfect”.
But it was directionally useful — and more importantly, fast.

The interesting part is not accuracy in isolation.
It is how this fits into an existing workflow.

In most teams, the process still looks like:
• Junior analyst drafts initial summary
• Manager reviews and restructures
• Final version goes through multiple approval layers

The friction is not the task itself.
It is the handoffs.

What AI changes is the starting point.
Instead of drafting from scratch, teams may begin with:
• A pre-structured summary
• Highlighted inconsistencies
• Suggested areas for deeper review

This does not remove oversight.
If anything, it increases the importance of it.
But it does reduce the time spent on first-pass work.

The practical question is simple:
where do you insert this without breaking existing controls?

#DigitalTransformation #FinanceOperations #AIWorkflow #Productivity`,
      image: "[Workflow Redesign] Professional workflow diagram showing traditional vs AI-assisted financial team process, clean consulting style, minimal colors, structured layout, high contrast, aspect ratio 4:5.",
    },
    {
      title: "The Shift from Tool to Product in AI Fintech",
      category: "Fintech Products & New Business Models",
      audit: [
        "[Original AI Draft Flagged] Opened with the overstatement 'AI has changed fintech forever.'",
        "[Human Override] Reframed the argument as a narrower business-model distinction focusing on trust, compliance, and user intent.",
        "[Compliance Check] Passed.",
      ],
      content: `Most people are still thinking about AI in finance as a tool.
That framing is already outdated.

The more interesting shift is happening at the product level.
AI is starting to reshape what a “financial product” actually looks like:
• Interfaces become conversational
• Decision logic becomes adaptive
• Value moves from access to intelligence

This has two immediate implications for fintech:
• Products may no longer compete on features alone
• They compete on how well they interpret user intent

Distribution may change.
If interfaces become embedded in workflows, traditional app boundaries matter less.

We have seen this pattern before in other industries.
What is different here is the regulatory layer.
Not every innovation scales in finance.

The winners will likely be the ones that can balance:
• user experience
• decision transparency
• compliance requirements

The question is not who builds the best model.
It is who builds the most trusted product on top of it.

#Fintech #AIProducts #FinancialInnovation #ProductStrategy`,
      image: "[Modern Infographic] Modern fintech infographic showing evolution from traditional financial products to AI-driven products, with layers like 'Interface', 'Decision Logic', 'Value Proposition', clean layout, bold typography, aspect ratio 1:1.",
    }
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
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
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

        {/* 4. Before vs After Evidence */}
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
                    <td style={{ padding: "16px", color: colors.textPrimary, fontWeight: "500" }}>{ev.v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Content Output Showcase */}
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