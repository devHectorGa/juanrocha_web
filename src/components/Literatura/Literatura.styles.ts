import styled from 'styled-components';

export const LiteratureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 300px));
  gap: 5vmin;
  margin-top: 5rem;
  justify-content: center;
`;

export const LiteratureItem = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

export const LiteratureImageContainer = styled.div`
  transform: scale(1.1);
`;

export const LiteratureTitle = styled.h2`
  text-align: right;
  color: #fff;
  border-bottom: 2px solid;
  font-size: 1rem;
  margin: 1vmin;
  margin-right: 0;
`;

export const LiteratureTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 3vmin;
`;

export const LiteratureText = styled.p`
  text-align: center;
  cursor: pointer;
  color: #fff;
  margin-bottom: 0;
  display: block;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;

  &:hover {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 5vmin;
  text-align: right;
`;
