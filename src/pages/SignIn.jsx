import styles from "./SignIn.module.css";
import PageNav from "../components/pageNav";
import Footer from "../components/footer";
function SignIn() {
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
        <div className="row">
          <button>Sign Up</button>
        </div>
      </form>
      <Footer />
    </main>
  );
}

export default SignIn;
