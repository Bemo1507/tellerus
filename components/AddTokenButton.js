import React from 'react';

const AddTokenButton = () => {
  const addTokenToMetaMask = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const success = await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: '0x745b28b60E1459687e6907dBF9c1685C2454A1Aa',
              symbol: 'TELLER',
              decimals: 18,
              image: 'https://tellertoken.wordpress.com/wp-content/uploads/2025/01/teller-logo-200x40200-px.jpg',
            },
          },
        });

        if (success) {
          alert('Token berhasil ditambahkan ke MetaMask!');
        } else {
          alert('Gagal menambahkan token.');
        }
      } catch (error) {
        console.error('Error adding token:', error);
      }
    } else {
      alert('MetaMask tidak terdeteksi. Pastikan lo udah install!');
    }
  };

  return <button onClick={addTokenToMetaMask}>Add Teller Token to MetaMask</button>;
};

export default AddTokenButton;
