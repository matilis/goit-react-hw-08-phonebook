import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { ContactList } from 'components';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import css from './Contact.module.css';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.list__wrapper}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <div className={css.list__item}>
        <div className={css.homePage}>
          <h1 className={css.homePage__title}>Phonebook</h1>
        </div>
        {isLoading ? <p>Loading contacts...</p> : <ContactList />}
        {error && <p>Data loading error</p>}
      </div>
    </div>
  );
};
export default Contacts;
