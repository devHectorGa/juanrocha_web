import { ListContainer } from './List.styles';
import { ListType } from './List.type';
import { ListItem } from './ListItem';

export const List: ListType = ({ data, onShowMore, ratioImages }) => (
  <ListContainer>
    {data?.map((item) => (
      <ListItem
        key={item.title}
        onShowMore={onShowMore}
        ratioImages={ratioImages}
        {...item}
      />
    ))}
  </ListContainer>
);
