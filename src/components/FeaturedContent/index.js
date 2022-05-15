import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { H1, P, YELLOW } from '../../styles/styles';
import { Description, Details, FlexContainer, Thumbnail } from './styled';
import Button from '../Button';

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
    </FlexContainer>
  );
};

export default FeaturedContent;
