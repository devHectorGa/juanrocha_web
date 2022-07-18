import { FC, PropsWithChildren } from 'react';
import { NavRoutes } from '@/components';
import { LayoutContainer } from './MainLayout.styles';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <LayoutContainer>
    <NavRoutes />
    {children}
  </LayoutContainer>
);
