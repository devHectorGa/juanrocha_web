import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  width: fit-content;
  height: fit-content;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  padding: 2rem 2rem 2rem 0;
`;

export const ListUl = styled.ul`
  list-style: none;
`;

export const ListLi = styled.li`
  padding: 0.4rem 0;
  text-align: right;
  cursor: pointer;
`;

export const ListA = styled.a`
  text-decoration: none;
  font-weight: 400;
  color: #ffffff;
  font-size: 1.3rem;
  border-bottom: 0px solid #ffffff;
  transition: all 100ms;
`;
