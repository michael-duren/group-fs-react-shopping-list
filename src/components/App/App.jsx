import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';

function App() {
  const [listItems, setListItems] = useState([]);

  const getAllItems = () => {
    return axios
      .get('/items')
      .then((response) => response.data)
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllItems().then(setListItems);
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
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
      </main>
    </div>
  );
}

export default App;
