import css from './Navigation.module.css';
import homeSvg from 'images/icon-home.png';
import { useAuth } from 'hooks';
import { Header, Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <div>
          <Link to="/" end>
            <img className={css.nav__icon} src={homeSvg} alt="" />
            Home
          </Link>
          {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </div>
      </Header>
    </>
  );
};
