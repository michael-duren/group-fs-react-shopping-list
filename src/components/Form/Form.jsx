import { useState } from "react";
import { addItem } from "../../api/agent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Form.css";

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
      <TextField
        onChange={handleChange}
        name="name"
        placeholder="Item Name"
        value={formData.name}
        variant="outlined"
        sx={{ width: 0.2 }}
      />
      <TextField
        onChange={handleChange}
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        variant="outlined"
        sx={{ width: 0.11 }}
      />
      <TextField
        onChange={handleChange}
        name="unit"
        placeholder="Unit"
        value={formData.unit}
        variant="outlined"
        sx={{ width: 0.15 }}
      />
      <Button type="submit" variant="contained" sx={{ mx: 1 }}>
        Submit
      </Button>
    </form>
  );
}
