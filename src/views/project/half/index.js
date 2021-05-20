import React from 'react';
import { isMobile } from 'react-device-detect';
import { Container } from '@styles';
import { VideoPlayer, StyledGif } from '../video/style';
import { Row, StyledImage, VideoWrapper } from './style';
import { ImageSection } from '../style';

const LoadImageVideo = ({ image, video, gif }) => {
  if (gif.url !== '' && isMobile) {
    return (
      <VideoWrapper>
        <StyledGif src={gif.url} />
      </VideoWrapper>
    );
  } else if (video.url !== '' && isMobile) {
    return (
      <VideoWrapper>
        <VideoPlayer autoPlay muted loop src={video.url} />
      </VideoWrapper>
    );
  } else if (video.url !== '') {
    return (
      <VideoWrapper>
        <VideoPlayer autoPlay muted loop src={video.url} />
      </VideoWrapper>
    );
  } else if (image.localFile && image.localFile.childImageSharp) {
    return <StyledImage image={image.localFile.childImageSharp.gatsbyImageData} alt={image.alt} />;
  }

  return null;
};

const Half = ({ data }) => {
  return (
    <ImageSection>
      <Container>
        <Row>
          <LoadImageVideo
            image={data.primary.left_image}
            video={data.primary.left_video}
            gif={data.primary.left_gif}
          />
          <LoadImageVideo
            image={data.primary.right_image}
            video={data.primary.right_video}
            gif={data.primary.right_gif}
          />
        </Row>
      </Container>
    </ImageSection>
  );
};

export default Half;
