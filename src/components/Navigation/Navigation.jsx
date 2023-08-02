import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import homeSvg from 'images/icon-home.png';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink className={css.nav__link} to="/">
        <img className={css.nav__icon} src={homeSvg} alt="" />
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.nav__link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
