import styled from 'styled-components';
import { RoundedButton } from '../Common';

export const ModalContainer = styled.aside`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 999;
  width: 100vw;
  height: 100vh;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 70%;
  height: 70%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ModalBackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100vw;
  cursor: pointer;
`;

export const Button = styled(RoundedButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
