import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import { getAllItems } from '../../api/agent';
import './App.css';
import List from '../List/List.jsx';

function App() {
  const [listItems, setListItems] = useState([]);
  const initialFormState = {
    name: '',
    quantity: '',
    unit: '',
  };
  const [formData, setFormData] = useState(initialFormState);

  const addItem = (event) => {
    event.preventDefault();

    return axios
      .post('/items', formData)
      .then(() => {
        setFormData(initialFormState);
        getAllItems(setListItems);
        console.log(formData);
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  useEffect(() => {
    getAllItems(setListItems);
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {/* List */}
        <List listItems={listItems} setListItems={setListItems} />
        {/* Form */}
        <form onSubmit={addItem}>
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
      </main>
    </div>
  );
}

export default App;
