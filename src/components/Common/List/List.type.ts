import { Dispatch, FC, SetStateAction } from 'react';
import { listType } from '@/models';

export type ListType = FC<{
  data: listType[];
  onShowMore: Dispatch<SetStateAction<string[]>>;
}>;
