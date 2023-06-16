import { purchaseItem, deleteItem } from '../../api/agent';

export default function ListItem({ item, setListItems }) {
  return (
    <li>
      <span>
        {' '}
        {item.name}, quanity: {item.quantity} {item.unit}
      </span>
      {item.purchased ? (
        <span> Purchased</span>
      ) : (
        <>
          <button onClick={() => deleteItem(item.id, setListItems)}>
            Delete
          </button>
          <button onClick={() => purchaseItem(item.id, item, setListItems)}>
            Purchased
          </button>
        </>
      )}
    </li>
  );
}
