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
import EmailVerification from './component/Body/EmailVerification';
import MyOrder from './component/Dashboard/MyOrder';
import VerficationInfo from './component/Body/VerficationInfo';
import Service from './component/Service/Service';
import Dashnav from './component/Dashboard/Header/Dashnav';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/my/order">
            <Dashnav />
            <MyOrder />
            <Footer />
          </Route>
          <Route path="/verify/info">
            <Header />
            <VerficationInfo />
            <Footer />
          </Route>
          <Route path="/user/confirm/:token">
            <Header />
            <EmailVerification />
            <Footer />
          </Route>
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
          <Route path="/services">
            <Header/>
            <Service />
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
