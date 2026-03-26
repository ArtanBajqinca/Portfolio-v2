import React from 'react';

export const Label = ({ text }) => {
  return (
    <div className="inline-flex px-2 py-0.5 bg-[var(--label-bg)] text-[var(--label-text)] font-sfpro-medium rounded-full text-[10px] justify-center items-center mt-0.5">
      {text}
    </div>
  );
};
