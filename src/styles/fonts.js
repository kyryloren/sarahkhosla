import { css } from 'styled-components';

import VoyageRegularWOFF from '@fonts/voyage/Voyage-Regular.woff';
import VoyageRegularWOFF2 from '@fonts/voyage/Voyage-Regular.woff2';

// import MaisonNeueLightWOFF from '@fonts/maison/MaisonNeue-Light.woff';
// import MaisonNeueLightWOFF2 from '@fonts/maison/MaisonNeue-Light.woff2';
import MaisonNeueBookWOFF from '@fonts/maison/MaisonNeue-Book.woff';
import MaisonNeueBookWOFF2 from '@fonts/maison/MaisonNeue-Book.woff2';
// import MaisonNeueMediumWOFF from '@fonts/maison/MaisonNeue-Medium.woff';
// import MaisonNeueMediumWOFF2 from '@fonts/maison/MaisonNeue-Medium.woff2';
// import MaisonNeueDemiWOFF from '@fonts/maison/MaisonNeue-Demi.woff';
// import MaisonNeueDemiWOFF2 from '@fonts/maison/MaisonNeue-Demi.woff2';
import MaisonNeueBoldWOFF from '@fonts/maison/MaisonNeue-Bold.woff';
import MaisonNeueBoldWOFF2 from '@fonts/maison/MaisonNeue-Bold.woff2';

// import MaisonNeueLightItalicWOFF from '@fonts/maison/MaisonNeue-LightItalic.woff';
// import MaisonNeueLightItalicWOFF2 from '@fonts/maison/MaisonNeue-LightItalic.woff2';
import MaisonNeueBookItalicWOFF from '@fonts/maison/MaisonNeue-BookItalic.woff';
import MaisonNeueBookItalicWOFF2 from '@fonts/maison/MaisonNeue-BookItalic.woff2';
// import MaisonNeueMediumItalicWOFF from '@fonts/maison/MaisonNeue-MediumItalic.woff';
// import MaisonNeueMediumItalicWOFF2 from '@fonts/maison/MaisonNeue-MediumItalic.woff2';
// import MaisonNeueDemiItalicWOFF from '@fonts/maison/MaisonNeue-DemiItalic.woff';
// import MaisonNeueDemiItalicWOFF2 from '@fonts/maison/MaisonNeue-DemiItalic.woff2';
import MaisonNeueBoldItalicWOFF from '@fonts/maison/MaisonNeue-BoldItalic.woff';
import MaisonNeueBoldItalicWOFF2 from '@fonts/maison/MaisonNeue-BoldItalic.woff2';

const voyageRegularWeights = {
  400: [VoyageRegularWOFF, VoyageRegularWOFF2],
};
const maisonRegularWeights = {
  // 300: [MaisonNeueLightWOFF, MaisonNeueLightWOFF2],
  400: [MaisonNeueBookWOFF, MaisonNeueBookWOFF2],
  // 500: [MaisonNeueMediumWOFF, MaisonNeueMediumWOFF2],
  // 600: [MaisonNeueDemiWOFF, MaisonNeueDemiWOFF2],
  700: [MaisonNeueBoldWOFF, MaisonNeueBoldWOFF2],
};
const maisonItalicWeights = {
  // 300: [MaisonNeueLightItalicWOFF, MaisonNeueLightItalicWOFF2],
  400: [MaisonNeueBookItalicWOFF, MaisonNeueBookItalicWOFF2],
  // 500: [MaisonNeueMediumItalicWOFF, MaisonNeueMediumItalicWOFF2],
  // 600: [MaisonNeueDemiItalicWOFF, MaisonNeueDemiItalicWOFF2],
  700: [MaisonNeueBoldItalicWOFF, MaisonNeueBoldItalicWOFF2],
};

const voyage = {
  name: 'Voyage',
  normal: voyageRegularWeights,
};

const maison = {
  name: 'Maison Neue',
  normal: maisonRegularWeights,
  italic: maisonItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const voyageRegular = createFontFaces(voyage);

const maisonRegular = createFontFaces(maison);
const maisonItalic = createFontFaces(maison, 'italic');

const Fonts = css`
  ${voyageRegular}
  ${maisonRegular + maisonItalic}
`;

export default Fonts;
