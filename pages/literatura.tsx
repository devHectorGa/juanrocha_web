import { ListPage } from '@/components';
import { literatures } from '@/models';

const LiteraturePage = () => {
  return <ListPage data={literatures} srcLogo="/images/literatura.png" />;
};

export default LiteraturePage;
