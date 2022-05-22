import React, { useState, useEffect } from 'react';
import Gallery from 'react-grid-gallery';
import { ViewContainer, StyledH3 } from './styled';
import { navigate } from 'gatsby';

const ExploreGallery = ({ works }) => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const galleryImages = [];
    works.forEach((work) => {
      const {
        work: {
          document: {
            data: { images },
          },
        },
      } = work;
      images.forEach((image) => {
        let img = {
          src: image.image.url,
          thumbnail: image.image.url,
          thumbnailHeight: image.image.dimensions.height,
          thumbnailWidth: image.image.dimensions.width,
          uid: work.work.document.uid,
          customOverlay: (
            <StyledH3>{work.work.document.data.title.text}</StyledH3>
          ),
        };
        galleryImages.push(img);
      });
    });

    const shuffledImages = galleryImages.sort((a, b) => 0.5 - Math.random()); //shuffle images
    setImageList(shuffledImages);
  }, [works]);

  function imageStyle() {
    return {
      height: '100%',
    };
  }

  function redirectGallery(index) {
    return navigate('/works/' + imageList[index].uid);
  }

  return (
    <ViewContainer>
      <Gallery
        images={imageList}
        enableImageSelection={false}
        enableLightbox={false}
        rowHeight={300}
        margin={5}
        maxRows={3}
        thumbnailStyle={imageStyle}
        onClickThumbnail={redirectGallery}
      />
    </ViewContainer>
  );
};

export default ExploreGallery;
