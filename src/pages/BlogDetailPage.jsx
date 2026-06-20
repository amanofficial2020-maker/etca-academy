import { Link, useParams } from 'react-router-dom'
import { getBlogPost, BLOG_POSTS } from '../data/blog'

export default function BlogDetailPage() {
  const { id } = useParams()
  const post = getBlogPost(id)

  if (!post) {
    return (
      <div className="etca-container" style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h1 style={{ color: '#ffffff', marginBottom: '16px' }}>Article Not Found</h1>
        <Link to="/blog" className="etca-btn-primary">Back to Blog</Link>
      </div>
    )
  }

  const related = BLOG_POSTS.filter((p) => p.id !== id && p.category === post.category).slice(0, 2)

  return (
    <>
      <div className="etca-page-header">
        <div className="etca-container" style={{ maxWidth: '800px' }}>
          <Link to="/blog" style={{ color: '#d4af37', fontSize: '14px', marginBottom: '16px', display: 'inline-block' }}>
            ← Back to Blog
          </Link>
          <span className="etca-section-label">{post.category}</span>
          <h1>{post.title}</h1>
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
            <span style={{ color: '#a0a0a0', fontSize: '14px' }}>By {post.author}</span>
            <span style={{ color: '#666666', fontSize: '14px' }}>{post.date}</span>
            <span style={{ color: '#666666', fontSize: '14px' }}>{post.readTime}</span>
          </div>
        </div>
      </div>

      <section style={{ padding: '60px 0', background: '#0a0a0a' }}>
        <div className="etca-container" style={{ maxWidth: '800px' }}>
          <div style={{ color: '#a0a0a0', fontSize: '17px', lineHeight: 1.9, whiteSpace: 'pre-wrap' }}>
            {post.content}
          </div>

          {related.length > 0 && (
            <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid rgba(212,175,55,0.15)' }}>
              <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>Related Articles</h3>
              <div className="etca-grid-2">
                {related.map((r) => (
                  <Link key={r.id} to={`/blog/${r.id}`} className="etca-card" style={{ padding: '24px', display: 'block' }}>
                    <span style={{ color: '#d4af37', fontSize: '11px', fontWeight: 700 }}>{r.category}</span>
                    <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 600, marginTop: '8px' }}>{r.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
