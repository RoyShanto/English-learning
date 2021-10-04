import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import AboutUs from './component/AboutUs/AboutUs';
import Services from './component/Services/Services';
import NotFound from './component/NotFound/NotFound';
import ContactUs from './component/Contact/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/home"><Home /> </Route>
          <Route path="/services"> <Services /> </Route>
          <Route path="/aboutus"> <AboutUs /> </Route>
          <Route path="/contactus"> <ContactUs /> </Route>
          <Route exact path="*"> <NotFound /> </Route>
        </Switch>
        <Footer />
      </Router>,
    </div>
  );
}

export default App;
