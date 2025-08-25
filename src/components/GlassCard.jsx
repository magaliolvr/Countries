import "../components/GlassCard.scss";
import React from "react";

function GlassCard({ children, className }) {
  return <div className={`glass-card ${className}`}>{children}</div>;
}
export default GlassCard;
