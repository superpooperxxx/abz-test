import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Hero } from './components/Hero/Hero';
import { People } from './components/People/People';
import { SignUp } from './components/SignUp/SignUp';

export const App: React.FC = () => (
  <>
    <Header />
    <Hero />
    <People />
    <SignUp />
  </>
);
