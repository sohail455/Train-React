import styles from './Career.module.css'
import PageNav from '../components/pageNav'
import { useState } from 'react';


function Career() {
    const [isSubmit, setIsSubmit] = useState(false)
    function handelClick(e) {
        e.preventDefault();
        setIsSubmit(true)
    }
    return (
        <main className={styles.career}>
            <PageNav />

            {isSubmit ? <h1>Thank You For Your Interset, We will Contact You Soon!</h1> : <section className={styles.section}>
                <form className={styles.form}>
                    <label className={styles.title}>Join Us Now</label>
                    <div>
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <button type="submit" onClick={(e) => handelClick(e)}>Submit</button>
                </form>
            </section>}
        </main>
    );
}

export default Career;
