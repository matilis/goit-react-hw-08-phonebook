import { Header, Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <Header>
        <Link to="/register">Register</Link>
        <Link to="/login">Log in</Link>
      </Header>
    </>
  );
};
