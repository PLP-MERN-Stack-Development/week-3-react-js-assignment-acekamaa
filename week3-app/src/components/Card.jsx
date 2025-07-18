import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
      {title && <h3 className="text-xl font-semibold mb-3">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
