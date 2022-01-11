//import { getDefaultNormalizer } from "@testing-library/dom";
import React, { Component } from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map((contact) => (
                <Contact key={contact.id} Contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  Contact: PropTypes.object.isRequired,
};

export default Contacts;
