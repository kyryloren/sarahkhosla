/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useState, useEffect } from 'react';
import { CursorContext } from './CursorContext';
import styled from 'styled-components';

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const StyledImage = styled.img`
  position: absolute;
  width: 20vw;
  transition: opacity 0.3s ease;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
`;
const StyledCursor = styled.div`
  width: 10px;
  height: 10px;
  background-color: var(--light);
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 150ms ease;
  transition-property: background-color, opacity, transform, mix-blend-mode;
  z-index: 9999;
  mix-blend-mode: difference;
  backface-visibility: hidden;

  ${props => props.hide && `opacity: 0;`};
  ${props =>
    (props.linkHovered || props.clicked) &&
    `
    transform: translate(-50%, -50%) scale(10);
    background-color: var(--light);
  `};
`;

const Cursor = ({ location, loaded }) => {
  const { image } = React.useContext(CursorContext);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setLinkHovered(false);
    addEventListeners();

    setTimeout(() => {
      handleLinkHoverEvents();
    }, 1000);

    return () => removeEventListeners();
  }, [location.pathname, loaded]);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = e => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll('a').forEach(el => {
      el.addEventListener('mouseout', () =>
        el.id === 'cursor_hide' ? setHidden(false) : setLinkHovered(false),
      );
      el.addEventListener('mouseover', () =>
        el.id === 'cursor_hide' ? setHidden(true) : setLinkHovered(true),
      );
    });
  };

  if (typeof navigator !== 'undefined' && isMobile()) return null;

  return (
    <>
      <StyledCursor
        clicked={clicked}
        hide={hidden}
        linkHovered={linkHovered}
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
      />
      <StyledImage
        src={image && image.url}
        alt={image && image.alt}
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          opacity: image && image.hovering ? 1 : 0,
        }}
      />
    </>
  );
};

export default Cursor;
