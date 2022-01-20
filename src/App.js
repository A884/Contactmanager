import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
//import { render } from "@testing-library/react";
import { Provider } from "./Context";
import Contacts from "./Component/contacts/Contacts";
import Header from "./Component/layout/Header";
import AddContact from "./Component/contacts/AddContact";
import About from "./Component/Pages/About";
import Notfound from "./Component/Pages/Notfound";
import Vks from "./Component/test/Vks";
//import Switch from "react-bootstrap/esm/Switch";
function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="contact manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/Contact/add" component={AddContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/vks" component={Vks} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
