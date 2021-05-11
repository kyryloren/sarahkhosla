import styled from 'styled-components';
import { Link } from 'gatsby';
import { media, mixins, Overflow } from '@styles';

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
  ${mixins.flexBetween}
  width: 100%;
  padding: 5vw 0 2vw;
  color: var(--light);

  ${media.tablet`padding: 10vw 0 6vw;`};
  ${media.thone`color: var(--dark);`};
`;
export const NavLinks = styled.ul`
  ${mixins.resetList}
  ${mixins.flexCenter}
  ${media.thone`display: none;`};
`;
export const NavListItem = styled.li`
  position: relative;
  ${mixins.resetList}
  ${mixins.flexCenter}

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

  ${media.thone`
    background-color: var(--dark);
    height: 1px;
  `};
`;
export const StyledHamburger = styled.div`
  position: relative;
  overflow: visible;
  cursor: pointer;
  margin-top: -4vw;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  mix-blend-mode: difference;
  z-index: 1000;
  ${media.thone`display: flex;`};
`;
export const StyledHamburgerBox = styled.div`
  position: relative;
  ${mixins.flexCenter};
  width: 20px;
  height: 24px;
`;
export const StyledHamburgerInner = styled.div`
  background-color: var(--light);
  position: absolute;
  width: 20px;
  height: 2px;
  border-radius: 3px;
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 1s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: var(--light);
    position: absolute;
    left: auto;
    right: 0;
    width: 20px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:after {
    width: 100%;
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props =>
      props.menuOpen
        ? 'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s'
        : 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
  }
`;
// export const StyledHamburgerBox = styled.div`
//   position: relative;
//   display: inline-block;
//   width: 24px;
//   height: 24px;
//   border-radius: 50%;
//   display: none;
//   padding: 15px;
//   background-color: var(--light);
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;

//   ${media.thone`
//     display: flex;
//     mix-blend-mode: difference;
//   `};
// `;

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
