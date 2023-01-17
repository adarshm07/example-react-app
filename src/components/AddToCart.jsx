import React, { useState } from "react";

function Product({ id, name, price }) {
  // State to hold the quantity of the product in the cart
  const [quantity, setQuantity] = useState(0);

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    setQuantity(quantity + 1);
    localStorage.setItem(
      `product_${id}`,
      JSON.stringify({ name, price, quantity: quantity + 1 })
    );
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <p>Quantity in Cart: {quantity}</p>
    </div>
  );
}

function ShoppingCart() {
  //   // Get the products from local storage
  const productsInCart = Object.keys(localStorage)
    .filter((key) => key.startsWith("product_"))
    .map((key) => JSON.parse(localStorage.getItem(key)))
    .filter((product) => product.quantity > 0);

  console.log(productsInCart);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {productsInCart.map((product) => (
          <li key={product.name}>
            {product.name} - ${product.price} x {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AddToCart() {
  return (
    <div>
      <Product id={1} name="Product 1" price={9.99} />
      <Product id={2} name="Product 2" price={14.99} />
      <ShoppingCart />
    </div>
  );
}
