import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

export default function App() {
  const [items, setItems] = useState([]);

  // const [localStorageLoaded, setLocalStorageLoaded] = useState(false);

  // // Load items from local storage on component mount
  // useEffect(() => {
  //   const storedItems = localStorage.getItem("packingListItems");
  //   if (storedItems) {
  //     setItems(JSON.parse(storedItems));
  //   }
  //   setLocalStorageLoaded(true);
  // }, []);

  // // Save items to local storage whenever items change
  // useEffect(() => {
  //   if (localStorageLoaded) {
  //     localStorage.setItem("packingListItems", JSON.stringify(items));
  //   }
  // }, [items, localStorageLoaded]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
