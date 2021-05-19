import { css } from 'styled-components';
import media from './media';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  animLine: css`
    :before {
      content: '';
      display: block;
      position: absolute;
      bottom: 5%;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: currentColor;
      transition: transform 1.1s cubic-bezier(0.19, 1, 0.22, 1);
    }
    :before {
      transition-delay: 0s;
      transform: scaleX(0);
      transform-origin: left;
    }
    :hover:before {
      transform: scaleX(1);
    }
  `,
  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
  normalText: css`
    font-size: 1.4vw;
    line-height: 140%;

    ${media.tablet`font-size: 3vw;`};
    ${media.thone`font-size: 4vw;`};
  `,
};

export default mixins;
