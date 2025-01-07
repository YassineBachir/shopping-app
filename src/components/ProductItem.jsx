// import React, { useState } from "react";
// import "./ProductItem.css";

// export default function ProductItem({ product }) {
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [likes, setLikes] = useState(0);
 

//   return (
//     <div>
//       <article className="Container" style={{ backgroundColor: "slategray" }}>
//         {/* Bouton Favoris */}
//         <button
//           className={`Favorite ${isFavorite ? "favorite-active" : ""}`}
//           onClick={() => {
//             setIsFavorite(!isFavorite);
//             setLikes(likes + (isFavorite ? -1 : 1)); // Ajuste les likes
//           }}
//         >
//           {isFavorite ? "❤️" : "🤍"} {likes}
//         </button>

       
//         <h2>{product.name}</h2>
//         <img src={product.image} alt={product.name} width={128} height={128} />

      

//         <p
//           className={`Status ${
//             product.available ? "AvailableStatus" : "NotAvailableStatus"
//           }`}
//         >
//           {product.available ? "10 items Available" : "Not Available"}
//         </p>

       
//         <button className="BuyButton" disabled={!product.available}>
//           Buy
//         </button>
//       </article>
//     </div>
//   );
// }
import React from 'react';
import { products } from '../data/products'; // Assurez-vous que le chemin est correct



function ProductItem({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <article className="border rounded-lg shadow-md m-4 p-4 w-100">
      <button
        className={`text-xl ${isFavorite ? 'text-red-500' : 'text-gray-500'}`}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <img src={product.imageSrc} alt={product.title} className="w-full h-32 object-cover" />
      
      <button onClick={() => setShowSpecs(!showSpecs)} className="mt-2 bg-blue-500 text-white py-1 px-2 rounded">
        {showSpecs ? "Hide" : "Show"} Specifications
      </button>

      {showSpecs && (
        <div className="mt-2">
          <p>Price: ${product.price}</p>
          <p>{product.available ? `${product.stockCount} items Available` : 'Not available'}</p>
        </div>
      )}

      <button className={`mt-2 w-full py-1 rounded ${product.available ? 'bg-green-500' : 'bg-gray-300'} text-white`} disabled={!product.available}>
        Buy
      </button>
    </article>
  );
}