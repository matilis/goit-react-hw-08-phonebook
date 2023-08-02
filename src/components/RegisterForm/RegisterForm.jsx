import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    console.log(form.value);
    form.reset();
  };

  return (
    <div className={css.form__wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.form__label}>
          Username
          <input className={css.form__input} type="text" name="name" />
        </label>
        <label className={css.form__label}>
          Email
          <input className={css.form__input} type="email" name="email" />
        </label>
        <label className={css.form__label}>
          Password
          <input className={css.form__input} type="password" name="password" />
        </label>
        <button className={css.form__btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
