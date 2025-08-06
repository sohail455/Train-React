import styles from "./Tours.module.css";
import PageNav from "../components/pageNav";
import TripList from "../components/TripList";

function Tours({ tours }) {
  return (
    <main className={styles.tours}>
      <PageNav />
      <div>
        <TripList trips={tours} />
      </div>
    </main>
  );
}

export default Tours;
