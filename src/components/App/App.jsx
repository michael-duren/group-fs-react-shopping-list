import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';

function App() {
  const [listItems, setListItems] = useState([]);
  const initialFormState = {
    name: '',
    quantity: '',
    unit: '',
  };
  const [formData, setFormData] = useState(initialFormState);

  const getAllItems = () => {
    return axios
      .get('/items')
      .then((response) => response.data)
      .catch((error) => console.error(error));
  };

  const addItem = (event) => {
    event.preventDefault();

    return axios
      .post('/items', formData)
      .then(() => {
        setFormData(initialFormState);
        getAllItems().then(setListItems);
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  useEffect(() => {
    getAllItems().then(setListItems);
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {/* List */}
        <div>
          <h2>Grocery List</h2>
          <ul>
            {listItems &&
              listItems.map((item) => {
                return (
                  <li key={item.id}>
                    {item.name}, quanity: {item.quantity} {item.unit}
                  </li>
                );
              })}
          </ul>
        </div>
        {/* Form */}
        <form onSubmit={addItem}>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Item Name"
          />
          <input
            type="text"
            onChange={handleChange}
            name="quantity"
            placeholder="Quantity"
          />
          <input
            type="text"
            onChange={handleChange}
            name="unit"
            placeholder="Unit"
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default App;
