import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
//import { render } from "@testing-library/react";
import { Provider } from "./Context";
import Contacts from "./Component/contacts/Contacts";
import Header from "./Component/layout/Header";
import AddContact from "./Component/contacts/AddContact";
function App() {
  return (
    <Provider>
      <div className="App">
        This is my first react app
        <Header branding="contact manager" />
        <div className="Container">
          <AddContact />
        </div>
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
