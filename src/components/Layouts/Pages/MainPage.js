import { Fragment } from "react";
import classes from "./MainPage.module.css";
import Carousel from "../Carousel/Carousel";
import { CarouselData } from "../Carousel/CarouselData";
const MainPage = () => {
  return (
    <Fragment>
      <Carousel images={CarouselData} />
      <section className={classes["introduction"]}>
        <h2>Welcome to Xintong's website!</h2>
        <p>
          This responsive website is built with React and Firebase.
        </p>
        <p>
          All the images in the website belong to the Internet.
        </p>
        <p>
        This website is for learning and showcasing only. 
        </p>
      </section>
    </Fragment>
  );
};

export default MainPage;
