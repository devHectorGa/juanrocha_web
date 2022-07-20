import Image from 'next/image';
import {
  ImageContainer,
  LiteratureContainer,
  LiteratureImageContainer,
  LiteratureItem,
  LiteratureTexts,
  LiteratureText,
  LiteratureTitle,
} from './Literatura.styles';
import { literatures } from '@/models';
import { LiteratureType } from '@/models/literature/literature.types';

const Item = ({ imageSrc, title }: LiteratureType) => (
  <LiteratureItem>
    <LiteratureImageContainer>
      <Image src={imageSrc} width={112} height={157} />
    </LiteratureImageContainer>
    <LiteratureTexts>
      <LiteratureTitle>{title}</LiteratureTitle>
      <div>
        <LiteratureText>Ver más</LiteratureText>
        <LiteratureText>Comprar</LiteratureText>
      </div>
    </LiteratureTexts>
  </LiteratureItem>
);

export const Literature = () => {
  return (
    <>
      <ImageContainer>
        <Image
          width={544}
          height={58}
          src="/images/literatura.png"
          layout="fixed"
        />
      </ImageContainer>
      <LiteratureContainer>
        {literatures.map((literature) => (
          <Item {...literature} />
        ))}
      </LiteratureContainer>
    </>
  );
};
