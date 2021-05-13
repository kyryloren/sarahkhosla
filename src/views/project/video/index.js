import React from 'react';
import { Container } from '@styles';
import { VideoPlayer } from './style';
import { ImageSection } from '../style';

const Video = ({ data }) => {
  return (
    <ImageSection>
      <Container>
        <VideoPlayer autoPlay muted loop src={data.primary.video.url} />
      </Container>
    </ImageSection>
  );
};

export default Video;
