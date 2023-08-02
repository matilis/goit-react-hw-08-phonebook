import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks';
import React from 'react';
import css from './Home.module.css';

const Home = () => {
  const { user } = useAuth();
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div className={css.homePage}>
        <h1 className={css.homePage__title}>Phonebook</h1>
        {isLoggedIn ? (
          <p className={css.homePage__online}>
            Have a nice day{' '}
            <span className={css.homePage__name}>{user.name}</span>
          </p>
        ) : (
          <h3 className={css.homePage__subtitle}>
            " ... you will never forget <span>{user.name}</span> "
          </h3>
        )}
      </div>
    </div>
  );
};
export default Home;
