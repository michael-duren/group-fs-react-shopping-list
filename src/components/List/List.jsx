import { Fragment } from 'react';
import { resetAllItems, clearAllItems } from '../../api/agent';
import ListItem from '../ListItem/ListItem';

export default function List({ listItems, setListItems }) {
  return (
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
              <Fragment key={item.id}>
                <ListItem item={item} setListItems={setListItems} />
              </Fragment>
            );
          })}
      </ul>
    </div>
  );
}
