import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Div100vh from 'react-div-100vh';
import PropTypes from 'prop-types';
import {
  StyledContainer,
  MenuWrapper,
  NavLinks,
  NavList,
  StyledOverflow,
  NavListItem,
  NavLink,
  FooterWrapper,
  FooterText,
} from './style';
import { Icon } from '@components';
import { Overflow, Container } from '@styles';

const Menu = ({ menuOpen, location }) => {
  let tl = gsap.timeline();
  const [clickedLink, setClickedLink] = useState(false);
  let sectionRef = useRef(null);
  let linksRef = useRef([]);
  let currentYear = new Date().getFullYear();

  useEffect(() => {
    if (menuOpen) {
      tl.fromTo(
        sectionRef,
        { yPercent: -100 },
        { yPercent: 0, ease: 'power3.inOut', duration: 0.8 },
      ).staggerFromTo(
        linksRef.current,
        1,
        { yPercent: 100 },
        { yPercent: 0, ease: 'power3.inOut' },
        0.3,
      );
    } else {
      tl.staggerTo(linksRef.current, 1, { yPercent: -100, ease: 'power3.inOut' }, 0.3).to(
        sectionRef,
        {
          yPercent: -100,
          ease: 'power3.inOut',
          duration: 0.8,
        },
        '-=0.4',
      );
    }
  }, [menuOpen, tl, clickedLink]);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [location, menuOpen]);

  return (
    <StyledContainer
      menuOpen={menuOpen}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
      ref={el => (sectionRef = el)}>
      <Div100vh>
        <MenuWrapper>
          <Container>
            <NavLinks>
              <NavList>
                <StyledOverflow>
                  <NavListItem ref={el => (linksRef.current[0] = el)}>
                    <NavLink
                      to="/information"
                      state={{ prev: location.pathname }}
                      onClick={() => setClickedLink(true)}>
                      Information
                      <Icon name="arrow" />
                    </NavLink>
                  </NavListItem>
                </StyledOverflow>
                <StyledOverflow>
                  <NavListItem ref={el => (linksRef.current[1] = el)}>
                    <NavLink
                      to="/"
                      state={{ prev: location.pathname }}
                      onClick={() => setClickedLink(true)}>
                      Work
                      <Icon name="arrow" />
                    </NavLink>
                  </NavListItem>
                </StyledOverflow>
              </NavList>
            </NavLinks>
          </Container>
          <FooterWrapper>
            <Overflow>
              <NavListItem ref={el => (linksRef.current[2] = el)}>
                <FooterText>&copy; {currentYear}</FooterText>
              </NavListItem>
            </Overflow>
          </FooterWrapper>
        </MenuWrapper>
      </Div100vh>
    </StyledContainer>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;
