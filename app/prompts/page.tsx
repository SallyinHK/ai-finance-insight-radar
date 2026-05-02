"use client";
import React from "react";

export default function PromptsPage() {
  const prompts = [
    {
      id: "P-01",
      name: "Source Monitoring Agent",
      purpose: "Identify whether an article belongs to the financial monitoring scope.",
      rules: [
        "Do not invent missing publication dates, URLs, or author names.", 
        "If the source is partially available, state that clearly.",
        "Do not decide finance relevance yet."
      ],
      preview: "Your task is to review the given source and extract basic metadata. Do not summarize or interpret the content yet. Focus only on identifying what the source is and whether it belongs to the monitoring scope..."
    },
    {
      id: "P-03",
      name: "Finance Relevance Router",
      purpose: "Score AI information (0-25) based on strategic impact, cost, and risk.",
      rules: [
        "Be conservative when the finance connection is weak.", 
        "Explain score deduction in a one-sentence justification.",
        "Do not give a high score only because the topic is about AI."
      ],
      preview: "Scoring calibration:\n5 = Direct and immediate impact on financial workflows, decision-making, risk, cost, or revenue.\n3 = Indirect, emerging, or future impact on finance.\n1 = General AI news with no clear finance implication."
    },
    {
      id: "P-04",
      name: "Insight Card Generator",
      purpose: "Convert high-relevance items into structured, actionable business insights.",
      rules: [
        "Keep the implication specific to finance, investment research, or risk.", 
        "Mention at least one risk, limitation, or review point.", 
        "Include a System Flag for compliance warning."
      ],
      preview: "Output format:\n- Recommended action / next step:\n- Risk or limitation:\n- System Flag: [Generate a specific compliance or deployment warning, e.g., ⚠️ Requires human-in-the-loop for SEC filings]"
    },
    {
      id: "P-07",
      name: "LinkedIn Content Generator",
      purpose: "Draft structured, professional content aligned with selected KOL patterns.",
      rules: [
        "Do not start with generic hooks like 'AI is transforming...'",
        "Translate abstract claims into concrete operational friction points.",
        "Ensure the visual strategy specifies aspect ratio and avoids generic robot imagery."
      ],
      preview: "Requirements:\n- Target audience: [Insert from classification]\n- Tone: Analytical and professional\n- Applied checklist rules: Tension hook, bullet clarity, limitation-setting.\n- Visual Concept: Suggest a workflow diagram or data chart (Aspect ratio 4:5 or 1:1)."
    },
    {
      id: "P-08",
      name: "Human Review / System Audit",
      purpose: "Review generated drafts and produce a concise, traceable audit log.",
      rules: [
        "Prefer precise language over dramatic claims.", 
        "If a claim cannot be supported by the source, weaken it or remove it.",
        "The System Audit Log should be concise and written like an internal review record."
      ],
      preview: "Review checklist:\n1. Is the source clearly represented?\n2. Is the finance implication reasonable?\n3. Is any claim overstated?\n4. Does the post avoid sounding like investment advice?"
    }
  ];

  // Design Tokens
  const colors = {
    bgMain: "#ffffff",
    bgCard: "#f8f9fa",
    textPrimary: "#0f172a",
    textSecondary: "#475569",
    textMuted: "#64748b",
    border: "#e2e8f0",
    accentBlue: "#004b87",
  };

  const fonts = {
    serif: "Georgia, 'Times New Roman', Times, serif",
    sans: "Arial, 'Helvetica Neue', Helvetica, sans-serif"
  };

  return (
    <div style={{ padding: "64px 72px", background: colors.bgMain, minHeight: "100vh", fontFamily: fonts.sans }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ paddingBottom: "24px", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: fonts.serif, color: colors.textPrimary, fontSize: "36px", margin: "0 0 16px 0", fontWeight: "normal" }}>
            System Prompt Registry
          </h2>
          <p style={{ color: colors.textSecondary, fontSize: "16px", margin: 0, lineHeight: "1.6" }}>
            System-level instructions mapped to the agentic workflow. 
            Designed for high fidelity, structural consistency, and zero hallucination in financial contexts.
          </p>
        </div>

        {/* Prompts List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {prompts.map(prompt => (
            <div key={prompt.id} style={{ 
              border: `1px solid ${colors.border}`, 
              borderLeft: `4px solid ${colors.accentBlue}`, 
              padding: "32px", 
              background: colors.bgCard 
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <h3 style={{ margin: 0, color: colors.textPrimary, fontSize: "20px", fontFamily: fonts.serif, fontWeight: "normal" }}>
                  <span style={{ color: colors.accentBlue, marginRight: "16px", fontFamily: "monospace", fontSize: "16px", fontWeight: "bold" }}>
                    {prompt.id}
                  </span>
                  {prompt.name}
                </h3>
                <span style={{ fontSize: "11px", background: "#e2e8f0", padding: "6px 12px", color: colors.textSecondary, textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold" }}>
                  Active in Workflow
                </span>
              </div>
              
              <div style={{ marginBottom: "24px" }}>
                <strong style={{ display: "block", fontSize: "12px", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "8px" }}>
                  Module Purpose
                </strong>
                <p style={{ margin: 0, fontSize: "15px", color: colors.textPrimary }}>{prompt.purpose}</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", borderTop: `1px solid ${colors.border}`, paddingTop: "24px" }}>
                {/* Constraints */}
                <div>
                  <strong style={{ display: "block", fontSize: "12px", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>
                    Hard Constraints (Anti-Hallucination)
                  </strong>
                  <ul style={{ margin: 0, paddingLeft: "20px", color: colors.accentBlue, fontSize: "14px", lineHeight: "1.7" }}>
                    {prompt.rules.map((rule, idx) => (
                      <li key={idx} style={{ marginBottom: "8px" }}>{rule}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Snippet */}
                <div>
                  <strong style={{ display: "block", fontSize: "12px", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>
                    Core Prompt Snippet
                  </strong>
                  <pre style={{ 
                    margin: 0, 
                    padding: "16px", 
                    background: colors.bgMain, 
                    border: `1px solid ${colors.border}`, 
                    color: colors.textSecondary, 
                    fontSize: "13px", 
                    whiteSpace: "pre-wrap", 
                    fontFamily: "monospace",
                    lineHeight: "1.6"
                  }}>
                    {prompt.preview}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}