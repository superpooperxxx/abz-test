import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.scss';

export const Hero = () => {
  const heroContent = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heroContent.current) {
      gsap.fromTo(
        heroContent?.current.childNodes,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 3,
          stagger: 0.5,
          delay: 0.3,
        }
      );
    }
  }, []);

  return (
    <section className="hero page__hero">
      <div className="hero__container container">
        <div className="hero__content" ref={heroContent}>
          <h1 className="hero__title">
            Test assignment for front-end developer
          </h1>
          <p className="hero__text">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they&apos;ll be building web interfaces with
            accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.
          </p>
          <div className="hero__btn">
            <a className="btn" type="button" href="#sign-up">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
