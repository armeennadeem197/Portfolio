import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white body-font">
        <div className="container px-5 py-8 mx-auto flex flex-col items-center text-center">
          <a className="flex title-font font-medium items-center justify-center text-white">
            <span className="ml-3 text-xl text-white font-bold">Armeen Nadeem</span>
          </a>
          <p className="text-sm mt-4">
            Copyright © 2024 ARMEENNADEEM - 
            <a className="ml-1" href="mailto:armeennadeem9@gmail.com">armeennadeem9@gmail.com</a>
          </p>
          <span className="inline-flex mt-4 justify-center">
            {/* Add any social icons or links here if needed */}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
