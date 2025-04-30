import React from "react";

const PrimaryBtn: React.FC<primaryButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  ...rest
}) => {
  const baseStyle =
    "text-white bg-[#009e74] hover:bg-[#009168] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 me-2 mb-2 focus:outline-none font-semibold min-w-36";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default PrimaryBtn;
