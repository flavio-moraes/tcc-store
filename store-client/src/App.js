import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {BrowserRouter as Router, Switch, Route, Link as Lnk, Redirect} from "react-router-dom";


function App() {
  const userIsLogged = false;
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/

    //<Home/>
    //<ProductList/>
    //<ProductDetail/>
    //<Register/>
    //<Login/>

    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/produtos/:category">
          <ProductList/>
        </Route>
        <Route path="/produto/:id">
          <ProductDetail/>
        </Route>
        <Route path="/carrinho">
          <Cart/>
        </Route>
        <Route path="/login">
          {userIsLogged ? <Redirect to="/"/> : <Login/>}
        </Route>
        <Route path="/registro">
          {userIsLogged ? <Redirect to="/"/> : <Register/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
