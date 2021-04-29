import React from 'react';
import { Container } from '@styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { HeroSection, ImageContainer } from './style';

import Information from './information';
import Full from './full';
import Half from './half';
import Pagination from './pagination';

const Project = ({ data, pagination }) => {
  return (
    <>
      <HeroSection>
        <Container>
          <ImageContainer>
            <GatsbyImage
              image={data.cover.localFile.childImageSharp.gatsbyImageData}
              alt={data.cover.alt && data.cover.alt}
            />
          </ImageContainer>
        </Container>
      </HeroSection>
      {data.body.map((slice, index) => {
        const typename = slice.__typename;

        switch (typename) {
          case 'PrismicProjectBodyInformation':
            return <Information data={slice} index={index} />;
          case 'PrismicProjectBodyFullImage':
            return <Full data={slice} />;
          case 'PrismicProjectBodyHalfImage':
            return <Half data={slice} />;
          default:
            return null;
        }
      })}
      <Pagination data={pagination} />
    </>
  );
};

export default Project;
