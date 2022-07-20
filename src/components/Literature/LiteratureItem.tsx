import Image from 'next/image';
import Link from 'next/link';
import { LiteratureItemProps } from './Literature.types';
import {
  LiteratureA,
  LiteratureImageContainer,
  LiteratureItemContainer,
  LiteratureText,
  LiteratureTexts,
  LiteratureTitle,
} from './Literature.styles';

export const LiteratureItem = ({
  imageSrc,
  title,
  marketSrc,
  preview,
  onShowMore,
}: LiteratureItemProps) => (
  <LiteratureItemContainer>
    <LiteratureImageContainer>
      <Image src={imageSrc} width={112} height={157} />
    </LiteratureImageContainer>
    <LiteratureTexts>
      <LiteratureTitle>{title}</LiteratureTitle>
      <div>
        <LiteratureText onClick={() => onShowMore(preview)}>
          Ver más
        </LiteratureText>
        <LiteratureText>
          <Link href={marketSrc} passHref>
            <LiteratureA target="_blank">Comprar</LiteratureA>
          </Link>
        </LiteratureText>
      </div>
    </LiteratureTexts>
  </LiteratureItemContainer>
);
