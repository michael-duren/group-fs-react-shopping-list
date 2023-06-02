const express = require("express");
const db = require('../db/items.db');
const itemRouter = express.Router();

// GET
itemRouter.get("/", (_, res) => {
  db.getItems()
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// POST
itemRouter.post("/", (req, res) => {
  const newItem = req.body;

  db.addItem(newItem)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// PUT
itemRouter.put("/:itemId", (req, res) => {
  const updatedItem = req.body;
  const itemId = req.params.itemId;

  db.updateItem(itemId, updatedItem)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// DELETE
itemRouter.delete("/:itemId", (req, res) => {
  const itemId = req.params.itemId;
  db.deleteItem(itemId)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

module.exports = itemRouter;
