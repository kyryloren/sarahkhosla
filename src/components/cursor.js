/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { StyledCursor, StyledImage } from '@styles';
import { CursorContext } from './CursorContext';

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
        src={image.url}
        alt={image.alt}
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          opacity: image.hovering ? 1 : 0,
        }}
      />
    </>
  );
};

export default Cursor;
