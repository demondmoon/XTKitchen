import classes from './Website.module.css'
const Website = () => {
  return (
    <section className={classes.about}> 
      <div>This website is built with React and Firebase!</div>
      <div>It is used for showcasing what I have learned. </div>
      <div>New functionalities such as order checking and authentication will be added soon!</div>
    </section>
  );
};

export default Website;
