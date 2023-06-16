import { Button, Card, CardContent, Chip } from '@mui/material';
import { purchaseItem, deleteItem } from '../../api/agent';
import { toTitleCase } from '../../utils/toTitleCase';
import './ListItem.css';

export default function ListItem({ item, setListItems }) {
  return (
    <Card sx={{ minWidth: '15rem' }}>
      <CardContent className="card-content">
        <h3> {toTitleCase(item.name)}</h3>{' '}
        <div>
          Quanity: {item.quantity} {toTitleCase(item.unit)}
        </div>
        {item.purchased ? (
          <Chip label="Purchased" color="success" />
        ) : (
          <>
            <Button
              variant="contained"
              onClick={() => purchaseItem(item.id, item, setListItems)}
            >
              Purchase
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => deleteItem(item.id, setListItems)}
            >
              Delete
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
