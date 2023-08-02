import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
// import homeSvg from 'images/home.png';

export const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={css.nav__link} to="/">
        Home
      </NavLink>
      <NavLink className={css.nav__link} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};
