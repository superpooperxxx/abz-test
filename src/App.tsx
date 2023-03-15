import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Hero } from './components/Hero/Hero';

export const App: React.FC = () => (
  <>
    <Header />
    <Hero />
  </>
);
