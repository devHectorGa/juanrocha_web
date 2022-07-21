import { ListPage } from '@/components';
import { literatures } from '@/models';

const LiteraturePage = () => (
  <ListPage
    data={literatures}
    srcLogo="/images/literatura.png"
    ratioImages={714 / 1100}
  />
);

export default LiteraturePage;
