import React, { useState } from 'react';
import cn from 'classnames';

type Props = {
  updateFile: (file: File) => void;
  errorMessage: string;
};

export const SignUpFile: React.FC<Props> = ({ updateFile, errorMessage }) => {
  const [fileName, setFileName] = useState('');

  const handleFile = (event) => {
    const file = event.target.files[0];
    const name = file.name;

    setFileName(name);

    updateFile(file);
  };

  return (
    <>
      <label className="sign-up__file-label">
        <input className="sign-up__file" type="file" onChange={handleFile} />
        <span
          className={cn('sign-up__upload', {
            'sign-up__upload--error': errorMessage,
          })}
        >
          Upload
        </span>
        <span
          className={cn('sign-up__file-name', {
            'sign-up__file-name--loaded': fileName,
            'sign-up__file-name--error': errorMessage,
          })}
        >
          {fileName || 'Upload your photo'}
        </span>
        <span
          className={cn('sign-up__helper-text', {
            'sign-up__helper-text--error': errorMessage,
          })}
        >
          {errorMessage}
        </span>
      </label>
    </>
  );
};
