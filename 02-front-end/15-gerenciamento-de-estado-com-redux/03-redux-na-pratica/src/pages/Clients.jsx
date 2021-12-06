import React from 'react';
import { connect } from 'react-redux';
import ClientCard from '../components/ClientCard';
import { GiArchiveRegister } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const clientsList = (data) => {
  console.log(data);
  if (data.length) {
    return data.map((user) => (
      <ClientCard
        key={user.id}
        name={user.name}
        email={user.email}
        age={user.age}
        id={user.id}
      />
    ));
  }
  return (
    <span className="text-2xl self-center mt-12">
      Nenhum cliente cadastrado
    </span>
  );
};

const Clients = ({ authenticated, data }) => {
  // console.log(authenticated);
  return !authenticated ? (
    <span>Login não efetuado</span>
  ) : (
    <div className="flex flex-col items-center">
      <Link to="/register" className="flex flex-col items-center absolute top-4 right-4">
        <GiArchiveRegister className="text-6xl" />
        <span className="">Cadastrar</span>
      </Link>
      <span className="text-3xl m-8">Clientes cadastrados</span>
      <div className="flex flex-row flex-wrap justify-center place-content-start mt-12 content-evenly">
        {clientsList(data)}
      </div>
    </div>
  );
};

const mapStateProps = ({
  userAuth: { authenticated },
  registeredUsers: { data },
}) => ({ authenticated, data });

export default connect(mapStateProps)(Clients);
