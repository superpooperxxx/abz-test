import React, { useState } from 'react';
import cn from 'classnames';

type Props = {
  placeholder: string;
  helper?: string;
};

export const SignUpField: React.FC<Props> = ({ placeholder, helper }) => {
  const [isActive, setIsActive] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="sign-up__field-container">
      <span
        className={cn('sign-up__field-label', {
          'sign-up__field-label--active': isActive,
          'sign-up__field-label--error': isError,
        })}
      >
        {placeholder}
      </span>
      <input
        type="text"
        className={cn('sign-up__field', {
          'sign-up__field--error': isError,
        })}
        placeholder={placeholder}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
      <span
        className={cn('sign-up__helper-text', {
          'sign-up__helper-text--error': isError,
        })}
      >
        {helper}
      </span>
    </div>
  );
};
