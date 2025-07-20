import { Question } from '@/types';

export const questions: Question[] = [
  {
    id: 1,
    text: "人生で最も重要なことは何だと思いますか？",
    options: [
      {
        id: "1a",
        text: "内面の平静を保つこと",
        scores: [{ category: 'stoicism', points: 5 }]
      },
      {
        id: "1b",
        text: "自分で意味を見つけること",
        scores: [{ category: 'existentialism', points: 5 }]
      },
      {
        id: "1c",
        text: "既存の価値観を疑うこと",
        scores: [{ category: 'nihilism', points: 5 }]
      }
    ]
  },
  {
    id: 2,
    text: "困難な状況に直面した時、あなたはどうしますか？",
    options: [
      {
        id: "2a",
        text: "変えられないことを受け入れる",
        scores: [{ category: 'stoicism', points: 5 }]
      },
      {
        id: "2b",
        text: "自分の選択で状況を変える",
        scores: [{ category: 'existentialism', points: 5 }]
      },
      {
        id: "2c",
        text: "流れに身を任せる",
        scores: [{ category: 'eastern', points: 5 }]
      }
    ]
  },
  {
    id: 3,
    text: "人生の意味についてどう考えますか？",
    options: [
      {
        id: "3a",
        text: "自分で作るものだ",
        scores: [{ category: 'existentialism', points: 5 }]
      },
      {
        id: "3b",
        text: "意味などない",
        scores: [{ category: 'nihilism', points: 5 }]
      },
      {
        id: "3c",
        text: "自然の一部として生きる",
        scores: [{ category: 'eastern', points: 5 }]
      }
    ]
  },
  {
    id: 4,
    text: "常識や道徳についてどう思いますか？",
    options: [
      {
        id: "4a",
        text: "時々疑うことがある",
        scores: [{ category: 'nihilism', points: 5 }]
      },
      {
        id: "4b",
        text: "個人の判断が重要",
        scores: [{ category: 'individualism', points: 5 }]
      },
      {
        id: "4c",
        text: "社会の調和のために必要",
        scores: [{ category: 'ancient_greek', points: 5 }]
      }
    ]
  },
  {
    id: 5,
    text: "成功とは何だと思いますか？",
    options: [
      {
        id: "5a",
        text: "内面の成長",
        scores: [{ category: 'stoicism', points: 5 }]
      },
      {
        id: "5b",
        text: "自分らしく生きること",
        scores: [{ category: 'individualism', points: 5 }]
      },
      {
        id: "5c",
        text: "知恵を追求すること",
        scores: [{ category: 'ancient_greek', points: 5 }]
      }
    ]
  },
  {
    id: 6,
    text: "他人の意見は重要ですか？",
    options: [
      {
        id: "6a",
        text: "自分の判断が最優先",
        scores: [{ category: 'individualism', points: 5 }]
      },
      {
        id: "6b",
        text: "参考にはするが従わない",
        scores: [{ category: 'existentialism', points: 5 }]
      },
      {
        id: "6c",
        text: "社会の調和を考える",
        scores: [{ category: 'ancient_greek', points: 5 }]
      }
    ]
  },
  {
    id: 7,
    text: "感情についてどう思いますか？",
    options: [
      {
        id: "7a",
        text: "コントロールすべきもの",
        scores: [{ category: 'stoicism', points: 5 }]
      },
      {
        id: "7b",
        text: "自然に任せる",
        scores: [{ category: 'eastern', points: 5 }]
      },
      {
        id: "7c",
        text: "自分の一部として受け入れる",
        scores: [{ category: 'existentialism', points: 5 }]
      }
    ]
  },
  {
    id: 8,
    text: "死についてどう考えますか？",
    options: [
      {
        id: "8a",
        text: "避けられない運命として受け入れる",
        scores: [{ category: 'stoicism', points: 5 }]
      },
      {
        id: "8b",
        text: "人生を意味あるものにする動機",
        scores: [{ category: 'existentialism', points: 5 }]
      },
      {
        id: "8c",
        text: "自然の循環の一部",
        scores: [{ category: 'eastern', points: 5 }]
      }
    ]
  },
  {
    id: 9,
    text: "知識についてどう思いますか？",
    options: [
      {
        id: "9a",
        text: "知らないことを知るのが重要",
        scores: [{ category: 'ancient_greek', points: 5 }]
      },
      {
        id: "9b",
        text: "実践的な知恵が重要",
        scores: [{ category: 'stoicism', points: 5 }]
      },
      {
        id: "9c",
        text: "既存の知識を疑う",
        scores: [{ category: 'nihilism', points: 5 }]
      }
    ]
  },
  {
    id: 10,
    text: "自由とは何だと思いますか？",
    options: [
      {
        id: "10a",
        text: "自分の選択をすること",
        scores: [{ category: 'existentialism', points: 5 }]
      },
      {
        id: "10b",
        text: "他人に縛られないこと",
        scores: [{ category: 'individualism', points: 5 }]
      },
      {
        id: "10c",
        text: "欲望から解放されること",
        scores: [{ category: 'eastern', points: 5 }]
      }
    ]
  },
  {
    id: 11,
    text: "苦しみについてどう思いますか？",
    options: [
      {
        id: "11a",
        text: "成長の機会",
        scores: [{ category: 'stoicism', points: 5 }]
      },
      {
        id: "11b",
        text: "人生の一部として受け入れる",
        scores: [{ category: 'existentialism', points: 5 }]
      },
      {
        id: "11c",
        text: "避けるべきもの",
        scores: [{ category: 'eastern', points: 5 }]
      }
    ]
  },
  {
    id: 12,
    text: "社会についてどう思いますか？",
    options: [
      {
        id: "12a",
        text: "個人の集合体",
        scores: [{ category: 'individualism', points: 5 }]
      },
      {
        id: "12b",
        text: "調和を目指す共同体",
        scores: [{ category: 'ancient_greek', points: 5 }]
      },
      {
        id: "12c",
        text: "無意味な構造",
        scores: [{ category: 'nihilism', points: 5 }]
      }
    ]
  },
  {
    id: 13,
    text: "時間についてどう思いますか？",
    options: [
      {
        id: "13a",
        text: "今この瞬間が重要",
        scores: [{ category: 'eastern', points: 5 }]
      },
      {
        id: "13b",
        text: "未来のために計画する",
        scores: [{ category: 'stoicism', points: 5 }]
      },
      {
        id: "13c",
        text: "自分のペースで生きる",
        scores: [{ category: 'individualism', points: 5 }]
      }
    ]
  },
  {
    id: 14,
    text: "愛についてどう思いますか？",
    options: [
      {
        id: "14a",
        text: "個人の選択",
        scores: [{ category: 'existentialism', points: 5 }]
      },
      {
        id: "14b",
        text: "自然な感情",
        scores: [{ category: 'eastern', points: 5 }]
      },
      {
        id: "14c",
        text: "理性でコントロールすべき",
        scores: [{ category: 'stoicism', points: 5 }]
      }
    ]
  },
  {
    id: 15,
    text: "真理についてどう思いますか？",
    options: [
      {
        id: "15a",
        text: "探求すべきもの",
        scores: [{ category: 'ancient_greek', points: 5 }]
      },
      {
        id: "15b",
        text: "相対的なもの",
        scores: [{ category: 'nihilism', points: 5 }]
      },
      {
        id: "15c",
        text: "個人が決めるもの",
        scores: [{ category: 'individualism', points: 5 }]
      }
    ]
  },
  {
    id: 16,
    text: "人生の目標は何ですか？",
    options: [
      {
        id: "16a",
        text: "徳を磨くこと",
        scores: [{ category: 'stoicism', points: 5 }]
      },
      {
        id: "16b",
        text: "自分らしく生きること",
        scores: [{ category: 'individualism', points: 5 }]
      },
      {
        id: "16c",
        text: "知恵を追求すること",
        scores: [{ category: 'ancient_greek', points: 5 }]
      }
    ]
  }
]; 