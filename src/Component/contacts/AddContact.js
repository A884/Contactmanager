import React, { Component } from "react";
import { Consumer } from "../../Context";
import { v4 as uuidv4 } from "uuid";
import TextInputGrup from "../layout/TextInputGrup";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    age: "",
  e};

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone, age } = this.state;

    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
      age,
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });
  };

  render() {
    const { name, email, phone, age } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-Header">AddContact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">name</label>
                    <TextInputGrup
                      label="Name"
                      name="name"
                      placeholder="Entername"
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">email</label>
                    <TextInputGrup
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="email"
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">phone</label>
                    <TextInputGrup
                      label="Phone"
                      name="phone"
                      placeholder="Enterphone"
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">age</label>
                    <TextInputGrup
                      label="age"
                      name="age"
                      type="number"
                      placeholder="Enter_Age"
                      value={age}
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="AddContact"
                    className="btn btn-block btn-primary  my-3"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
