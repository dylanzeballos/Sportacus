import React from 'react';

const DarkMode = ({ selected, setSelected }) => {
  return (
    <div className="flex items-center">
      <span className="mr-2 text-sm">Light</span>
      <button
        onClick={() => setSelected(selected === "light" ? "dark" : "light")}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
          selected === "light" ? "bg-gray-400" : "bg-gray-600"
        }`}
      >
        <span
          className={`transform transition-transform duration-200 ease-in-out inline-block w-4 h-4 bg-white rounded-full ${
            selected === "light" ? "translate-x-1" : "translate-x-6"
          }`}
        ></span>
      </button>
      <span className="ml-2 text-sm">Dark</span>
    </div>
  );
};

export default DarkMode;
