import React from 'react';

export default function PantryItem({ item, quantity, onRemove, onAddToGroceryList }) {
    return (
      <div className="flex justify-between items-center p-2 border-b">
        <div>
          {item} (x{quantity})
        </div>
        <div>
          <button
            className="mr-2 bg-red-500 text-white px-3 py-1 rounded"
            onClick={onRemove}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
