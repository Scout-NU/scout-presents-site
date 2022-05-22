import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { H1, YELLOW } from '../../styles/styles';
import {
  BottomRightCollage,
  Description,
  Details,
  FlexContainer,
  OverflowContainer,
  Thumbnail,
  TopLeftCollage,
} from './styled';
import Button from '../Button';
import Collage1 from '../../images/page-sprinkles/explore-collage-1.png';
import Collage2 from '../../images/page-sprinkles/explore-collage-2.png';

const FeaturedContent = () => {
  const query = useStaticQuery(graphql`
    query FeaturedContentQuery {
      prismicExplorePage {
        data {
          featured_content_thumbnail {
            url
            alt
          }
          featured_content_title {
            text
          }
          featured_content_description {
            text
          }
          featured_item {
            uid
            type
          }
        }
      }
    }
  `);

  const {
    prismicExplorePage: {
      data: {
        featured_content_title: { text: title },
        featured_content_description: { text: description },
        featured_content_thumbnail: { url: thumbnail, alt },
        featured_item: { uid, type },
      },
    },
  } = query;

  return (
    <OverflowContainer>
      <FlexContainer>
        <Thumbnail src={thumbnail} alt={alt} />
        <Details>
          <H1>{title}</H1>
          <Description>{description}</Description>
          <Button
            to={`/${type === 'project' ? 'projects' : 'works'}/${uid}`}
            color={YELLOW}>
            {type === 'video' ? 'watch' : type === 'article' ? 'read' : 'view'}
          </Button>
        </Details>
        <TopLeftCollage src={Collage1} alt="" />
        <BottomRightCollage src={Collage2} alt="" />
      </FlexContainer>
    </OverflowContainer>
  );
};

export default FeaturedContent;
