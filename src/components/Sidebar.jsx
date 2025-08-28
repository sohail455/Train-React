import Footer from './footer'
import Logo from './Logo'
import styles from './Sidebar.module.css'

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <Footer />
        </div>
    )
}

export default Sidebar