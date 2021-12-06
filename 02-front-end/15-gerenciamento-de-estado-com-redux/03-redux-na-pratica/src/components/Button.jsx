import React from 'react';

const Button = ({
  label,
  type,
  disabled,
  onButtonClick,
  clearInput,
  data,
  setUserId,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={() => {
        setUserId && setUserId();
        onButtonClick && onButtonClick(data);
        clearInput && clearInput();
      }}
      className={
        disabled
          ? 'bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed m-2'
          : 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2'
      }
    >
      {label}
    </button>
  );
};

export default Button;
