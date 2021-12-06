import React from 'react';
import user from '../images/user.png';

const ClientCard = ({ name, email, age, id }) => {
  return (
    <div className="flex flex-row h-24 w-auto items-center m-2 border">
      <img className="h-16 m-2" src={user} alt="user avatar" />
      <div className="flex flex-col m-2">
        <span>Nome: {name}</span>
        <span>E-mail: <span className="italic">{email}</span></span>
        <span>Idade: {age}</span>
        <span >UUID: <span className="text-xs">{id}</span></span>
      </div>
    </div>
  );
};

export default ClientCard;
