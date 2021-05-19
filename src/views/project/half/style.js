import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { media } from '@styles';

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.thone`flex-direction: column;`};
`;
export const VideoWrapper = styled.div`
  width: 50%;
  ${media.tablet`width: 100%;`};

  :last-child {
    margin-left: 2vw;

    ${media.thone`
      margin-left: 0;
      margin-top: 2vw;
    `};
  }
`;
export const StyledImage = styled(GatsbyImage)`
  width: 50%;
  ${media.tablet`width: 100%;`};

  :last-child {
    margin-left: 2vw;

    ${media.thone`
      margin-left: 0;
      margin-top: 2vw;
    `};
  }
`;
