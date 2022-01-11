
import React, { Component } from "react";
import PropTypes from "prop-types";

//import { propTypes } from "react-bootstrap/esm/Image";
import { Consumer } from "../../Context";


class Contact extends Component {
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  state = {
    showContactInfo: false,
  };

  render() {
    const { id, name, email, phone, age } = this.props.Contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                {""}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo,
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "Pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "Pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email :{email}</li>
                  <li className="list-group-item">Phone :{phone}</li>
                  <li className="list-group-item">Age:{age}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
