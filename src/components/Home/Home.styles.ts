import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-end;
  margin: 5rem 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 'first logo' 'second second';
  }
`;

export const LogoContainer = styled.div`
  @media screen and (min-width: 768px) {
    align-self: start;
    position: sticky;
    top: 2rem;
    grid-area: logo;
  }
`;

export const FirstTextContainer = styled.p`
  margin: 10vh 0;
  text-align: right;
  @media screen and (min-width: 768px) {
    margin: 30vh 0;
    grid-area: first;
    margin: 70vh 0 25vh;
  } ;
`;

export const SecondTextContainer = styled.p`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 2rem 2.3rem 1rem 2.3rem;
  @media screen and (min-width: 768px) {
    grid-area: second;
    grid-column: span 2;
  } ;
`;

export const SocialContainer = styled.div`
  margin-top: 3rem;
  margin-right: 2rem;
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  @media screen and (min-width: 768px) {
    grid-column: span 2;
  }
`;

export const SocialLink = styled.a`
  color: #333;
`;
