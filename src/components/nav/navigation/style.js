import styled from 'styled-components';
import { Link } from 'gatsby';
import { media, Overflow } from '@styles';

export const PageHeader = styled.header`
  position: relative;
  z-index: 999;
  width: 100%;
  padding-bottom: 5vw;
  mix-blend-mode: difference;

  ${media.thone`
    mix-blend-mode: unset;
    background-color: var(--light);
  `};
`;
export const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5vw 0 2vw;
  color: var(--light);

  ${media.tablet`padding: 10vw 0 6vw;`};
  ${media.thone`color: var(--dark);`};
`;
export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  ${media.thone`display: none;`};
`;
export const NavListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  list-style: none;

  :not(:last-child) {
    margin: 0 3vw;
  }

  svg {
    color: inherit;
    width: 1.2vw;
    height: 1.2vw;
    margin: 0 0.9vw;

    ${media.tablet`
      width: 15px;
      height: 15px;
      margin: 0 16px;
    `};
  }
`;
export const StyledLink = styled(Link)`
  font-size: 1.4vw;
  text-decoration: none;
  position: relative;
  color: inherit;
  ${props =>
    props.specialFont &&
    `
    font-family: var(--font-family-serif);
    font-size: 2vw;
  `};

  ${media.tablet`font-size: ${props => (props.logo ? '26px' : '20px')};`};
`;
export const StyledNavLink = styled(StyledLink)`
  ${props =>
    props.isActive
      ? `
    :after,
    :before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: currentColor;
      transition: transform 1.1s cubic-bezier(0.19, 1, 0.22, 1);
    }
  `
      : `
    :before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
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
    `}
`;
export const Line = styled.div`
  background-color: var(--light);
  position: relative;
  height: 2px;
  width: 0;

  ${media.thone`background-color: var(--dark);`};
`;
export const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: none;
  padding: 15px;
  background-color: var(--light);
  align-items: center;
  justify-content: center;
  z-index: 1000;

  ${media.thone`
    display: flex;
    mix-blend-mode: difference;
  `};
`;

// Sarah Khosla styles
export const StyledTitle = styled.h1`
  position: absolute;
  top: 10vw;
  font-size: 17.6vw;
  line-height: 85%;
  font-family: var(--font-family-serif);
  color: var(--light);
  font-weight: 400;
  margin: 0;
  white-space: nowrap;

  ${media.tablet`top: 25vw;`};
  ${media.thone`color: var(--dark);`};
  ${media.phablet`
    top: 30vw;
    font-size: 16.9vw;
  `};
`;
export const Letter = styled.span`
  display: inline-block;
`;
export const StyledOverflow = styled(Overflow)`
  display: inline-block;
`;
