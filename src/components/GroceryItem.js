
import React, { useState } from 'react';


export default function GroceryItem({item, onRemove}) {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    }

    return (
        <div className="flex items-center justify-between p-4 border-b">
            <span>{item}</span>

            <div className="flex items-center">
                {/* Quantity Input and Controls */}
                <button onClick={decreaseQuantity} className="px-2 py-1 border rounded-l-md">
                    -
                </button>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-12 text-center border-t border-b"
                />
                <button onClick={increaseQuantity} className="px-2 py-1 border rounded-r-md">
                    +
                </button>

                {/* Remove Button */}
                <button onClick={() => onRemove(item)} className="ml-4 text-red-600">
                    Remove
                </button>
            </div>
        </div>
    );
}
