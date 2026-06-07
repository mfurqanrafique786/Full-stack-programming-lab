'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      {/* Top bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '6px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
        <span>Call for Customer support: <a href="tel:02038989565" style={{ color: '#e8000d', fontWeight: 'bold' }}>020 38989565</a></span>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Link href="/my-account" style={{ color: '#555' }}>My Account</Link>
          <Link href="/my-account" style={{ color: '#555' }}>Wishlist</Link>
          <Link href="/payment" style={{ color: '#555' }}>To Checkout</Link>
        </div>
      </div>

      {/* Logo + Cart */}
      <div style={{ background: '#fff', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
        <Link href="/">
          <div>
            <span style={{ fontSize: '28px', fontWeight: '900', letterSpacing: '-1px', color: '#111' }}>HOTSPRING</span>
            <sup style={{ fontSize: '10px', color: '#111' }}>®</sup>
            <div style={{ color: '#e8000d', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px' }}>Portable Spas</div>
          </div>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #ddd', padding: '6px 12px', borderRadius: '2px' }}>
          <span style={{ fontSize: '20px' }}>🛒</span>
          <span style={{ fontSize: '13px', color: '#555' }}>My Cart: 0 Items (s)</span>
          <span>▼</span>
        </div>
      </div>

      {/* Nav bar */}
      <div style={{ background: '#e8000d', display: 'flex', alignItems: 'center', padding: '0 20px' }}>
        <nav style={{ display: 'flex', gap: '0' }}>
          {[
            { label: 'CATAGORY', href: '/category' },
            { label: 'BRAND', href: '/category' },
            { label: 'INFO', href: '/about' },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{
              color: '#fff', padding: '12px 20px', display: 'block', fontSize: '13px', fontWeight: 'bold',
              borderRight: '1px solid rgba(255,255,255,0.3)'
            }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ flex: 1, display: 'flex', marginLeft: '20px' }}>
          <input type="text" placeholder="Search" style={{
            flex: 1, padding: '8px 12px', border: 'none', fontSize: '13px', outline: 'none'
          }} />
          <button style={{
            background: '#555', color: '#fff', border: 'none', padding: '8px 20px',
            fontSize: '13px', fontWeight: 'bold', cursor: 'pointer'
          }}>SEARCH</button>
        </div>
      </div>
    </header>
  )
}
