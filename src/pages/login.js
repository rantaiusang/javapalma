import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginMethod, setLoginMethod] = useState('');
  const navigate = useNavigate();

  const loginWithWeb3 = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const wallet = accounts[0];
        localStorage.setItem('wallet', wallet);
        localStorage.setItem('loginMethod', 'web3');
        setLoginMethod('web3');
        navigate('/profile');
      } catch (err) {
        alert('Login Web3 gagal: ' + err.message);
      }
    } else {
      alert('Metamask tidak ditemukan.');
    }
  };

  const loginWithPi = async () => {
    if (window.Pi) {
      try {
        const scopes = ['username', 'payments'];
        window.Pi.authenticate(scopes, function (auth) {
          const username = auth.user?.username || 'unknown';
          localStorage.setItem('wallet', username);
          localStorage.setItem('loginMethod', 'pi');
          setLoginMethod('pi');
          navigate('/profile');
        });
      } catch (err) {
        alert('Login Pi Wallet gagal: ' + err.message);
      }
    } else {
      alert('Pi Wallet belum tersedia di window.');
    }
  };

  return (
    <main>
      <h1>Login</h1>
      <p>Silakan login menggunakan dompet Pi atau Web3 (Metamask)</p>
      <button onClick={loginWithWeb3}>Login dengan Web3</button> &nbsp;
      <button onClick={loginWithPi}>Login dengan Pi Wallet</button>
    </main>
  );
};

export default Login;
