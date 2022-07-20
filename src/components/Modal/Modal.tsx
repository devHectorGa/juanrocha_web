import { FC, PropsWithChildren } from 'react';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { Portal } from '../Portal';
import {
  Button,
  ModalBackDrop,
  ModalContainer,
  ModalContent,
} from './Modal.styles';

export const Modal: FC<
  PropsWithChildren & { isOpen: boolean; handleClose: Function; title?: string }
> = ({ isOpen, children, handleClose }) => {
  if (!isOpen) return null;

  const onClose = () => handleClose && handleClose();

  return (
    <Portal>
      <ModalContainer>
        <ModalBackDrop onClick={onClose} />
        <ModalContent>
          <Button onClick={onClose}>
            <CloseOutline size={'2rem'} />
          </Button>
          {children}
        </ModalContent>
      </ModalContainer>
    </Portal>
  );
};
