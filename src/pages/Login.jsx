import styles from "./Login.module.css";
import PageNav from "../components/pageNav";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate()
  return (
    <>
      <main className={styles.loginBackground}>
        <PageNav />

        <form className={styles.form}>
          <div className="row">
            <h1>Welcome</h1>
            <p>Pleased to see you again</p>
          </div>
          <div className={styles.row}>
            <label htmlFor="name">Email</label>
            <input
              type="email"
              placeholder="enter your Email.."
              id="name"
              required
            />
          </div>
          <div className={styles.row}>
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              placeholder="enter your password.."
              id="pass"
              required
            />
          </div>
          <div className={styles.buttons}>
            <button style={{ backgroundColor: "gray" }} onClick={(e) => {
              e.preventDefault()
              navigate(-1)
            }}> &larr; Back</button>
            <button>Login</button>
          </div>
          <div className={styles.links}  >
            <Link to="/ForgotPassword" style={{ color: "white" }}>
              Forgot Password?
            </Link>
            <Link to="/signIn" style={{ color: "olive" }}>
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
