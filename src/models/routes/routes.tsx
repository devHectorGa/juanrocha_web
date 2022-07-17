import Image from 'next/image';
import { RoutesEnum, RoutesType } from './routes.types';

export const routes: RoutesType = {
  [RoutesEnum.HOME]: {
    background: '/images/bg1.png',
    CustomRender: (
      <Image
        width={185}
        height={230}
        layout="responsive"
        src="/images/logo-rojo.png"
      />
    ),
  },
  [RoutesEnum.LITERATURA]: {
    background: '/images/bg3.jpg',
    label: 'Literatura',
  },
  [RoutesEnum.TEATRO]: {
    background: '/images/bg4.jpg',
    label: 'Teatro Irreal',
  },
  [RoutesEnum.CINE]: {
    background: '/images/bg3.jpg',
    label: 'Cine',
  },
  [RoutesEnum.VIDEO_POEMAS]: {
    background: '/images/bg4.jpg',
    label: 'Video - Poemas',
  },
  [RoutesEnum.SERVICIOS]: {
    background: '/images/bg4.jpg',
    label: 'Servicios',
  },
  [RoutesEnum.CONTACTO]: {
    background: './images/bg2.png',
    label: 'Contacto',
  },
};
