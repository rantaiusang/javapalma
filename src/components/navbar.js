import React, { useEffect, useState } from 'react';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <div className="font-bold">JavaPalma</div>
      <button onClick={() => setDarkMode(!darkMode)} className="bg-white text-green-600 px-3 py-1 rounded">
        {darkMode ? 'Light' : 'Dark'}
      </button>
    </nav>
  );
}

export default Navbar;
