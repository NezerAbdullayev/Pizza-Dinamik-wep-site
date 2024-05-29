import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

function Forms({ title, inputs, buttonText, onSubmit }) {
  const [formValues, setFormValues] = useState(
    inputs.reduce((acc, input) => {
      acc[input.name] = "";
      return acc;
    }, {}),
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);

    setFormValues(
      inputs.reduce((acc, input) => {
        acc[input.name] = "";
        return acc;
      }, {}),
    );
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <div className="rounded bg-stone-100 p-5">
        <h1 className="mb-2.5 text-center text-fontPizza font-semibold uppercase">
          {title}
        </h1>
        {inputs.map((input, index) => (
          <Input
            key={index}
            name={input.name}
            placeholder={input.placeholder}
            type={input.type}
            value={formValues[input.name]}
            onChange={handleChange}
          />
        ))}
        <Button>{buttonText}</Button>
      </div>
    </form>
  );
}

export default Forms;
