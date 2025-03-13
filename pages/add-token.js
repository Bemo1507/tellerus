import { useEffect, useState } from "react";
import QRCode from "qrcode.react";

const AddToken = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    }
  }, []);

  const addTokenToMetaMask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address: "0x562b07E9f73Dabbc737Ec669f474B9516cD94D63",
              symbol: "TELLER",
              decimals: 18,
              image:
                "https://tellertoken.wordpress.com/wp-content/uploads/2025/01/teller-logo-200x40200-px.jpg",
            },
          },
        });
      } catch (error) {
        console.error("Error adding token:", error);
      }
    } else {
      alert(
        "MetaMask tidak terdeteksi. Gunakan MetaMask di Desktop atau Browser MetaMask di Mobile."
      );
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Add Teller Token</h1>
      {isMobile ? (
        <div>
          <p>
            <strong>Buka halaman ini di MetaMask Browser:</strong>
          </p>
          <p>
            1. Buka MetaMask Mobile
            <br />
            2. Pergi ke tab "Browser"
            <br />
            3. Masukkan:
            <br />
            <a
              href="https://tellerus.vercel.app/add-token"
              target="_blank"
              rel="noopener noreferrer"
            >
              tellerus.vercel.app/add-token
            </a>
          </p>
          <p>
            <strong>Atau scan QR Code ini:</strong>
          </p>
          <QRCode value="https://tellerus.vercel.app/add-token" size={200} />
        </div>
      ) : (
        <button onClick={addTokenToMetaMask}>Add TELLER to MetaMask</button>
      )}
    </div>
  );
};

export default AddToken;
