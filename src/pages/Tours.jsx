import styles from "./Tours.module.css";
import PageNav from "../components/pageNav";
import TripList from "../components/TripList";
import Footer from "../components/footer";


function Tours({ tours }) {
  return (
    <main className={styles.tours}>
      <PageNav />
      <div>
        <TripList trips={tours} />
      </div>
      <Footer />
    </main>
  );
}

export default Tours;
