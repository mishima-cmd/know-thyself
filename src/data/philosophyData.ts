export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    scores: { [key: string]: number };
  }[];
}

export interface Philosopher {
  id: string;
  name: string;
  school: string;
  quote: string;
  description: string;
  book: {
    title: string;
    description: string;
    amazonUrl?: string;
  };
  imageUrl?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "人生で最も大切にしているものは？",
    options: [
      {
        text: "内面の平静と心の安定",
        scores: { stoic: 5, buddhist: 3 }
      },
      {
        text: "自由と自己実現",
        scores: { existential: 5, nietzsche: 3 }
      },
      {
        text: "他者との調和と関係性",
        scores: { confucian: 5, aristotle: 3 }
      }
    ]
  },
  {
    id: 2,
    text: "困難に直面した時、どのように対処しますか？",
    options: [
      {
        text: "受け入れて、変えられることに集中する",
        scores: { stoic: 5, buddhist: 3 }
      },
      {
        text: "積極的に行動して状況を変える",
        scores: { nietzsche: 5, existential: 3 }
      },
      {
        text: "周囲の人々と相談して解決策を探る",
        scores: { confucian: 5, socrates: 3 }
      }
    ]
  },
  {
    id: 3,
    text: "人生の意味についてどう考えますか？",
    options: [
      {
        text: "自分で作り出すものだ",
        scores: { existential: 5, nietzsche: 4 }
      },
      {
        text: "自然の流れに従うものだ",
        scores: { buddhist: 5, taoist: 4 }
      },
      {
        text: "理性と徳を追求することだ",
        scores: { aristotle: 5, stoic: 3 }
      }
    ]
  },
  {
    id: 4,
    text: "常識や既存の価値観についてどう思いますか？",
    options: [
      {
        text: "時々疑ってみる",
        scores: { nietzsche: 5, socrates: 4 }
      },
      {
        text: "基本的に信頼している",
        scores: { confucian: 5, aristotle: 3 }
      },
      {
        text: "状況に応じて判断する",
        scores: { existential: 4, stoic: 3 }
      }
    ]
  },
  {
    id: 5,
    text: "最も幸せを感じる瞬間は？",
    options: [
      {
        text: "静かに思索にふける時",
        scores: { stoic: 5, buddhist: 4 }
      },
      {
        text: "新しいことに挑戦する時",
        scores: { nietzsche: 5, existential: 4 }
      },
      {
        text: "人々と交流する時",
        scores: { confucian: 5, socrates: 4 }
      }
    ]
  },
  {
    id: 6,
    text: "知識や学びについてどう考えますか？",
    options: [
      {
        text: "対話を通じて真理を探求する",
        scores: { socrates: 5, plato: 4 }
      },
      {
        text: "体系的な理論を構築する",
        scores: { aristotle: 5, kant: 4 }
      },
      {
        text: "直感的な悟りを重視する",
        scores: { buddhist: 5, taoist: 4 }
      }
    ]
  },
  {
    id: 7,
    text: "社会や政治についてどう考えますか？",
    options: [
      {
        text: "理想的な社会を設計する",
        scores: { plato: 5, hegel: 4 }
      },
      {
        text: "個人の自由を重視する",
        scores: { nietzsche: 5, existential: 4 }
      },
      {
        text: "調和と秩序を重んじる",
        scores: { confucian: 5, aristotle: 4 }
      }
    ]
  },
  {
    id: 8,
    text: "死や不条理についてどう考えますか？",
    options: [
      {
        text: "受け入れて平静を保つ",
        scores: { stoic: 5, buddhist: 4 }
      },
      {
        text: "不条理に立ち向かう",
        scores: { camus: 5, existential: 4 }
      },
      {
        text: "超越的な意味を求める",
        scores: { heidegger: 5, kant: 4 }
      }
    ]
  },
  {
    id: 9,
    text: "時間についてどう考えますか？",
    options: [
      {
        text: "今この瞬間を大切にする",
        scores: { stoic: 5, buddhist: 4 }
      },
      {
        text: "未来に向かって進歩する",
        scores: { hegel: 5, nietzsche: 4 }
      },
      {
        text: "過去の伝統を重んじる",
        scores: { confucian: 5, aristotle: 4 }
      }
    ]
  },
  {
    id: 10,
    text: "美や芸術についてどう考えますか？",
    options: [
      {
        text: "理想的な美を追求する",
        scores: { plato: 5, aristotle: 4 }
      },
      {
        text: "創造的な表現を重視する",
        scores: { nietzsche: 5, existential: 4 }
      },
      {
        text: "自然の美に調和する",
        scores: { taoist: 5, buddhist: 4 }
      }
    ]
  },
  {
    id: 11,
    text: "道徳や倫理についてどう考えますか？",
    options: [
      {
        text: "普遍的な道徳法則を求める",
        scores: { kant: 5, aristotle: 4 }
      },
      {
        text: "個人の価値観を重視する",
        scores: { nietzsche: 5, existential: 4 }
      },
      {
        text: "社会的な調和を重んじる",
        scores: { confucian: 5, stoic: 4 }
      }
    ]
  },
  {
    id: 12,
    text: "自然や環境についてどう考えますか？",
    options: [
      {
        text: "自然と一体になる",
        scores: { taoist: 5, buddhist: 4 }
      },
      {
        text: "自然を理解して制御する",
        scores: { aristotle: 5, kant: 4 }
      },
      {
        text: "人間の意志で自然を超える",
        scores: { nietzsche: 5, hegel: 4 }
      }
    ]
  },
  {
    id: 13,
    text: "愛や人間関係についてどう考えますか？",
    options: [
      {
        text: "他者への思いやりを重視する",
        scores: { confucian: 5, buddhist: 4 }
      },
      {
        text: "個人の自由な関係を求める",
        scores: { existential: 5, nietzsche: 4 }
      },
      {
        text: "理性的な愛を追求する",
        scores: { plato: 5, aristotle: 4 }
      }
    ]
  },
  {
    id: 14,
    text: "技術や文明についてどう考えますか？",
    options: [
      {
        text: "技術の進歩を信頼する",
        scores: { hegel: 5, aristotle: 4 }
      },
      {
        text: "技術に警鐘を鳴らす",
        scores: { heidegger: 5, taoist: 4 }
      },
      {
        text: "技術を人間的に活用する",
        scores: { kant: 5, existential: 4 }
      }
    ]
  },
  {
    id: 15,
    text: "あなたの人生の目標は？",
    options: [
      {
        text: "内面の成長と悟り",
        scores: { buddhist: 5, stoic: 4 }
      },
      {
        text: "創造と自己実現",
        scores: { nietzsche: 5, existential: 4 }
      },
      {
        text: "社会への貢献と調和",
        scores: { confucian: 5, aristotle: 4 }
      }
    ]
  }
];

