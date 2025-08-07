import styles from "./SignIn.module.css";
import PageNav from "../components/pageNav";
import Footer from "../components/footer";
import { useNavigate } from 'react-router-dom';
function SignIn() {
  const navigate = useNavigate()
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
          <label for="name">Name</label>
          <input
            type="text"
            placeholder="enter your Full Name.."
            id="name"
            required
          />
        </div>
        <div className={styles.row}>
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="enter your Email.."
            id="email"
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
        <div className={styles.row}>
          <label for="pass">Re-Enter Password</label>
          <input
            type="password"
            placeholder="enter your password.."
            id="name"
            required
          />
        </div>
        <div className={styles.buttons}>
          <button style={{ backgroundColor: "gray" }} onClick={(e) => {
            e.preventDefault()
            navigate(-1)
          }}> &larr; Back</button>
          <button>Sign Up</button>
        </div>
      </form>
      <Footer />
    </main>
  );
}

export default SignIn;
