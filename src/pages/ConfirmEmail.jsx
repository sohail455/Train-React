import styles from "./SignIn.module.css";
import PageNav from "../components/pageNav";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { useReducer, useState } from "react";

function ConfirmEmail() {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSetReq(e) {
    if (token === "") {
      alert("enter your token");
      return;
    }
    setIsLoading(true);
    try {
      e.preventDefault();
      const res = await fetch(
        `http://localhost:800/api/v1/users/confirmEmail/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        alert("Registered Sucessfully");
        navigate("/");
      } else {
        const errorData = await res.json();
        throw errorData;
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
      setToken("");
    }
  }
  return (
    <main className={styles.loginBackground}>
      <PageNav />
      <form className={styles.form}>
        <p
          style={{
            fontSize: "35px",
            fontWeight: "750",
            marginBottom: "25px",
            marginTop: "10px",
          }}
        >
          Confirm Your Email
        </p>

        <div className={styles.row}>
          <input
            type="text"
            placeholder="enter the Confirmation Token.."
            id="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />
        </div>

        <div className={styles.buttons}>
          <button
            style={{ backgroundColor: "gray" }}
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            {" "}
            &larr; Back
          </button>
          <button disabled={isLoading} onClick={(e) => handleSetReq(e)}>
            Send Token
          </button>
        </div>
      </form>
      <Footer />
    </main>
  );
}

export default ConfirmEmail;
