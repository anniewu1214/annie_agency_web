import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigator.module.css'

const navItems = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Service' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navigator() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${menuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.brand}>
        <NavLink to="/" className={styles.brandMain} onClick={closeMenu}>
          PlayAnnieTime
        </NavLink>
        <span className={styles.brandSub}>Branding and Consultant</span>
      </div>
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>
      <ul className={styles.links}>
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigator
