import classes from './Me.module.css'
import Daniel from '../../../assets/Daniel.jpg'
const Me = () => {
  return (
    <section className={classes.me}>
      <h2>Hello!</h2>
      <div>My name is Xintong Hu</div>
      <div>I live in Sydney</div>
      <img src={Daniel} alt="Daniel" />
      <p>Here are a few technologies I've been working with recently:</p>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>HTML5 and CSS3</li>
        <li>React</li>
        <li>Typescript</li>
        <li>Redux</li>
        <li>Firebase</li>
        <li>SQL</li>
        <li>Node.js</li>
      </ul>
      <p>👇Please check other projects that I made!👇</p>
      <a href="https://xintong.id.au/games/snake" target="_blank" rel="noreferrer">👉 Snake Game 👈</a>
      <a href="https://xintong.id.au/games/meme" target="_blank" rel="noreferrer">👉 Meme Match 👈</a>
      <h3>Get In Touch</h3>
      <p>I'm currently looking for new opportunities, my inbox is always open!</p>
      <a href = "mailto: huxt0516@gmail.com">Contact me via Email</a>
    </section>
  );
};

export default Me;
