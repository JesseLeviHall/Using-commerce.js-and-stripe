import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import { Checkout } from "../components";
import Shop from "./Shop";
import Footer from "./Footer";
import Cart from "./Cart";
import Navs from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import { commerce } from "../lib/commerce";
import Terms from "./Terms";
import Thankyou from "./CheckoutForm/Thankyou";
import About from "./About";

function MainComponent() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const contents = await commerce.cart.contents();
    const alreadyIn = contents.some(
      (element) => element.product_id === productId
    );
    if (!alreadyIn) {
      const { cart } = await commerce.cart.add(productId, quantity);
      setCart(cart);
      alert("Added!");
    } else {
      alert("That one is already added");
      return;
    }
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const { cart } = await commerce.cart.remove(lineItemId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <Navs totalItems={cart.total_unique_items} />
      <Switch>
        <Route exact path="/Landing" component={Landing} />
        <Route
          exact
          path="/Shop"
          component={() => (
            <Shop product={products} onAddToCart={handleAddToCart} />
          )}
        />
        <Route
          exact
          path="/Checkout"
          component={() => (
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          )}
        />
        <Route
          exact
          path="/Cart"
          component={() => (
            <Cart
              cart={cart}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          )}
        />
        <Route
          exact
          path="/Thankyou"
          component={() => <Thankyou order={order} onDone={refreshCart} />}
        />
        <Route exact path="/Terms" component={Terms} />
        <Route exact path="/About" component={About} />
        <Redirect to="./Landing" />
      </Switch>
      <Footer />
    </div>
  );
}

export default MainComponent;
