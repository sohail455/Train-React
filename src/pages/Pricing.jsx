import PageNav from "../components/pageNav";
import styles from "./Pricing.module.css";

import React from "react";

function Pricing() {
  return (
    <main className={styles.pricing}>
      <PageNav />
      <div>
        <h1>Welcome to our Pricing page </h1>
      </div>
    </main>
  );
}

export default Pricing;
