import styles from "./Tours.module.css";
import PageNav from "../components/pageNav";

function Tours() {
  return (
    <main className={styles.tours}>
      <PageNav />
      <div>
        <h1>Welcome to our Tours page </h1>
      </div>
    </main>
  );
}

export default Tours;
