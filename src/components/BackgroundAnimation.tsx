'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function BackgroundAnimation() {
  // パフォーマンス最適化: 粒子の位置をメモ化
  const particles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    })), []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* 星空背景 */}
      <div className="absolute inset-0 star-field opacity-30"></div>
      
      {/* 浮遊する光の粒子 */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
      
      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-br from-philosophy-dark/50 via-transparent to-philosophy-purple/30"></div>
    </div>
  );
} 