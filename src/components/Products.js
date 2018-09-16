import React from 'react';
import Product1 from './Product1';
import Product2 from './Product2';
import Product3 from './Product3';

const Products = () => {
  return (
    <section id="products" className="content">
      <h2>AVAILABLE BOXES</h2>

      <div className="products">
        <Product1 />
        <Product2 />
        <Product3 />
      </div>
    </section>
  );
};

export default Products;
