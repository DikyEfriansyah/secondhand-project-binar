import React, { useState } from "react";
import "../../assets/css/style.css";
import { Navbar, Container, Form, Button, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import fotoProduk from "../../assets/img/foto-produk.svg";
import panah from "../../assets/img/panah.svg";
import { Link } from "react-router-dom";
import axios from "../../../http-service/http-request.config.js";

export default function InfoProduk() {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [kategori, setKategori] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [foto, setFoto] = useState("");

  const handleNama = (e) => {
    console.log(e.target.value);
    setNama(e.target.value);
  };
  const handleHarga = (e) => {
    console.log(e.target.value);
    setHarga(e.target.value);
  };
  const handleKategori = (e) => {
    console.log(e.target.value);
    setKategori(e.target.value);
  };
  const handleDeskripsi = (e) => {
    console.log(e.target.value);
    setDeskripsi(e.target.value);
  };
  const handleFoto = (e) => {
    console.log(e.target.files[0]);
    setFoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("nama", nama);
    payload.append("harga", harga);
    payload.append("id_kategori", kategori);
    payload.append("deskripsi", deskripsi);
    payload.append("foto", foto);

    axios
      .post("https://final-project-kel-3.herokuapp.com/api/v1/products", payload)
      .then((response) => {
        console.log(response.data);
        alert("Update Successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Update Failed");
      });
  };

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Row className="justify-content-md-center mt-5">
        <Col lg={1} md={1} sm={1} xs={2}>
          <Link to="/home">
            <img src={panah} alt="" />
          </Link>
        </Col>
        <Col lg={5} md={5} sm={5} xs={5}>
          <Form>
            <Form.Group className="mb-3" style={{ width: "540px" }}>
              <Form.Label>Nama Produk</Form.Label>
              <Form.Control type="text" className=" rounded-4" placeholder="Nama Produk" onChange={(e) => handleNama(e)} />
            </Form.Group>

            <Form.Group className="mb-3" style={{ width: "540px" }}>
              <Form.Label>Harga Produk</Form.Label>
              <Form.Control type="number" className=" rounded-4" placeholder="Rp 250000" onChange={(e) => handleHarga(e)} />
            </Form.Group>

            <Form.Group className="mb-3" style={{ width: "540px" }}>
              <Form.Label>Kategori</Form.Label>
              <Form.Select className=" rounded-4" aria-label="Default select example" onChange={(e) => handleKategori(e)}>
                <option>Pilih Kategori</option>
                <option value="1">Hobi</option>
                <option value="2">Kendaraan</option>
                <option value="3">Baju</option>
                <option value="4">Elektronik</option>
                <option value="5">Kesehatan</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{ width: "540px" }}>
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={3} className=" rounded-4" placeholder="Contoh: Jalan Ikan Hiu 33" onChange={(e) => handleDeskripsi(e)} />
            </Form.Group>

            <Form.Label>Foto Produk</Form.Label>
            <Form.Group className=" mb-3">
              <Form.Label style={{ cursor: "pointer" }}>
                <img src={fotoProduk} className="rounded mt-2" alt="..." />
                <Form.Control type="file" style={{ display: "none" }} onChange={(e) => handleFoto(e)} />
              </Form.Label>
            </Form.Group>

            <div className="d-grid gap-2 d-md-block mb-5">
              <Button href="/seller-halaman-produk" className="outlineBtn me-3" style={{ width: "260px" }}>
                Preview
              </Button>
              <Button className="btn" style={{ width: "260px" }} onClick={handleSubmit}>
                Terbitkan
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
