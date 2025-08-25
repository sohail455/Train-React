import Logo from "../components/Logo";
import { Map } from "../components/Map"
import styles from './AppLayout.module.css'
function AppLayout() {
    return (
        <div className={styles.app}>
            <Logo />
            <Map />
        </div >
    )
}
export default AppLayout;
