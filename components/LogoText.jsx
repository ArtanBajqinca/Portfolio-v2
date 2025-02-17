import React from 'react';

export const LogoText = ({
  text,
  alt,
  logo,
  color,
  className,
  classNameIcon,
}) => {
  return (
    <div className="flex  w-ft items-center">
      <div className={`lg:w-16 w-12 ${classNameIcon}`}>{logo}</div>
      <div
        className="font-avenir-heavy text-2xl ml-2 tracking-wide"
        style={{ color }}
      >
        <span className={`mt-2 ${className}`} alt={alt}>
          {text}
        </span>
      </div>
    </div>
  );
};
