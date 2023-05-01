import React from 'react';
import Product from './Product';
import Counter from './Counter';

function App() {
  return (
    <div className=''>
      <Product name="Bananas" price="3$" description="Fresh bananas from Ecuador" />
      <Product name="Limon" price="1$" description="Fresh Limons from Brazil" />
      <Counter />
    </div>
  );
}

export default App;
