import React from 'react';
import { isMobile } from 'react-device-detect';
import { Container } from '@styles';
import { VideoPlayer, StyledGif } from './style';
import { ImageSection } from '../style';

const Video = ({ data }) => {
  return (
    <ImageSection>
      <Container>
        {isMobile && data.primary.gif.url ? (
          <StyledGif src={data.primary.gif.url} />
        ) : (
          <VideoPlayer autoPlay muted loop src={data.primary.video.url} />
        )}
      </Container>
    </ImageSection>
  );
};

export default Video;
