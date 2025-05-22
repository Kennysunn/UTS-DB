import React from "react";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">22.11.4608 kenny sunandar</h1>
        <p className="text-gray-700 mb-4">
          Selamat datang di website pribadi saya. Halaman ini dibuat untuk memenuhi tugas digital bussines
          yang memuat konfigurasi domain dan hosting. Terima kasih telah berkunjung.
        </p>
        <p className="text-sm text-gray-500">Deploy dengan Vercel</p>
      </div>
    </div>
  );
}

export default App;
