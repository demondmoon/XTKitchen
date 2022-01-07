import { useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import Modal from "../../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import { useFirestore } from "../../hooks/useFirestore";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0; // 需要判断totalAmount里是否有数值。

  const { addDocument: addOrder, response } = useFirestore("users");

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 }); // 注意必须填入amount:1,才是添加一个item，否则会成倍添加。
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitHandler = (userDetail) => {
    addOrder(userDetail);
    clearCartHandler();
  };

  const clearCartHandler = () => {
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  const modalContent = (
    <Fragment>
      <div className={classes.title}>Checkout</div>
      {!isCheckout && (
        <Fragment>
          {cartItems}
          {cartCtx.items.length !== 0 && (
            <button onClick={clearCartHandler} className={classes.clear}>Clear Cart</button>
          )}
        </Fragment>
      )}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onHideCart} onSubmit={submitHandler} />
      )}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
      {response.error && (
        <p>Sorry, there is something wrong with the server.</p>
      )}
    </Fragment>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {!response.isPending && !response.success && modalContent}
      {response.isPending && <Fragment><h3 className={classes.sending} >We are sending your order!</h3><img className={classes.loading}src={require('../../assets/loading.gif').default} alt="loading" /></Fragment>}
      {response.success && (
        <Fragment>
          <h3 className={classes.success}>
            Your order has been placed successfully!
          </h3>
          <h3 className={classes.success}>We are preparing your meal!</h3>
          <Link to="/daniel" className={classes.me} onClick={props.onHideCart}>
            👉 About the developer 👈
          </Link>
          <div className={classes.actions}>
            <button
              className={classes["button--alt"]}
              onClick={props.onHideCart}
            >
              Close
            </button>
          </div>
        </Fragment>
      )}
    </Modal>
  );
}

export default Cart;
