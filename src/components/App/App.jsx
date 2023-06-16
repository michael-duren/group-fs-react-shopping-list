import { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx';
import { getAllItems } from '../../api/agent';
import './App.css';
import List from '../List/List.jsx';
import { Form } from '../Form/Form.jsx';

function App() {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    getAllItems(setListItems);
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {/* Form */}
        <Form setListItems={setListItems} />
        {/* List */}
        <List listItems={listItems} setListItems={setListItems} />
      </main>
    </div>
  );
}

export default App;
