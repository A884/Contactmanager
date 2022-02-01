import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

//import { propTypes } from "react-bootstrap/esm/Image";
import { Consumer } from "../../Context";

class Contact extends Component {
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete("https://jsonplaceholder.typicode.com/users/${id}");
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  state = {
    showContactInfo: false,
  };

  render() {
    const { id, name, email, phone } = this.props.Contact;
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
                <Link to={`contacts/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "Pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem",
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email :{email}</li>
                  <li className="list-group-item">Phone :{phone}</li>
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
