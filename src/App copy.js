import './App.css';
import ProductItem from './components/ProductItem'; // Assurez-vous que le chemin est correct
import ProductList from './components/ProductList';
import { products } from './data/products';

function App() {
  return (
    <div className='App'>
      <ProductList products={products} /> {/* Passer les produits ici */}
      
      <div className="grid grid-cols-3 gap-4 p-4"> {/* Ajout de padding pour espacer la grille */}
        {products.map((product) => (
          <div key={product.id} className="w-full"> {/* Utiliser w-full pour occuper toute la largeur */}
            <ProductItem product={product} /> {/* Utiliser ProductItem ici */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
