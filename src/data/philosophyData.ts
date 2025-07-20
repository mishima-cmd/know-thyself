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
    id: "laozi",
    name: "老子",
    school: "東洋思想",
    quote: "道は常に無為にして為さざるなし。",
    description: "道教の開祖。自然の流れに従い、無為自然の境地を説いた東洋思想の代表的な哲学者です。",
    book: {
      title: "老子道徳経",
      description: "老子の思想をまとめた古典。簡潔な言葉で深い真理を表現しています。"
    }
  }
];

export const schoolNames: { [key: string]: string } = {
  stoic: "ストア派",
  existential: "実存主義",
  nietzsche: "個人主義",
  socrates: "古代ギリシャ",
  buddhist: "仏教思想",
  confucian: "儒教思想",
  aristotle: "アリストテレス学派",
  taoist: "道教思想"
}; 