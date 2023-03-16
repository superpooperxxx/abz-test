import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Person } from '../../types/Person';
import './PersonCard.scss';

type Props = {
  personData: Person;
};

export const PersonCard: React.FC<Props> = ({ personData }) => {
  const { name, photo, phone, position, email } = personData;
  const tooltip = useRef<HTMLSpanElement | null>(null);
  const personCard = useRef(null);

  useEffect(() => {
    if (personCard.current) {
      gsap.to('.person', {
        opacity: 1,
        duration: 1,
        delay: 0.3,
      });
    }
  }, []);

  const tooltipHandler = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    if (tooltip.current) {
      tooltip.current.style.left = `${x}px`;
      tooltip.current.style.top = `${y}px`;
    }
  };

  return (
    <article className="person" ref={personCard}>
      <img src={photo} alt={`portrait of ${name}`} className="person__photo" />
      <p className="person__name">{name}</p>
      <p className="person__position">{position}</p>
      <div className="person__email-container">
        <a
          href={`mailto:${email}`}
          className="person__email"
          onMouseMove={tooltipHandler}
        >
          {email}
        </a>
        <span className="person__tooltip" ref={tooltip}>
          {email}
        </span>
      </div>
      <a href={`tel:${phone}`} className="person__phone">
        {phone}
      </a>
    </article>
  );
};
