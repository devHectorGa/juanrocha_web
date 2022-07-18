import { FC, useState, useTransition } from 'react';
import { routes } from '@/models';
import Link from 'next/link';
import {
  Nav,
  ListUl,
  ListLi,
  ListA,
  Button,
  OpenNavContainer,
} from './NavRoutes.styles';
import { Menu } from '@styled-icons/heroicons-solid/Menu';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

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
  const [showNav, setShowNav] = useState(true);
  const [isPending, startTransition] = useTransition();

  const closeNav = () => startTransition(() => setShowNav(false));
  const openNav = () => startTransition(() => setShowNav(true));

  return (
    <>
      <OpenNavContainer className={showNav && 'isActive'}>
        <Button disable={isPending} onClick={openNav}>
          <Menu />
        </Button>
      </OpenNavContainer>
      <Nav className={showNav && 'isActive'}>
        <ListUl>
          <Button disable={isPending} onClick={closeNav}>
            <CloseOutline />
          </Button>
          {RoutesMap}
        </ListUl>
      </Nav>
    </>
  );
};
