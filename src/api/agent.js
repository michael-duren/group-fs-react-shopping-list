import axios from "axios";

export const getAllItems = (setListItems) => {
  return axios
    .get("/items")
    .then((response) => response.data)
    .then((items) => {
      return items
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => Number(a.purchased) - Number(b.purchased));
    })
    .then(setListItems)
    .catch((error) => console.error(error));
};

export const deleteItem = (itemId, setListItems) => {
  axios
    .delete(`/items/${itemId}`)
    .then(() => {
      getAllItems(setListItems);
    })
    .catch((error) => console.error(error));
};

export const resetAllItems = (listItems, setListItems) => {
  Promise.all(
    listItems.map((item) => {
      item.purchased = false;
      return axios.put(`/items/${item.id}`, item);
    })
  )
    .then(() => {
      getAllItems(setListItems);
    })
    .catch((error) => console.error(error));
};

export const clearAllItems = (listItems, setListItems) => {
  Promise.all(
    listItems.map((item) => {
      return axios.delete(`/items/${item.id}`)
    })
  )
    .then(() => {
      getAllItems(setListItems);
    })
    .catch((error) => console.error(error));
}