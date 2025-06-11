import css from "./Contact.module.css";
import { ImPhone } from "react-icons/im";
import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.wrapper}>
          <FaUser />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.wrapper}>
          <ImPhone />
          <p className={css.text}>{number}</p>
        </div>
        <button className={css.btnDelete} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
}
