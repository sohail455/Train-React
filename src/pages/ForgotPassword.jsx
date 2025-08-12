import styles from "./ForgotPassword.module.css";
import PageNav from "../components/pageNav";
import Footer from "../components/footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const [email, setMail] = useState("");
    const [isOk, setIsOk] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    async function handleForgotPassword(e) {
        if (email === "") {
            e.preventDefault();
            alert("please enter your email");
            return;
        }
        try {
            setIsLoading(true);
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
                alert(data.message);
                setMail("");
                navigate("/resetpassword");
            } else {
                const errorData = await res.json();
                throw errorData;
            }
        } catch (err) {
            alert(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className={styles.forgotPass}>
            <PageNav />
            <form className={styles.form}>
                <div className={styles.row}>
                    <label>Enter Your Mail</label>
                    <input
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onChange={(e) => setMail(e.target.value)}
                    />
                </div>
                <div className={styles.buttons}>
                    <button style={{ backgroundColor: "rgba(109, 106, 106, 1)" }} onClick={(e) => {
                        e.preventDefault()
                        navigate(-1)
                    }
                    } disabled={isLoading}>
                        &larr; Back
                    </button>
                    <button onClick={(e) => handleForgotPassword(e)} disabled={isLoading}>
                        Send OTP
                    </button>
                </div>
            </form>
            <Footer />
        </main >
    );
}

export default ForgotPassword;
