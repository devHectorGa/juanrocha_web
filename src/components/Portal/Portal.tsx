import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createWrapperId } from './Portal.helper';
import { PortalProps } from './Portal.types';

export const Portal: PortalProps = ({
  children,
  wrapperId = 'React-Portal',
}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);

    if (!element) {
      element = createWrapperId(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      element?.parentNode?.removeChild(element);
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;
  return createPortal(children, wrapperElement);
};
