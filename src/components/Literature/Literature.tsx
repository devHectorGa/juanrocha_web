import Image from 'next/image';
import {
  GalleryContainer,
  ImageContainer,
  LiteratureContainer,
} from './Literature.styles';
import { literatures } from '@/models';
import { LiteratureItem } from './LiteratureItem';
import { useLayoutEffect, useState } from 'react';
import { Modal } from '../Modal';

const RATIO_IMAGE = 0.649;
const IS_SERVER = typeof window === 'undefined';
const getWidth = () => (IS_SERVER ? 714 : window?.screen?.width * 0.9);

export const Literature = () => {
  const [gallery, setGallery] = useState<string[]>(null);
  const [width, setWidth] = useState<number>(getWidth());

  const onResize = () => setWidth(getWidth());
  useLayoutEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  return (
    <>
      <ImageContainer>
        <Image
          width={544}
          height={58}
          src="/images/literatura.png"
          layout="responsive"
        />
      </ImageContainer>
      <LiteratureContainer>
        {literatures.map((literature) => (
          <LiteratureItem
            key={literature.title}
            onShowMore={setGallery}
            {...literature}
          />
        ))}
      </LiteratureContainer>
      <Modal
        handleClose={() => setGallery(null)}
        isOpen={Boolean(gallery?.length)}
      >
        <GalleryContainer>
          {gallery?.map((src) => (
            <div>
              <Image
                width={width}
                height={width / RATIO_IMAGE}
                src={src}
                layout="intrinsic"
              />
            </div>
          ))}
        </GalleryContainer>
      </Modal>
    </>
  );
};
