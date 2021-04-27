import styled from 'styled-components';
import { media } from '@styles';

export const InfoSection = styled.section`
  width: 100%;
  color: var(--dark);
  padding: 10vw 0;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${media.thone`flex-direction: column;`};
`;
export const Col = styled.div`
  width: 50%;

  ${media.thone`
    width: 85%;
    
    :first-child {
      padding-bottom: 4vw;
    }
  `};
`;
export const Title = styled.h1`
  font-size: 4vw;
  margin: 0;
  font-weight: normal;

  ${media.thone`
    font-size: 7vw;
  `};
`;
export const NormalText = styled.p`
  font-size: 2vw;
  font-weight: 300;
  margin-top: 0;
  line-height: 140%;

  ${props => props.label && `margin-bottom: 0;`};
  ${media.thone`
    font-size: 5vw;

    ${props => props.label && `padding-left: 2vw;`};
  `};
`;
export const TextWrapper = styled.div`
  strong {
    font-weight: bold;
  }

  ${props =>
    props.truncated &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}

  ${media.thone`${props => props.truncated && `-webkit-line-clamp: 7;`}`};
`;
export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 2vw;
  font-weight: 300;
  margin-top: 0;
  line-height: 140%;

  ${media.thone`font-size: 5vw;`};
`;
export const ButtonWrapper = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  padding-top: 3vw;
  cursor: pointer;

  ${media.thone`padding-top: 8vw;`};
`;
export const StyledHamburgerBox = styled.div`
  display: flex;
  position: relative;
  padding: 1.3vw;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  border: 1.5px solid var(--dark);
  margin-right: 1vw;
  transform: ${props => (props.truncated ? 'rotate(45deg)' : 'unset')};

  ${media.thone`
    padding: 3vw;
  `};

  svg {
    color: var(--dark);
    width: 1.5vw;
    height: 1.5vw;

    ${media.thone`
      width: 4vw;
      height: 4vw;
    `};
  }
`;