import Link from 'next/link';

const Button = ({
  text,
  bgColor = 'bg-ui-elevated',
  textColor = 'text-ui-ink',
  link = '#',
  className = '',
  icon = null,
}) => {
  return (
    <Link href={link} passHref>
      <div
        className={`${textColor} pt-1.5 pb-[4px] px-3.5 ${bgColor} font-sfpro-heavy tracking-[0.08rem] rounded-[6px] hover:bg-green-800 hover:text-white transition-all duration-200 text-[11px] cursor-pointer flex items-center ${className}`}
      >
        {icon && <span>{icon}</span>}
        {text.toUpperCase()}
      </div>
    </Link>
  );
};

export default Button;
