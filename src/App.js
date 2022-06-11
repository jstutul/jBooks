import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About/About';
import Contact from './Pages/Contact/Contact/Contact';
import Shop from './Pages/Shop/Shop/Shop';
import Error from './Pages/Error/Error';
import Signup from "./Pages/Signup/Signup"
import Login from "./Pages/Login/Login"
import BookDetail from './Pages/Shop/BookDetail/BookDetail';
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route path="/book/details">
            <BookDetail />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route  path="/contact">
            <Contact />
          </Route>
          <Route  path="/signup">
            <Signup />
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
          <Route  path="*">
            <Error />
          </Route>
        </Switch>
  </Router>
  );
}

export default App;
