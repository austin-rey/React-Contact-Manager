//Context API - Provider that wraps around our whole application
import React, { Component } from "react";
//Create Context Object
const Context = React.createContext();
//action will be an object with a type which will be evaluated in the function
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        //This is a rest operator, we only want to change contacts in our state
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
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
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karren Doe",
        email: "kdoe@gmail.com",
        phone: "666-666-6666"
      },
      {
        id: 3,
        name: "Austin Reynaud",
        email: "arey@gmail.com",
        phone: "111-111-1111"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

//Export consumer
export const Consumer = Context.Consumer;
