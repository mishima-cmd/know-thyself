import { Philosopher } from '@/types';

export const philosophers: Philosopher[] = [
  {
    id: 'epictetus',
    name: 'エピクテトス',
    category: 'stoicism',
    quote: '「変えられないことを受け入れ、変えられることを変え、そしてその違いを知る知恵を持つこと」',
    description: '古代ローマのストア派哲学者。奴隷として生まれながらも、内面の自由と徳の重要性を説いた。感情に振り回されず、理性で物事を判断することを重視した。',
    book: {
      title: '人生談義',
      description: 'エピクテトスの教えをまとめた古典。現代でも多くの人に影響を与え続けている実践的な哲学書。',
      amazonUrl: 'https://www.amazon.co.jp/dp/4003360314'
    }
  },
  {
    id: 'marcus_aurelius',
    name: 'マルクス・アウレリウス',
    category: 'stoicism',
    quote: '「あなたが今この瞬間にできることを、心を込めて行いなさい」',
    description: 'ローマ皇帝でありながら哲学者でもあった人物。『自省録』で知られ、困難な状況でも内面の平静を保つことの重要性を説いた。',
    book: {
      title: '自省録',
      description: '皇帝としての重責の中で書かれた個人的な哲学の記録。現代のリーダーシップにも通じる教訓に満ちている。',
      amazonUrl: 'https://www.amazon.co.jp/dp/4003360322'
    }
  },
  {
    id: 'sartre',
    name: 'ジャン・ポール・サルトル',
    category: 'existentialism',
    quote: '「人間は自由の刑に処されている」',
    description: '実存主義の代表的な哲学者。人間は生まれながらに自由であり、その自由に責任を持つことを説いた。選択の重要性を強調した。',
    book: {
      title: '実存主義とは何か',
      description: '実存主義の基本概念を分かりやすく解説した入門書。人間の自由と責任について深く考えるきっかけを与える。',
      amazonUrl: 'https://www.amazon.co.jp/dp/4003360330'
    }
  },
  {
    id: 'camus',
    name: 'アルベール・カミュ',
    category: 'existentialism',
    quote: '「人生に意味はない。しかし、意味がないからこそ生きる価値がある」',
    description: '不条理の哲学者として知られる。人生の無意味さを認めながらも、それに立ち向かう人間の尊厳を描いた。',
    book: {
      title: 'シーシュポスの神話',
      description: '不条理と人間の反抗について論じた作品。困難な状況でも意味を見出すことの重要性を説く。',
      amazonUrl: 'https://www.amazon.co.jp/dp/4003360348'
    }
  },
  {
    id: 'nietzsche',
    name: 'フリードリヒ・ニーチェ',
    category: 'individualism',
    quote: '「神は死んだ。そして我々が神を殺した」',
    description: '既存の価値観を根底から問い直した哲学者。個人の意志と創造性の重要性を説き、新しい価値の創造を求めた。',
    book: {
      title: 'ツァラトゥストラはこう語った',
      description: 'ニーチェの思想を物語形式で表現した代表作。超人思想と永遠回帰の概念を理解するための重要な作品。',
      amazonUrl: 'https://www.amazon.co.jp/dp/4003360356'
    }
  },
  {
    id: 'socrates',
    name: 'ソクラテス',
    category: 'ancient_greek',
    quote: '「無知の知」',
    description: '古代ギリシャの哲学者。問答法を通じて真理を追求し、自分が何も知らないことを知る知恵の重要性を説いた。',
    book: {
      title: 'ソクラテスの弁明',
      description: 'ソクラテスの裁判での弁明を記録した作品。真理を追求することの重要性と哲学者の使命を描く。',
      amazonUrl: 'https://www.amazon.co.jp/dp/4003360364'
    }
  },
  {
    id: 'aristotle',
    name: 'アリストテレス',
    category: 'ancient_greek',
    quote: '「人間は社会的動物である」',
    description: '古代ギリシャの哲学者。論理学、倫理学、政治学など幅広い分野で活躍し、知恵の追求と社会の調和を重視した。',
    book: {
      title: 'ニコマコス倫理学',
      description: '幸福と徳について論じた古典的な倫理学の書。人間の善い生き方について深く考察している。',
      amazonUrl: 'https://www.amazon.co.jp/dp/4003360372'
    }
  },
  {
    id: 'laozi',
    name: '老子',
    category: 'eastern',
    quote: '「道法自然」',
    description: '古代中国の思想家。無為自然の思想を説き、自然の流れに身を任せることの重要性を強調した。',
    book: {
      title: '老子',
      description: '無為自然の思想を説いた古典。現代の忙しい生活に疲れた人々に、自然に従うことの大切さを教える。',
      amazonUrl: 'https://www.amazon.co.jp/dp/4003360380'
    }
  },
  {
    id: 'buddha',
    name: 'ブッダ',
    category: 'eastern',
    quote: '「すべてのものは変化する」',
    description: '仏教の開祖。苦しみの原因とその解決方法を説き、執着を捨てて心の平静を得ることの重要性を教えた。',
    book: {
      title: 'ブッダのことば',
      description: 'ブッダの教えをまとめた経典。現代人にも通じる人生の智慧に満ちている。',
      amazonUrl: 'https://www.amazon.co.jp/dp/4003360398'
    }
  }
]; 