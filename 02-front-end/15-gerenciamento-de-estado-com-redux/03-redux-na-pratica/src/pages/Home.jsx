import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => (
  <div className="flex flex-col place-self-center items-center w-2/3 h-32">
    <h1 className="font-sans text-lg text-gray-800 text-center m-auto text-5xl">
      Home
    </h1>

    <Link to="/login">
      <Button type="button" label="Login" />
    </Link>
  </div>
);

export default Home;
