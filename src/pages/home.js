import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400 mb-4">
        Selamat Datang di JavaPalma
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8">
        DApp investasi & donasi pertanian.
      </p>
      <div className="flex gap-4">
        <Link to="/donasi" className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Donasi Sekarang
        </Link>
        <Link to="/investasi" className="px-5 py-3 border border-green-600 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-100 dark:hover:bg-green-800 transition">
          Lihat Investasi
        </Link>
      </div>
    </div>
  );
}

export default Home;
