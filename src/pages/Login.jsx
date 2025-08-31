import styles from "./Login.module.css";
import PageNav from "../components/pageNav";
import { Link, replace } from "react-router-dom";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { useAuth } from "../contexts/AuthContxt";

const initialState = {
  email: "",
  password: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPass":
      return { ...state, password: action.payload };

    case "reset":
      return initialState;
    default:
      return state;
  }
}

function Login() {
  const { login, isAuthenticated } = useAuth();

  const navigator = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated) navigator("/applayout", { replace: true });
    },
    [isAuthenticated]
  );

  const [{ email, password }, dispatch] = useReducer(reducer, initialState);

  async function handleSetReq(e) {
    try {
      e.preventDefault();
      await login(email, password);
      dispatch({ type: "reset" });
      alert("Logged In Successfully" + "✔");
    } catch (err) {
      alert(err.message);
    }
  }
  const navigate = useNavigate();
  return (
    <>
      <main className={styles.loginBackground}>
        <PageNav />

        <form className={styles.form}>
          <div className={styles.welcome}>
            <h3>
              Welcome<span>❤️</span>
            </h3>
            <p>Pleased to see you again</p>
          </div>
          <div className={styles.row}>
            <label htmlFor="name">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) =>
                dispatch({ type: "setEmail", payload: e.target.value })
              }
              placeholder="enter your Email.."
              id="name"
              required
            />
          </div>
          <div className={styles.row}>
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) =>
                dispatch({ type: "setPass", payload: e.target.value })
              }
              placeholder="enter your password.."
              id="pass"
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
            <button onClick={(e) => handleSetReq(e)}>Login</button>
          </div>
          <div className={styles.links}>
            <Link to="/ForgotPassword" style={{ color: "white" }}>
              Forgot Password?
            </Link>
            <Link to="/signIn" style={{ color: "rgba(146, 208, 107, 1)" }}>
              Create Account
            </Link>
          </div>
        </form>
        <Footer />
      </main>
    </>
  );
}

export default Login;
