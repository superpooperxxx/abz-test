import React, { useState } from 'react';
import cn from 'classnames';

import { SectionTitle } from '../SectionTitle';
import { SignUpField } from './SignUpField/SignUpField';
import './SignUp.scss';
import { SignUpRadio } from './SignUpRadio/SignUpRadio';
import { SignUpFile } from './SignUpFile/SignUpFile';

const allowedFileFormats = ['image/jpeg', 'image/jpg'];

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [positionId, setPositionId] = useState(0);
  const [file, setFile] = useState<File | null>(null);

  // Error messages
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [errorFile, setErrorFile] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !phone || !file) {
      return;
    }

    // Reset Error Messages
    setErrorName('');
    setErrorEmail('');
    setErrorPhone('');
    setErrorFile('');

    // Checking if all fields are valid
    const isNameValid = /^[a-zA-Z]{2,60}$/.test(name);
    const isEmailValid =
      /^[a-zA-Z0-9._%+-]{2,100}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,100}$/.test(email);
    const isPhoneValid = /^\+380\d{9}$/.test(phone);
    const isFileValid =
      allowedFileFormats.includes(file.type) && file.size > 70 * 70;

    // Setting error messages
    if (!isNameValid) {
      setErrorName('Letter only, length from 2 to 60');
    }

    if (!isEmailValid) {
      setErrorEmail('Invalid email');
    }

    if (!isPhoneValid) {
      setErrorPhone('Check the format +38 (0XX) XXX - XX - XX');
    }

    if (!isFileValid) {
      setErrorFile('Minimal size is 70x70, formats: jpg or jpeg');
    }
  };

  return (
    <section className="sign-up">
      <div className="container">
        <SectionTitle>Working with POST request</SectionTitle>
        <form className="sign-up__form" onSubmit={handleSubmit}>
          <SignUpField
            errorMessage={errorName}
            placeholder="Your name"
            value={name}
            updateValue={setName}
          />
          <SignUpField
            errorMessage={errorEmail}
            placeholder="Email"
            value={email}
            updateValue={setEmail}
          />
          <SignUpField
            errorMessage={errorPhone}
            placeholder="Phone"
            value={phone}
            updateValue={setPhone}
            helper="+38 (XXX) XXX - XX - XX"
          />

          <SignUpRadio value={positionId} updateValue={setPositionId} />

          <SignUpFile updateFile={setFile} errorMessage={errorFile} />

          <button
            className={cn('sign-up__submit btn', {
              'btn--disabled': !name || !email || !phone || !file,
            })}
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};
