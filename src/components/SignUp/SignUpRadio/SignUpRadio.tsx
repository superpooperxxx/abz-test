import React, { useEffect, useState } from 'react';
import { getPositions } from '../../../api/users';
import { Position } from '../../../types/Position';
import cn from 'classnames';

export const SignUpRadio = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [positionId, setPositionId] = useState(0);

  useEffect(() => {
    getPositions()
      .then((res) => res.data.positions)
      .then((positions) => {
        setPositions(positions);
        setPositionId(positions[0].id);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <div className="sign-up__radio">
      <p className="sign-up__radio-title">Select your position</p>
      <ul className="sign-up__options">
        {positions.map((position) => (
          <li className="sign-up__option-item" key={position.id}>
            <button
              className={cn('sign-up__option', {
                'sign-up__option--active': positionId === position.id,
              })}
              type="button"
              onClick={() => setPositionId(position.id)}
            >
              {position.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
