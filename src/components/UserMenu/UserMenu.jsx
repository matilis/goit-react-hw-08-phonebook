import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const { user } = useAuth();
  return (
    <div className={css.usermenu__wrapper}>
      <p>Welcome, {user?.name}</p>
      <button className={css.usermenu__btn} type="button">
        Logout
      </button>
    </div>
  );
};
