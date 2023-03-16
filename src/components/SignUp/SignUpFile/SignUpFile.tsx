import React from 'react';
import cn from 'classnames';

export const SignUpFile = () => {
  return (
    <>
      <label className="sign-up__file-label">
        <input
          className="sign-up__file"
          type="file"
          onChange={(e) => console.log(e.target.value)}
        />
        <span className="sign-up__upload">Upload</span>
        <span className="sign-up__file-name">Upload your photo</span>
      </label>
      <span className={cn('sign-up__helper-text')}></span>
    </>
  );
};
