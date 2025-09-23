import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

/**
 * A lazy, trailing cursor rendered as a big circle that follows the mouse.
 * It is non-interactive (pointer-events: none) and should be mounted once at app root.
 */
export default function LazyCursor() {
  const { theme } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth trailing spring
  const springX = useSpring(mouseX, { stiffness: 250, damping: 30, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 250, damping: 30, mass: 0.6 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  // Make it smaller by 40% (80 -> 48)
  const circleSize = 48; // px
  const offset = circleSize / 2;
  const x = useTransform(springX, (v) => v - offset);
  const y = useTransform(springY, (v) => v - offset);

  const isDark = theme === "dark";
  const borderColor = isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)";
  const glowShadow = isDark
    ? "0 0 120px 30px rgba(255,255,255,0.06)"
    : "0 0 80px 20px rgba(0,0,0,0.06)";
  const radialBg = isDark
    ? "radial-gradient(closest-side, rgba(255,255,255,0.08), rgba(255,255,255,0.02) 70%, transparent)"
    : "radial-gradient(closest-side, rgba(0,0,0,0.08), rgba(0,0,0,0.02) 70%, transparent)";
  const blendMode = isDark ? "screen" : "multiply";

  return (
    <div className="pointer-events-none fixed inset-0 z-[999]">
      <motion.div
        aria-hidden
        className="hidden md:block" // show on md+ to avoid cluttering small screens
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: circleSize,
          height: circleSize,
          x,
          y,
          borderRadius: "9999px",
          border: `1px solid ${borderColor}`,
          background: radialBg,
          boxShadow: glowShadow,
          mixBlendMode: blendMode,
          backdropFilter: "blur(1px)",
        }}
      />
    </div>
  );
}
