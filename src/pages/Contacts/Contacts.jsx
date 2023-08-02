import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { ContactList } from 'components';
import { ContactForm } from 'components';
import { Filter } from 'components';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <div>
        <Filter />
        <ContactForm />
        {isLoading ? <p>Loading contacts...</p> : <ContactList />}
        {error && <p>Data loading error</p>}
      </div>
    </div>
  );
};
export default Contacts;
