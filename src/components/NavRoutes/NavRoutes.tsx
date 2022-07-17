import { FC } from 'react';
import { routes } from '@/models';
import Link from 'next/link';
import { Nav, ListUl, ListLi, ListA } from './NavRoutes.styles';

const RoutesMap = Object.keys(routes).map((route) => (
  <ListLi key={route}>
    <Link href={route}>
      {routes[route]?.CustomRender ? (
        routes[route]?.CustomRender
      ) : (
        <ListA>{routes[route]?.label}</ListA>
      )}
    </Link>
  </ListLi>
));

export const NavRoutes: FC = () => {
  return (
    <Nav>
      <ListUl>{RoutesMap}</ListUl>
    </Nav>
  );
};
