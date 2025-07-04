import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const wallet = localStorage.getItem('wallet');
  const method = localStorage.getItem('loginMethod');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <main>
      <h1>Profil Pengguna</h1>
      {wallet ? (
        <>
          <p><strong>Login via:</strong> {method}</p>
          <p><strong>Alamat Wallet / Username:</strong> {wallet}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Kamu belum login. Silakan login terlebih dahulu.</p>
      )}
    </main>
  );
};

export default Profile;
