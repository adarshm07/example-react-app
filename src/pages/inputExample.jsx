import { Link } from "react-router-dom";
import TextInput from "../components/input/TextInput";
import { useState } from "react";
import PasswordInput from "../components/input/Password";
import Checkbox from "../components/input/Checkbox";
import SelectOption from "../components/input/SelectOption";

function InputExample() {
  const [formData, setFormData] = useState({
    text: "",
    password: "",
    email: "",
    checkbox: false,
    radio: "option1",
    select: "option1",
    textarea: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{ width: "700px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Input Example</h2>
        <Link to={"/"}>All examples</Link>
      </div>

      {/* text input */}
      <TextInput
        label={"Text input"}
        name={"text"}
        value={formData.text}
        onChange={handleChange}
      />
      <br />

      {/* text input */}
      <PasswordInput
        label={"Password input"}
        name={"password"}
        value={formData.password}
        onChange={handleChange}
      />
      <br />

      {/* checkbox input */}
      <Checkbox
        label={"Checkbox input"}
        name={"checkbox"}
        value={formData.checkbox}
        onChange={handleChange}
      />
      <br />

      {/* selectoption */}
      <SelectOption
        label={"Select"}
        name={"select"}
        options={[
          { label: "Option 1", value: "option-1" },
          { label: "Option 2", value: "option-2" },
          { label: "Option 3", value: "option-3" },
          { label: "Option 4", value: "option-4" },
        ]}
        value={formData.select}
        onChange={handleChange}
      />
      <br />

      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  );
}

export default InputExample;
