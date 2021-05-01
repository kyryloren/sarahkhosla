import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

export const PaginationSection = styled.section`
  position: relative;
  padding: 10vw 0 0;
`;
export const Row = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Col = styled(Link)`
  width: fit-content;
  text-decoration: none;
  color: var(--dark);

  svg {
    width: 3vw;
    height: 3vw;

    ${props =>
      props.next
        ? `
        margin-left: 3vw;
        transform: rotate(180deg);
    `
        : `margin-right: 3vw;`};
  }
`;
export const BigText = styled.div`
  font-size: 8vw;
  margin: 0;
  font-family: var(--font-family-serif);
`;
export const StyledImage = styled(motion.img)`
  position: absolute;
  width: 20vw;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;
