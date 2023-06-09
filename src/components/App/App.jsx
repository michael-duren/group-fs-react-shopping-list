import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import "./App.css";

function App() {
  const [listItems, setListItems] = useState([]);
  const initialFormState = {
    name: "",
    quantity: "",
    unit: "",
  };
  const [formData, setFormData] = useState(initialFormState);

  const getAllItems = () => {
    return axios
      .get("/items")
      .then((response) => response.data)
      .then((items) => {
        return items
          .sort((a,b) => a.name.localeCompare(b.name))
          .sort((a, b) => Number(a.purchased) - Number(b.purchased));
      })
      .then(setListItems)
      .catch((error) => console.error(error));
  };

  const addItem = (event) => {
    event.preventDefault();

    return axios
      .post("/items", formData)
      .then(() => {
        setFormData(initialFormState);
        getAllItems();
        console.log(formData);
      })
      .catch((error) => console.error(error));
  };

  const deleteItem = (itemId) => {
    axios
      .delete(`/items/${itemId}`)
      .then(() => {
        getAllItems();
      })
      .catch((error) => console.error(error));
  };

  const purchaseItem = (itemId, item) => {
    item.purchased = true;

    axios
      .put(`/items/${itemId}`, item)
      .then(() => {
        getAllItems();
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  useEffect(() => {
    getAllItems();
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
                    <span>
                      {" "}
                      {item.name}, quanity: {item.quantity} {item.unit}
                    </span>
                    {item.purchased ? (
                      <span>{" "}Purchased</span>
                    ) : (
                      <>
                        <button onClick={() => deleteItem(item.id)}>
                          Delete
                        </button>
                        <button onClick={() => purchaseItem(item.id, item)}>
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
