import Item from "./components/Item";
import "./App.css";
import List from "./components/List";
import { products } from './data/products';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Create from "./pages/Create";
// import Filter from "./components/Filter";
// import Carousel from "./components/Carousel";

export default function App() {
  const tab = ["toto", "Ndiaye", 20];
  // const nom = tab[0];
  // const prenom = tab[1];
  // const age = tab[2];
  // const [nom, prenom, age] = tab;
  // const myObj = {
  //   nom: "toto",
  //   prenom: "Ndiaye",
  //   age: 20,
  // }
  // const { nom } = myObj;
  // console.log(`My nam is ${nom} ${prenom} and im ${age}`);
  return (
    <div className="App">
      {/* <List>
        {
          products.map(prod => (
            <Item key={prod.id} product={prod} />
          ))
        }
      </List> */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="create" element={<Create />} />
          
          </Route>
        </Routes>
        
      </Router>
    </div>
  );
}