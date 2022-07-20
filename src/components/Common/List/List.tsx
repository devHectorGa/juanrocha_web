import { literatures } from '@/models';
import { ListContainer } from './List.styles';
import { ListType } from './List.type';
import { ListItem } from './ListItem';

export const List: ListType = ({ data, onShowMore }) => (
  <ListContainer>
    {literatures.map((literature) => (
      <ListItem
        key={literature.title}
        onShowMore={onShowMore}
        {...literature}
      />
    ))}
  </ListContainer>
);
