import Image from 'next/image';
import { GalleryContainer, ImageContainer } from './ListPage.styles';
import { useLayoutEffect, useState } from 'react';
import { Modal } from '../Modal';
import { List } from '../Common';
import { ListProps } from './List.types';

const RATIO_IMAGE = 0.649;
const IS_SERVER = typeof window === 'undefined';
const getWidth = () => (IS_SERVER ? 714 : window?.screen?.width * 0.9);

export const ListPage: ListProps = ({ srcLogo, data }) => {
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
        <Image width={544} height={58} src={srcLogo} layout="responsive" />
      </ImageContainer>
      <List onShowMore={setGallery} data={data} />
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
