import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Login from './component/Registration/Login';
import Home from './component/Body/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Router path="/login">
            <Login />
          </Router>
          <Route path="/">
            <Header/>
            <Home />
            <Footer />
            </Route>
        </Switch>
     </div>
    </Router>
  );
}

export default App;
