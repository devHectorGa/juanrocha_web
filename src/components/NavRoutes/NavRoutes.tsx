import { FC, useState, useTransition, useLayoutEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { routes } from '@/models';
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
      <ListA>
        {routes[route]?.CustomRender
          ? routes[route]?.CustomRender
          : routes[route]?.label}
      </ListA>
    </Link>
  </ListLi>
));

export const NavRoutes: FC = () => {
  const [showNav, setShowNav] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { route } = useRouter();

  const closeNav = () => startTransition(() => setShowNav(false));
  const openNav = () => startTransition(() => setShowNav(true));

  useLayoutEffect(() => {
    showNav && closeNav();
  }, [route]);

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
          <ListLi>
            <Link href="https://tienda.juanrocha.co" passHref>
              <ListA>Tienda</ListA>
            </Link>
          </ListLi>
        </ListUl>
      </Nav>
    </>
  );
};
