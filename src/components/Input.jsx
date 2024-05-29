//eslint-disable-next-line
function Input({ type = "text", name, placeholder = "", value, onChange  }) {


  if (onChange) {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="my-3 w-full rounded-md  bg-white p-3 text-base text-stone-700 placeholder:text-base placeholder:text-stone-500 focus:outline-none active:outline-none"
        required
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      className="my-3 w-full rounded-md  bg-white p-3 text-base text-stone-700 placeholder:text-base placeholder:text-stone-500 focus:outline-none active:outline-none"
    />
  );
}

export default Input;

