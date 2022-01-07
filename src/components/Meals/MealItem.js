import { useContext, useState, Fragment } from "react";
import MealForm from "./MealForm";
import classes from "./MealItem.module.css";
import CartContext from "../../store/cart-context";
import MealDetail from "./MealDetail";

function MealItem(props) {
  const [picIsShown, setPicIsShown] = useState(false);

  const showPicHandler = () => {
    setPicIsShown(true);
  };

  const hidePicHandler = () => {
    setPicIsShown(false);
  };
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    // 在child调用这个函数时，就会向其传递amount参数
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount, // 这个amount的值，来自child组件
      price: props.price,
    });
  };

  return (
    <Fragment>
      {picIsShown && (
        <MealDetail
          src={require(`../../assets/mealpic/${props.src}.jpg`).default}
          alt={props.name}
          name={props.name}
          price={props.price}
          description={props.description}
          onHidePic={hidePicHandler}
        />
      )}
      <div className={classes.meal}>
        <img
          src={require(`../../assets/mealpic/${props.src}.jpg`).default}
          alt={props.name}
          className={classes.mealImg}
          onClick={showPicHandler}
        />
        <h3 className={classes.title} onClick={showPicHandler}>{props.name}</h3>
        <MealForm id={props.id} onAddToCart={addToCartHandler} />
        <div className={classes.price}>{`${price}`}</div>
      </div>
    </Fragment>
  );
}

export default MealItem;
