/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { isMobile } from 'react-device-detect';
import { gsap } from 'gsap';
import {
  PageHeader,
  NavWrapper,
  NavLinks,
  NavListItem,
  StyledLink,
  StyledNavLink,
  StyledHamburgerBox,
  Line,
} from './style';
import { StyledTitle, Letter, StyledOverflow } from './style';
import { Icon } from '@components';
import { Container, Overflow } from '@styles';
import Menu from '../menu';

gsap.registerPlugin(ScrollTrigger);

const throttle = (func, wait = 100) => {
  let timer = null;
  return function (...args) {
    if (timer === null) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
};

const Nav = ({ location }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  let tl = gsap.timeline();
  let lineRef = useRef(null);
  let menuButton = useRef(null);
  let sectionRef = useRef(null);
  let link = useRef([]);

  let fullText = useRef(null);
  let letters = useRef([]);

  const toggleMenu = useCallback(() => {
    setClicked(true);
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 600 && menuOpen) toggleMenu();
  }, [menuOpen, toggleMenu]);

  const handleKeydown = useCallback(
    e => {
      if (!menuOpen) return;

      if (e.which === 27 || e.key === 'Escape') toggleMenu();
    },
    [menuOpen, toggleMenu],
  );

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', () => throttle(handleResize()));
      window.addEventListener('keydown', e => handleKeydown(e));

      return () => {
        window.removeEventListener('resize', () => throttle(handleResize()));
        window.removeEventListener('keydown', e => handleKeydown(e));
      };
    }, 100);
  }, [handleKeydown, handleResize]);

  useEffect(() => {
    if (lineRef.current) {
      tl.to(lineRef.current, { width: '100%', duration: 1.5, ease: 'power3.inOut', delay: 0.5 })
        .staggerFrom(link.current, 0.8, { yPercent: 100, ease: 'power3.inOut' }, 0.2)
        .fromTo(menuButton, { scale: 0 }, { scale: 1 }, '-=1')
        .staggerFrom(letters.current, 1.2, { yPercent: 100, ease: 'power3.inOut' }, 0.05, '-=1.5');

      setTimeout(() => {
        if (!isMobile && location.pathname === '/') {
          tl.fromTo(
            link.current[0],
            { yPercent: 0 },
            {
              scrollTrigger: {
                trigger: sectionRef,
                scroller: '#___container',
                start: '5 top',
                end: '100 top',
                scrub: true,
              },
              yPercent: -100,
            },
          );
        }
      }, 3000);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!isMobile && location.pathname === '/') {
        tl.to(fullText, {
          scrollTrigger: {
            trigger: sectionRef,
            scroller: '#___container',
            start: '5 top',
            end: 'bottom top',
            scrub: true,
          },
          top: '4vw',
          left: 0,
          fontSize: '1.8vw',
        });

        setTimeout(() => {
          ScrollTrigger.addEventListener('refresh', () => window.scroll.update());
          ScrollTrigger.refresh();
        }, 1000);
      }
    }, 500);
  }, []);

  return (
    <>
      <PageHeader ref={el => (sectionRef = el)}>
        <Container>
          <NavWrapper data-scroll data-scroll-sticky data-scroll-target="#___sticky">
            <div>
              <Overflow>
                <div ref={el => (link.current[0] = el)}>
                  {location.pathname === '/' ? (
                    <StyledLink>Graphic Designer</StyledLink>
                  ) : (
                    <StyledLink specialFont to="/" logo>
                      Sarah Khosla
                    </StyledLink>
                  )}
                </div>
              </Overflow>
              {location.pathname === '/' && (
                <StyledTitle ref={el => (fullText = el)}>
                  <StyledOverflow>
                    <Letter ref={el => (letters.current[0] = el)}>S</Letter>
                  </StyledOverflow>
                  <StyledOverflow>
                    <Letter ref={el => (letters.current[1] = el)}>a</Letter>
                  </StyledOverflow>
                  <StyledOverflow>
                    <Letter ref={el => (letters.current[2] = el)}>r</Letter>
                  </StyledOverflow>
                  <StyledOverflow>
                    <Letter ref={el => (letters.current[3] = el)}>a</Letter>
                  </StyledOverflow>
                  <StyledOverflow>
                    <Letter ref={el => (letters.current[4] = el)}>h&nbsp;</Letter>
                  </StyledOverflow>
                  <StyledOverflow>
                    <Letter ref={el => (letters.current[5] = el)}>K</Letter>
                  </StyledOverflow>
                  <StyledOverflow>
                    <Letter ref={el => (letters.current[6] = el)}>h</Letter>
                  </StyledOverflow>
                  <StyledOverflow>
                    <Letter ref={el => (letters.current[7] = el)}>o</Letter>
                  </StyledOverflow>
                  <StyledOverflow>
                    <Letter ref={el => (letters.current[8] = el)}>s</Letter>
                  </StyledOverflow>
                  <StyledOverflow>
                    <Letter ref={el => (letters.current[9] = el)}>l</Letter>
                  </StyledOverflow>
                  <StyledOverflow>
                    <Letter ref={el => (letters.current[10] = el)}>a</Letter>
                  </StyledOverflow>
                </StyledTitle>
              )}
            </div>
            <NavLinks>
              <NavListItem>
                <Overflow>
                  <div ref={el => (link.current[1] = el)}>
                    <Icon name="arrow" />
                    <StyledNavLink
                      to={location.pathname === '/' ? null : '/'}
                      isActive={location.pathname === '/'}>
                      Work
                    </StyledNavLink>
                  </div>
                </Overflow>
              </NavListItem>
              <NavListItem>
                <Overflow>
                  <div ref={el => (link.current[2] = el)}>
                    <Icon name="arrow" />
                    <StyledNavLink
                      to="/information"
                      isActive={location.pathname === '/information'}
                      state={{ prev: location.pathname }}>
                      Information
                    </StyledNavLink>
                  </div>
                </Overflow>
              </NavListItem>
            </NavLinks>
            <StyledHamburgerBox
              menuOpen={menuOpen}
              onClick={toggleMenu}
              ref={el => (menuButton = el)}
            />
            {clicked && <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} location={location} />}
          </NavWrapper>
          {location.pathname === '/' && <Line ref={el => (lineRef.current = el)} />}
        </Container>
      </PageHeader>
    </>
  );
};

export default Nav;
