import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "jone Doe",
        email: "jdoe@gmail.com",
        phone: "345432345",
        age: "54",
      },

      {
        id: 2,
        name: "karan singh",
        email: "karan@gmail.com",
        phone: "87654423",
        age: "36",
      },
      {
        id: 3,
        name: "vashishth",
        email: "vks@gmail.com",
        phone: "76579425",
        age: "20",
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
