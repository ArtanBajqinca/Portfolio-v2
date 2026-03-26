import React from 'react';
import Link from 'next/link';

export const LabelBig = ({
  text,
  icon,
  link,
  bgColor = 'bg-[var(--label-bg)]',
  textColor = 'text-[var(--label-text)]',
  fontSize = 'font-sfpro-medium',
}) => {
  const LabelContent = () => (
    <div
      className={`inline-flex px-3 py-1 pt-[6px] sm:pt-1 ${bgColor} ${textColor} ${fontSize} rounded-full text-[14px] justify-center items-center`}
    >
      {icon &&
        (typeof icon === 'function' ? (
          <icon className="mr-2" size={16} />
        ) : (
          <div className="mr-2 lg:mt-0 mt-[-2px]">
            <img src={icon} alt={text} width={16} className="max-h-5" />
          </div>
        ))}
      {text}
    </div>
  );

  return link ? (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <LabelContent />
    </Link>
  ) : (
    <LabelContent />
  );
};
