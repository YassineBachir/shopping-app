import React from 'react';
import { products } from '../data/products'; // Assurez-vous que le chemin est correct

export default function Carousel() {
  return (
    <div className="carousel carousel-center rounded-box">
      {products.map((product) => (
        <div className="carousel-item" key={product.id}>
          <img src={product.imageSrc} alt={product.title} className="w-64 h-32 object-cover" />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
