'use client'
import React from 'react'

import { useState, useEffect } from 'react';

const initialItems =     [
  {
      type: 'Fruit',
      name: 'Apple',
  },
  {
      type: 'Vegetable',
      name: 'Broccoli',
  },
  {
      type: 'Vegetable',
      name: 'Mushroom',
  },
  {
      type: 'Fruit',
      name: 'Banana',
  },
  {
      type: 'Vegetable',
      name: 'Tomato',
  },
  {
      type: 'Fruit',
      name: 'Orange',
  },
  {
      type: 'Fruit',
      name: 'Mango',
  },
  {
      type: 'Fruit',
      name: 'Pineapple',
  },
  {
      type: 'Vegetable',
      name: 'Cucumber',
  },
  {
      type: 'Fruit',
      name: 'Watermelon',
  },
  {
      type: 'Vegetable',
      name: 'Carrot',
  },
];

 

 

export default function Home() {
    const [items, setItems] = useState(initialItems);
    const [displayItems, setDisplayItems] = useState([]);

    const moveItem = (name, back = false) => {
        if (back) {
            const itemToMoveBack = displayItems.find((item) => item.name === name);
            console.log()
            if (itemToMoveBack) {
                setDisplayItems(prev => prev.filter((item) => item.name !== name));
                setItems((prev) => [...prev, itemToMoveBack]);
            }
        } else {
            const itemToMove = items.find((item) => item.name === name);
            if (itemToMove) {
                setItems((prev) => prev.filter((item) => item.name !== name));
                setDisplayItems(prev => [...prev, itemToMove]);
 
                setTimeout(() => {
                    setDisplayItems(prev => prev.filter((item) => item.name !== name));
                    setItems(prev => [...prev, itemToMove]);
                }, 5000); // 5 seconds
            }
        }
    };
 
    return (
      <div class="m-5">
      <div class="p-5 grid grid-cols-3 gap-4">
          <div class="w-[400px]">
       
              {items.map((item) => (
                  <button class="btn text-md text-white bg-gray-500 w-full shadow-sm group my-2 py-5" key={item.name} onClick={() => moveItem(item.name)}>
                      {item.name}
                  </button>
              ))}
          </div>
          <div class="w-[400px] border-2 border-black">
              <h2 class="text-center">Fruits</h2>
              {displayItems.filter((item) => item.type === 'Fruit').map((item) => (
                  <button class="btn text-md text-white bg-gray-500 w-full shadow-sm group my-2 py-5" key={item.name} onClick={() => moveItem(item.name, true)}>
                      {item.name}
                  </button>
              ))}
          </div>
          <div class="w-[400px] border-2 border-black">
              <h2 class="text-center">Vegetables</h2>
              {displayItems.filter((item) => item.type === 'Vegetable').map((item) => (
                  <button class="btn text-md text-white bg-gray-500 w-full shadow-sm group my-2 py-5" key={item.name} onClick={() => moveItem(item.name, true)}>
                      {item.name}
                  </button>
              ))}
          </div>
      </div>
  </div>
  
  
    );
}
