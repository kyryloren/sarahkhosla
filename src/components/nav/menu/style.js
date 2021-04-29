import styled from 'styled-components';
import { Link } from 'gatsby';
import { Overflow, media } from '@styles';

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  height: auto;
  bottom: 0;
  right: 0;
  width: 100%;
  outline: 0;
  display: none;
  z-index: 999;
  ${media.tablet`display: block;`};
`;
export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--dark);
  width: 100vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
`;
export const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-align: center;
  color: var(--light);
`;
export const NavList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`;
export const StyledOverflow = styled(Overflow)`
  margin-bottom: 8vw;
`;
export const NavListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;

  svg {
    color: var(--light);
    width: 8vw;
    height: 8vw;
  }
`;
export const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: var(--light);
  font-size: 8vw;
`;
export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 7vw;
  left: 7vw;
`;
export const FooterText = styled.small`
  color: var(--light);
  font-size: 5vw;
`;
