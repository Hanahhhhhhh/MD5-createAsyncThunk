// import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import ListProduct from "./components/list";
import CreateProduct from "./components/create";
import UpdateProduct from "./components/update";
import ProductDetail from "./components/detail";

function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path="/list" element={<ListProduct />} />
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/edit/:id" element={<UpdateProduct />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
          </Routes>
        </Router>
      </div>

  );
}

export default App;