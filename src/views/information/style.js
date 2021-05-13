import styled, { css } from 'styled-components';
import { media, mixins } from '@styles';
import { Link } from 'gatsby';

export const SectionContainer = styled.div`
  position: relative;
  background-color: var(--dark);
  color: var(--light);
`;
export const ContentWrapper = styled.div`
  display: flex;
  padding: 5vh 0;
  height: 100%;
  overflow: hidden;
  justify-content: space-between;
  flex-direction: column;
`;
export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${media.thone`
    flex-direction: row-reverse;
    ${props => props.photo && `display: none;`};
  `};
  ${media.tablet`margin-top: 2vw;`};

  svg {
    color: var(--text);
    width: 22px;
    height: 22px;
    margin-left: 1vw;

    ${media.thone`
      margin-left: 0;
      margin-right: 3vw;
      width: 4vw;
      height: 4vw;
    `};
  }
`;
export const TextWrapper = styled.div`
  max-width: 70vw;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => (props.col ? 'column' : 'row')};

  ${media.thone`
    ${props => props.bottom && `flex-direction: column;`};
    ${props => props.contact && `padding-bottom: 4vw;`};
  `};
`;
export const ContactRows = styled.div`
  :not(:first-child) {
    margin-top: 1vw;
  }
`;
export const ParaLine = styled.p`
  font-size: 1.4vw;
  margin-top: 0;
  line-height: 140%;

  ${media.tablet`font-size: 3vw;`};
  ${media.thone`font-size: 4vw;`};
  ${media.phone`font-size: 5vw;`};
`;
export const StyledHamburgerBox = styled(Link)`
  display: flex;
  padding: 14px;
  border-radius: 50%;
  z-index: 7;
  align-items: center;
  justify-content: center;
  background-color: var(--light);

  ${media.tablet`padding: 2vw;`};

  svg {
    color: var(--dark);
    width: 22px;
    height: 22px;

    ${media.tablet`
      width: 3vw;
      height: 3vw;
    `};
  }
`;
export const BigText = styled.a`
  font-size: 5vw;
  margin-top: 0;
  color: var(--light);
  text-decoration: none;
  position: relative;

  ${media.thone`font-size: 7.5vw;`};
  ${media.phone`font-size: 8vw;`};

  ${mixins.animLine}
`;
const LinkStyles = css`
  font-size: 2vw;
  color: var(--light);
  text-decoration: none;
  position: relative;

  ${media.tablet`font-size: 3vw;`};
  ${media.thone`font-size: 5vw;`};
  ${media.phone`font-size: 7vw;`};
`;
export const SmallLink = styled.a`
  ${LinkStyles}
  ${mixins.animLine}
`;
export const SmallLinkGatsby = styled(Link)`
  ${LinkStyles}
  ${mixins.animLine}
`;
