import React, { useState } from 'react';
import PantryItem from '../components/PantryItem';

export default function PantryPage() {
    const [pantryItems, setPantryItems] = useState([
        { id: 1, item: 'Flour', quantity: 2 },
        { id: 2, item: 'Sugar', quantity: 3 },
        { id: 3, item: 'Rice', quantity: 5 },
      ]);

      const handleRemove = (id) => {
        setPantryItems(pantryItems.filter(item => item.id !== id));
      };


    return (
        <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">Pantry Items</h1>
        <div>
          {pantryItems.map(pantryItem => (
            <PantryItem
              key={pantryItem.id}
              item={pantryItem.item}
              quantity={pantryItem.quantity}
              onRemove={() => handleRemove(pantryItem.id)}
            />
          ))}
        </div>
      </div>
    )
}
