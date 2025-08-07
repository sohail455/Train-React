import styles from './ForgotPassword.module.css'
import PageNav from '../components/pageNav'
import Footer from '../components/footer'

function ForgotPassword() {
    return (
        <main className={styles.forgotPass}>
            <PageNav />
            <form className={styles.form}>
                <div className={styles.row}>
                    <label>Enter Your Mail</label>
                    <input placeholder='Enter your email' type='email' />
                </div>
                <div className="row">
                    <button>Send OTP</button>
                </div>
            </form>
            <Footer />
        </main>
    )
}

export default ForgotPassword