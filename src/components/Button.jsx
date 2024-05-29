function Button({ children, onClick, type, onClose,href }) {
  const base =
    "bg-pizzaRed mt-3 py-2.5  px-[35px]  hover:bg-pizzaBlack cursor-pointer rounded text-center    text-white transition-all duration-200 w-full ";

  const close =
    "mb-6 inline-block cursor-pointer self-end text-fontPizza text-pizzaRed underline transition-all duration-100 hover:text-pizzaBlack";

  function handleClick() {
    onClick(), onClose();
  }

  if (type === "outputProfil")
    return (
      <button className={base} onClick={handleClick}>
        {children}
      </button>
    );

  if (type === "button")
    return (
      <button className={base} onClick={onClick}>
        {children}
      </button>
    );

  if (type === "close")
    return (
      <button className={close} onClick={() => onClick(false)}>
        {children}
      </button>
    );

  if(type==="rota" )
    return(<a href={href} className={`${base} block`} onClick={onClick}> {children} </a>)

  return <button className={base}>{children}</button>;
}

export default Button;
