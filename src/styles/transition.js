import styled from 'styled-components';
import { motion } from 'framer-motion';

const Transition = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 999;
  background-color: var(--dark);
`;

export default Transition;
