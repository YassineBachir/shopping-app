
import './App.css';
import { ProductItem } from './components/ProductItem';
import ProductList from './components/ProductList';
import { products } from './data/products';

function App() {
  return (
    <div className='App'>
    <ProductList>
      { products.map(product =>(
        <ProductItem product={product}/>
      ))}
    </ProductList>
    <div className='flex justify-center items-center bg-slate-600'>
      <div className="flex  justify-between  mt-4 overflow-none  ml-20 bg-slate-600 carousel carousel-center ">
      {products.map((product, index) => (
        <div key={index} className=" w-1/3 carousel-item">
          <Item product={product} />
        </div>
      ))}
      </div>
    </div>
  </div>
  );
}

export default App;
