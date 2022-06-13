import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {BrowserRouter as Router, Switch, Route, Link as Lnk, Redirect, BrowserRouter, Routes, Navigate} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { privateRequest } from './requestMethods';
import { update } from './redux/userSlice';
import Dashboard from './pages/dashboard/Dashboard';
import List from './pages/dashboard/List';
import Single from './pages/dashboard/Single';
import New from './pages/dashboard/New';


function App() {
  //const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.info);
  const userInputs = "";
  const productInputs = "";

useEffect(async () => {
  //setLoading(false); return;
  try {
    const res = await privateRequest.get("/auth/session");
    console.log(res);
    dispatch(update(res.data));
    setLoading(false);
  } catch(err) {
    console.log(err);
    setLoading(false);
  }
}, []);

/*
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      }).then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("Autenticação falhou.");
      }).then((resObject) => {
        setUser(resObject.user);
      }).catch((err) => {
        console.log(err);
      });
    };
    getUser();
  }, []);
*/
  console.log(user);

  if (isLoading) {
    return (<div>loading...</div>);
  }

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

    /*<Router>
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
          {user ? <Redirect to="/"/> : <Login/>}
        </Route>
        <Route path="/registro">
          {user ? <Redirect to="/"/> : <Register/>}
        </Route>
      </Switch>
    </Router>*/


    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/produtos/:category" element={<ProductList />} />
        <Route path="/produto/:id" element={<ProductDetails />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/registrar" element={user ? <Navigate to="/" /> : <Register />} />

        <Route path="/gerenciamento" element={user?.role !== "admin" && <Navigate to="/" />}>
            <Route index element={<Dashboard />} />
            <Route path="usuarios">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="novo" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path="produtos">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="novo" element={<New inputs={productInputs} title="Add New Product" />} />
            </Route>
        </Route>

        <Route path="*" element={<p>Página não encontrada: Erro 404!</p>} />
      </Routes>
    </BrowserRouter>
    //<Route path="/conta" element={user ? <Acount /> : <Navigate to="/login" />} />    exemplo de rota privada


  );
}

export default App;
