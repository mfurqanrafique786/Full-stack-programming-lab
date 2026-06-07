import Link from 'next/link'

export default function Breadcrumb({ items }) {
  return (
    <div style={{ padding: '8px 0', marginBottom: '16px', fontSize: '12px', color: '#666' }}>
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span style={{ margin: '0 4px' }}>{'>'}</span>}
          {item.href ? (
            <Link href={item.href} style={{ color: '#2196f3' }}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  )
}
