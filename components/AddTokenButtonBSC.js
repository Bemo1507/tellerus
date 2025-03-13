import React from 'react';

const AddTokenButtonBSC = () => {
  const addTokenToMetaMask = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const success = await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: '0x562b07E9f73Dabbc737Ec669f474B9516cD94D63', // Ganti dengan contract address token di BSC
              symbol: 'TELLER', // Ganti dengan symbol token
              decimals: 18, // Sesuai token lo
              image: 'https://tellertoken.wordpress.com/wp-content/uploads/2025/01/teller-logo-200x40200-px.jpg', // Ganti dengan URL logo token
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

  return <button onClick={addTokenToMetaMask}>Add BSC Token to MetaMask</button>;
};

export default AddTokenButtonBSC;
