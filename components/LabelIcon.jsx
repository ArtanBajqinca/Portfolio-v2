import React from 'react';
import Image from 'next/image';

export const LabelIcon = ({
  icon: Icon,
  label,
  bgColor,
  textColor,
  fontWeight = 'font-avenit-heavy',
}) => {
  return (
    <div
      className={`inline-flex px-2 py-[2px] max-h-[18px] mt-0.5 ${fontWeight} ${bgColor} ${textColor} rounded-full text-[10px] justify-center items-center`}
    >
      {typeof Icon === 'function' ? (
        <Icon className="mr-1" size={13} />
      ) : (
        <div className="mr-1">
          <img src={Icon} alt={label} width={13} className="max-h-3" />
        </div>
      )}
      <span style={{ marginTop: '0px' }}>{label}</span>
    </div>
  );
};
