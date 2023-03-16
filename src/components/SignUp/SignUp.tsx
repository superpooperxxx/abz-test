import React from 'react';

import { SectionTitle } from '../SectionTitle';
import { SignUpField } from './SignUpField/SignUpField';
import './SignUp.scss';
import { SignUpRadio } from './SignUpRadio/SignUpRadio';
import { SignUpFile } from './SignUpFile/SignUpFile';

export const SignUp = () => {
  return (
    <section className="sign-up">
      <div className="container">
        <SectionTitle>Working with POST request</SectionTitle>
        <form className="sign-up__form">
          <SignUpField placeholder="Your name" />
          <SignUpField placeholder="Email" />
          <SignUpField placeholder="Phone" helper="+38 (XXX) XXX - XX - XX" />

          <SignUpRadio />

          <SignUpFile />

          <button className="sign-up__submit btn btn--disabled">Sign up</button>
        </form>
      </div>
    </section>
  );
};
