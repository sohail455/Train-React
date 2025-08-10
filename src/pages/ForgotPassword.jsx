import styles from "./ForgotPassword.module.css";
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
    async function handleForgotPassword(e) {
        if (email === "") {
            e.preventDefault();
            alert("please enter your email");
            return;
        }
        try {
            setIsLoading(true)
            e.preventDefault();
            const res = await fetch(
                "http://localhost:800/api/v1/users/forgotpassword",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                    }),
                }
            );
            if (res.ok) {
                const data = await res.json();
                setToken(data.token)
                alert(data.message);
                setIsOk(true)
                setMail("");
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
                {
                    isOk ? <>
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
                    </> : <>
                        <div className={styles.row}>
                            <label>Enter Your Mail</label>
                            <input
                                placeholder="Enter your email"
                                type="email"
                                value={email}
                                onChange={(e) => setMail(e.target.value)}
                            />
                        </div>
                        <div>
                            <button onClick={(e) => handleForgotPassword(e)} disabled={isLoading}>Send OTP</button>
                        </div>
                    </>
                }

            </form>
            <Footer />
        </main>
    );
}

export default ForgotPassword;
