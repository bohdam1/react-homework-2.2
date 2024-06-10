import React, { Component } from 'react';
import { FormBook } from './form/Form'; 
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number, contacts } = this.state;

    
    const isDuplicate = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isDuplicate) {
      alert(`${name} is already in the contact list.`);
      return;
    }

    const newContact = { id: nanoid(), name, number };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: ''
    }));
  };

  handleFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <FormBook name={name} number={number} onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <h2>Contacts</h2>
        <Filter value={filter} onSearch={this.handleFilter} />
        <ContactsList contacts={filteredContacts} onDelete={this.handleDelete} />
      </div>
    );
  }
}
