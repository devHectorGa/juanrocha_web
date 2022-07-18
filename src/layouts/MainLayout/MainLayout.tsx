import { FC, PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NavRoutes } from '@/components';
import { LayoutContainer, LayoutContent } from './MainLayout.styles';
import { routes, RoutesEnum } from '@/models';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const { route } = useRouter();

  useEffect(() => {
    const backgroundUrl = `url(${
      routes[route]?.background || routes[RoutesEnum.HOME].background
    })`;
    document.body.style.backgroundImage = backgroundUrl;
  }, [route]);

  return (
    <LayoutContainer>
      <NavRoutes />
      <LayoutContent>{children}</LayoutContent>
    </LayoutContainer>
  );
};
