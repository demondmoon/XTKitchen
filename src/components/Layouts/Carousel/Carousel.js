import { useState, useEffect, useCallback } from "react";

import classes from "./Carousel.module.css";

// import {
//   FaArrowAltCircleLeft as LeftArrow,
//   FaArrowAltCircleRight as RightArrow,
// } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [currentImg, setCurrentImg] = useState(1);
  const totalImage = images.length;

  const leftSlide = () => {
    if (currentImg === 1) {
      setCurrentImg(totalImage);
    } else {
      setCurrentImg(currentImg - 1);
    }
  };

  const rightSlide = useCallback(() => {
    if (currentImg === totalImage) {
      setCurrentImg(1);
    } else {
      setCurrentImg(currentImg + 1);
    }
  }, [setCurrentImg, totalImage, currentImg]);

  const changeSlide = useCallback((id) => {
    setCurrentImg(id);
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(() => rightSlide(), 5000);
    return () => clearInterval(autoSlide);
  }, [rightSlide]);

  // if(!Array.isArray(images) || totalImage <= 0) {
  //   return <div>Please provide pictures.</div>;
  // }  // 判断传递来的images是否为array，判断内部是否有元素，如果用typescript则无需这个东西。

  return (
    <section className={classes.slider}>
      <div className={classes.left} onClick={leftSlide}>
        <span className={classes.arrow}></span>
      </div>
      <div className={classes.right} onClick={rightSlide}>
      <span className={classes.arrow}></span>
      </div>
      {images.map((img) => {
        return (
          <div
            key={img.id}
            className={
              currentImg === img.id
                ? `${classes.slide} ${classes.active}`
                : `${classes.slice}`
            }
          >
            {currentImg === img.id && (
              <img src={img.image} className={classes.image} alt={img.alt} />
            )}
          </div>
        );
      })}
      <div className={classes.bottom}>
        {images.map(img=> {
          return <button key={img.id} onClick={()=>changeSlide(img.id)} className={`${classes.changeDot} ${currentImg === img.id && classes.active}`}></button>
        })}
      </div>
    </section>
  );
};

export default Carousel;
