function CreateOrderInput({ formdata, }) {
  const { label, placeholder, type = "text", name } = formdata;

  if (type == "select") {
    const { value } = formdata;
    return (
      <div>
      <label className="text-lg text-stone-500 ">{label}</label>
        <select className="w-full py-[1.0625rem] bg-stone-100 px-2 text-stone-600 focus:outline-none my-2 rounded" >
          {value.map((optValue) => (
            <option key={optValue} value={optValue}>
              {optValue}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div>
      <label className="text-lg text-stone-500">{label}:</label>
      <input
        className="my-2 w-full bg-stone-100 rounded p-4 active:outline-none focus:outline-none"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}


export default CreateOrderInput;
