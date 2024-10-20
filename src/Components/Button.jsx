const Button = ({ label, iconURL, textColor, backGroundColor, borderColor }) => {
  return (
    <button
      className={`flex border justify-center gap-2 font-montserrat items-center leading-none px-7 py-4 w-fit 
      ${backGroundColor || 'bg-coral-red'} 
      ${textColor || 'text-white'} 
      ${borderColor || 'border-coral-red'} 
      rounded-full`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="icon"
          className="ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
