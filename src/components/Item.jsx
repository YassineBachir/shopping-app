// // import React, { useState } from 'react';
// // import './Item.css';

// // export default function Item({ product }) {
// //   const imgSize = 120;
// //   const [isFavorite, setIsFavorite] = useState(false);
// //   const [showSpecs, setShowSpecs] = useState(false); 

// //   return (
// //     <article className='Container'>
// //       <button
// //         className={`Favorite ${isFavorite ? 'favorite-active' : ''}`}
// //         onClick={() => setIsFavorite(!isFavorite)}
// //       >
// //         {isFavorite ? '❤️' : '🤍'}
// //       </button>
// //       <h2>{product.title}</h2>
// //       <img
// //         src={product.imageSrc}
// //         alt={product.title}
// //         width={imgSize}
// //         height={imgSize}
// //       />
      
// //       specification
// //       <button onClick={() => setShowSpecs(!showSpecs)} className="ShowButton">
// //         {showSpecs ? "Hide" : "Show"}
// //       </button>

     
// //       {showSpecs && (
// //         <ul className="Specs">
// //           {product.specification.map((spec, index) => (
// //             <li key={index}>{spec}</li>
// //           ))}
// //         </ul>
// //       )}

// //       <p className={product.available ? 'AvailableStatus' : 'NotAvailableStatus'}>
// //         {product.available ? `${product.stockCount} items Available` : 'Not available'}
// //       </p>
// //       <button className="BuyButton" disabled={!product.available}>Buy</button>
// //     </article>
// //   );
// // }

// import React, { useState } from 'react';

// export default function Item({ product }) {
//   const imgSize = 120; // Taille d'image en pixels
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [showSpecs, setShowSpecs] = useState(false); 

//   return (
//     <article className='border rounded-lg shadow-md p-4 m-2 w-64'>
//       <button
//         className={`text-xl ${isFavorite ? 'text-red-500' : 'text-gray-500'}`}
//         onClick={() => setIsFavorite(!isFavorite)}
//       >
//         {isFavorite ? '❤️' : '🤍'}
//       </button>
//       <h2 className="text-lg font-semibold">{product.title}</h2>
//       <img
//         src={product.imageSrc}
//         alt={product.title}
//         className="w-full h-32 object-cover" // Utilisation de Tailwind pour la taille de l'image
//       />
      
//       <button onClick={() => setShowSpecs(!showSpecs)} className="mt-2 bg-blue-500 text-white py-1 px-2 rounded">
//         {showSpecs ? "Hide" : "Show"} Specifications
//       </button>

//       {showSpecs && (
//         <ul className="mt-2 list-disc list-inside">
//           {product.specification.map((spec, index) => (
//             <li key={index} className="text-sm text-gray-700">{spec}</li>
//           ))}
//         </ul>
//       )}

//       <p className={`mt-2 ${product.available ? 'text-green-600' : 'text-red-600'}`}>
//         {product.available ? `${product.stockCount} items Available` : 'Not available'}
//       </p>
      
//       <button 
//         className={`mt-2 w-full py-1 rounded ${product.available ? 'bg-green-500' : 'bg-gray-300'} text-white`} 
//         disabled={!product.available}
//       >
//         Buy
//       </button>
//     </article>
//   );
// }

import React, { useState } from 'react';

export default function Item({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false); 

  return (
    <article className="relative w-72 border border-white rounded-lg p-4 text-center bg-slate-500">
     
      <button 
        className={`text-2xl ${isFavorite ? 'text-red-500' : 'text-gray-500'} focus:outline-none`}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
      
      <h2 className="text-lg font-semibold mt-2 ">{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        className="mx-auto w-60 h-42 object-cover" 
      />
      
      <button 
        onClick={() => setShowSpecs(!showSpecs)} 
        className="mt-2 bg-blue-800 text-white py-1 px-2 rounded transition duration-300 hover:bg-blue-700"
      >
        {showSpecs ? "Hide" : "Show"}
      </button>

      {showSpecs && (
        <ul className="mt-2">
          {product.specification.map((spec, index) => (
            <li key={index} className="text-white">{spec}</li>
          ))}
        </ul>
      )}
      <p className="mt-2 text-xl font-bold">${product.price}</p> {/* Affichage du prix */}

      <p className={`mt-2 ${product.available ? 'text-green-400' : 'text-red-400'}`}>
        {product.available ? `${product.stockCount} items Available` : 'Not available'}
      </p>
      <button 
        className={`mt-2 w-full py-19 px-3 text-sm rounded ${product.available ? 'bg-green-500' : 'bg-gray-300'} text-white`} 
        disabled={!product.available}
      >
        Buy
      </button>
    </article>
  );
}


