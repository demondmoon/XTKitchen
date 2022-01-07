import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import MainPage from "./components/Layouts/Pages/MainPage";
import MenuPage from './components/Layouts/Pages/MenuPage'
import ScrollToTop from "./helper/ScrollToTop";
import CartProvider from "./store/CartProvider";
import Me from "./components/Layouts/Pages/Me";
import Website from "./components/Layouts/Pages/Website";
import Location from "./components/Layouts/Pages/Location";

const App = () => {
  return (
    <CartProvider>
    <Layout>
      <ScrollToTop>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <MainPage />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/menu`}>
            <MenuPage />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/location`}>
            <Location />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/daniel`}>
            <Me />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/website`}>
            <Website />
          </Route>
        </Switch>
      </ScrollToTop>
    </Layout>
    </CartProvider>
  );
};
export default App;
