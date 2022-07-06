import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Success from "./pages/success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
   <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Products/:category' component={ProductList} />
        <Route path='/Product/:id' component={Product} />
        <Route path='/Register'> {user ?<Redirect to='/'/> : <Register/>} </Route> 
        <Route path='/Login'> {user ? <Redirect to='/'/> : <Login/>} </Route>
        <Route path='/Cart' component={Cart} />
        <Route path='/success'> <Success /> </Route>
      </Switch>
    </Router>
  )
};

export default App;