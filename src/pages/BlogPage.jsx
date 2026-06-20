import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '../data/blog'

export default function BlogPage() {
  return (
    <>
      <div className="etca-page-header">
        <div className="etca-container">
          <span className="etca-section-label">Insights & Education</span>
          <h1>Trading Blog</h1>
          <p>Expert articles on Forex, Gold, Crypto, ICT, Smart Money Concepts, and trading psychology.</p>
        </div>
      </div>

      <section className="etca-section" style={{ background: '#0a0a0a' }}>
        <div className="etca-container">
          <div className="etca-grid-auto">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="etca-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(212,175,55,0.15)',
                    color: '#d4af37',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '20px',
                    marginBottom: '16px',
                    alignSelf: 'flex-start',
                    letterSpacing: '0.5px',
                  }}
                >
                  {post.category}
                </span>
                <h2 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, lineHeight: 1.4, marginBottom: '12px' }}>
                  {post.title}
                </h2>
                <p style={{ color: '#a0a0a0', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px', flex: 1 }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                  <div>
                    <div style={{ color: '#ffffff', fontSize: '13px', fontWeight: 600 }}>{post.author}</div>
                    <div style={{ color: '#666666', fontSize: '12px' }}>{post.date} · {post.readTime}</div>
                  </div>
                  <Link to={`/blog/${post.id}`} style={{ color: '#d4af37', fontSize: '14px', fontWeight: 600 }}>
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
