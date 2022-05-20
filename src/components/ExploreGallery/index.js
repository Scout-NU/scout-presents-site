import React, { useState, useEffect } from "react";
import Gallery from "react-grid-gallery";
import { ViewContainer } from "./styled";
import { navigate } from "gatsby";

const ExploreGallery = ({ works }) => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const galleryImages = [];
    works.map((work) => {
      const {
        work: {
          document: {
            uid,
            data: { images },
          },
        },
      } = work;
      images.map((image, i) => {
        if (i < 5) {
          let img = {
            src: image.image.url,
            thumbnail: image.image.url,
            thumbnailHeight: image.image.dimensions.height,
            thumbnailWidth: image.image.dimensions.width,
            uid: work.work.document.uid,
          };
          galleryImages.push(img);
        }
        return null;
      });
      return null;
    });
    const shuffledImages = galleryImages.sort((a, b) => 0.5 - Math.random()); //shuffle images
    setImageList(shuffledImages);
  }, []);

  function imageStyle() {
    return {
      height: "100%",
    };
  }

  function redirectGallery(index) {
    return navigate("/works/" + imageList[index].uid);
  }

  return (
    <ViewContainer>
      <Gallery
        images={imageList}
        enableImageSelection={false}
        enableLightbox={false}
        rowHeight={350}
        margin={5}
        maxRows={3}
        thumbnailStyle={imageStyle}
        onClickThumbnail={redirectGallery}
      />
    </ViewContainer>
  );
};

export default ExploreGallery;
