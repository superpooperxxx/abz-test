import React from 'react';
import './Hero.scss';

export const Hero = () => (
  <section className="hero page__hero">
    <div className="hero__container container">
      <div className="hero__content">
        <h1 className="hero__title">Test assignment for front-end developer</h1>
        <p className="hero__text">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they&apos;ll be building web interfaces with accessibility
          in mind. They should also be excited to learn, as the world of
          Front-End Development keeps evolving.
        </p>
        <div className="hero__btn">
          <button className="btn" type="button">
            Sign up
          </button>
        </div>
      </div>
    </div>
  </section>
);
