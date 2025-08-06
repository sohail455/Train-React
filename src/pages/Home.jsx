import styles from "./Home.module.css";
import PageNav from "../components/pageNav";
function Home() {
  return (
    <main className={styles.homePage}>
      <PageNav />
      <section className={styles.container}>
        <h1>You Travel Across Egypt.</h1>
        <h1>WorldWise Makes Your Trip Easier.</h1>
        <button onClick={() => navigate("/app")}>Let's Start</button>
      </section>
    </main>
  );
}


export default Home;
