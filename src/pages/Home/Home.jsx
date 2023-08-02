import { Helmet } from 'react-helmet';
import React from 'react';
import css from './Home.module.css';

const Home = () => (
  <div>
    <Helmet>
      <title>Phonebook</title>
    </Helmet>
    <div className={css.homePage}>
      <h1 className={css.homePage__title}>Phonebook</h1>
      <h3 className={css.homePage__subtitle}>" ... you will never forget"</h3>
    </div>
  </div>
);
export default Home;
