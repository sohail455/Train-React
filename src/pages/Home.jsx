import styles from "./Home.module.css";
import PageNav from "../components/pageNav";
function Home() {
  return (
    <div className={styles.homePage}>
      <PageNav />
    </div>
  );
}

export default Home;
