import { FC, PropsWithChildren } from 'react';

export type PortalProps = FC<PropsWithChildren & { wrapperId?: string }>;
