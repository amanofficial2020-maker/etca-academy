export const COURSES = [
  {
    id: 'forex-trading',
    slug: 'forex-trading',
    title: 'Forex Trading',
    icon: '💱',
    level: 'Beginner to Advanced',
    duration: '12 weeks',
    students: 180,
    rating: 4.9,
    price: '$299',
    description:
      'Master currency pairs, market structure, and institutional-level forex strategies from beginner to advanced.',
    topics: ['Major & Minor Pairs', 'Session Analysis', 'Risk Management'],
    instructor: 'Marcus Reid',
    modules: [
      {
        id: 'm1',
        title: 'Forex Foundations',
        lessons: [
          {
            id: 'l1',
            title: 'Introduction to Forex Markets',
            duration: '18:30',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
            pdfTitle: 'Forex Market Basics',
            pdfContent: `Chapter 1: Introduction to Forex

The foreign exchange (Forex) market is the largest financial market in the world, with over $7.5 trillion traded daily. Unlike stock markets, Forex operates 24 hours a day, five days a week.

Key Concepts:
• Currency pairs (EUR/USD, GBP/USD, USD/JPY)
• Bid and Ask prices
• Spread and pip value
• Major, minor, and exotic pairs

The Forex market is decentralized — there is no single exchange. Instead, trading occurs electronically over-the-counter (OTC) through a network of banks, brokers, and institutions.`,
          },
          {
            id: 'l2',
            title: 'Understanding Currency Pairs',
            duration: '22:15',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
            pdfTitle: 'Currency Pairs Guide',
            pdfContent: `Chapter 2: Currency Pairs

Every Forex trade involves buying one currency while simultaneously selling another. The first currency is the base, the second is the quote.

Major Pairs: EUR/USD, GBP/USD, USD/JPY, USD/CHF, AUD/USD, USD/CAD, NZD/USD
Minor Pairs: EUR/GBP, EUR/JPY, GBP/JPY
Exotic Pairs: USD/TRY, EUR/ZAR

Understanding correlation between pairs helps manage portfolio risk and identify high-probability setups.`,
          },
          {
            id: 'l3',
            title: 'Reading Forex Charts',
            duration: '25:00',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
            pdfTitle: 'Chart Reading Fundamentals',
            pdfContent: `Chapter 3: Chart Reading

Candlestick charts are the standard for Forex analysis. Each candle represents price action over a specific timeframe.

Components: Open, High, Low, Close (OHLC)
Bullish candle: Close > Open (typically green)
Bearish candle: Close < Open (typically red)

Timeframes: Monthly → Weekly → Daily → 4H → 1H → 15M → 5M
Always analyze from higher to lower timeframe for context.`,
          },
        ],
      },
      {
        id: 'm2',
        title: 'Technical Analysis',
        lessons: [
          {
            id: 'l4',
            title: 'Support and Resistance',
            duration: '20:45',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
            pdfTitle: 'Support & Resistance Notes',
            pdfContent: `Chapter 4: Support and Resistance

Support: A price level where buying pressure exceeds selling pressure, causing price to bounce upward.
Resistance: A price level where selling pressure exceeds buying pressure, causing price to reverse downward.

Key principles:
• The more times a level is tested, the weaker it becomes
• Broken support becomes resistance (and vice versa)
• Round numbers act as psychological levels`,
          },
          {
            id: 'l5',
            title: 'Trend Analysis & Moving Averages',
            duration: '24:30',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
            pdfTitle: 'Trend Analysis Workbook',
            pdfContent: `Chapter 5: Trend Analysis

Uptrend: Series of higher highs (HH) and higher lows (HL)
Downtrend: Series of lower highs (LH) and lower lows (LL)
Sideways: Price oscillates between support and resistance

Moving Averages:
• 20 EMA — short-term trend
• 50 EMA — medium-term trend
• 200 EMA — long-term trend

Trade in the direction of the trend on your execution timeframe.`,
          },
        ],
      },
    ],
  },
  {
    id: 'gold-trading',
    slug: 'gold-trading',
    title: 'Gold Trading',
    icon: '🥇',
    level: 'Intermediate',
    duration: '8 weeks',
    students: 120,
    rating: 4.8,
    price: '$349',
    description:
      'Learn to trade XAU/USD with precision using supply & demand zones, liquidity sweeps, and macro analysis.',
    topics: ['XAU/USD Mastery', 'Macro Correlations', 'Scalping & Swing'],
    instructor: 'Sarah Mitchell',
    modules: [
      {
        id: 'm1',
        title: 'Gold Market Fundamentals',
        lessons: [
          {
            id: 'l1',
            title: 'Why Trade Gold?',
            duration: '16:20',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
            pdfTitle: 'Gold Trading Introduction',
            pdfContent: `Chapter 1: Why Trade Gold

Gold (XAU/USD) is a safe-haven asset that moves inversely to the US Dollar and responds strongly to geopolitical events, inflation data, and central bank policy.

Advantages of trading gold:
• High liquidity and tight spreads
• Strong trending behavior
• Clear institutional order flow patterns
• 24-hour trading availability`,
          },
          {
            id: 'l2',
            title: 'Gold Session Analysis',
            duration: '21:00',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
            pdfTitle: 'Session Timing Guide',
            pdfContent: `Chapter 2: Session Analysis

Best gold trading windows:
• London Open: 8:00 AM GMT — Initial volatility spike
• NY Overlap: 1:00 PM – 4:00 PM GMT — Highest volume
• Asian Session: Range formation for next day setup

Mark the Asian range high and low — these become liquidity targets during London.`,
          },
        ],
      },
    ],
  },
  {
    id: 'crypto-trading',
    slug: 'crypto-trading',
    title: 'Crypto Trading',
    icon: '₿',
    level: 'Beginner to Intermediate',
    duration: '10 weeks',
    students: 95,
    rating: 4.7,
    price: '$279',
    description:
      'Navigate the crypto markets with confidence — from Bitcoin fundamentals to altcoin momentum strategies.',
    topics: ['BTC & Altcoins', 'On-Chain Basics', 'DeFi Awareness'],
    instructor: 'David Chen',
    modules: [
      {
        id: 'm1',
        title: 'Crypto Foundations',
        lessons: [
          {
            id: 'l1',
            title: 'Blockchain & Bitcoin Basics',
            duration: '19:45',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
            pdfTitle: 'Crypto Fundamentals',
            pdfContent: `Chapter 1: Blockchain Basics

Blockchain is a distributed ledger technology that records transactions across a network of computers. Bitcoin was the first application, launched in 2009 by Satoshi Nakamoto.

Key terms: Wallet, Private Key, Public Address, Mining, Halving
Market cap ranking determines liquidity and volatility profile.`,
          },
        ],
      },
    ],
  },
  {
    id: 'ict-concepts',
    slug: 'ict-concepts',
    title: 'ICT Concepts',
    icon: '📊',
    level: 'Advanced',
    duration: '14 weeks',
    students: 210,
    rating: 5.0,
    price: '$499',
    description:
      'Inner Circle Trader methodology — order blocks, fair value gaps, kill zones, and institutional footprints.',
    topics: ['Order Blocks', 'Fair Value Gaps', 'Kill Zones'],
    instructor: 'Marcus Reid',
    modules: [
      {
        id: 'm1',
        title: 'ICT Core Concepts',
        lessons: [
          {
            id: 'l1',
            title: 'Introduction to ICT Methodology',
            duration: '28:00',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
            pdfTitle: 'ICT Methodology Overview',
            pdfContent: `Chapter 1: ICT Methodology

Inner Circle Trader (ICT) concepts reveal how institutional traders manipulate price to accumulate, distribute, and hunt liquidity.

Core concepts: Order Blocks, Fair Value Gaps (FVG), Optimal Trade Entry (OTE), Kill Zones, Liquidity Pools, Market Structure.`,
          },
          {
            id: 'l2',
            title: 'Order Blocks Deep Dive',
            duration: '32:15',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
            pdfTitle: 'Order Blocks Workbook',
            pdfContent: `Chapter 2: Order Blocks

An order block is the last opposing candle before a strong impulsive move. It represents where institutions placed their orders.

Bullish OB: Last bearish candle before bullish displacement
Bearish OB: Last bullish candle before bearish displacement

Validation: Look for FVG creation, liquidity sweep, and market structure shift.`,
          },
        ],
      },
    ],
  },
  {
    id: 'smart-money-concepts',
    slug: 'smart-money-concepts',
    title: 'Smart Money Concepts',
    icon: '🧠',
    level: 'Advanced',
    duration: '12 weeks',
    students: 165,
    rating: 4.9,
    price: '$449',
    description:
      'Understand how smart money moves the market — liquidity, inducement, market structure shifts, and more.',
    topics: ['Liquidity Pools', 'BOS & CHoCH', 'Premium & Discount'],
    instructor: 'Marcus Reid',
    modules: [
      {
        id: 'm1',
        title: 'SMC Foundations',
        lessons: [
          {
            id: 'l1',
            title: 'Smart Money vs Retail Mindset',
            duration: '24:00',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
            pdfTitle: 'SMC Introduction',
            pdfContent: `Chapter 1: Smart Money Concepts

Smart Money Concepts (SMC) teach you to think like institutional traders — identifying where liquidity rests and how price is engineered to collect it.

Retail traders buy breakouts. Smart money sells into them.
Retail traders panic at lows. Smart money accumulates there.`,
          },
        ],
      },
    ],
  },
]

export function getCourseBySlug(slug) {
  return COURSES.find((c) => c.slug === slug)
}

export function getLesson(courseSlug, lessonId) {
  const course = getCourseBySlug(courseSlug)
  if (!course) return null
  for (const mod of course.modules) {
    const lesson = mod.lessons.find((l) => l.id === lessonId)
    if (lesson) return { course, module: mod, lesson }
  }
  return null
}

export function getAllLessons(course) {
  return course.modules.flatMap((mod) =>
    mod.lessons.map((lesson) => ({ ...lesson, moduleTitle: mod.title, moduleId: mod.id }))
  )
}
