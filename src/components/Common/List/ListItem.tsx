import Image from 'next/image';
import Link from 'next/link';
import {
  ListA,
  ListImageContainer,
  ListItemContainer,
  ListText,
  ListTexts,
  ListTitle,
} from './List.styles';

export const ListItem = ({
  imageSrc,
  title,
  marketSrc,
  preview,
  onShowMore,
}) => (
  <ListItemContainer>
    <ListImageContainer>
      <Image src={imageSrc} width={112} height={157} />
    </ListImageContainer>
    <ListTexts>
      <ListTitle>{title}</ListTitle>
      <div>
        <ListText onClick={() => onShowMore(preview)}>Ver más</ListText>
        <ListText>
          <Link href={marketSrc} passHref>
            <ListA target="_blank">Comprar</ListA>
          </Link>
        </ListText>
      </div>
    </ListTexts>
  </ListItemContainer>
);
