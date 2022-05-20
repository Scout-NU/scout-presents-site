import React, { useState } from 'react';
import { H2 } from '../../styles/styles';
import { Container, Slide, Thumbnail } from './styled';
import Button from '../Button';
import ArrowControls, { mod } from '../ArrowControls';

const ProjectCarousel = ({ works }) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Container>
        {works.map((work, i) => {
          const {
            content: {
              type,
              document: {
                uid,
                data: {
                  title: { text: title },
                  thumbnail: { url, alt },
                },
              },
            },
          } = work;
          return (
            <Slide
              key={uid}
              selected={i === index}
              next={i === mod(index + 1, works.length)}>
              <Thumbnail alt={alt || title} src={url} />
              {i === index && (
                <>
                  <H2>{title}</H2>
                  <Button to={`/works/${uid}`} secondary>
                    {type === 'video'
                      ? 'watch'
                      : type === 'article'
                      ? 'read'
                      : 'view'}
                  </Button>
                </>
              )}
            </Slide>
          );
        })}
      </Container>
      <ArrowControls setIndex={setIndex} items={works} />
    </>
  );
};

export default ProjectCarousel;
