import styled from 'styled-components';

export const LayoutContainer = styled.main`
  height: 100vh;
  width: 100vw;

  @media screen and (min-width: 768px) {
    overflow: hidden;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
  }
`;

export const LayoutContent = styled.div`
  margin: 1rem;
  @media screen and (min-width: 768px) {
    overflow: hidden auto;
  }
`;
