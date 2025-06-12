import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactsPage() {
  const dispath = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispath(fetchContacts());
  }, [dispath]);

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <Error />}
      <ContactList />
    </div>
  );
}
