import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css"

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispath = useDispatch();

  const hendleLogout = () => {
    dispath(logout());
  };
  return (
    <div className={css.container}>
      <p className={css.text}>Welcome, {user.name}</p>
      <button onClick={hendleLogout}>Logout</button>
    </div>
  );
}
