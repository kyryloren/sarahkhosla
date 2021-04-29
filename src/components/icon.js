import React from 'react';

const Icon = ({ name }) => {
  switch (name) {
    case 'arrow':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 16">
          <path
            stroke="currentColor"
            strokeWidth="2.02621"
            d="M3.92908 1.59082c2.26679.00002 8.50052.00001 11.33402 0V12.4527M15.1122 1.76367L1.47742 15.1749"
          />
        </svg>
      );
    case 'left-arrow':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 39 38">
          <path
            stroke="currentColor"
            stroke-width="2.04468"
            d="M16.7988 33.2842C13.8339 30.424 5.68039 22.5585 1.97421 18.9832L15.6794 4.77619M2.43367 18.9484l34.75583-.3376"
          />
        </svg>
      );
    case 'cross':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path
            stroke="currentColor"
            strokeWidth="1.33789"
            d="M1.18164 1.01953L13.1223 12.9602m0-11.94067L1.18164 12.9602"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
