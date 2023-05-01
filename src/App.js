import React from 'react';
import Product from './Product';
import Counter from './Counter';

function App() {
  return (
    <div className=''>
      <Product name="Bananas" price="1$" description="Fresh bananas from Ecuador" />
      <Product name="Limon" price="0.4$" description="Fresh Limons from Brazil" />
      <Counter />
    </div>
  );
}

export default App;
