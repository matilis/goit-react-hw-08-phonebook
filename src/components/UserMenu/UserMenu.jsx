import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const { user } = useAuth();
  return (
    <div className={css.usermenu__wrapper}>
      <p className={css.usermenu__text}>
        Welcome, <span className={css.usermenu__name}>Mateusz{user?.name}</span>{' '}
      </p>
      <button className={css.usermenu__btn} type="button">
        Logout
      </button>
    </div>
  );
};
