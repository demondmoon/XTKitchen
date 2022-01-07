import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const postcodeRef = useRef();
  const [formValidity, setFormValidity] = useState({
    firstName: true,
    lastName: true,
    phone: true,
    street: true,
    city: true,
    postcode: true,
  });



  const inputIsNotEmpty = (value) => {
    return !(value.trim() === "");
  };

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredFistName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredPhone = phoneRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredPostcode = postcodeRef.current.value;

    const enteredFistNameValid = inputIsNotEmpty(enteredFistName);
    const enteredLastNameValid = inputIsNotEmpty(enteredLastName);
    const enteredPhoneValid = inputIsNotEmpty(enteredPhone);
    const enteredStreetValid = inputIsNotEmpty(enteredStreet);
    const enteredCityValid = inputIsNotEmpty(enteredCity);
    const enteredPostcodeValid = enteredPostcode.trim().length === 4;

    setFormValidity({
      firstName: enteredFistNameValid,
      lastName: enteredLastNameValid,
      phone: enteredPhoneValid,
      street: enteredStreetValid,
      city: enteredCityValid,
      postcode: enteredPostcodeValid,
    });

    const formIsValid =
      enteredFistNameValid &&
      enteredLastNameValid &&
      enteredPhoneValid &&
      enteredStreetValid &&
      enteredCityValid &&
      enteredPostcodeValid;

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
      firstName: enteredFistName,
      lastName: enteredLastName,
      phone: enteredPhone,
      street: enteredStreet,
      city: enteredCity,
      postcode: enteredPostcode
    });
  };

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div
        className={`${classes.control} ${
          !formValidity.firstName && classes.invalid
        }`}
      >
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" ref={firstNameRef} />
        {!formValidity.firstName && <p>Please enter your first name.</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.lastName && classes.invalid
        }`}
      >
        <label htmlFor="lastName">last Name:</label>
        <input type="text" id="lastName" ref={lastNameRef} />
        {!formValidity.lastName && <p>Please enter your last name.</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.phone && classes.invalid
        }`}
      >
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" ref={phoneRef} />
        {!formValidity.phone && <p>Please enter your phone number.</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.street && classes.invalid
        }`}
      >
        <label htmlFor="street">Street:</label>
        <input type="text" id="street" ref={streetRef} />
        {!formValidity.street && <p>Please enter a valid address.</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.city && classes.invalid
        }`}
      >
        <label htmlFor="city">City/Suburb:</label>
        <input type="text" id="city" ref={cityRef} />
        {!formValidity.city && <p>Please enter your city/suburb.</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.postcode && classes.invalid
        }`}
      >
        <label htmlFor="postcode">Postcode:</label>
        <input type="text" id="postcode" ref={postcodeRef} />
        {!formValidity.postcode && (
          <p>Please enter a valid postcode (e.g. 2000).</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        {/* 必须设置type="button"，这样它不会提交，type默认为submit */}
        <button>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
