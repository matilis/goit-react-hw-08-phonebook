import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import editSvg from 'images/icon-pencil.png';
import deleteSvg from 'images/icon-garbage.png';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  const handleEdit = id => dispatch(editContact(id));
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={css.contacts}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contacts__item}>
          <p className={css.contacts__name}>{contact.name}</p>
          <p className={css.contacts__number}>{contact.number}</p>
          <div className={css.contacts__btn}>
            <button
              type="button"
              value={contact.id}
              onClick={() => handleEdit(contact.id)}
              className={css.contacts__button}
            >
              <img
                className={css.contact__icon}
                src={editSvg}
                alt="edit icon pencil"
              />
            </button>
            <button
              type="button"
              value={contact.id}
              onClick={() => handleDelete(contact.id)}
              className={css.contacts__button}
            >
              <img
                className={css.contact__icon}
                src={deleteSvg}
                alt="delete icon garbage"
              />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
