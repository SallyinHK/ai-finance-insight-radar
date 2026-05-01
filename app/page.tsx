import Link from "next/link";
import React from "react";

export default function HomePage() {
  // 沿用机构级设计 Token，保持全局风格绝对统一
  const colors = {
    bgMain: "#f8f9fa",
    bgCard: "#ffffff",
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
    <main style={{ minHeight: "100vh", backgroundColor: colors.bgMain, color: colors.textPrimary, fontFamily: fonts.sans, padding: "80px 48px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: "64px", borderBottom: `2px solid ${colors.textPrimary}`, paddingBottom: "32px" }}>
          <h1 style={{ fontFamily: fonts.serif, fontSize: "40px", margin: "0 0 16px 0", fontWeight: "normal", color: colors.textPrimary }}>
            AI Finance Insight Radar
          </h1>
          <p style={{ fontSize: "16px", color: colors.textSecondary, margin: 0, maxWidth: "600px", lineHeight: "1.6" }}>
            A workflow-based AI system designed to transform raw information into structured financial insights and professional content.
          </p>
        </div>

        {/* Modules Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          
          {/* Module 01: Posts */}
          <Link href="/posts" style={{ textDecoration: "none" }}>
            <div style={{ backgroundColor: colors.bgCard, border: `1px solid ${colors.border}`, borderTop: `4px solid ${colors.accentBlue}`, padding: "32px", height: "100%", display: "flex", flexDirection: "column", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
              <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1.5px", color: colors.textMuted, fontWeight: "bold", marginBottom: "16px" }}>
                Module 01
              </div>
              <h2 style={{ fontFamily: fonts.serif, fontSize: "22px", margin: "0 0 12px 0", color: colors.textPrimary, fontWeight: "normal" }}>
                Insight Terminal
              </h2>
              <p style={{ fontSize: "14px", color: colors.textSecondary, margin: 0, lineHeight: "1.6" }}>
                View AI-generated finance insights and LinkedIn-ready content.
              </p>
            </div>
          </Link>

          {/* Module 02: Prompts */}
          <Link href="/prompts" style={{ textDecoration: "none" }}>
            <div style={{ backgroundColor: colors.bgCard, border: `1px solid ${colors.border}`, borderTop: `4px solid ${colors.textMuted}`, padding: "32px", height: "100%", display: "flex", flexDirection: "column", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
              <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1.5px", color: colors.textMuted, fontWeight: "bold", marginBottom: "16px" }}>
                Module 02
              </div>
              <h2 style={{ fontFamily: fonts.serif, fontSize: "22px", margin: "0 0 12px 0", color: colors.textPrimary, fontWeight: "normal" }}>
                Prompt Registry
              </h2>
              <p style={{ fontSize: "14px", color: colors.textSecondary, margin: 0, lineHeight: "1.6" }}>
                Explore structured prompt design and system logic.
              </p>
            </div>
          </Link>

          {/* Module 03: Report */}
          <Link href="/progress-report" style={{ textDecoration: "none" }}>
            <div style={{ backgroundColor: colors.bgCard, border: `1px solid ${colors.border}`, borderTop: `4px solid ${colors.textMuted}`, padding: "32px", height: "100%", display: "flex", flexDirection: "column", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
              <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1.5px", color: colors.textMuted, fontWeight: "bold", marginBottom: "16px" }}>
                Module 03
              </div>
              <h2 style={{ fontFamily: fonts.serif, fontSize: "22px", margin: "0 0 12px 0", color: colors.textPrimary, fontWeight: "normal" }}>
                Progress Report
              </h2>
              <p style={{ fontSize: "14px", color: colors.textSecondary, margin: 0, lineHeight: "1.6" }}>
                Review architecture, workflow, and prompt optimization process.
              </p>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}