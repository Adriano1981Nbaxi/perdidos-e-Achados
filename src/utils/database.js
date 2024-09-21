// Simulated database using localStorage

const LOST_ITEMS_KEY = 'lostItems';
const FOUND_ITEMS_KEY = 'foundItems';

// Helper function to get items from localStorage
const getItems = (key) => {
  const items = localStorage.getItem(key);
  return items ? JSON.parse(items) : [];
};

// Helper function to set items in localStorage
const setItems = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};

export const getLostItems = () => getItems(LOST_ITEMS_KEY);
export const getFoundItems = () => getItems(FOUND_ITEMS_KEY);

export const addLostItem = (item) => {
  const lostItems = getLostItems();
  const newItem = { ...item, id: Date.now(), type: 'lost' };
  lostItems.push(newItem);
  setItems(LOST_ITEMS_KEY, lostItems);
  return newItem;
};

export const addFoundItem = (item) => {
  const foundItems = getFoundItems();
  const newItem = { ...item, id: Date.now(), type: 'found' };
  foundItems.push(newItem);
  setItems(FOUND_ITEMS_KEY, foundItems);
  return newItem;
};

export const searchItems = (query) => {
  const lostItems = getLostItems();
  const foundItems = getFoundItems();
  const allItems = [...lostItems, ...foundItems];
  
  return allItems.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.location.toLowerCase().includes(query.toLowerCase())
  );
};