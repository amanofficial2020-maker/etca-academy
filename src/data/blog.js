export const BLOG_POSTS = [
  {
    id: 'understanding-market-structure',
    title: 'Market Structure Basics: Trends, Ranges, and Key Levels',
    excerpt:
      'Learn to recognize trends, ranges, support, resistance, and context across multiple chart timeframes.',
    category: 'Market Analysis',
    author: 'ETCA Team',
    date: '2026-05-15',
    readTime: '8 min read',
    content: `Market structure describes how prices move through trends, ranges, and turning points. Learning to identify higher highs and higher lows, or lower highs and lower lows, can help traders describe the current direction of a market.

Support and resistance are useful reference levels for organizing chart analysis. Comparing price action across higher and lower timeframes can add context, while risk management remains essential for every trading plan.`,
  },
  {
    id: 'gold-trading-session-guide',
    title: 'The Ultimate Gold Trading Session Guide',
    excerpt:
      'Discover the best times to trade XAU/USD and how London and New York sessions create the highest volatility windows.',
    category: 'Gold Trading',
    author: 'Marcus Reid',
    date: '2026-04-28',
    readTime: '6 min read',
    content: `Gold (XAU/USD) is one of the most traded instruments at ETCA, and for good reason. Its correlation with the US Dollar, geopolitical events, and institutional order flow makes it a popular asset for technical and macro analysis.

The London open (8:00 AM GMT) and New York overlap (1:00 PM – 4:00 PM GMT) are the two highest-probability windows for gold trades. During these sessions, liquidity sweeps and reversal setups appear with remarkable consistency.

In this guide, we break down how to identify the daily bias, mark key liquidity levels, and execute with precision during these golden hours.`,
  },
  {
    id: 'risk-management-rules',
    title: '5 Risk Management Rules Every Trader Must Follow',
    excerpt:
      'Capital preservation is the number one skill. These five rules will protect your account through any market condition.',
    category: 'Forex Trading',
    author: 'Sarah Mitchell',
    date: '2026-03-22',
    readTime: '5 min read',
    content: `Risk management separates profitable traders from those who blow accounts. At ETCA, risk management isn't an afterthought — it's built into every lesson from day one.

Our five non-negotiable rules:
1. Never risk more than 1-2% per trade
2. Always use a stop loss before entering
3. Maintain a minimum 1:2 risk-to-reward ratio
4. Never revenge trade after a loss
5. Keep a detailed trading journal

Follow these rules consistently, and you'll survive long enough to become profitable. Ignore them, and no strategy will save you.`,
  },
  {
    id: 'crypto-market-cycles',
    title: 'Navigating Crypto Market Cycles Like a Pro',
    excerpt:
      'Bitcoin halving cycles, altcoin seasons, and how to position yourself for maximum gains in crypto markets.',
    category: 'Crypto Trading',
    author: 'David Chen',
    date: '2026-03-05',
    readTime: '7 min read',
    content: `Crypto markets move in predictable cycles driven by Bitcoin halvings, institutional adoption, and retail sentiment waves. Understanding these cycles gives ETCA crypto students a massive edge.

The typical cycle includes accumulation, markup, distribution, and markdown phases. By identifying which phase the market is in, you can adjust your strategy — from aggressive swing trades during markup to defensive capital preservation during markdown.

We teach students to use on-chain metrics alongside technical analysis to confirm cycle phases and time entries with confidence.`,
  },
  {
    id: 'psychology-of-trading',
    title: 'The Psychology of Trading: Mastering Your Mindset',
    excerpt:
      'Technical skill means nothing without mental discipline. Learn how elite traders manage emotions and stay consistent.',
    category: 'Mindset',
    author: 'ETCA Team',
    date: '2026-02-18',
    readTime: '9 min read',
    content: `The market is designed to transfer money from the impatient to the patient. At ETCA, we believe psychology is 80% of trading success — the other 20% is strategy and risk management.

Common psychological traps include FOMO (fear of missing out), overtrading after wins, and holding losers too long. Our mentorship program includes weekly mindset sessions where students learn breathing techniques, journaling practices, and pre-trade checklists.

Remember: you don't need to catch every move. You need to catch the right moves with the right size and the right mindset.`,
  },
]

export function getBlogPost(id) {
  return BLOG_POSTS.find((post) => post.id === id)
}
