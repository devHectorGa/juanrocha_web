import { FC } from 'react';
import { listType } from '@/models';

export type ListProps = FC<{
  srcLogo: string;
  data: listType[];
  ratioImages: number;
}>;
