import { Dispatch, SetStateAction } from 'react';
import { LiteratureType } from '@/models/literature/literature.types';

export type LiteratureItemProps = LiteratureType & {
  onShowMore: Dispatch<SetStateAction<string[]>>;
};
