import React from 'react';
import styled from 'styled-components';
import LargeBox from './../assets/svg/rocknbox-large.svg';

const ProductsCSS = styled.div`
  width: 96%;
  margin: 0 auto;
  padding: 2rem 0;
`;

const PriceCSS = styled.div`
  display:inline-block;
  font-weight:bold;
  font-size:3.6rem;
  margin:0;
  padding:0;
  color:#eee;
  font-family: 'Germania One', cursive;
`;


const Product3 = () => {
  return (
    <ProductsCSS>
      <div className="product">
        <div className="product__image">
          <img src={LargeBox} alt="rock'n'box large subscription box"/>
        </div>

        <div className="product__desc">
          <PriceCSS>Large Box</PriceCSS>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            delectus placeat deleniti, rerum maiores temporibus, velit possimus
            deserunt minima. Quia tempore, officiis aspernatur molestiae
            suscipit voluptatum provident, illum temporibus dolorem!
          </p>

          <ul className="product__content">
            <li>Item #1</li>
            <li>Item #2</li>
            <li>Item #3</li>
            <li>Item #4</li>
            <li>Item #5</li>
            <li className="exclusive">Item #6 (Member exclusive!)</li>
            <li className="exclusive">Item #7 (Member exclusive!)</li>
          </ul>

          <h4 className="comingSoon">Coming Soon!</h4>
        </div>
      </div>
    </ProductsCSS>
  );
};

export default Product3;
