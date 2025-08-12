import { Link } from "react-router-dom";
import styles from "./footer.module.css";


function Footer() {

  return (

    <footer className={styles.footer}>&copy; Powerd By <Link style={{ color: "white" }} target="balnk" to={"https://github.com/sohail455"}>
      Sohail Talaat
    </Link>
    </footer>
  );
}

export default Footer;
