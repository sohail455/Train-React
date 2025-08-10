import styles from "./SignIn.module.css";
import PageNav from "../components/pageNav";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { useReducer, useState } from "react";
const initialState = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPass":
      return { ...state, password: action.payload };
    case "setPassConfirm":
      return { ...state, passwordConfirm: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}
function SignIn() {
  const [{ name, email, password, passwordConfirm }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const navigate = useNavigate();
  async function handleSetReq(e) {
    try {
      e.preventDefault();
      const res = await fetch("http://localhost:800/api/v1/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          passwordConfirm,
        }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw errorData;
      }

      dispatch({ type: "reset" });
      console.log(res);
      alert("Registered Sucessfully");
    } catch (err) {
      alert(err.message);
    }
  }
  return (
    <main className={styles.loginBackground}>
      <PageNav />
      <form className={styles.form}>
        <div className="row">
          <h3 className={styles.title}>
            Hello <span>👋</span>
          </h3>
        </div>
        <div className={styles.row}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="enter your Full Name.."
            id="name"
            value={name}
            onChange={(e) =>
              dispatch({ type: "setName", payload: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="enter your Email.."
            id="email"
            value={email}
            onChange={(e) =>
              dispatch({ type: "setEmail", payload: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            placeholder="enter your password.."
            id="password"
            value={password}
            onChange={(e) =>
              dispatch({ type: "setPass", payload: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="pass">Re-Enter Password</label>
          <input
            type="password"
            placeholder="enter your password.."
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) =>
              dispatch({ type: "setPassConfirm", payload: e.target.value })
            }
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
          <button onClick={(e) => handleSetReq(e)}>Sign Up</button>
        </div>
      </form>
      <Footer />
    </main>
  );
}

export default SignIn;
