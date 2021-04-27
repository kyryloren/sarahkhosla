import React from 'react';
import { Container } from '@styles';
import { Row, StyledImage } from './style';
import { ImageSection } from '../style';

const Half = ({ data }) => {
  return (
    <ImageSection>
      <Container>
        <Row>
          <StyledImage
            image={data.primary.left_image.localFile.childImageSharp.gatsbyImageData}
            alt={data.primary.left_image.alt && data.primary.left_image.alt}
          />
          <StyledImage
            image={data.primary.right_image.localFile.childImageSharp.gatsbyImageData}
            alt={data.primary.right_image.alt && data.primary.right_image.alt}
          />
        </Row>
      </Container>
    </ImageSection>
  );
};

export default Half;
