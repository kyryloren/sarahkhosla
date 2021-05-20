/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { CursorContext } from './CursorContext';
import styled from 'styled-components';

const StyledImage = styled.img`
  position: absolute;
  width: 20vw;
  transition: opacity 0.3s ease;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
`;
const StyledCursor = styled.div`
  width: 100px;
  height: 100px;
  background-color: var(--light);
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%) scale(0.1);
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
    transform: translate(-50%, -50%) scale(1);
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
    document.body.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseenter', onMouseEnter);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mousedown', onMouseDown);
    document.body.addEventListener('mouseup', onMouseUp);
  };

  const removeEventListeners = () => {
    document.body.removeEventListener('mousemove', onMouseMove);
    document.body.removeEventListener('mouseenter', onMouseEnter);
    document.body.removeEventListener('mouseleave', onMouseLeave);
    document.body.removeEventListener('mousedown', onMouseDown);
    document.body.removeEventListener('mouseup', onMouseUp);
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

  if (typeof navigator !== 'undefined' && isMobile) return null;

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
