import React, {useState} from 'react';
import GroceryItem from '../components/GroceryItem';

export default function GroceryPage() {
    const [items, setItems] = useState([
        { id: 1, name: 'Eggs', quantity: 12 },
        { id: 2, name: 'Milk', quantity: 1 },
        { id: 3, name: 'Bread', quantity: 2 },
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleAddItem = () => {
      if (inputValue.trim()) {
          const newItem = {
              id: Date.now(),
              name: inputValue.trim(),
              quantity: 1
          };
          setItems(prevItems => [...prevItems, newItem]);
          setInputValue('');
      }
  }

    const removeItem = (itemId) => {
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
      };

      return (
        <div className="container mx-auto p-4 max-w-lg">
          <h1 className="text-2xl font-bold mb-4">Grocery List</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Add new item..."
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              className="border rounded w-full py-2 px-3"
            />
            <button
              onClick={handleAddItem}
              className="mt-2 bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Item
            </button>
          </div>
          <div>
            {items.map(item => (
              <GroceryItem key={item.id} item={item.name} quantity={item.quantity} onRemove={() => removeItem(item.id)}
              />
            ))}
          </div>
        </div>
      );
}
