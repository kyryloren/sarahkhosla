import styled from 'styled-components';
import { media, mixins } from '@styles';

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
    width: 90%;
    
    :first-child {
      padding-bottom: 4vw;
    }
  `};
`;
export const Title = styled.h1`
  font-size: 3vw;
  margin: 0;
  font-weight: normal;

  ${media.thone`
    font-size: 7vw;
  `};
`;
export const NormalText = styled.p`
  ${mixins.normalText};
  font-weight: 300;
  margin-top: 0;

  ${props =>
    props.label &&
    `
    margin-bottom: 0;
    font-size: 1vw;
  `};
  ${media.thone`
    font-size: 4vw;

    ${props =>
      props.label &&
      `
      padding-left: 2vw;
      font-size: 3.5vw;
    `};
  `};
`;
export const TextWrapper = styled.div`
  strong {
    font-weight: bold;
  }

  ${props =>
    props.truncated &&
    `
    overflow: hidden;
    height: 12.5vw;

    :after {
      content: '';
      position: absolute;
      bottom: 4vw;
      right: 0;
      width: 100%;
      height: 5vw;
      background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    }
  `}

  ${media.thone`${props => props.truncated && `height: 44.1vw;`}`};
`;
export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.4vw;
  font-weight: 300;
  margin-top: 0;
  line-height: 140%;

  ${media.thone`font-size: 4vw;`};
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
  position: relative;
  display: flex;
  padding: 1vw;
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
    width: 0.8vw;
    height: 0.8vw;

    ${media.thone`
      width: 2.7vw;
      height: 2.7vw;
    `};
  }
`;
export const StyledLink = styled.a`
  text-decoration: underline;
  color: inherit;

  :hover {
    text-decoration: none;
  }
`;
