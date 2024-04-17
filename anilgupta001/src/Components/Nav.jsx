import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [login, setLogin] = useState("Login/Register");

  useEffect(() => {
    const localValue = localStorage.getItem('login');
    if (localValue) {
      setLogin(localValue);
    }
  }, []);
const navigator=useNavigate();
  return (
    <div className='bg-black shadow-xl'>
      <div className='flex justify-between'>
        <a href="https://anilgupta001.com">
          <img className='p-1' width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Meesho_logo.png/600px-Meesho_logo.png" alt="" />
        </a>
        <div className='pt-1'>
          <input className='py-2 border-spacing-2 rounded-l-xl' type="text" placeholder='Search' />
          <input className='py-2 bg-green-500 rounded-r-xl p-2 text-white hover:bg-blue-500' type="submit" placeholder='Search' />
        </div>
        <ul className='py-2 text-white'>
          <i><a href='/Product'>Product</a></i>
        </ul>
        <ul className='py-2 text-white'>
          <i><a href="">{login}</a></i>
        </ul>
        <ul className='py-2 mr-2 text-white'>
          <i><a href="">Favorite</a></i>
        </ul>
        <ul className='py-2 mr-2 text-white'>
          <i><a href="">Cart</a></i>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
