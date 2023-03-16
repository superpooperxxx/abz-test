import React, { useState } from 'react';
import cn from 'classnames';

type Props = {
  errorMessage: string;
  placeholder: string;
  value: string;
  updateValue: (value: string) => void;
  helper?: string;
};

export const SignUpField: React.FC<Props> = ({
  errorMessage,
  placeholder,
  helper,
  value,
  updateValue,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="sign-up__field-container">
      <span
        className={cn('sign-up__field-label', {
          'sign-up__field-label--active': isActive || errorMessage,
          'sign-up__field-label--error': errorMessage,
        })}
      >
        {placeholder}
      </span>
      <input
        type="text"
        className={cn('sign-up__field', {
          'sign-up__field--error': errorMessage,
        })}
        placeholder={placeholder}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      />
      <span
        className={cn('sign-up__helper-text', {
          'sign-up__helper-text--error': errorMessage,
        })}
      >
        {errorMessage || helper}
      </span>
    </div>
  );
};
