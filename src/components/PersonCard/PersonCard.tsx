import React from 'react';
import { Person } from '../../types/Person';
import './PersonCard.scss';

type Props = {
  personData: Person;
};

export const PersonCard: React.FC<Props> = ({ personData }) => {
  const { name, photo, phone, position, email } = personData;

  return (
    <article className="person">
      <img src={photo} alt={`portrait of ${name}`} className="person__photo" />
      <p className="person__name">{name}</p>
      <p className="person__position">{position}</p>
      <a href={`mailto:${email}`} className="person__email">
        {email}
      </a>
      <a href={`tel:${phone}`} className="person__phone">
        {phone}
      </a>
    </article>
  );
};
