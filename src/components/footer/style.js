import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { media, mixins } from '@styles';

export const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  padding: 15vw 0 5vw;
  color: var(--dark);
`;
export const Row = styled.div`
  ${mixins.flexBetween};

  svg {
    color: var(--text);
    width: 1vw;
    height: 1vw;
    margin-left: 2.5vw;

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
export const FooterText = css`
  font-size: 1.4vw;
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
  ${mixins.animLine};

  margin-left: 0.75vw;
  text-decoration: none;
  color: inherit;
`;
export const InformationLink = styled(Link)`
  ${FooterText};
  ${mixins.animLine};

  margin-left: 1vw;
`;
