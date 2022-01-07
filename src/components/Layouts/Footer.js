import {Link} from 'react-router-dom'
import classes from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Link to='/menu'>Menu</Link>
      <Link to='/location'>Store Locator</Link>
      <Link to='/daniel'>About me</Link>
      <Link to='/website'>About the Website</Link>
    </footer>
  )
};
export default Footer;