export const philosophers: Philosopher[] = [
  {
    id: "epictetus",
    name: "エピクテトス",
    school: "ストア派",
    quote: "変えられないことを受け入れ、変えられることに集中せよ。そして、その違いを見分ける知恵を持て。",
    description: "古代ローマのストア派哲学者。奴隷として生まれながらも、内面の自由と平静を追求し、人生の困難に立ち向かう実践的な哲学を説きました。",
    book: {
      title: "人生談義",
      description: "エピクテトスの教えをまとめた古典。現代でも多くの人々に影響を与え続けています。"
    }
  },
  {
    id: "marcus-aurelius",
    name: "マルクス・アウレリウス",
    school: "ストア派",
    quote: "あなたが今この瞬間にできることを、心から愛し、情熱を持って行いなさい。",
    description: "ローマ皇帝でありながらストア派哲学者。『自省録』で内面の平静と徳の追求を説き、現代でも多くの指導者に影響を与えています。",
    book: {
      title: "自省録",
      description: "皇帝が自身に語りかけた哲学的な内省の記録。リーダーシップと内面の成長を学べる古典。"
    }
  },
  {
    id: "nietzsche",
    name: "フリードリヒ・ニーチェ",
    school: "個人主義",
    quote: "神は死んだ。そして我々が神を殺したのだ。",
    description: "既存の価値観を根本から問い直し、個人の意志と創造性を重視した哲学者。超人思想で知られています。",
    book: {
      title: "ツァラトゥストラはこう語った",
      description: "ニーチェの代表作。詩的な文体で人生の意味と個人の成長について語っています。"
    }
  },
  {
    id: "sartre",
    name: "ジャン・ポール・サルトル",
    school: "実存主義",
    quote: "人間は自由の刑に処されている。",
    description: "実存主義の代表的な哲学者。人間の自由と責任、人生の意味を自分で作り出すことの重要性を説きました。",
    book: {
      title: "実存主義とは何か",
      description: "実存主義の基本概念を分かりやすく解説した入門書。"
    }
  },
  {
    id: "camus",
    name: "アルベール・カミュ",
    school: "実存主義",
    quote: "人生に意味はない。しかし、意味がないからこそ人生は生きる価値がある。",
    description: "不条理の哲学を説いた実存主義者。人生の無意味さを認めながらも、それに立ち向かう勇気と美しさを追求しました。",
    book: {
      title: "シーシュポスの神話",
      description: "不条理な人生を生きる意味について考察した哲学的エッセイ。"
    }
  },
  {
    id: "socrates",
    name: "ソクラテス",
    school: "古代ギリシャ",
    quote: "無知の知。私は何も知らないということを知っている。",
    description: "古代ギリシャの哲学者。対話を通じて真理を探求する方法を確立し、西洋哲学の基礎を築きました。",
    book: {
      title: "ソクラテスの弁明",
      description: "プラトンが記録したソクラテスの裁判での弁明。哲学の本質を学べる古典。"
    }
  },
  {
    id: "plato",
    name: "プラトン",
    school: "古代ギリシャ",
    quote: "善き人々は、悪しき人々よりも、より多くのことを学ぶ。",
    description: "ソクラテスの弟子であり、西洋哲学の礎を築いた哲学者。イデア論や哲人政治を説き、理想的な社会のあり方を追求しました。",
    book: {
      title: "国家",
      description: "正義と理想国家について論じたプラトンの代表作。政治哲学の古典。"
    }
  },
  {
    id: "aristotle",
    name: "アリストテレス",
    school: "古代ギリシャ",
    quote: "幸福は、徳に基づく魂の活動である。",
    description: "プラトンの弟子であり、論理学、倫理学、政治学など幅広い分野で西洋思想に大きな影響を与えた哲学者。",
    book: {
      title: "ニコマコス倫理学",
      description: "幸福と徳について体系的に論じた倫理学の古典。"
    }
  },
  {
    id: "kant",
    name: "イマヌエル・カント",
    school: "批判哲学",
    quote: "汝の意志の格率が、同時に普遍的法則となるように行為せよ。",
    description: "啓蒙主義の代表的な哲学者。理性の限界を明らかにし、道徳の普遍性を追求した批判哲学を確立しました。",
    book: {
      title: "純粋理性批判",
      description: "人間の認識能力の限界を明らかにした哲学の革命的な著作。"
    }
  },
  {
    id: "hegel",
    name: "ゲオルク・ヘーゲル",
    school: "観念論",
    quote: "真なるものは全体である。",
    description: "ドイツ観念論の完成者。弁証法を通じて歴史と精神の発展を体系的に説明し、現代思想に大きな影響を与えました。",
    book: {
      title: "精神現象学",
      description: "意識から絶対知への発展過程を描いたヘーゲルの代表作。"
    }
  },
  {
    id: "laozi",
    name: "老子",
    school: "東洋思想",
    quote: "道は常に無為にして為さざるなし。",
    description: "道教の開祖。自然の流れに従い、無為自然の境地を説いた東洋思想の代表的な哲学者です。",
    book: {
      title: "老子道徳経",
      description: "老子の思想をまとめた古典。簡潔な言葉で深い真理を表現しています。"
    }
  },
  {
    id: "confucius",
    name: "孔子",
    school: "儒教",
    quote: "己の欲せざる所は、人に施すことなかれ。",
    description: "儒教の開祖。仁義礼智信の五常を説き、人としての道徳と社会秩序の重要性を強調しました。",
    book: {
      title: "論語",
      description: "孔子と弟子たちの対話を記録した儒教の根本経典。"
    }
  },
  {
    id: "buddha",
    name: "ブッダ",
    school: "仏教",
    quote: "怒りを捨てよ。怒りを捨てることによって、苦しみから解放される。",
    description: "仏教の開祖。四諦八正道を説き、苦しみからの解脱と悟りの境地を追求する道を示しました。",
    book: {
      title: "法句経",
      description: "ブッダの教えを簡潔な詩句でまとめた仏教の根本経典。"
    }
  },
  {
    id: "zhuangzi",
    name: "荘子",
    school: "道教",
    quote: "天地と並び立つ者は、万物と一体となる。",
    description: "老子と並ぶ道教の代表者。自由な精神と自然との調和を重視し、世俗的な価値観を超えた境地を説きました。",
    book: {
      title: "荘子",
      description: "寓話を通じて道教の思想を表現した古典。自由と自然の調和を学べる。"
    }
  },
  {
    id: "heidegger",
    name: "マルティン・ハイデッガー",
    school: "現象学",
    quote: "存在するとは、世界内存在である。",
    description: "現象学と実存主義を融合させた哲学者。人間の存在の本質を問い、技術文明への警鐘を鳴らしました。",
    book: {
      title: "存在と時間",
      description: "人間の存在の本質を問うハイデッガーの代表作。"
    }
  }
];

export const schoolNames: { [key: string]: string } = {
  stoic: "ストア派",
  existential: "実存主義",
  nietzsche: "個人主義",
  socrates: "古代ギリシャ",
  plato: "古代ギリシャ",
  aristotle: "古代ギリシャ",
  kant: "批判哲学",
  hegel: "観念論",
  buddhist: "仏教思想",
  confucian: "儒教思想",
  taoist: "道教思想",
  camus: "実存主義",
  heidegger: "現象学"
}; 