import React, { useEffect, useState } from "react";
import ".././assets/css/style.css";
import { Navbar, Container, Nav, Form, Button, Col, Row } from "react-bootstrap";
import logo from ".././assets/img/logo.svg";
import tambahFoto from ".././assets/img/tambah-foto.svg";
import panah from ".././assets/img/panah.svg";
import { Link } from "react-router-dom";
import axios from "../../http-service/http-request.config.js";

export default function InfoProfile() {
  const [nama, setNama] = useState("");
  const [kota, setKota] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noHp, setNoHp] = useState("");
  const [foto, setFoto] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const handleNama = (e) => {
    console.log(e.target.value);
    setNama(e.target.value);
  };
  const handleKota = (e) => {
    console.log(e.target.value);
    setKota(e.target.value);
  };
  const handleAlamat = (e) => {
    console.log(e.target.value);
    setAlamat(e.target.value);
  };
  const handleNoHp = (e) => {
    console.log(e.target.value);
    setNoHp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("nama", nama);
    payload.append("kota", kota);
    payload.append("alamat", alamat);
    payload.append("no_hp", noHp);
    payload.append("foto", foto);

    axios
      .put("https://final-project-kel-3.herokuapp.com/auth/updateprofile", payload)
      .then((response) => {
        console.log(response.data);
        alert("Update Successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Update Failed");
      });
  };

  useEffect(() => {
    axios
      .get("https://final-project-kel-3.herokuapp.com/auth/profile")
      .then((response) => {
        const responze = response.data.data;
        setNama(responze.nama);
        setKota(responze.kota);
        setAlamat(responze.alamat);
        setNoHp(responze.no_hp);
        setFoto(responze.foto);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(files[0]);
    setFoto(files[0]);
  };

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Item className="fw-semibold" style={{ marginLeft: "-115px" }}>
              Lengkapi Info Akun
            </Nav.Item>
          </Nav>
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
            <Form.Group controlId="formFile" className="mb-3 text-center">
              <Form.Label style={{ cursor: "pointer" }}>
                <img src={preview || foto || tambahFoto} className="rounded mt-2" alt="..." style={{ width: "auto", height: "auto", maxWidth: "20%", maxHeight: "20%" }} />
                <Form.Control type="file" style={{ display: "none" }} onChange={(e) => onSelectFile(e)} />
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" style={{ width: "540px" }}>
              <Form.Label>Nama*</Form.Label>
              <Form.Control type="text" className=" rounded-4" placeholder="Nama" value={nama} onChange={(e) => handleNama(e)} />
            </Form.Group>

            <Form.Group className="mb-3" style={{ width: "540px" }}>
              <Form.Label>Kota*</Form.Label>
              <Form.Select className=" rounded-4" aria-label="Default select example" value={kota} onChange={(e) => handleKota(e)}>
                <option value="">Pilih Kota</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bandung">Bandung</option>
                <option value="Purwakarta">Purwakarta</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{ width: "540px" }}>
              <Form.Label>Alamat*</Form.Label>
              <Form.Control as="textarea" rows={3} className=" rounded-4" placeholder="Contoh: Jalan Ikan Hiu 33" value={alamat} onChange={(e) => handleAlamat(e)} />
            </Form.Group>

            <Form.Group className="mb-3" style={{ width: "540px" }}>
              <Form.Label>No Handphone*</Form.Label>
              <Form.Control type="number" className=" rounded-4" placeholder="contoh: +628123456789" value={noHp} onChange={(e) => handleNoHp(e)} />
            </Form.Group>

            <Button className="btn mb-5" style={{ width: "540px" }} onClick={handleSubmit}>
              Simpan
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
