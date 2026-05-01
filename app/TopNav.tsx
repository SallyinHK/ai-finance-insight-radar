"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();
  const colors = { textSecondary: "#475569", accentBlue: "#004b87" };

  const navLinks = [
    { name: "Insight Terminal", path: "/posts" },
    { name: "Prompt Registry", path: "/prompts" },
    { name: "Progress Report", path: "/progress-report" }
  ];

  return (
    <div style={{ display: "flex", gap: "32px", height: "100%" }}>
      {navLinks.map((link) => {
        const isActive = pathname === link.path;
        return (
          <Link 
            key={link.path} 
            href={link.path} 
            style={{ 
              textDecoration: "none", 
              color: isActive ? colors.accentBlue : colors.textSecondary, 
              fontSize: "14px", 
              fontWeight: isActive ? "bold" : "600", 
              letterSpacing: "0.5px",
              display: "flex",
              alignItems: "center",
              height: "100%", // 🌟 关键：100% 继承父级的 64px 高度
              borderBottom: isActive ? `3px solid ${colors.accentBlue}` : "3px solid transparent",
              boxSizing: "border-box",
              marginTop: "1px" // 极其细微的像素级对齐
            }}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}