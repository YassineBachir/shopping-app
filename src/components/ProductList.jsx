// import React from "react";
// import ProductItem from "./ProductItem";

// const products = [
//   { id: 1, name: "iPhone 15 Pro", price: 999, available: 10, image: "https://freebiehive.com/wp-content/uploads/2024/09/iPhone-16-Pro-All-Colors-PNG-758x473.jpg" },
//   { id: 2, name: "AirPods Pro 2", price: 249, available: 0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmcbzF57vcb4xTvXQT6__q3CHQGfH9wCeSp2AKRqrkdMd2kLcQqBvpXmMv4sZfv6tZqE&usqp=CAU" },
//   { id: 3, name: "Apple Watch 9", price: 399, available: 6, image: "https://www.apple.com/v/apple-watch-series-10/c/images/overview/contrast/product_se__f3k18492qcey_xlarge.png" },
// ];

import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ products }) {
  return (
    <div className="flex flex-wrap p-4">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
}


// import React, { useState } from 'react';

// export default function ProductList({ product }) {
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [showSpecs, setShowSpecs] = useState(false);

//   return (
//     <article className="border rounded-lg shadow-md m-4 p-4 w-64">
//       <div className="flex justify-end">
//         <button
//           className={`text-xl ${isFavorite ? 'text-red-500' : 'text-gray-500'}`}
//           onClick={() => setIsFavorite(!isFavorite)}
//         >
//           {isFavorite ? '❤️' : '🤍'}
//         </button>
//       </div>
//       <h2 className="text-lg font-semibold">{product.name}</h2>
//       <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
      
//       <button 
//         onClick={() => setShowSpecs(!showSpecs)} 
//         className="mt-2 bg-blue-500 text-white py-1 px-2 rounded"
//       >
//         {showSpecs ? "Hide" : "Show"} Specifications
//       </button>

//       {showSpecs && (
//         <div className="mt-2">
//           <p>Price: ${product.price}</p>
//           <p>{product.available > 0 ? `${product.available} items Available` : 'Not available'}</p>
//         </div>
//       )}

//       <button 
//         className={`mt-2 w-full py-1 rounded ${product.available > 0 ? 'bg-green-500' : 'bg-gray-300'} text-white`} 
//         disabled={product.available === 0}
//       >
//         Buy
//       </button>
//     </article>
//   );
// }