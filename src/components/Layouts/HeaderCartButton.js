import React, { useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../assets/CartIcon";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.btn} ${btnIsHighlighted ? classes.bump : ''}`   

  

  useEffect(()=>{
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true)

    const timer = setTimeout(()=>{setBtnIsHighlighted(false)}, 300) 

    return () => {
      clearTimeout(timer);
    };
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      <div className={classes.badge}>{numberOfCartItems}</div>
    </button>
  );
};
export default HeaderCartButton;
