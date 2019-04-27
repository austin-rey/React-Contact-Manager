import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";
class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (id, dispatch) => {
    //Dispatch takes in an action (Type) and a payload
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    //Destructuring of props
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  style={{ cursor: "pointer" }}
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                />
                <i
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times"
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

//Validate properties
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;