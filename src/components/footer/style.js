import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { media } from '@styles';

export const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  padding: 15vw 0 5vw;
  color: var(--dark);
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: var(--text);
    width: 2vw;
    height: 2vw;
    margin-left: 3vw;

    ${media.thone`
      width: 3vw;
      height: 3vw;
    `};
  }
`;
export const Col = styled.div`
  width: fit-content;

  ${media.thone`${props => props.right && `display: none;`};`};
`;
export const MobileCol = styled.div`
  display: none;

  ${media.thone`display: unset;`};
`;
const AnimLine = css`
  :before {
    content: '';
    display: block;
    position: absolute;
    bottom: 5%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transition: transform 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  }
  :before {
    transition-delay: 0s;
    transform: scaleX(0);
    transform-origin: left;
  }
  :hover:before {
    transform: scaleX(1);
  }
`;
export const FooterText = css`
  font-size: 2vw;
  margin: 0;
  text-decoration: none;
  position: relative;

  ${media.thone`font-size: 4vw;`};
`;
export const Year = styled.span`
  ${FooterText};
`;
export const FooterLink = styled.a`
  ${FooterText};
  ${AnimLine};

  margin-left: 0.75vw;
`;
export const InformationLink = styled(Link)`
  ${FooterText};
  ${AnimLine};

  margin-left: 1vw;
`;