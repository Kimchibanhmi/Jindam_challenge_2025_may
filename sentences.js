const sentenceData = {
  day1: [
    // 1번
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '국내 출발(국내선) ***国内 guónèi 국내 出发 chūfā 출발하다',
      chinese: {
        hanzi: ['国内出发'],
        pinyin: ['Guónèi chūfā'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '어떻게 가나요?',
      chinese: {
        hanzi: ['怎么', '走?'],
        pinyin: ['Zěnme', 'zǒu'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: true,
      korean: '국내선은 어떻게 가나요?',
      chinese: {
        hanzi: ['国内出发', '怎么', '走?'],
        pinyin: ['Guónèi chūfā', 'zěnme', 'zǒu'],
      },
    },

    // 2번
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '여쭤볼게요(실례지만)',
      chinese: {
        hanzi: ['请问'],
        pinyin: ['Qǐngwèn'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '여쭤볼게요, 국내선은 어떻게 가나요?',
      chinese: {
        hanzi: ['请问，', '国内出发', '怎么', '走？'],
        pinyin: ['Qǐngwèn', 'guónèi chūfā', 'zěnme', 'zǒu'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '환승하다',
      chinese: {
        hanzi: ['换乘'],
        pinyin: ['huànchéng'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: false,
      korean: '환승해야 해요. ***要 yào …해야 한다',
      chinese: {
        hanzi: ['要', '换乘'],
        pinyin: ['Yào', 'huànchéng'],
      },
    },
    {
      id: 'sentence2',
      level: 5,
      isFinal: false,
      korean: '저 환승해야 해요',
      chinese: {
        hanzi: ['我', '要', '换乘'],
        pinyin: ['Wǒ', 'yào', 'huànchéng'],
      },
    },
    {
      id: 'sentence2',
      level: 6,
      isFinal: false,
      korean: '국내선은 어떻게 가나요? (저) 환승해야 해서요.',
      chinese: {
        hanzi: ['国内出发', '怎么', '走？', '我', '要', '换乘'],
        pinyin: ['Guónèi chūfā', 'zěnme', 'zǒu', 'Wǒ', 'yào', 'huànchéng'],
      },
    },
    {
      id: 'sentence2',
      level: 7,
      isFinal: true,
      korean: '여쭤볼게요, 국내선은 어떻게 가나요? (저) 환승해야 해서요.',
      chinese: {
        hanzi: ['请问,', '国内出发', '怎么', '走?', '我', '要', '换乘'],
        pinyin: [
          'Qǐngwèn',
          'guónèi chūfā',
          'zěnme',
          'zǒu',
          'Wǒ',
          'yào',
          'huànchéng',
        ],
      },
    },

    // 3번
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean:
        '수하물 카트 ***行李 xínglǐ 짐, 수하물 推车 tuīchē 카트, 수레, 차를 밀다(tuī chē)',
      chinese: {
        hanzi: ['行李推车'],
        pinyin: ['Xínglǐ tuīchē'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '어디에 ...이 있나요?',
      chinese: {
        hanzi: ['哪里', '有…?'],
        pinyin: ['Nǎlǐ', 'yǒu'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: true,
      korean: '어디에 수화물 카트가 있나요?',
      chinese: {
        hanzi: ['哪里', '有', '行李推车?'],
        pinyin: ['Nǎlǐ', 'yǒu', 'xínglǐ tuīchē'],
      },
    },

    // 4번
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean:
        '찾았다 *** 찾았다! 라고 할 때 "了"를 추가하여 "找到了 zhǎodào le"라고 자주 쓰여요. (결과를 보충해주는 결과보어 "到"와 "了"가 절친이기 때문이에요)',
      chinese: {
        hanzi: ['找到'],
        pinyin: ['Zhǎodào'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '못 찾았다(못 찾겠어요)',
      chinese: {
        hanzi: ['没', '找到'],
        pinyin: ['Méi', 'zhǎodào'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '저 못 찾았어요(못 찾겠어요)',
      chinese: {
        hanzi: ['我', '没', '找到'],
        pinyin: ['Wǒ', 'méi', 'zhǎodào'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: false,
      korean: '어디에 수화물 카트가 있나요? 저 못 찾겠어요.',
      chinese: {
        hanzi: ['哪里', '有', '行李推车?', '我', '没', '找到'],
        pinyin: ['Nǎlǐ', 'yǒu', 'xínglǐ tuīchē', 'Wǒ', 'méi', 'zhǎodào'],
      },
    },
    {
      id: 'sentence4',
      level: 5,
      isFinal: false,
      korean: '여쭤볼게요(실례지만)',
      chinese: {
        hanzi: ['请问'],
        pinyin: ['Qǐngwèn'],
      },
    },
    {
      id: 'sentence4',
      level: 6,
      isFinal: false,
      korean: '여쭤볼게요, 어디에 수화물 카트가 있나요?',
      chinese: {
        hanzi: ['请问，', '哪里', '有', '行李推车?'],
        pinyin: ['Qǐngwèn', 'nǎlǐ', 'yǒu', 'xínglǐ tuīchē'],
      },
    },
    {
      id: 'sentence4',
      level: 7,
      isFinal: true,
      korean: '여쭤볼게요, 어디에 수화물 카트가 있나요? 저 못 찾겠어요.',
      chinese: {
        hanzi: ['请问,', '哪里', '有', '行李推车?', '我', '没', '找到'],
        pinyin: [
          'Qǐngwèn',
          'nǎlǐ',
          'yǒu',
          'xínglǐ tuīchē',
          'Wǒ',
          'méi',
          'zhǎodào',
        ],
      },
    },

    // 5번
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '수하물 카트',
      chinese: {
        hanzi: ['行李推车'],
        pinyin: ['Xínglǐ tuīchē'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '여기에 두다 ***放 fàng 놓다 这儿(这里) zhèr(zhèlǐ) 여기',
      chinese: {
        hanzi: ['放', '这儿'],
        pinyin: ['Fàng', 'zhèr'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: false,
      korean: '수화물 카트는 여기에 두세요.',
      chinese: {
        hanzi: ['行李推车', '放', '这儿'],
        pinyin: ['Xínglǐ tuīchē', 'fàng', 'zhèr'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: true,
      korean: '수화물 카트는 여기에 둬요?',
      chinese: {
        hanzi: ['行李推车', '放', '这儿', '吗?'],
        pinyin: ['Xínglǐ tuīchē', 'fàng', 'zhèr', 'ma'],
      },
    },

    // 6번
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '해도 된다',
      chinese: {
        hanzi: ['可以'],
        pinyin: ['Kěyǐ'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '(해도) 되나요?',
      chinese: {
        hanzi: ['可以吗？'],
        pinyin: ['Kěyǐ ma'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '여기 둬도 되나요(괜찮나요)?',
      chinese: {
        hanzi: ['放', '这儿', '可以吗？'],
        pinyin: ['Fàng', 'zhèr', 'kěyǐ ma'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: true,
      korean: '수화물카트 여기에 둬도 되나요(괜찮나요)?',
      chinese: {
        hanzi: ['行李推车', '放', '这儿', '可以吗？'],
        pinyin: ['Xínglǐ tuīchē', 'fàng', 'zhèr', 'kěyǐ ma'],
      },
    },

    // 7번
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '여기에 …이 있나요? *** 这里 zhèlǐ 여기 有 yǒu 있다',
      chinese: {
        hanzi: ['这里', '有…'],
        pinyin: ['Zhèlǐ', 'yǒu'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean:
        'ATM(현금자동인출기) ***自助 zìzhù 셀프, 자동 取款机 qǔkuǎnjī 현금출금기',
      chinese: {
        hanzi: ['自助', '取款机'],
        pinyin: ['Zìzhù', 'qǔkuǎnjī'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: true,
      korean: '여기 ATM기 있나요?',
      chinese: {
        hanzi: ['这里', '有', '自助', '取款机', '吗？'],
        pinyin: ['Zhèlǐ', 'yǒu', 'zìzhù', 'qǔkuǎnjī', 'ma'],
      },
    },

    // 8번
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean:
        '환전하고 싶어요 ***想 xiǎng ...하고 싶다 换钱 huàn qián 돈을 환전하다',
      chinese: {
        hanzi: ['想', '换钱'],
        pinyin: ['Xiǎng', 'huàn qián'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '저 환전하고 싶어요',
      chinese: {
        hanzi: ['我', '想', '换钱'],
        pinyin: ['Wǒ', 'xiǎng', 'huàn qián'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: true,
      korean: '여기 ATM기 있나요? (저) 환전하고 싶어서요.',
      chinese: {
        hanzi: ['这里', '有', '自助', '取款机', '吗？', '我', '想', '换钱'],
        pinyin: [
          'Zhèlǐ',
          'yǒu',
          'zìzhù',
          'qǔkuǎnjī',
          'ma',
          'Wǒ',
          'xiǎng',
          'huàn qián',
        ],
      },
    },

    // 9번
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean:
        '한국(의) 신용카드 ***韩国的 Hánguó de 한국의 信用卡 xìnyòngkǎ 신용카드',
      chinese: {
        hanzi: ['韩国', '的', '信用卡'],
        pinyin: ['Hánguó', 'de', 'xìnyòngkǎ'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '한국 신용카드를 사용하다(쓰다)',
      chinese: {
        hanzi: ['用', '韩国', '的', '信用卡'],
        pinyin: ['Yòng', 'Hánguó', 'de', 'xìnyòngkǎ'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: false,
      korean:
        '사용해도 된다 ***可以 kěyǐ …해도 된다, ...할 수 있다 用 yòng 사용하다',
      chinese: {
        hanzi: ['可以', '用'],
        pinyin: ['Kěyǐ', 'yòng'],
      },
    },
    {
      id: 'sentence9',
      level: 4,
      isFinal: false,
      korean: '한국 신용카드를 써도 된다',
      chinese: {
        hanzi: ['可以', '用', '韩国', '的', '信用卡'],
        pinyin: ['Kěyǐ', 'yòng', 'Hánguó', 'de', 'xìnyòngkǎ'],
      },
    },
    {
      id: 'sentence9',
      level: 5,
      isFinal: true,
      korean: '한국 신용카드를 써도 되나요?',
      chinese: {
        hanzi: ['可以', '用', '韩国', '的', '信用卡', '吗？'],
        pinyin: ['Kěyǐ', 'yòng', 'Hánguó', 'de', 'xìnyòngkǎ', 'ma'],
      },
    },

    // 10번
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '…할 수 없다',
      chinese: {
        hanzi: ['...不了'],
        pinyin: ['bu liǎo'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean:
        '결제할 수 없다 ***支付 zhīfù 결제하다 ...不了 bu liǎo ...할 수 없다',
      chinese: {
        hanzi: ['支付', '不了'],
        pinyin: ['Zhīfù', 'bu liǎo'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: false,
      korean: '나의 어플 ***软件 ruǎnjiàn 어플(앱), 소프트웨어',
      chinese: {
        hanzi: ['我', '的', '软件'],
        pinyin: ['Wǒ', 'de', 'ruǎnjiàn'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: false,
      korean: '제 어플이 결제가 안돼요',
      chinese: {
        hanzi: ['我', '的', '软件', '支付', '不了'],
        pinyin: ['Wǒ', 'de', 'ruǎnjiàn', 'zhīfù', 'bu liǎo'],
      },
    },
    {
      id: 'sentence10',
      level: 5,
      isFinal: true,
      korean: '한국 신용카드 쓸 수 있나요? 제 어플이 결제가 안돼요.',
      chinese: {
        hanzi: [
          '可以',
          '用',
          '韩国',
          '的',
          '信用卡',
          '吗?',
          '我',
          '的',
          '软件',
          '支付',
          '不了',
        ],
        pinyin: [
          'Kěyǐ',
          'yòng',
          'Hánguó',
          'de',
          'xìnyòngkǎ',
          'ma',
          'Wǒ',
          'de',
          'ruǎnjiàn',
          'zhīfù',
          'bu liǎo',
        ],
      },
    },
  ],

  day2: [
    // 11번
    {
      id: 'sentence11',
      level: 1,
      isFinal: false,
      korean: '…하려면(...라면)',
      chinese: {
        hanzi: ['...的话'],
        pinyin: ['de huà'],
      },
    },
    {
      id: 'sentence11',
      level: 2,
      isFinal: false,
      korean:
        '택시 타려면 ***打车 dǎ chē 택시 타다 …的话 de huà ...하려면(...라면)',
      chinese: {
        hanzi: ['打车', '的话'],
        pinyin: ['Dǎchē', 'de huà'],
      },
    },
    {
      id: 'sentence11',
      level: 3,
      isFinal: false,
      korean: '몇 층으로 가다 ***几楼 jǐ lóu 몇 층',
      chinese: {
        hanzi: ['去', '几楼'],
        pinyin: ['Qù', 'jǐ lóu'],
      },
    },
    {
      id: 'sentence11',
      level: 4,
      isFinal: true,
      korean: '택시 타려면 몇 층으로 가요?',
      chinese: {
        hanzi: ['打车', '的话', '去', '几楼？'],
        pinyin: ['Dǎ chē', 'de huà', 'qù', 'jǐ lóu'],
      },
    },

    // 12번
    {
      id: 'sentence12',
      level: 1,
      isFinal: false,
      korean: '편리하다, 편하다',
      chinese: {
        hanzi: ['方便'],
        pinyin: ['Fāngbiàn'],
      },
    },
    {
      id: 'sentence12',
      level: 2,
      isFinal: false,
      korean: '몇 층으로 가야 편한가요?',
      chinese: {
        hanzi: ['去', '几楼', '方便？'],
        pinyin: ['Qù', 'jǐ lóu', 'fāngbiàn'],
      },
    },
    {
      id: 'sentence12',
      level: 3,
      isFinal: true,
      korean: '택시 타려면 몇 층으로 가야 편한가요?',
      chinese: {
        hanzi: ['打车', '的话', '去', '几楼', '方便？'],
        pinyin: ['Dǎ chē', 'de huà', 'qù', 'jǐ lóu', 'fāngbiàn'],
      },
    },

    // 13번
    {
      id: 'sentence13',
      level: 1,
      isFinal: false,
      korean: 'A에게 B를 주다 *** 给 A(목적어1) B(목적어2)',
      chinese: {
        hanzi: ['给 A B'],
        pinyin: ['gěi'],
      },
    },
    {
      id: 'sentence13',
      level: 2,
      isFinal: false,
      korean: '나에게 영수증을 줘 ***发票 fāpiào 영수증',
      chinese: {
        hanzi: ['给', '我', '发票'],
        pinyin: ['Gěi', 'wǒ', 'fāpiào'],
      },
    },
    {
      id: 'sentence13',
      level: 3,
      isFinal: false,
      korean:
        '영수증을 나에게 줘 ***강조할 때 목적어2(영수증)를 맨~앞으로 빼기도 해요.',
      chinese: {
        hanzi: ['发票', '给', '我'],
        pinyin: ['Fāpiào', 'gěi', 'wǒ'],
      },
    },
    {
      id: 'sentence13',
      level: 4,
      isFinal: false,
      korean: '제게 좀(한 번) 주세요. ***...一下 yíxià 좀(한 번) …(하다)',
      chinese: {
        hanzi: ['给', '我', '一下'],
        pinyin: ['Gěi', 'wǒ', 'yíxià'],
      },
    },
    {
      id: 'sentence13',
      level: 5,
      isFinal: true,
      korean: '"영수증"을 강조하는 상황 영수증 (제게) 좀 주세요.',
      chinese: {
        hanzi: ['发票', '给', '我', '一下'],
        pinyin: ['Fāpiào', 'gěi', 'wǒ', 'yíxià'],
      },
    },

    // 14번
    {
      id: 'sentence14',
      level: 1,
      isFinal: false,
      korean: '번거롭게 해서 죄송한데(실례지만)',
      chinese: {
        hanzi: ['麻烦'],
        pinyin: ['Máfan'],
      },
    },
    {
      id: 'sentence14',
      level: 2,
      isFinal: false,
      korean: '죄송하지만(실례지만) 저에게 좀 주세요',
      chinese: {
        hanzi: ['麻烦', '给', '我', '一下'],
        pinyin: ['Máfan', 'gěi', 'wǒ', 'yíxià'],
      },
    },
    {
      id: 'sentence14',
      level: 3,
      isFinal: false,
      korean: '영수증 (제게) 좀 주세요.',
      chinese: {
        hanzi: ['发票', '给', '我', '一下'],
        pinyin: ['Fāpiào', 'gěi', 'wǒ', 'yíxià'],
      },
    },
    {
      id: 'sentence14',
      level: 4,
      isFinal: true,
      korean: '죄송하지만 영수증 (제게) 좀 주세요.',
      chinese: {
        hanzi: ['麻烦', '发票', '给', '我', '一下'],
        pinyin: ['Máfan', 'fāpiào', 'gěi', 'wǒ', 'yíxià'],
      },
    },

    // 15번
    {
      id: 'sentence15',
      level: 1,
      isFinal: false,
      korean: '…으로',
      chinese: {
        hanzi: ['往...'],
        pinyin: ['wǎng'],
      },
    },
    {
      id: 'sentence15',
      level: 2,
      isFinal: false,
      korean: '이쪽으로 ***往... wǎng ...으로 这边 zhèbiān 이쪽',
      chinese: {
        hanzi: ['往', '这边'],
        pinyin: ['Wǎng', 'zhèbiān'],
      },
    },
    {
      id: 'sentence15',
      level: 3,
      isFinal: false,
      korean: '가다(걷다)',
      chinese: {
        hanzi: ['走'],
        pinyin: ['Zǒu'],
      },
    },
    {
      id: 'sentence15',
      level: 4,
      isFinal: false,
      korean: '이쪽으로 가',
      chinese: {
        hanzi: ['往', '这边', '走'],
        pinyin: ['Wǎng', 'zhèbiān', 'zǒu'],
      },
    },
    {
      id: 'sentence15',
      level: 5,
      isFinal: false,
      korean: '이쪽으로 가는 것이다.',
      chinese: {
        hanzi: ['是', '往', '这边', '走'],
        pinyin: ['Shì', 'wǎng', 'zhèbiān', 'zǒu'],
      },
    },
    {
      id: 'sentence15',
      level: 6,
      isFinal: false,
      korean: '이쪽으로 가는 건가요?',
      chinese: {
        hanzi: ['是', '往', '这边', '走', '吗？'],
        pinyin: ['Shì', 'wǎng', 'zhèbiān', 'zǒu', 'ma'],
      },
    },
    {
      id: 'sentence15',
      level: 7,
      isFinal: false,
      korean: '화장실',
      chinese: {
        hanzi: ['厕所'],
        pinyin: ['Cèsuǒ'],
      },
    },
    {
      id: 'sentence15',
      level: 8,
      isFinal: true,
      korean: '화장실은 이쪽으로 가는건가요?',
      chinese: {
        hanzi: ['厕所', '是', '往', '这边', '走', '吗？'],
        pinyin: ['Cèsuǒ', 'shì', 'wǎng', 'zhèbiān', 'zǒu', 'ma'],
      },
    },

    // 16번
    {
      id: 'sentence16',
      level: 1,
      isFinal: false,
      korean: '(길을) 잘못 가다 ***错 cuò 틀리다. 맞지 않다.',
      chinese: {
        hanzi: ['走错'],
        pinyin: ['Zǒucuò'],
      },
    },
    {
      id: 'sentence16',
      level: 2,
      isFinal: false,
      korean: '잘못 가지 않다',
      chinese: {
        hanzi: ['没', '走错'],
        pinyin: ['Méi', 'zǒucuò'],
      },
    },
    {
      id: 'sentence16',
      level: 3,
      isFinal: false,
      korean: '잘못 가는거 아니죠? ***...吧 ba [추측] …이죠?',
      chinese: {
        hanzi: ['没', '走错', '吧？'],
        pinyin: ['Méi', 'zǒucuò', 'ba'],
      },
    },
    {
      id: 'sentence16',
      level: 4,
      isFinal: false,
      korean: '저 잘못 가는거 아니죠?',
      chinese: {
        hanzi: ['我', '没', '走错', '吧？'],
        pinyin: ['Wǒ', 'méi', 'zǒucuò', 'ba'],
      },
    },
    {
      id: 'sentence16',
      level: 5,
      isFinal: true,
      korean: '화장실은 이쪽으로 가는건가요? 저 잘못 가는거 아니죠?',
      chinese: {
        hanzi: [
          '厕所',
          '是',
          '往',
          '这边',
          '走',
          '吗？',
          '我',
          '没',
          '走错',
          '吧？',
        ],
        pinyin: [
          'Cèsuǒ',
          'shì',
          'wǎng',
          'zhèbiān',
          'zǒu',
          'ma',
          'Wǒ',
          'méi',
          'zǒucuò',
          'ba',
        ],
      },
    },

    // 17번
    {
      id: 'sentence17',
      level: 1,
      isFinal: false,
      korean: '…하고 싶다',
      chinese: {
        hanzi: ['想'],
        pinyin: ['Xiǎng'],
      },
    },
    {
      id: 'sentence17',
      level: 2,
      isFinal: false,
      korean: '가고 싶다',
      chinese: {
        hanzi: ['想', '去'],
        pinyin: ['Xiǎng', 'qù'],
      },
    },
    {
      id: 'sentence17',
      level: 3,
      isFinal: false,
      korean: '여기로 가고 싶다',
      chinese: {
        hanzi: ['想', '去', '这里'],
        pinyin: ['Xiǎng', 'qù', 'zhèlǐ'],
      },
    },
    {
      id: 'sentence17',
      level: 4,
      isFinal: true,
      korean: '저는 여기로 가고 싶어요.',
      chinese: {
        hanzi: ['我', '想', '去', '这里'],
        pinyin: ['Wǒ', 'xiǎng', 'qù', 'zhèlǐ'],
      },
    },

    // 18번
    {
      id: 'sentence18',
      level: 1,
      isFinal: false,
      korean: '여기에서 ***离... lí ...에서',
      chinese: {
        hanzi: ['离', '这里'],
        pinyin: ['Lí', 'zhèlǐ'],
      },
    },
    {
      id: 'sentence18',
      level: 2,
      isFinal: false,
      korean: '여기에서 멀다',
      chinese: {
        hanzi: ['离', '这里', '远'],
        pinyin: ['Lí', 'zhèlǐ', 'yuǎn'],
      },
    },
    {
      id: 'sentence18',
      level: 3,
      isFinal: false,
      korean: '여기에서 먼가요?',
      chinese: {
        hanzi: ['离', '这里', '远', '吗？'],
        pinyin: ['Lí', 'zhèlǐ', 'yuǎn', 'ma'],
      },
    },
    {
      id: 'sentence18',
      level: 4,
      isFinal: true,
      korean: '저는 여기로 가고 싶은데 여기에서 먼가요?',
      chinese: {
        hanzi: ['我', '想', '去', '这里', '离', '这里', '远', '吗？'],
        pinyin: ['Wǒ', 'xiǎng', 'qù', 'zhèlǐ', 'lí', 'zhèlǐ', 'yuǎn', 'ma'],
      },
    },

    // 19번
    {
      id: 'sentence19',
      level: 1,
      isFinal: false,
      korean:
        '연결 안 된다 ***连 lián 연결하다 ...不上 bu shàng (접속)을 할 수 없다',
      chinese: {
        hanzi: ['连', '不', '上'],
        pinyin: ['Lián', 'bu', 'shàng'],
      },
    },
    {
      id: 'sentence19',
      level: 2,
      isFinal: true,
      korean: '저는 연결이 안되네요.',
      chinese: {
        hanzi: ['我', '连', '不', '上'],
        pinyin: ['Wǒ', 'lián', 'bu', 'shàng'],
      },
    },

    // 20번
    {
      id: 'sentence20',
      level: 1,
      isFinal: false,
      korean: '연결되다',
      chinese: {
        hanzi: ['连上'],
        pinyin: ['Liánshàng'],
      },
    },
    {
      id: 'sentence20',
      level: 2,
      isFinal: false,
      korean:
        'WIFI에 연결 됐다 ***"연결됐다!"라고 할 때 "了"를 추가하여 "连上了 lián shàng le"라고 자주 쓰여요. (결과를 보충해주는 "결과보어" "上"과 "了"가 절친이기 때문이에요)',
      chinese: {
        hanzi: ['连上', 'WIFI', '了'],
        pinyin: ['Liánshàng', 'WIFI', 'le'],
      },
    },
    {
      id: 'sentence20',
      level: 3,
      isFinal: false,
      korean: '당신은 WIFI 연결 됐나요?',
      chinese: {
        hanzi: ['你', '连上', 'WIFI', '了', '吗？'],
        pinyin: ['Nǐ', 'liánshàng', 'WIFI', 'le', 'ma'],
      },
    },
    {
      id: 'sentence20',
      level: 4,
      isFinal: true,
      korean: '당신은 WIFI 연결 됐나요? 저는 연결이 안되네요.',
      chinese: {
        hanzi: ['你', '连上', 'WIFI', '了', '吗？', '我', '连', '不', '上'],
        pinyin: [
          'Nǐ',
          'liánshàng',
          'WIFI',
          'le',
          'ma',
          'Wǒ',
          'lián',
          'bu',
          'shàng',
        ],
      },
    },
  ],

  day3: [
    // 21번
    {
      id: 'sentence21',
      level: 1,
      isFinal: false,
      korean: '때리다, 치다, (택시를) 잡다',
      chinese: {
        hanzi: ['打'],
        pinyin: ['Dǎ'],
      },
    },
    {
      id: 'sentence21',
      level: 2,
      isFinal: false,
      korean: '택시를 잡다. 택시를 타다.',
      chinese: {
        hanzi: ['打', '车'],
        pinyin: ['Dǎ', 'chē'],
      },
    },
    {
      id: 'sentence21',
      level: 3,
      isFinal: false,
      korean: '택시를 탔어',
      chinese: {
        hanzi: ['打', '车', '了'],
        pinyin: ['Dǎ', 'chē', 'le'],
      },
    },
    {
      id: 'sentence21',
      level: 4,
      isFinal: true,
      korean:
        '택시 잡았어요 *** 打到(了) Dǎdào le가 오면 택시를 성공적으로 잡았다는 결과에 초점 둬요. 결과보어 "到 dào" 에 "了"가 온 이유는 결과를 보충해주는 "결과보어" "到"와 "了"가 절친이기 때문이에요.',
      chinese: {
        hanzi: ['打到', '车', '了'],
        pinyin: ['Dǎdào', 'chē', 'le'],
      },
    },

    // 22번
    {
      id: 'sentence22',
      level: 1,
      isFinal: false,
      korean: '…할 필요 없다',
      chinese: {
        hanzi: ['不用...', '了'],
        pinyin: ['Bú yòng', 'le'],
      },
    },
    {
      id: 'sentence22',
      level: 2,
      isFinal: false,
      korean: '잡을 필요 없어요',
      chinese: {
        hanzi: ['不用', '打', '了'],
        pinyin: ['Bú yòng', 'dǎ', 'le'],
      },
    },
    {
      id: 'sentence22',
      level: 3,
      isFinal: false,
      korean: '당신은 잡을 필요 없어요',
      chinese: {
        hanzi: ['你', '不用', '打', '了'],
        pinyin: ['Nǐ', 'bú yòng', 'dǎ', 'le'],
      },
    },
    {
      id: 'sentence22',
      level: 4,
      isFinal: true,
      korean: '제가 택시 잡았어요. 당신은 잡을 필요 없어요.',
      chinese: {
        hanzi: ['我', '打到', '车', '了，', '你', '不用', '打', '了'],
        pinyin: ['Wǒ', 'dǎdào', 'chē', 'le', 'nǐ', 'bú yòng', 'dǎ', 'le'],
      },
    },

    // 23번
    {
      id: 'sentence23',
      level: 1,
      isFinal: false,
      korean: '처리하다',
      chinese: {
        hanzi: ['办'],
        pinyin: ['Bàn'],
      },
    },
    {
      id: 'sentence23',
      level: 2,
      isFinal: false,
      korean: '입주하다, (호텔 등에) 숙박하다, 체크인하다',
      chinese: {
        hanzi: ['入住'],
        pinyin: ['Rùzhù'],
      },
    },
    {
      id: 'sentence23',
      level: 3,
      isFinal: true,
      korean:
        '체크인 할게요 ***"체크인할게요"를 "入住 rùzhù"라고 말해도 문제 없어요!',
      chinese: {
        hanzi: ['办', '入住'],
        pinyin: ['Bàn', 'rùzhù'],
      },
    },

    // 24번
    {
      id: 'sentence24',
      level: 1,
      isFinal: false,
      korean:
        '저는 …할 거예요(하려고요) *** 要 yào 에는 "의지"가 들어가 있어요',
      chinese: {
        hanzi: ['我', '要'],
        pinyin: ['Wǒ', 'yào'],
      },
    },
    {
      id: 'sentence24',
      level: 2,
      isFinal: false,
      korean: '저 체크인 하려고요',
      chinese: {
        hanzi: ['我', '要', '办', '入住'],
        pinyin: ['Wǒ', 'yào', 'bàn', 'rùzhù'],
      },
    },
    {
      id: 'sentence24',
      level: 3,
      isFinal: false,
      korean: '나의 여권(제 여권) ***护照 hùzhào 여권',
      chinese: {
        hanzi: ['我', '的', '护照'],
        pinyin: ['Wǒ', 'de', 'hùzhào'],
      },
    },
    {
      id: 'sentence24',
      level: 4,
      isFinal: false,
      korean: '이건 제 여권이에요',
      chinese: {
        hanzi: ['这', '是', '我', '的', '护照'],
        pinyin: ['Zhè', 'shì', 'wǒ', 'de', 'hùzhào'],
      },
    },
    {
      id: 'sentence24',
      level: 5,
      isFinal: true,
      korean: '저 체크인 하려고요. 여기 제 여권이요.',
      chinese: {
        hanzi: ['我', '要', '办', '入住,', '这', '是', '我', '的', '护照'],
        pinyin: [
          'Wǒ',
          'yào',
          'bàn',
          'rùzhù',

          'zhè',
          'shì',
          'wǒ',
          'de',
          'hùzhào',
        ],
      },
    },

    // 25번
    {
      id: 'sentence25',
      level: 1,
      isFinal: false,
      korean: '여기에서, 여기에 있다',
      chinese: {
        hanzi: ['在', '这儿'],
        pinyin: ['Zài', 'zhèr'],
      },
    },
    {
      id: 'sentence25',
      level: 2,
      isFinal: false,
      korean: '여기에서 예약하다 ***订 dìng 예약하다',
      chinese: {
        hanzi: ['在', '这儿', '订'],
        pinyin: ['Zài', 'zhèr', 'dìng'],
      },
    },
    {
      id: 'sentence25',
      level: 3,
      isFinal: false,
      korean: '여기에서 예약한 (것)',
      chinese: {
        hanzi: ['在', '这儿', '订', '的'],
        pinyin: ['Zài', 'zhèr', 'dìng', 'de'],
      },
    },
    {
      id: 'sentence25',
      level: 4,
      isFinal: false,
      korean: '여기에서 예약한 것이다',
      chinese: {
        hanzi: ['是', '在', '这儿', '订', '的'],
        pinyin: ['Shì', 'zài', 'zhèr', 'dìng', 'de'],
      },
    },
    {
      id: 'sentence25',
      level: 5,
      isFinal: true,
      korean:
        ' "여기에서" 를 강조할 때 저는 여기에서 예약했어요.(-> 저는 여기에서 예약한 거예요) ***"어디에서 예약하신 거예요?"라는 질문에 대한 답변이기 때문에 "여기에서"가 "강조"되는 거예요 어법상 "是…...的"구문으로 볼 수 있어요.',
      chinese: {
        hanzi: ['我', '是', '在', '这儿', '订', '的'],
        pinyin: ['Wǒ', 'shì', 'zài', 'zhèr', 'dìng', 'de'],
      },
    },

    // 26번
    {
      id: 'sentence26',
      level: 1,
      isFinal: false,
      korean: '이 사이트',
      chinese: {
        hanzi: ['这个', '网站'],
        pinyin: ['Zhè ge', 'wǎngzhàn'],
      },
    },
    {
      id: 'sentence26',
      level: 2,
      isFinal: false,
      korean: '이 사이트에서',
      chinese: {
        hanzi: ['在', '这个', '网站'],
        pinyin: ['Zài', 'zhè ge', 'wǎngzhàn'],
      },
    },
    {
      id: 'sentence26',
      level: 3,
      isFinal: false,
      korean: '예약하다',
      chinese: {
        hanzi: ['预订'],
        pinyin: ['Yùdìng'],
      },
    },
    {
      id: 'sentence26',
      level: 4,
      isFinal: false,
      korean: '이 사이트에서 예약하다(예약해)',
      chinese: {
        hanzi: ['在', '这个', '网站', '预订'],
        pinyin: ['Zài', 'zhè ge', 'wǎngzhàn', 'yùdìng'],
      },
    },
    {
      id: 'sentence26',
      level: 5,
      isFinal: false,
      korean: '이 사이트에서 예약한 것이다',
      chinese: {
        hanzi: ['是', '在', '这个', '网站', '预订', '的'],
        pinyin: ['Shì', 'zài', 'zhè ge', 'wǎngzhàn', 'yùdìng', 'de'],
      },
    },
    {
      id: 'sentence26',
      level: 6,
      isFinal: true,
      korean:
        '저는 이 사이트에서 예약했어요.(이 사이트에서를 강조할 때) ***"어디에서 예약하신 거예요?"라는 질문에 대한 답변이기 때문에 "이 사이트에서"가 "강조"되는 거예요 어법상 "是…...的"구문으로 볼 수 있어요.',
      chinese: {
        hanzi: ['我', '是', '在', '这个', '网站', '预订', '的', '。'],
        pinyin: ['Wǒ', 'shì', 'zài', 'zhè ge', 'wǎngzhàn', 'yùdìng', 'de', '.'],
      },
    },

    // 27번
    {
      id: 'sentence27',
      level: 1,
      isFinal: false,
      korean: '여권',
      chinese: {
        hanzi: ['护照'],
        pinyin: ['Hùzhào'],
      },
    },
    {
      id: 'sentence27',
      level: 2,
      isFinal: true,
      korean: '여기 여권이요(이건 여권이에요)',
      chinese: {
        hanzi: ['这', '是', '护照'],
        pinyin: ['Zhè', 'shì', 'hùzhào'],
      },
    },

    // 28번
    {
      id: 'sentence28',
      level: 1,
      isFinal: false,
      korean: '예약자의 여권 ***预订人 yùdìngrén 예약자',
      chinese: {
        hanzi: ['预订', '人', '的', '护照'],
        pinyin: ['Yùdìng', 'rén', 'de', 'hùzhào'],
      },
    },
    {
      id: 'sentence28',
      level: 2,
      isFinal: true,
      korean: '여기 예약자의 여권이요',
      chinese: {
        hanzi: ['这', '是', '预订', '人', '的', '护照'],
        pinyin: ['Zhè', 'shì', 'yùdìng', 'rén', 'de', 'hùzhào'],
      },
    },

    // 29번
    {
      id: 'sentence29',
      level: 1,
      isFinal: false,
      korean: '체크인하다',
      chinese: {
        hanzi: ['入住'],
        pinyin: ['Rùzhù'],
      },
    },
    {
      id: 'sentence29',
      level: 2,
      isFinal: false,
      korean: '…해도 된다, ...할 수 있다',
      chinese: {
        hanzi: ['可以'],
        pinyin: ['Kěyǐ'],
      },
    },
    {
      id: 'sentence29',
      level: 3,
      isFinal: false,
      korean: '체크인 해도 된다',
      chinese: {
        hanzi: ['可以', '入住'],
        pinyin: ['Kěyǐ', 'rùzhù'],
      },
    },
    {
      id: 'sentence29',
      level: 4,
      isFinal: true,
      korean: '체크인 되나요(가능할까요)?',
      chinese: {
        hanzi: ['可以', '入住', '吗？'],
        pinyin: ['Kěyǐ', 'rùzhù', 'ma'],
      },
    },

    // 30번
    {
      id: 'sentence30',
      level: 1,
      isFinal: false,
      korean: '미리 체크인하다 ***提前 tíqián 미리, 앞당겨서',
      chinese: {
        hanzi: ['提前', '入住'],
        pinyin: ['Tíqián', 'rùzhù'],
      },
    },
    {
      id: 'sentence30',
      level: 2,
      isFinal: false,
      korean: '미리 체크인 해도 된다',
      chinese: {
        hanzi: ['可以', '提前', '入住'],
        pinyin: ['Kěyǐ', 'tíqián', 'rùzhù'],
      },
    },
    {
      id: 'sentence30',
      level: 3,
      isFinal: true,
      korean: '조기(미리) 체크인 되나요(가능할까요)?',
      chinese: {
        hanzi: ['可以', '提前', '入住', '吗？'],
        pinyin: ['Kěyǐ', 'tíqián', 'rùzhù', 'ma'],
      },
    },
  ],

  day4: [
    // 31번
    {
      id: 'sentence31',
      level: 1,
      isFinal: false,
      korean: '좀 늦게 ***点 diǎn = 一点 yìdiǎn 조금(좀)',
      chinese: {
        hanzi: ['晚点'],
        pinyin: ['Wǎn diǎn'],
      },
    },
    {
      id: 'sentence31',
      level: 2,
      isFinal: false,
      korean: '체크아웃하다',
      chinese: {
        hanzi: ['退房'],
        pinyin: ['Tuì fáng'],
      },
    },
    {
      id: 'sentence31',
      level: 3,
      isFinal: false,
      korean: '좀 늦게 체크아웃하다',
      chinese: {
        hanzi: ['晚点', '退房'],
        pinyin: ['Wǎn diǎn', 'tuì fáng'],
      },
    },
    {
      id: 'sentence31',
      level: 4,
      isFinal: true,
      korean: '좀 늦게 체크아웃 해도 되나요(레이트 체크아웃 가능할까요)?',
      chinese: {
        hanzi: ['可以', '晚点', '退房', '吗？'],
        pinyin: ['Kěyǐ', 'wǎn diǎn', 'tuìfáng', 'ma'],
      },
    },

    // 32번
    {
      id: 'sentence32',
      level: 1,
      isFinal: false,
      korean: '…해야 한다, …할거야(의지)',
      chinese: {
        hanzi: ['要'],
        pinyin: ['Yào'],
      },
    },
    {
      id: 'sentence32',
      level: 2,
      isFinal: false,
      korean: '돈을 더 내다(추가하다)',
      chinese: {
        hanzi: ['加', '钱'],
        pinyin: ['Jiā', 'qián'],
      },
    },
    {
      id: 'sentence32',
      level: 3,
      isFinal: false,
      korean: '돈을 더 내야 한다(추가해야 한다)',
      chinese: {
        hanzi: ['要', '加', '钱'],
        pinyin: ['Yào', 'jiā', 'qián'],
      },
    },
    {
      id: 'sentence32',
      level: 4,
      isFinal: false,
      korean: '돈을 더 내야 하나요?(추가해야 하나요)',
      chinese: {
        hanzi: ['要', '加', '钱', '吗？'],
        pinyin: ['Yào', 'jiā', 'qián', 'ma'],
      },
    },
    {
      id: 'sentence32',
      level: 5,
      isFinal: true,
      korean: '레이트 체크아웃 해도 되나요(가능할까요)? 돈을 추가해야 하나요?',
      chinese: {
        hanzi: ['可以', '晚点', '退房', '吗？', '要', '加', '钱', '吗？'],
        pinyin: [
          'Kěyǐ',
          'wǎn diǎn',
          'tuì fáng',
          'ma',
          'Yào',
          'jiā',
          'qián',
          'ma',
        ],
      },
    },

    // 33번
    {
      id: 'sentence33',
      level: 1,
      isFinal: false,
      korean: '…에 살다, 묵다',
      chinese: {
        hanzi: ['住...'],
        pinyin: ['Zhù'],
      },
    },
    {
      id: 'sentence33',
      level: 2,
      isFinal: false,
      korean: '...에 묵고 싶어요',
      chinese: {
        hanzi: ['想', '住...'],
        pinyin: ['Xiǎng', 'zhù'],
      },
    },
    {
      id: 'sentence33',
      level: 3,
      isFinal: false,
      korean: '고층에 묵고 싶어요 ***高楼层 gāo lóucéng 고층',
      chinese: {
        hanzi: ['想', '住', '高楼层'],
        pinyin: ['Xiǎng', 'zhù', 'gāo lóucéng'],
      },
    },
    {
      id: 'sentence33',
      level: 4,
      isFinal: true,
      korean: '저는 고층에 묵고 싶어요',
      chinese: {
        hanzi: ['我', '想', '住', '高楼层'],
        pinyin: ['Wǒ', 'xiǎng', 'zhù', 'gāo lóucéng'],
      },
    },

    // 34번
    {
      id: 'sentence34',
      level: 1,
      isFinal: false,
      korean: '고층에 ...이 있다',
      chinese: {
        hanzi: ['高楼层', '有...'],
        pinyin: ['Gāo lóucéng', 'yǒu'],
      },
    },
    {
      id: 'sentence34',
      level: 2,
      isFinal: false,
      korean: '고층에 ...이 더 있다 ***还 hái 더, 아직',
      chinese: {
        hanzi: ['高楼层', '还', '有...'],
        pinyin: ['Gāo lóucéng', 'hái', 'yǒu'],
      },
    },
    {
      id: 'sentence34',
      level: 3,
      isFinal: false,
      korean: '빈 방',
      chinese: {
        hanzi: ['空房间'],
        pinyin: ['Kōng fángjiān'],
      },
    },
    {
      id: 'sentence34',
      level: 4,
      isFinal: false,
      korean: '고층에 빈 방이 더 있다',
      chinese: {
        hanzi: ['高楼层', '还', '有', '空', '房间'],
        pinyin: ['Gāo lóucéng', 'hái', 'yǒu', 'kōng', 'fángjiān'],
      },
    },
    {
      id: 'sentence34',
      level: 5,
      isFinal: false,
      korean: '고층에 빈 방이 더 있을까요?',
      chinese: {
        hanzi: ['高楼层', '还', '有', '空', '房间', '吗？'],
        pinyin: ['Gāo lóucéng', 'hái', 'yǒu', 'kōng', 'fángjiān', 'ma'],
      },
    },
    {
      id: 'sentence34',
      level: 6,
      isFinal: true,
      korean: '고층에 빈 방이 더 있을까요? 저는 고층에 묵고 싶어요',
      chinese: {
        hanzi: [
          '高楼层',
          '还',
          '有',
          '空房间',
          '吗？',
          '我',
          '想',
          '住',
          '高楼层',
        ],
        pinyin: [
          'Gāo lóucéng',
          'hái',
          'yǒu',
          'kōng fángjiān',
          'ma',
          'Wǒ',
          'xiǎng',
          'zhù',
          'gāo lóucéng',
        ],
      },
    },

    // 35번
    {
      id: 'sentence35',
      level: 1,
      isFinal: false,
      korean: '담배 냄새',
      chinese: {
        hanzi: ['烟味(儿)'],
        pinyin: ['Yānwèi(r)'],
      },
    },
    {
      id: 'sentence35',
      level: 2,
      isFinal: false,
      korean: '(…에는) 담배 냄새가 없다 ***A 没有 B méiyǒu A에는 B가 없다',
      chinese: {
        hanzi: ['没有', '烟味(儿)'],
        pinyin: ['Méiyǒu', 'yānwèi(r)'],
      },
    },
    {
      id: 'sentence35',
      level: 3,
      isFinal: true,
      korean: '담배냄새는 없죠? ***…吧 ba [추측] …이죠?',
      chinese: {
        hanzi: ['没有', '烟味(儿)', '吧?'],
        pinyin: ['Méiyǒu', 'yānwèi(r)', 'ba'],
      },
    },

    // 36번
    {
      id: 'sentence36',
      level: 1,
      isFinal: false,
      korean: '…할 것이다, …일 것이다',
      chinese: {
        hanzi: ['会'],
        pinyin: ['Huì'],
      },
    },
    {
      id: 'sentence36',
      level: 2,
      isFinal: false,
      korean: '…하지 않을 것이다',
      chinese: {
        hanzi: ['不会'],
        pinyin: ['Bú huì'],
      },
    },
    {
      id: 'sentence36',
      level: 3,
      isFinal: false,
      korean: '있지 않을 것이다',
      chinese: {
        hanzi: ['不会', '有...'],
        pinyin: ['Bú huì', 'yǒu'],
      },
    },
    {
      id: 'sentence36',
      level: 4,
      isFinal: false,
      korean: '담배 냄새가 나지 않을 것이다',
      chinese: {
        hanzi: ['不会', '有...', '烟味(儿)'],
        pinyin: ['Bú huì', 'yǒu', 'yānwèi(r)'],
      },
    },
    {
      id: 'sentence36',
      level: 5,
      isFinal: false,
      korean: '방(룸)에 담배 냄새가 나지 않을 거예요 ***房间 fángjiān 방',
      chinese: {
        hanzi: ['房间', '里', '不会', '有...', '烟味(儿)'],
        pinyin: ['Fángjiān', 'lǐ', 'bú huì', 'yǒu', 'yānwèi(r)'],
      },
    },
    {
      id: 'sentence36',
      level: 6,
      isFinal: true,
      korean: '룸에 담배냄새는 안 나겠죠? ***…吧 ba [추측] …이죠?',
      chinese: {
        hanzi: ['房间', '里', '不会', '有', '烟味(儿)', '吧？'],
        pinyin: ['Fángjiān', 'lǐ', 'bú huì', 'yǒu', 'yānwèi(r)', 'ba'],
      },
    },

    // 37번
    {
      id: 'sentence37',
      level: 1,
      isFinal: false,
      korean: '너무…하다',
      chinese: {
        hanzi: ['太...了'],
        pinyin: ['tài le'],
      },
    },
    {
      id: 'sentence37',
      level: 2,
      isFinal: false,
      korean: '너무 작다',
      chinese: {
        hanzi: ['太', '小', '了'],
        pinyin: ['Tài', 'xiǎo', 'le'],
      },
    },
    {
      id: 'sentence37',
      level: 3,
      isFinal: true,
      korean:
        '물 수압이 너무 약해요(물이 너무 적어요) ***물 수압이 약할 때 "水太小了"라고 말해요.',
      chinese: {
        hanzi: ['水', '太', '小', '了'],
        pinyin: ['Shuǐ', 'tài', 'xiǎo', 'le'],
      },
    },

    // 38번
    {
      id: 'sentence38',
      level: 1,
      isFinal: false,
      korean: '바꾸다',
      chinese: {
        hanzi: ['换'],
        pinyin: ['Huàn'],
      },
    },
    {
      id: 'sentence38',
      level: 2,
      isFinal: false,
      korean: '방 하나',
      chinese: {
        hanzi: ['一间', '房'],
        pinyin: ['Yì jiān', 'fáng'],
      },
    },
    {
      id: 'sentence38',
      level: 3,
      isFinal: false,
      korean: '방 (하나)를 바꾸다',
      chinese: {
        hanzi: ['换', '一间', '房'],
        pinyin: ['Huàn', 'yì jiān', 'fáng'],
      },
    },
    {
      id: 'sentence38',
      level: 4,
      isFinal: false,
      korean: '방 (하나)를 바꿔도 된다',
      chinese: {
        hanzi: ['可以', '换', '一间', '房'],
        pinyin: ['Kěyǐ', 'huàn', 'yì jiān', 'fáng'],
      },
    },
    {
      id: 'sentence38',
      level: 5,
      isFinal: false,
      korean: '방 (하나)를 바꿔도 될까요?',
      chinese: {
        hanzi: ['可以', '换', '一间', '房', '吗？'],
        pinyin: ['Kěyǐ', 'huàn', 'yì jiān', 'fáng', 'ma'],
      },
    },
    {
      id: 'sentence38',
      level: 6,
      isFinal: true,
      korean: '물 수압이 너무 약해요, 룸을 바꿔주실 수 있을까요?',
      chinese: {
        hanzi: ['水', '太', '小', '了，', '可以', '换', '一间', '房', '吗？'],
        pinyin: [
          'Shuǐ',
          'tài',
          'xiǎo',
          'le',
          'kěyǐ',
          'huàn',
          'yì jiān',
          'fáng',
          'ma',
        ],
      },
    },

    // 39번
    {
      id: 'sentence39',
      level: 1,
      isFinal: false,
      korean: '방에는 …이 있다 ***A 有 B yǒu A에는 B가 있다',
      chinese: {
        hanzi: ['房间', '里', '有...'],
        pinyin: ['Fángjiān', 'lǐ', 'yǒu'],
      },
    },
    {
      id: 'sentence39',
      level: 2,
      isFinal: false,
      korean: '퀴퀴한 담배 냄새',
      chinese: {
        hanzi: ['烟熏味(儿)'],
        pinyin: ['Yānxūnwèi(r)'],
      },
    },
    {
      id: 'sentence39',
      level: 3,
      isFinal: true,
      korean: '방 안에 퀴퀴한 담배 냄새가 나요',
      chinese: {
        hanzi: ['房间', '里', '有', '烟熏味(儿)'],
        pinyin: ['Fángjiān', 'lǐ', 'yǒu', 'yānxūnwèi(r)'],
      },
    },

    // 40번
    {
      id: 'sentence40',
      level: 1,
      isFinal: false,
      korean: '내게 바꿔주다(바꾸다)',
      chinese: {
        hanzi: ['给', '我', '换'],
        pinyin: ['Gěi', 'wǒ', 'huàn'],
      },
    },
    {
      id: 'sentence40',
      level: 2,
      isFinal: false,
      korean: '내게 방 하나를 바꿔주다',
      chinese: {
        hanzi: ['给', '我', '换', '(一)间', '房'],
        pinyin: ['Gěi', 'wǒ', 'huàn', '(yī)jiān', 'fáng'],
      },
    },
    {
      id: 'sentence40',
      level: 3,
      isFinal: false,
      korean: '실례지만, 죄송하지만',
      chinese: {
        hanzi: ['麻烦'],
        pinyin: ['Máfan'],
      },
    },
    {
      id: 'sentence40',
      level: 4,
      isFinal: false,
      korean: '죄송한데요, (제게) 룸 바꿔주세요',
      chinese: {
        hanzi: ['麻烦', '给', '我', '换', '(一)间', '房'],
        pinyin: ['Máfan', 'gěi', 'wǒ', 'huàn', '(yī)jiān', 'fáng'],
      },
    },
    {
      id: 'sentence40',
      level: 5,
      isFinal: true,
      korean:
        '방 안에 퀴퀴한 담배 냄새가 나요. 죄송한데요, (제게) 룸 바꿔주세요.',
      chinese: {
        hanzi: [
          '房间',
          '里',
          '有',
          '烟熏味(儿)，',
          '麻烦',
          '给',
          '我',
          '换',
          '(一)间',
          '房',
        ],
        pinyin: [
          'Fángjiān',
          'lǐ',
          'yǒu',
          'yānxūnwèi(r)',
          'máfan',
          'gěi',
          'wǒ',
          'huàn',
          '(yī)jiān',
          'fáng',
        ],
      },
    },
  ],

  day5: [
    // 41번
    {
      id: 'sentence41',
      level: 1,
      isFinal: false,
      korean: '…할 수 없다',
      chinese: {
        hanzi: ['...不了'],
        pinyin: ['bu liǎo'],
      },
    },
    {
      id: 'sentence41',
      level: 2,
      isFinal: false,
      korean: '쓸 수 없다(작동할 수 없다)',
      chinese: {
        hanzi: ['用', '不了'],
        pinyin: ['Yòng', 'bu liǎo'],
      },
    },
    {
      id: 'sentence41',
      level: 3,
      isFinal: false,
      korean: '에어컨을 쓸 수 없다',
      chinese: {
        hanzi: ['空调', '用', '不了'],
        pinyin: ['Kōngtiáo', 'yòng', 'bu liǎo'],
      },
    },
    {
      id: 'sentence41',
      level: 4,
      isFinal: false,
      korean:
        '(더이상) 쓸 수 없게 되다(작동할 수 없게 되다) ***이 문장의 "了 le"는 변화(…하게 되다)를 나타내요.',
      chinese: {
        hanzi: ['用', '不了', '了'],
        pinyin: ['Yòng', 'bu liǎo', 'le'],
      },
    },
    {
      id: 'sentence41',
      level: 5,
      isFinal: true,
      korean: '에어컨이 안돼요(에어컨이 쓸 수 없게 되었어요)',
      chinese: {
        hanzi: ['空调', '用', '不了', '了'],
        pinyin: ['Kōngtiáo', 'yòng', 'bu liǎo', 'le'],
      },
    },

    // 42번
    {
      id: 'sentence42',
      level: 1,
      isFinal: false,
      korean: '나를 도와주다',
      chinese: {
        hanzi: ['帮', '我'],
        pinyin: ['Bāng', 'wǒ'],
      },
    },
    {
      id: 'sentence42',
      level: 2,
      isFinal: false,
      korean:
        '나를 도와 한 번(좀) 보다 ***발생순서대로 배열, 덩어리훈련을 위해 직역해서 어색할 수 있어요',
      chinese: {
        hanzi: ['帮', '我', '看看'],
        pinyin: ['Bāng', 'wǒ', 'kànkan'],
      },
    },
    {
      id: 'sentence42',
      level: 3,
      isFinal: false,
      korean:
        '와서 나를 도와 한 번 보다 ***발생순서대로 배열, 덩어리훈련을 위해 직역해서 어색할 수 있어요',
      chinese: {
        hanzi: ['来', '帮', '我', '看看'],
        pinyin: ['Lái', 'bāng', 'wǒ', 'kànkan'],
      },
    },
    {
      id: 'sentence42',
      level: 4,
      isFinal: false,
      korean:
        '어떻게 된 일인지, 무슨 일인지 ***(一)回事 yì huí shì 하나의 일(한 개의 일) ***回 huí 일(事)을 세는 양사 (= 件 jiàn)',
      chinese: {
        hanzi: ['怎么', '回事'],
        pinyin: ['Zěnme', 'huí shì'],
      },
    },
    {
      id: 'sentence42',
      level: 5,
      isFinal: false,
      korean:
        '어떻게 된 일인지 와서 나를 도와 한 번 보다 ***발생순서대로 배열, 덩어리훈련을 위해 직역해서 어색할 수 있어요',
      chinese: {
        hanzi: ['来', '帮', '我', '看看', '怎么', '回事'],
        pinyin: ['Lái', 'bāng', 'wǒ', 'kànkan', 'zěnme', 'huí shì'],
      },
    },
    {
      id: 'sentence42',
      level: 6,
      isFinal: false,
      korean: '…할 수 있을까요?',
      chinese: {
        hanzi: ['能...吗'],
        pinyin: ['néng ma'],
      },
    },
    {
      id: 'sentence42',
      level: 7,
      isFinal: false,
      korean:
        '어떻게 된 일인지 봐주실 수 있을까요? ***발생순서대로 배열, 덩어리훈련을 위해 직역해서 어색할 수 있어요',
      chinese: {
        hanzi: ['能', '来', '帮', '我', '看看', '怎么', '回事', '吗？'],
        pinyin: [
          'Néng',
          'lái',
          'bāng',
          'wǒ',
          'kànkan',
          'zěnme',
          'huí shì',
          'ma',
        ],
      },
    },
    {
      id: 'sentence42',
      level: 8,
      isFinal: true,
      korean:
        '에어컨이 안돼요. 어떻게 된 일인지 봐주실 수 있을까요? ***의역이니 집중해서 "발생 순서"대로  배열하기!',
      chinese: {
        hanzi: [
          '空调',
          '用',
          '不了',
          '了,',
          '能',
          '来',
          '帮',
          '我',
          '看看',
          '怎么',
          '回事',
          '吗?',
        ],
        pinyin: [
          'Kōngtiáo',
          'yòng',
          'bu liǎo',
          'le',
          'néng',
          'lái',
          'bāng',
          'wǒ',
          'kànkan',
          'zěnme',
          'huí shì',
          'ma',
        ],
      },
    },

    // 43번
    {
      id: 'sentence43',
      level: 1,
      isFinal: false,
      korean: '리모컨',
      chinese: {
        hanzi: ['遥控器'],
        pinyin: ['Yáokòngqì'],
      },
    },
    {
      id: 'sentence43',
      level: 2,
      isFinal: false,
      korean:
        '배터리가 없다 ***이 문장의 "了 le"는 변화(…하게 되다)를 나타내요',
      chinese: {
        hanzi: ['没', '电', '了'],
        pinyin: ['Méi', 'diàn', 'le'],
      },
    },
    {
      id: 'sentence43',
      level: 3,
      isFinal: true,
      korean:
        '리모컨 배터리가 없어요 ***遥控器 yáokòngqì 리모컨 电 diàn 전기 遥控器를 遥控(器)이라고 생략할 수 있어요.',
      chinese: {
        hanzi: ['遥控器', '没', '电', '了'],
        pinyin: ['Yáokòngqì', 'méi', 'diàn', 'le'],
      },
    },

    // 44번
    {
      id: 'sentence44',
      level: 1,
      isFinal: false,
      korean: '새 배터리 ***电池 Diànchí 건전지, 배터리',
      chinese: {
        hanzi: ['新', '电池'],
        pinyin: ['Xīn', 'diànchí'],
      },
    },
    {
      id: 'sentence44',
      level: 2,
      isFinal: false,
      korean: '새 배터리 있어요?',
      chinese: {
        hanzi: ['有', '新', '电池', '吗?'],
        pinyin: ['Yǒu', 'xīn', 'diànchí', 'ma'],
      },
    },
    {
      id: 'sentence44',
      level: 3,
      isFinal: true,
      korean: '리모컨 배터리가 없어요. 새 배터리 있어요?',
      chinese: {
        hanzi: ['遥控器', '没', '电', '了，', '有', '新', '电池', '吗？'],
        pinyin: [
          'Yáokòngqì',
          'méi',
          'diàn',
          'le',
          'yǒu',
          'xīn',
          'diànchí',
          'ma',
        ],
      },
    },

    // 45번
    {
      id: 'sentence45',
      level: 1,
      isFinal: false,
      korean: '인터넷이 안 좋다 ***网 wǎng 인터넷',
      chinese: {
        hanzi: ['网', '不好'],
        pinyin: ['Wǎng', 'bù hǎo'],
      },
    },
    {
      id: 'sentence45',
      level: 2,
      isFinal: false,
      korean: '여기 인터넷은 안 좋다',
      chinese: {
        hanzi: ['这儿', '网', '不好'],
        pinyin: ['Zhèr', 'Wǎng', 'bù hǎo'],
      },
    },
    {
      id: 'sentence45',
      level: 3,
      isFinal: true,
      korean: '여기 인터넷은 안 좋나요?',
      chinese: {
        hanzi: ['这儿', '网', '不好', '吗？'],
        pinyin: ['Zhèr', 'Wǎng', 'bù hǎo', 'ma'],
      },
    },

    // 46번
    {
      id: 'sentence46',
      level: 1,
      isFinal: false,
      korean: '원래(부터) ***本来 běnlái 원래 就 jiù 바로',
      chinese: {
        hanzi: ['本来就'],
        pinyin: ['Běnlái jiù'],
      },
    },
    {
      id: 'sentence46',
      level: 2,
      isFinal: false,
      korean: '원래 안 좋다',
      chinese: {
        hanzi: ['本来就', '不好'],
        pinyin: ['Běnlái jiù', 'bù hǎo'],
      },
    },
    {
      id: 'sentence46',
      level: 3,
      isFinal: false,
      korean: '여기 인터넷은 원래 안 좋다',
      chinese: {
        hanzi: ['这儿', '网', '本来就', '不好'],
        pinyin: ['Zhèr', 'Wǎng', 'běnlái jiù', 'bù hǎo'],
      },
    },
    {
      id: 'sentence46',
      level: 4,
      isFinal: true,
      korean: '여기 인터넷은 원래 안 좋나요?',
      chinese: {
        hanzi: ['这儿', '网', '本来就', '不好', '吗？'],
        pinyin: ['Zhèr', 'Wǎng', 'běnlái jiù', 'bù hǎo', 'ma'],
      },
    },

    // 47번
    {
      id: 'sentence47',
      level: 1,
      isFinal: false,
      korean: '빌리다',
      chinese: {
        hanzi: ['借'],
        pinyin: ['Jiè'],
      },
    },
    {
      id: 'sentence47',
      level: 2,
      isFinal: false,
      korean: '보조 충전기를 빌리다',
      chinese: {
        hanzi: ['借', '充电宝'],
        pinyin: ['Jiè', 'chōngdiànbǎo'],
      },
    },
    {
      id: 'sentence47',
      level: 3,
      isFinal: false,
      korean: '좀(한 번) 빌리다',
      chinese: {
        hanzi: ['借', '一下'],
        pinyin: ['Jiè', 'yíxià'],
      },
    },
    {
      id: 'sentence47',
      level: 4,
      isFinal: true,
      korean: '보조 충전기 좀 빌려줘',
      chinese: {
        hanzi: ['借', '一下', '充电宝'],
        pinyin: ['Jiè', 'yíxià', 'chōngdiànbǎo'],
      },
    },
    // 48번
    {
      id: 'sentence48',
      level: 1,
      isFinal: false,
      korean: '…할 수 있을까요?',
      chinese: {
        hanzi: ['能...吗'],
        pinyin: ['néng ma'],
      },
    },
    {
      id: 'sentence48',
      level: 2,
      isFinal: false,
      korean: '너의 보조 충전기',
      chinese: {
        hanzi: ['你', '的', '充电宝'],
        pinyin: ['Nǐ', 'de', 'chōngdiànbǎo'],
      },
    },
    {
      id: 'sentence48',
      level: 3,
      isFinal: false,
      korean: '너의 보조충전기를 좀 빌릴 수 있을까?',
      chinese: {
        hanzi: ['能', '借', '一下', '你', '的', '充电宝', '吗？'],
        pinyin: ['Néng', 'jiè', 'yíxià', 'nǐ', 'de', 'chōngdiànbǎo', 'ma'],
      },
    },
    {
      id: 'sentence48',
      level: 4,
      isFinal: false,
      korean: '꺼지다',
      chinese: {
        hanzi: ['关机'],
        pinyin: ['Guānjī'],
      },
    },
    {
      id: 'sentence48',
      level: 5,
      isFinal: false,
      korean: '꺼졌다',
      chinese: {
        hanzi: ['关机', '了'],
        pinyin: ['Guānjī', 'le'],
      },
    },
    {
      id: 'sentence48',
      level: 6,
      isFinal: false,
      korean: '내 핸드폰',
      chinese: {
        hanzi: ['我', '手机'],
        pinyin: ['Wǒ', 'shǒujī'],
      },
    },
    {
      id: 'sentence48',
      level: 7,
      isFinal: false,
      korean: '내 핸드폰이 꺼졌다',
      chinese: {
        hanzi: ['我', '手机', '关机', '了'],
        pinyin: ['Wǒ', 'shǒujī', 'guānjī', 'le'],
      },
    },
    {
      id: 'sentence48',
      level: 8,
      isFinal: true,
      korean: '내 핸드폰이 꺼졌는데, 보조충전기 좀 빌릴 수 있을까?',
      chinese: {
        hanzi: [
          '我',
          '手机',
          '关机',
          '了,',
          '能',
          '借',
          '一下',
          '你',
          '的',
          '充电宝',
          '吗?',
        ],
        pinyin: [
          'Wǒ',
          'shǒujī',
          'guānjī',
          'le',
          'néng',
          'jiè',
          'yíxià',
          'nǐ',
          'de',
          'chōngdiànbǎo',
          'ma',
        ],
      },
    },

    // 49번
    {
      id: 'sentence49',
      level: 1,
      isFinal: false,
      korean: '기사님',
      chinese: {
        hanzi: ['师傅'],
        pinyin: ['Shīfu'],
      },
    },
    {
      id: 'sentence49',
      level: 2,
      isFinal: false,
      korean: '정차하다, 멈추다',
      chinese: {
        hanzi: ['停'],
        pinyin: ['Tíng'],
      },
    },
    {
      id: 'sentence49',
      level: 3,
      isFinal: false,
      korean: '호텔 입구에 세워주세요 ***酒店 jiǔdiàn 호텔 , 门口 ménkǒu 입구',
      chinese: {
        hanzi: ['停', '酒店', '门口'],
        pinyin: ['Tíng', 'jiǔdiàn', 'ménkǒu'],
      },
    },
    {
      id: 'sentence49',
      level: 4,
      isFinal: false,
      korean:
        '죄송하지만 호텔 앞에서 세워주세요 ***麻烦 máfan 실례지만, 죄송하지만',
      chinese: {
        hanzi: ['麻烦', '停', '酒店', '门口'],
        pinyin: ['Máfan', 'tíng', 'jiǔdiàn', 'ménkǒu'],
      },
    },
    {
      id: 'sentence49',
      level: 5,
      isFinal: true,
      korean:
        '기사님, 호텔 앞에서 세워주세요 ***“停酒店门口就行 tíng jiǔdiàn ménkǒu jiùxíng”라고도 말해요.',
      chinese: {
        hanzi: ['师傅', '麻烦', '停', '酒店', '门口'],
        pinyin: ['Shīfu', 'máfan', 'tíng', 'jiǔdiàn', 'ménkǒu'],
      },
    },

    // 50번
    {
      id: 'sentence50',
      level: 1,
      isFinal: false,
      korean:
        '좀 많다 *** 有点... yǒudiǎn 조금, 좀(불만·불평을 하는 상황) 多 duō 많다',
      chinese: {
        hanzi: ['有点', '多'],
        pinyin: ['Yǒudiǎn', 'duō'],
      },
    },
    {
      id: 'sentence50',
      level: 2,
      isFinal: false,
      korean: '짐이 좀 많아요 ***行李 xíngli 짐',
      chinese: {
        hanzi: ['行李', '有点', '多'],
        pinyin: ['Xíngli', 'yǒudiǎn', 'duō'],
      },
    },
    {
      id: 'sentence50',
      level: 3,
      isFinal: false,
      korean: '제 짐이 좀 많아요',
      chinese: {
        hanzi: ['我', '行李', '有点', '多'],
        pinyin: ['Wǒ', 'xíngli', 'yǒudiǎn', 'duō'],
      },
    },
    {
      id: 'sentence50',
      level: 4,
      isFinal: true,
      korean: '기사님, 호텔 앞에서 세워주세요. 제 짐이 좀 많아서요',
      chinese: {
        hanzi: [
          '师傅,',
          '麻烦',
          '停',
          '酒店',
          '门口,',
          '我',
          '行李',
          '有点',
          '多',
        ],
        pinyin: [
          'Shīfu',
          'máfan',
          'tíng',
          'jiǔdiàn',
          'ménkǒu',
          'wǒ',
          'xíngli',
          'yǒudiǎn',
          'duō',
        ],
      },
    },
  ],
};

// 전역 변수로 내보내기
window.sentenceData = sentenceData;
