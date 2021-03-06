import React from 'react';
import styled from 'styled-components';
import MediumBox from './../assets/svg/rocknbox-medium.svg';

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

//::STRIPE FUNCTIONALITY / PRICE PER PRODUCT:::
// hardcoded amount (in US cents) to charge users
// you could set this variable dynamically to charge different amounts
const amount = 1999;
const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "3rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  maxWidth: "400px",
};
const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
};

const Product2 = class extends React.Component {
  state = {
    disabled: false,
    buttonText: "BUY NOW",
    paymentMessage: "",
  };

  resetButton() {
    this.setState({ disabled: false, buttonText: "BUY NOW" });
  }

  componentDidMount() {
    this.stripeHandler = StripeCheckout.configure({
      // You’ll need to add your own Stripe public key to the `checkout.js` file.
      // key: 'pk_test_STRIPE_PUBLISHABLE_KEY',
      key: `${process.env.STRIPE_PUBLIC_KEY}`,
      closed: () => {
        this.resetButton();
      },
    });
  }

  openStripeCheckout(event) {
    event.preventDefault();
    this.setState({ disabled: true, buttonText: "WAITING..." });
    this.stripeHandler.open({
      name: "Subscripton Box #2",
      amount: amount,
      description: "Subscription Box #2",
      token: token => {
        fetch(`${process.env.AWS_SERVER}`, {
          method: "POST",
          body: JSON.stringify({
            token,
            amount,
          }),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        })
          .then(res => {
            console.log("Transaction processed successfully");
            this.resetButton();
            this.setState({ paymentMessage: "Payment Successful!" });
            return res.json();
          })
          .catch(error => {
            console.error("Error:", error);
            this.setState({ paymentMessage: "Payment Failed" });
          });
      },
    });
  }

  render() {
    return (
      <ProductsCSS>
        <div className="product">
          <div className="product__image">
            <img src={MediumBox} alt="rock'n'box medium subscription box"/>
          </div>

          <div className="product__desc">
            <PriceCSS>Medium Box: $19.99/month</PriceCSS>
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
            </ul>

            <button
              style={buttonStyles}
              onClick={event => this.openStripeCheckout(event)}
              disabled={this.state.disabled}
            >
              {this.state.buttonText}
            </button>
            
            <p>{this.state.paymentMessage}</p>
          </div>
        </div>
      </ProductsCSS>
    );
  }
};

export default Product2;
