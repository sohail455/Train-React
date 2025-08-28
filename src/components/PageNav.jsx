import { useActionState } from "react";
import Logo from "./Logo";
import styles from "./pageNav.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContxt";
function PageNav() {
  const { isAuthenticated, user } = useAuth()
  function handleClick() { }
  return (
    <nav className={styles.nav}>
      {isAuthenticated ? <>
        <span>Welcome, {user.name}</span>
        <button onClick={handleClick}>Logout</button>
      </> :
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
      }
    </nav>

  );
}

export default PageNav;
