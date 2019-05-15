import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';

class Contacts extends Component {
  //We want to connect to store and get contacts when component mounts
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};
//Mapping state from redux to a local prop
const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

//Mapping dipatch action to a local prop
//Moved this to contactActions
// const mapDispatchToProps = dispatch => ({
//   getContacts: () => dispatch({ type: GET_CONTACTS })
// });

// params include what ever we want to include from the redux state and what we need to dispatch (action)
export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
