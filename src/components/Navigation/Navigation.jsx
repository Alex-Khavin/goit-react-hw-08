import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLogIn = useSelector(selectIsLoggedIn);

  const isActiveClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={isActiveClass}>
        Home
      </NavLink>
      {isLogIn && (
        <NavLink to="/contacts" className={isActiveClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
