import styles from "./ForgotPassword.module.css";
import PageNav from "../components/pageNav";
import Footer from "../components/footer";
import { useState } from "react";

function ForgotPassword() {
  const [email, setMail] = useState("");

  async function handleResetPassword(e) {
    if (email === "") {
      e.preventDefault();
      alert("please enter your email");
      return;
    }
    try {
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
      if (!res.ok) {
        const errorData = await res.json();
        throw errorData;
      }

      const data = await res.json();

      alert(data.message);
      setMail("");
    } catch (err) {
      alert(err.message);
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
        <div className="row">
          <button onClick={(e) => handleResetPassword(e)}>Send OTP</button>
        </div>
      </form>
      <Footer />
    </main>
  );
}

export default ForgotPassword;
