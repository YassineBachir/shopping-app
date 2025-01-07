import React, { useState } from 'react';
import List from "../components/List";
import Item from "../components/Item";
import Filter from "../components/Filter";
import { products } from '../data/products';
import SearchBar from  "../components/SearchBar";
import Carousel from "../components/Carousel";

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = ({ minPrice, maxPrice }) => {
    setFilteredProducts(
      products.filter(product => product.price >= minPrice && product.price <= maxPrice)
    );
  };
  const handleSearch = (searchTerm) => {
    setFilteredProducts(
      products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };
  return (
    <div>
       <SearchBar onSearch={handleSearch} />
      
      <List>
        {filteredProducts.map(prod => (
          <Item key={prod.id} product={prod} />
        ))}
      </List>
      <Filter onFilterChange={handleFilterChange} />
      
      
      
      
    </div>
  );
} 