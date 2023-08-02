import css from './LoginForm.module.css';

export const LoginForm = () => {
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
          Email
          <input className={css.form__input} type="email" name="email" />
        </label>
        <label className={css.form__label}>
          Password
          <input className={css.form__input} type="password" name="password" />
        </label>
        <button className={css.form__btn} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};
