import React, { useState, useMemo } from 'react';
import cn from 'classnames';

import { SectionTitle } from '../SectionTitle';
import { SignUpField } from './SignUpField/SignUpField';
import './SignUp.scss';
import { SignUpRadio } from './SignUpRadio/SignUpRadio';
import { SignUpFile } from './SignUpFile/SignUpFile';
// import { postNewUser } from '../../api/users';

const allowedFileFormats = ['image/jpeg', 'image/jpg'];

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [positionId, setPositionId] = useState(0);
  const [photo, setPhoto] = useState<File | null>(null);

  // Error messages
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [errorFile, setErrorFile] = useState('');

  const img = useMemo(() => new Image(), []);
  if (photo) {
    img.src = URL.createObjectURL(photo);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !phone || !photo) {
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

    const imgArea = img.height * img.width;

    const isFileValid =
      allowedFileFormats.includes(photo.type) &&
      photo.size / 1024 <= 5000 &&
      imgArea > 70 * 70;

    // Setting error messages
    if (!isNameValid) {
      setErrorName('Letter only, length from 2 to 60');
      return;
    }

    if (!isEmailValid) {
      setErrorEmail('Invalid email');
      return;
    }

    if (!isPhoneValid) {
      setErrorPhone('Check the format +38 (0XX) XXX - XX - XX');
      return;
    }

    if (!isFileValid) {
      setErrorFile('Minimal size is 70x70, formats: jpg or jpeg, <5MB');
      return;
    }

    const newUser = new FormData();

    newUser.append('name', name);
    newUser.append('email', email);
    newUser.append('phone', phone);
    newUser.append('position_id', String(positionId));
    newUser.append('photo', photo);

    const TOKEN =
      'eyJpdiI6IlkxZG9DNDZmaFQ3QjMrWFFaOVBvQUE9PSIsInZhbHVlIjoiY3p2R3F2dWxESEpvclwvbTRKaUNqMHZuanI3bDgyaHprZnpsMUVCaFAzUG84aXZPYW1tS3NEOWMwRGo1TU5KNkR2R0lzeUNPTDZRUU1vcTRDZDR2a3BnPT0iLCJtYWMiOiIyZTMzMjc4YTU0YTc5M2FmY2JkNDIyNjA1MDdjZDllZmI0OWJhYzBmOWI1NTdlMDVjZTYwM2JkYjAyNWM3NDlmIn0=';

    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      body: newUser,
      headers: { Token: TOKEN },
    }).then((res) => console.log(res));
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

          <SignUpFile updateFile={setPhoto} errorMessage={errorFile} />

          <button
            className={cn('sign-up__submit btn', {
              'btn--disabled': !name || !email || !phone || !photo,
            })}
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};
