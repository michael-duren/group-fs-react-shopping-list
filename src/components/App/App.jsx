import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import {
  getAllItems,
  deleteItem,
  resetAllItems,
  clearAllItems,
  purchaseItem,
} from '../../api/agent';
import './App.css';

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
        <div>
          <h2>Grocery List</h2>
          <div>
            <button onClick={() => resetAllItems(listItems, setListItems)}>
              Reset
            </button>
            <button onClick={() => clearAllItems(listItems, setListItems)}>
              Clear
            </button>
          </div>
          <ul>
            {listItems &&
              listItems.map((item) => {
                return (
                  <li key={item.id}>
                    <span>
                      {' '}
                      {item.name}, quanity: {item.quantity} {item.unit}
                    </span>
                    {item.purchased ? (
                      <span> Purchased</span>
                    ) : (
                      <>
                        <button
                          onClick={() => deleteItem(item.id, setListItems)}
                        >
                          Delete
                        </button>
                        <button
                          onClick={() =>
                            purchaseItem(item.id, item, setListItems)
                          }
                        >
                          Purchased
                        </button>
                      </>
                    )}
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
