import React from 'react';

const Input = ({ htmlFor, id, type, placeholder, handleChange, label, value }) => {
  return (
    <label htmlFor={htmlFor}>
      {label || <span>{label}</span>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => handleChange && handleChange(event)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2"
      />
    </label>
  );
};

export default Input;
