const pool = require('../modules/pool');

function getItems() {
  const queryString = 'SELECT * FROM shoppinglist;';

  return pool
    .query(queryString)
    .then((result) => result.rows)
    .catch((err) => {
      throw new Error(err);
    });
}

function addItem(newItem) {
  const queryString = `
		INSERT INTO shoppinglist
		(name, quantity, unit)	
		VALUES ($1, $2, $3);
	`;

  const queryParams = [newItem.name, Number(newItem.quantity), newItem.unit];

  return pool.query(queryString, queryParams).catch((err) => {
    throw new Error(err);
  });
}

function updateItem(id, updatedItem) {
  const queryString = `
      UPDATE shoppinglist SET
        name=$1,
        quantity=$2,
        unit=$3;
      WHERE id=$4;
  `;
  const queryParams = [
    updatedItem.name,
    Number(updatedItem.quantity),
    updatedItem.unit,
    id,
  ];

  return pool.query(queryString, queryParams).catch((error) => {
    throw new Error(error);
  });
}

function deleteItem(id) {
  const queryString = `
		DELETE FROM shoppinglist WHERE id=$1;
	`;

  const queryParams = [id];

  return pool.query(queryString, queryParams).catch((error) => {
    throw new Error(error);
  });
}

module.exports = {
  getItems,
  addItem,
  updateItem,
  deleteItem,
};
