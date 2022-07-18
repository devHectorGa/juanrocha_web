export enum RoutesEnum {
  CINE = '/cine',
  CONTACTO = '/contacto',
  HOME = '/',
  LITERATURA = '/literatura',
  TEATRO = '/teatro',
  VIDEO_POEMAS = 'video-poemas',
  SERVICIOS = '/servicios',
}

export type RoutesType = {
  [Route in RoutesEnum]: {
    CustomRender?: JSX.Element;
    label?: string;
    background?: string;
  };
};
