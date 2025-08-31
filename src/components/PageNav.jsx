import Logo from "./Logo";
import styles from "./pageNav.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContxt";
function PageNav() {
  const { isAuthenticated, user, logout } = useAuth();
  function handleClick(e) {
    e.preventDefault();
    logout();
  }
  return (
    <nav className={styles.nav}>
      {isAuthenticated ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <img
              src="./profile.jpg"
              style={{ borderRadius: "100px", height: "4rem" }}
            />
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "25px",
                margin: "auto",
              }}
            >
              Welcome, {user.name.split(" ")[0].toUpperCase()}
            </span>
          </div>

          <button onClick={handleClick}>Logout</button>
        </>
      ) : (
        <>
          <Logo />
          <ul>
            <li>
              <NavLink to={"/career"}>Career</NavLink>
            </li>
            <li>
              <NavLink to={"/pricing"}>Pricing</NavLink>
            </li>
            <li>
              <NavLink to={"/tours"}>Tours</NavLink>
            </li>
            <li>
              <NavLink to={"/login"} className={styles.ctaLink}>
                Login
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}

export default PageNav;
