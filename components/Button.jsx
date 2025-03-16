import Link from 'next/link';

const Button = ({
  text,
  bgColor = 'bg-gray-600',
  link = '#',
  className = '',
  icon = null, // Add the icon prop with null as default
}) => {
  return (
    <Link href={link} passHref>
      <div
        className={`text-white pt-1.5 pb-[4px] px-3.5 ${bgColor} font-avenir-black tracking-[0.08rem] rounded-[6px] hover:bg-green-800 transition-all duration-200 text-[11px] cursor-pointer flex items-center ${className}`}
      >
        {icon && <span>{icon}</span>}
        {text.toUpperCase()}
      </div>
    </Link>
  );
};

export default Button;
