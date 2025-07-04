import React, { useState } from 'react';
import Web3 from 'web3';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../contract';

const Investasi = () => {
  const [amount, setAmount] = useState('');

  const invest = async () => {
    if (!window.ethereum) return alert("Metamask belum tersedia");

    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
      const valueInWei = web3.utils.toWei(amount, 'ether');

      await contract.methods.invest().send({
        from: accounts[0],
        value: valueInWei,
      });

      alert('Investasi berhasil!');
    } catch (err) {
      alert('Gagal: ' + err.message);
    }
  };

  return (
    <main>
      <h1>Investasi di JavaPalma</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Jumlah ETH"
      />
      <button onClick={invest}>Invest Sekarang</button>
    </main>
  );
};

export default Investasi;
