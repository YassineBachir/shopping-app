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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}



