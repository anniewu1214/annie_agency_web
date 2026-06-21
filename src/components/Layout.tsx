import { Outlet } from 'react-router-dom'
import Navigator from './Navigator'
import Footer from './Footer'
import styles from './Layout.module.css'

function Layout() {
  return (
    <div className={styles.wrapper}>
      <Navigator />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
