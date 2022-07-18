import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  position: fixed;
  width: fit-content;
  min-height: 100vh;
  transform: translateX(-100%);
  transition: transform 0.5s ease-in-out;
  z-index: 10;

  &.isActive {
    transform: translate(0);
    transition: transform 0.5s ease-in-out 0.2s;
  }

  @media screen and (min-width: 768px) {
    position: inherit;
    transform: translate(0);

    &.isActive {
      transform: translate(0);
    }
  }
`;

export const ListUl = styled.ul`
  margin: auto;
  list-style: none;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0rem 2rem 2rem 0;
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

export const Button = styled.button`
  width: 2rem;
  height: 2rem;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  margin: 0.3rem;
  color: #fff;

  &:hover {
    font-weight: bold;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const OpenNavContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: calc(50% - 2.15rem);
  display: flex;
  z-index: 10;
  transform: translate(0);
  transition: transform 0.5s ease-in-out 0.4s;

  &.isActive {
    transform: translate(-100%);
    transition: transform 0.25s ease-in-out;
  }

  @media screen and (min-width: 768px) {
    transform: translate(-100%);

    &.isActive {
      transform: translate(-100%);
    }
  }
`;
