// import React, { Component } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const NameInputId = nanoid();
  const NumberInputId = nanoid();

  const handleChangeNumber = evt => {
    setNumber(evt.currentTarget.value);
  };
  const handleChangeName = evt => {
    setName(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const contact = { name: name, number: number };
    onSubmit(contact);

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formLabel} htmlFor={NameInputId}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Contact name"
          onChange={handleChangeName}
          value={name}
          id={NameInputId}
          className={css.formName}
        />
      </label>
      <label className={css.formLabel} htmlFor={NumberInputId}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Contact tel. number"
          onChange={handleChangeNumber}
          value={number}
          id={NumberInputId}
          className={css.formNumber}
        />
      </label>
      <button className={css.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
}

// export default class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   NameInputId = nanoid();
//   NumberInputId = nanoid();

//   handleChangeNumber = evt => {
//     this.setState({ number: evt.currentTarget.value });
//   };
//   handleChangeName = evt => {
//     this.setState({ name: evt.currentTarget.value });
//   };

// handleSubmit = evt => {
//   evt.preventDefault();

//   this.props.onSubmit(this.state);
//   this.reset();
// };
// reset = () => {
//   this.setState({ name: '', number: '' });
// };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={css.form} onSubmit={this.handleSubmit}>
//         <label className={css.formLabel} htmlFor={this.NameInputId}>
//           Name
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             placeholder="Contact name"
//             onChange={this.handleChangeName}
//             value={name}
//             id={this.NameInputId}
//             className={css.formName}
//           />
//         </label>
//         <label className={css.formLabel} htmlFor={this.NumberInputId}>
//           Number
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             placeholder="Contact tel. number"
//             onChange={this.handleChangeNumber}
//             value={number}
//             id={this.NumberInputId}
//             className={css.formNumber}
//           />
//         </label>
//         <button className={css.formButton} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
