import styles from "./Login.module.css";
import PageNav from "../components/pageNav";
import { Link } from "react-router-dom";
function Login() {
  return (
    <main className={styles.loginBackground}>
      <PageNav />

      <form className={styles.form}>
        <div className="row">
          <h1>Welcome</h1>
          <p>Pleased to see you again</p>
        </div>
        <div className={styles.row}>
          <label for="name">Email</label>
          <input
            type="email"
            placeholder="enter your Email.."
            id="name"
            required
          />
        </div>
        <div className={styles.row}>
          <label for="pass">Password</label>
          <input
            type="password"
            placeholder="enter your password.."
            id="name"
            required
          />
        </div>
        <div className="row">
          <button>Login</button>
        </div>
        <div className="row">
          <Link to="/signIn" style={{ color: "white" }}>
            Do not have account?
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
