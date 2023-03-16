import React from 'react';

type Props = {
  children: string;
};

export const SectionTitle: React.FC<Props> = ({ children }) => (
  <h2 className="people__title">{children}</h2>
);
