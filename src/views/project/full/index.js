import React from 'react';
import { Container } from '@styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ImageSection } from '../style';

const Full = ({ data }) => {
  return (
    <ImageSection>
      <Container>
        <GatsbyImage
          image={data.primary.image.localFile.childImageSharp.gatsbyImageData}
          alt={data.primary.image.alt && data.primary.image.alt}
        />
      </Container>
    </ImageSection>
  );
};

export default Full;
