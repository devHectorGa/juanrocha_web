import { ListPage } from '@/components';
import { theater } from '@/models';

const Teatro = () => (
  <ListPage data={theater} srcLogo="/images/teatro.png" ratioImages={1} />
);

export default Teatro;
