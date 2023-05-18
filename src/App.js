import React, { useEffect, useState } from 'react';
import './App.css'
import List from './ProductList';
import Inputs from './Inputs';
import Counter from './Counter';


function App() {
  let [products, setProducts] = useState([])
  
  return (
    <>
      <h1>Products</h1>
      <div className='container'>
        <h3>Add new products</h3>
        <Inputs onAdd={(text, price) => {
          setProducts([
            ...products, 
            {
              id: Math.random,
              name: text,
              price: price
            }
          ])
        }}/>
        <List 
          products={products} 
          onDelete={(it) => {
            setProducts(products.filter((pr) => pr.id !== it.id))
          }}
        />
        <button className='btn btn_clear' onClick={() => {
          setProducts(products = [])
        }}>Clear All Items</button>
      </div>
      <br></br>
      <Counter products={products}/>
    </>
  );
}

export default App;
