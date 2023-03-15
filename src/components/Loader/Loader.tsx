import React from 'react';
import LoaderImg from '../../static/loader-icon.svg';
import './Loader.scss';

export const Loader: React.FC = () => (
  <div className="loader" aria-label="data is loading">
    <img src={LoaderImg} alt="loading spinner" className="loader__spinner" />
  </div>
);
