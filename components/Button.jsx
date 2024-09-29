import Link from "next/link";

const Button = ({
  text,
  bgColor = "bg-gray-600",
  link = "#",
  className = "",
}) => {
  return (
    <Link href={link} passHref>
      <div
        className={`text-white pt-1.5 pb-[4px] px-3.5 ${bgColor} font-avenir-black tracking-[0.08rem] rounded-md hover:bg-green-800 transition-all duration-200 text-[11px] cursor-pointer ${className}`}
      >
        {text.toUpperCase()}
      </div>
    </Link>
  );
};

export default Button;
