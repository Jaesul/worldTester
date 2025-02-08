import React from 'react';

const TruncatedAddress = ({ address, startLength = 3, endLength = 4, className = '' }) => {
  // Ensure the address is valid
  if (!address || address.length < startLength + endLength) {
    return <span className={className}>Invalid Address</span>;
  }

  // Truncate the address
  const truncatedAddress = `${address.slice(0, startLength)}...${address.slice(-endLength)}`;

  return (
    <span className={`${className}`} title={address}>
      {truncatedAddress}
    </span>
  );
};

export default TruncatedAddress;