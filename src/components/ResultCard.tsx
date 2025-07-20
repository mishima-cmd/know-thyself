'use client';

import { motion } from 'framer-motion';
import { DiagnosisResult } from '@/utils/diagnosisLogic';

interface ResultCardProps {
  result: DiagnosisResult;
  onRestart: () => void;
}

export default function ResultCard({ result, onRestart }: ResultCardProps) {
  const { philosopher } = result;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="glass-card p-8"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-glow mb-4">
          あなたの哲学者
        </h1>
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
          {philosopher.name.charAt(0)}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-glow">
          {philosopher.name}
        </h2>
        <p className="text-xl text-gray-300 mb-6">
          {philosopher.school}
        </p>
      </div>

      <div className="space-y-8">
        {/* 名言 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-effect p-6 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4 text-center">あなたへのメッセージ</h3>
          <blockquote className="text-lg italic text-center text-glow mb-4">
            "{philosopher.quote}"
          </blockquote>
          <p className="text-center text-gray-300 text-sm">
            この言葉は、あなたの心の奥深くに響く真理です。{philosopher.name}の教えは、あなたの人生の指針となるでしょう。
          </p>
        </motion.div>

        {/* 哲学の説明 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-effect p-6 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4">哲学の概要</h3>
          <p className="text-gray-300 leading-relaxed">
            {philosopher.description}
          </p>
        </motion.div>

        {/* 推薦図書 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-effect p-6 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4">あなたへの処方箋</h3>
          <div className="bg-glass-dark p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">{philosopher.book.title}</h4>
            <p className="text-gray-300 text-sm mb-4">
              {philosopher.book.description}
            </p>
            {philosopher.book.amazonUrl && (
              <a
                href={philosopher.book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                本を読む
              </a>
            )}
          </div>
        </motion.div>

        {/* 結果共有セクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="glass-effect p-6 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4 text-center">結果を共有</h3>
          
          {/* URL共有 */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              このページのURL
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={window.location.href}
                readOnly
                className="flex-1 bg-glass-dark border border-white/20 rounded-lg px-3 py-2 text-sm text-gray-300"
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('URLをコピーしました！');
                }}
                className="glass-effect px-4 py-2 rounded-lg hover:bg-glass/20 transition-all duration-300 text-sm"
              >
                コピー
              </button>
            </div>
          </div>
          
          {/* SNSシェアボタン */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => {
                const text = `私の哲学者は${philosopher.name}でした！\n\n"${philosopher.quote}"\n\n#KnowThyself #哲学診断`;
                const url = encodeURIComponent(window.location.href);
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
              }}
              className="glass-effect px-4 py-2 rounded-lg hover:bg-glass/20 transition-all duration-300 text-sm"
            >
              Twitterでシェア
            </button>
            
            <button
              onClick={() => {
                const text = `私の哲学者は${philosopher.name}でした！\n\n"${philosopher.quote}"\n\n#KnowThyself #哲学診断`;
                const url = encodeURIComponent(window.location.href);
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
              }}
              className="glass-effect px-4 py-2 rounded-lg hover:bg-glass/20 transition-all duration-300 text-sm"
            >
              Facebookでシェア
            </button>
            
            <button
              onClick={() => {
                const text = `私の哲学者は${philosopher.name}でした！\n\n"${philosopher.quote}"\n\n#KnowThyself #哲学診断`;
                const url = encodeURIComponent(window.location.href);
                window.open(`https://line.me/R/msg/text/?${encodeURIComponent(text + '\n\n' + window.location.href)}`, '_blank');
              }}
              className="glass-effect px-4 py-2 rounded-lg hover:bg-glass/20 transition-all duration-300 text-sm"
            >
              LINEでシェア
            </button>
          </div>
        </motion.div>

        {/* アクションボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex justify-center"
        >
          <button
            onClick={onRestart}
            className="glass-effect px-8 py-3 rounded-lg hover:bg-glass/20 transition-all duration-300 font-medium"
          >
            もう一度診断する
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
} 