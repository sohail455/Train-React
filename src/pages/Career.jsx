import styles from './Career.module.css'
import PageNav from '../components/pageNav'
import { useState } from 'react';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';


function Career() {
    const [isSubmit, setIsSubmit] = useState(false)
    function handelClick(e) {
        e.preventDefault();
        setIsSubmit(true)
    }
    const navigate = useNavigate()
    return (
        <main className={styles.career}>
            <PageNav />
            <form className={styles.form}>
                <h1>Join Us Now</h1>
                <div className={styles.row}>
                    <label htmlFor="name">Name</label>
                    <input placeholder='enter your name' id='name' />
                </div>
                <div className={styles.row}>
                    <label htmlFor="email">Email</label>
                    <input placeholder='enter your email' id='email' />
                </div>
                <div className={styles.row}>
                    <label htmlFor="number">Phone Number</label>
                    <input placeholder='enter your Phone Number' id='number' type='text' />
                </div>

                <div className={styles.buttons}>
                    <button style={{ backgroundColor: "gray" }} onClick={(e) => {
                        e.preventDefault()
                        navigate(-1)
                    }}> &larr; Back</button>
                    <button onClick={(e) => e.preventDefault()}>Submit</button>
                </div>

            </form>

            <Footer />
        </main>
    );
}

export default Career;
