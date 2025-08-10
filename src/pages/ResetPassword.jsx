import styles from './ResetPassword.module.css'
import PageNav from "../components/pageNav";
import Footer from "../components/footer";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function ForgotPassword() {
    const [email, setMail] = useState("");
    const [token, setToken] = useState("");
    const [password, setPass] = useState("");
    const [passwordConfirm, setPassConf] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [isOk, setIsOk] = useState(false)

    async function handleResetPassword(e) {

        try {
            setIsLoading(true)
            e.preventDefault();
            const res = await fetch(
                `http://localhost:800/api/v1/users/resetpassword/${token}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        password, passwordConfirm
                    }),
                }
            );
            if (res.ok) {
                const data = await res.json();
                alert(data.message);
                Navigate('/')

            } else {
                const errorData = await res.json();
                throw errorData;
            }
        } catch (err) {
            alert(err.message);
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <main className={styles.forgotPass}>
            <PageNav />
            <form className={styles.form}>

                <div className={styles.row}>
                    <label>Reset Your Password</label>
                    <input
                        placeholder="Enter your new Password"
                        type="text"
                        value={password}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <input
                        placeholder="Confirm your new Password"
                        type="text"
                        value={passwordConfirm}
                        onChange={(e) => setPassConf(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={(e) => handleResetPassword(e)} disabled={isLoading}>Send OTP</button>
                </div>

            </form>
            <Footer />
        </main>
    );
}

export default ForgotPassword;
