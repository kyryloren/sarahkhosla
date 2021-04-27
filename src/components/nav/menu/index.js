import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
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
      document.body.style.overflow = 'hidden';

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
          onComplete: () => (document.body.style.overflow = 'unset'),
        },
        '-=0.4',
      );
    }
  }, [menuOpen, tl, clickedLink]);

  return (
    <StyledContainer
      menuOpen={menuOpen}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
      ref={el => (sectionRef = el)}>
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
                  </NavLink>
                  <Icon name="arrow" />
                </NavListItem>
              </StyledOverflow>
              <StyledOverflow>
                <NavListItem ref={el => (linksRef.current[1] = el)}>
                  <NavLink
                    to="/work"
                    state={{ prev: location.pathname }}
                    onClick={() => setClickedLink(true)}>
                    Work
                  </NavLink>
                  <Icon name="arrow" />
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
    </StyledContainer>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;
