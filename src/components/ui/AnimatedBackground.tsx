"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Layer 1: Primary gradient movement - BOOSTED */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)",
            "radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.4) 0%, rgba(236, 72, 153, 0.1) 40%, transparent 70%)",
            "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)",
            "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />

      {/* Layer 2: Secondary gradient for depth - BOOSTED */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 80%)",
            "radial-gradient(circle at 30% 70%, rgba(244, 114, 182, 0.3) 0%, rgba(244, 114, 182, 0.05) 50%, transparent 80%)",
            "radial-gradient(circle at 60% 60%, rgba(96, 165, 250, 0.3) 0%, rgba(96, 165, 250, 0.05) 50%, transparent 80%)",
            "radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 80%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
        className="absolute inset-0"
      />

      {/* Layer 3: Accent glows - NEW */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 90% 10%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 10% 90%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 90% 10%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute inset-0"
      />
    </div>
  );
}
