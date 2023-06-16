import axios from "axios";
import { useState } from "react";
import { addItem } from "../../api/agent";

export function Form({ setListItems }) {
  const initialFormState = {
    name: "",
    quantity: "",
    unit: "",
  };
  const [formData, setFormData] = useState(initialFormState);

  const addItemHandler = (event) => {
    event.preventDefault();

    addItem(formData, setListItems)
      .then(setFormData(initialFormState))
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <form onSubmit={addItemHandler}>
      <input
        type="text"
        onChange={handleChange}
        name="name"
        placeholder="Item Name"
        value={formData.name}
      />
      <input
        type="text"
        onChange={handleChange}
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
      />
      <input
        type="text"
        onChange={handleChange}
        name="unit"
        placeholder="Unit"
        value={formData.unit}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
