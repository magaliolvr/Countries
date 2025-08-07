function Button({ variant = "primary", onClick, children, iconLeft, iconRight }) {
  const baseClass = "padding-m border-radius-s font-600";
  const variants = {
    primary: "bg-blue text-white   ",
    secondary: "bg-white text-black   ",
    tertiary: "bg-transparent text-black ",
  };

  return (
    <button className={`${baseClass} ${variants[variant]}`} onClick={onClick}>
      {iconLeft && <span className="icon-left">{iconLeft}</span>}
      {children}
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </button>
  );
}

export default Button;
