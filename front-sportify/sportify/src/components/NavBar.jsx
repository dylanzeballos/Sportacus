import React, { useState } from 'react';
import {Link} from "react-router-dom"; 
import DarkMode from './DarkMode';

const Navbar = () => {
  const [selected, setSelected] = useState("light");

  return (
    <header
      className={`text-gray-400 body-font transition-colors duration-300 ${
        selected === "light" ? "bg-[#6177A6]" : "bg-slate-900"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-100 dark:text-white mb-4 md:mb-0">
          <img className="block lg:hidden h-20 w-20" src="/LOGOTIPO.png" alt="Logo" />
          <img className="hidden lg:block h-25 w-auto" src="/LOGOTIPO.png" alt="Logo" />
          <span className="ml-3 text-xl">Sportify</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center">
          <a class="mr-5 hover:text-white dark:hover:text-white">Inicio</a>
          <a class="mr-5 hover:text-white dark:hover:text-white">Biblioteca</a>
          <a class="mr-5 hover:text-white dark:hover:text-white">Reproductor</a>
          <a class="mr-5 hover:text-white dark:hover:text-white">Fourth Link</a>
        </nav>
        <div>
          <DarkMode selected={selected} setSelected={setSelected} />
        </div>
          <button className="ml-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Registrar
          </button>
      </div>
    </header>
  );
};

export default Navbar;
