import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Login from './component/Registration/Login';
import Admin from './component/Registration/AdminLogin';
import Home from './component/Body/Home';
import Register from './component/Registration/Register';
import  Cards  from './component/Design/Cards';
import Contact from './component/Body/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/sign-in">
            <Header/>
            <Login />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header/>
            <Contact />
            <Footer />
          </Route>
          <Route path="/signup">
            <Header />
            <Register />
            <Footer />
          </Route>
          <Route path="/">
            <Header/>
            <Home />
            <Cards />
            <Footer />
          </Route>
        </Switch>
     </div>
    </Router>
  );
}

export default App;
