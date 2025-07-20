'use client';

import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* 星空背景 */}
      <div className="absolute inset-0 star-field opacity-30"></div>
      
      {/* 浮遊する光の粒子 */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-br from-philosophy-dark/50 via-transparent to-philosophy-purple/30"></div>
    </div>
  );
} 