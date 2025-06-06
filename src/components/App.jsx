import { useEffect } from "react";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import { fetchContacts } from "../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectError } from "../redux/contactsSlice";

export default function App() {
  const dispath = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispath(fetchContacts());
  }, [dispath]);

  return (
    <>
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <Loader />}
        {error && <Error />}
        <ContactList />
      </div>
    </>
  );
}
