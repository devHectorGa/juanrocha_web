import { FC, PropsWithChildren } from 'react';
import { NavRoutes } from '@/components';
import { LayoutContainer, LayoutContent } from './MainLayout.styles';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <LayoutContainer>
    <NavRoutes />
    <LayoutContent>{children}</LayoutContent>
  </LayoutContainer>
);
