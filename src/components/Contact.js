import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    //Destructuring of props
    const { name, email, phone } = this.props;
    return (
      <div className="App">
        <h4>{name}</h4>
        <ul>
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
      </div>
    );
  }
}

//Validate properties
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
