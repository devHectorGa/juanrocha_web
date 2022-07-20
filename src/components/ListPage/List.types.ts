import { listType } from '@/models';
import { FC } from 'react';

export type ListProps = FC<{
  srcLogo: string;
  data: listType[];
}>;
