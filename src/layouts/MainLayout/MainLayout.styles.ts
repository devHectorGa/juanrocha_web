import styled from 'styled-components';

export const LayoutContainer = styled.main`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
  }
`;

export const LayoutContent = styled.div`
  overflow-y: auto;
`;
