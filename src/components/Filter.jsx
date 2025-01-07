// import React, { useState } from "react";

// function Filter({ onFilterChange }) {
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(999);
//   const handleFilter = () => {
//     onFilterChange({ minPrice, maxPrice });
//   };
 

//   return (
//     <div>
//       <h2>Products filtered by price</h2>
//       <div>
//         <label>
//           Price: $
//           <input
//             type="number"
//             value={minPrice}
//             onChange={(e) => setMinPrice(Number(e.target.value))}
//             min="0"
//           />
//           - $
//           <input
//             type="number"
//             value={maxPrice}
//             onChange={(e) => setMaxPrice(Number(e.target.value))}
//             min="0"
//           />
//         </label>
//       </div>
      
//       <ul>
//         <li>iPhone 15 Pro costs $999</li>
//         <li>AirPods Pro 2 costs $249</li>
//         <li>Apple Watch 9 costs $399</li>
//       </ul>
//     </div>
//   );
// }

// export default Filter;  

import React, { useState } from "react";

function Filter({ onFilterChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999);

  const handleFilter = () => {
    onFilterChange({ minPrice, maxPrice });
  };

  return (
    <div className="p-1 bg rounded-lg shadow-md w-64">
      <h2 className="text-xl font-semibold mb-4">Products Filtered by Price</h2>
      <div className="mb-4">
        <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
          Price: $
        </label>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          min="0"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <span className="mx-2">-</span>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          min="0"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <button
        onClick={handleFilter}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-200"
      >
        Apply Filter
      </button>
    </div>
  );
}

export default Filter;
