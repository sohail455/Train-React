import Footer from "../components/footer";
import PageNav from "../components/pageNav";
import styles from "./Pricing.module.css";



function Pricing() {
  return (
    <main className={styles.pricing}>
      <PageNav />
      <div>
        <h1>Welcome to our Pricing page </h1>
      </div>
      <Footer />
    </main>
  );
}

export default Pricing;
