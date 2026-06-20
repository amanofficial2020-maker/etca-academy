export default function StarRating({ count = 5 }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#d4af37', fontSize: '14px' }}>
          ★
        </span>
      ))}
    </div>
  )
}
