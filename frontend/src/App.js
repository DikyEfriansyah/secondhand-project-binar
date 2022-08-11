import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HalamanProduk from "./components/pages/seller/HalamanProduk";
import InfoProfile from "./components/pages/InfoProfile";
import Login from "./components/pages/Login";
import InfoProduk from "./components/pages/seller/InfoProduk";
import Register from "./components/pages/Register";
import HalamanProdukBuyer from "./components/pages/buyer/HalamanProdukBuyer";
import Home from "./components/pages/Home";
import DaftarJual from "./components/pages/seller/DaftarJual";
import InfoPenawar from "./components/pages/seller/InfoPenawar";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<InfoProfile />} />
          {/* Seller */}
          <Route path="/seller-info-produk" element={<InfoProduk />} />
          <Route path="/seller-halaman-produk" element={<HalamanProduk />} />
          <Route path="/seller-daftar-jual" element={<DaftarJual />} />
          <Route path="/seller-info-penawar" element={<InfoPenawar />} />
          {/* Buyer */}
          <Route path="/buyer-halaman-produk/:id" element={<HalamanProdukBuyer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
