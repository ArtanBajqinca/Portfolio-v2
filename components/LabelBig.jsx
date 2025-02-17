import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const LabelBig = ({
  text,
  icon,
  link,
  bgColor = 'bg-green-900',
  textColor = 'text-green-600',
}) => {
  const LabelContent = () => (
    <div
      className={`inline-flex px-3 py-1 pt-[6px] sm:pt-1 ${bgColor} ${textColor} font-avenir-medium rounded-full text-[14px] justify-center items-center`}
    >
      {icon &&
        (typeof icon === 'function' ? (
          <icon className="mr-2" size={16} />
        ) : (
          <div className="mr-2">
            <Image src={icon} alt={text} width={16} height={16} />
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
