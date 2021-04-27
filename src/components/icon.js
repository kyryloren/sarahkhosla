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
