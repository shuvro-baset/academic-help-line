
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Teachers from './Components/Teachers/Teachers';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route  path="/services">
            <Services></Services>
          </Route>
          <Route path="/teachers">
            <Teachers></Teachers>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
