/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useState, useEffect } from 'react';
import { CursorContext } from './CursorContext';
import styled from 'styled-components';
import classNames from 'classnames';

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

const Cursor = ({ location, loaded }) => {
  const { image } = React.useContext(CursorContext);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log("UPDATING")
    setLinkHovered(false);

    setTimeout(() => {
      addEventListeners();
      handleLinkHoverEvents();
      return () => removeEventListeners();
    }, 1000);
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

  const cursorClasses = classNames('cursor', {
    'cursor--clicked': clicked,
    'cursor--hidden': hidden,
    'cursor--link-hovered': linkHovered,
  });

  if (typeof navigator !== 'undefined' && isMobile()) return null;

  return (
    <>
      <div className={cursorClasses} style={{ top: `${position.y}px`, left: `${position.x}px` }} />
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
