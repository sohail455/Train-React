import styles from "./Home.module.css";
import PageNav from "../components/pageNav";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate()
  return (
    <main className={styles.homePage}>
      <PageNav />
      <section className={styles.container}>
        <h1>You Travel Across Egypt.</h1>
        <h1>Sohail Travel Makes Your Trip Easier.</h1>
        <button onClick={() => navigate("/applayout")}>Let's Start</button>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
