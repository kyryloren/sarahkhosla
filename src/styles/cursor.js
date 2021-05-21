import styled from 'styled-components';

export const StyledImage = styled.img`
  position: absolute;
  width: 20vw;
  transition: opacity 0.3s ease;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
`;
export const StyledCursor = styled.div`
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
