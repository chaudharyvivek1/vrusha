import React from 'react';

const navbar = () => {
  return (
    <nav>
        <ul className='flex gap-3.5 justify-end w-100vh m-5 p-2 pr-10  bg-red-950 rounded-4xl'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  );
}

export default navbar;
