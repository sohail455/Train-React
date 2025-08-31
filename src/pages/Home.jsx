import styles from "./Home.module.css";
import PageNav from "../components/pageNav";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContxt";
function Home() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  return (
    <main className={styles.homePage}>
      <PageNav />
      <section className={styles.container}>
        <h1>You Travel Across Egypt.</h1>
        <h1>Sohail Travel Makes Your Trip Easier.</h1>
        <button
          onClick={() => {
            if (isAuthenticated) navigate("/applayout");
            else navigate("/login");
          }}
        >
          Let's Start
        </button>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
