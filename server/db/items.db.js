const pool = require('../modules/pool');

function getItems() {
	const queryString = 'SELECT * FROM shoppinglist;';

	return pool.query(queryString)
		.then(result => result.rows)
		.catch((err) => {
			throw new Error(err);
		});
}

function addItem(newItem) {
	const queryString = `
		INSERT INTO shoppinglist
		(name, quantity, unit)	
		VALUES ('${newItem.name}', '${newItem.quantity}', '${newItem.unit}');
	`;

	return pool.query(queryString)
		.catch((err) => {
			throw new Error(err);
		});
}

function updateItem(id, updatedItem) {
  const queryString = `
      UPDATE shoppinglist SET
        name='${updatedItem.name}',
        quantity='${updatedItem.quantity}',
        unit='${updatedItem.unit}';
      WHERE id=${id};
  `;

  return pool.query(queryString)
		.catch((error) => {
			throw new Error(error);
		});
}

function deleteItem(id) {
	const queryString = `
		DELETE FROM shoppinglist WHERE id=${id};
	`;

  return pool.query(queryString)
		.catch((error) => {
			throw new Error(error);
		});

}

module.exports = {
  getItems,
  addItem,
  updateItem,
  deleteItem,
}