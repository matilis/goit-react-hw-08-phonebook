import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Header = styled.header`
  display: flex;
  margin-left: 30px;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  font-family: 'Dosis', sans-serif;
  text-decoration: none;
  color: rgb(136, 129, 129);
  transition: box-shadow 100ms ease;
  transition: color 200ms ease;
  padding: 3px 10px;
  margin-right: 1px;
  &:hover,
  &:focus {
    color: black;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 4px 2px 4px -10px,
      rgba(0, 0, 0, 0.2) -3px -2px 0px inset;
  }
  &.active {
    color: black;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 4px 2px 4px -10px,
      rgba(0, 0, 0, 0.2) -3px -2px 0px inset;
  }
`;
