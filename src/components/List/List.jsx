import { Fragment } from 'react';
import { resetAllItems, clearAllItems } from '../../api/agent';
import ListItem from '../ListItem/ListItem';
import { Button } from '@mui/material';
import './ListContainer.css';

export default function List({ listItems, setListItems }) {
  return (
    <div>
      <h2>Grocery List</h2>
      <div>
        <Button onClick={() => resetAllItems(listItems, setListItems)}>
          Reset
        </Button>
        <Button onClick={() => clearAllItems(listItems, setListItems)}>
          Clear
        </Button>
      </div>
      <ul className="list-container">
        {listItems &&
          listItems.map((item) => {
            return (
              <Fragment key={item.id}>
                <ListItem item={item} setListItems={setListItems} />
              </Fragment>
            );
          })}
      </ul>
    </div>
  );
}
