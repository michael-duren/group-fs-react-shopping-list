import { Button, Card, CardContent } from '@mui/material';
import { purchaseItem, deleteItem } from '../../api/agent';

export default function ListItem({ item, setListItems }) {
  return (
    <Card>
      <CardContent>
        <span>
          {' '}
          {item.name}, quanity: {item.quantity} {item.unit}
        </span>
        {item.purchased ? (
          <span> Purchased</span>
        ) : (
          <>
            <Button onClick={() => deleteItem(item.id, setListItems)}>
              Delete
            </Button>
            <Button onClick={() => purchaseItem(item.id, item, setListItems)}>
              Purchased
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
