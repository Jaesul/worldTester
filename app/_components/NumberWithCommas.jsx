import React from 'react';

const NumberWithCommas = ({ number }) => {
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      };
    
      return <span>{formatNumber(number)}</span>;
};

export default NumberWithCommas;