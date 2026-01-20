import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./App.css";

function App() {
  const [inputUrl, setInputUrl] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const handleGenerate = () => {
    if (!inputUrl.trim()) return;
    setQrUrl(inputUrl);
  };

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">QR Generator</h1>

        <input
          type="text"
          className="input"
          placeholder="https://ejemplo.com"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />

        <button className="button" onClick={handleGenerate}>
          Generar código QR
        </button>

        {qrUrl && (
          <div className="qr-container">
            <QRCodeCanvas
              value={qrUrl}
              size={200}
              bgColor="#020617"
              fgColor="#e5e7eb"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
