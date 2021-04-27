import styled from 'styled-components';
import media from './media';

const Container = styled.div`
  width: 100%;
  padding-right: 5.1vw;
  padding-left: 5.1vw;
  margin-right: auto;
  margin-left: auto;

  ${media.phablet`
    padding-right: 7vw;
    padding-left: 7vw;
  `};
`;

export default Container;
