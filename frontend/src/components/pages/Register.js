import React, { useState } from "react";
import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import gambar from ".././assets/img/login.svg";

export default function Register() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleNama = (e) => {
    console.log(e.target.value);
    setNama(e.target.value);
  };

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("https://final-project-kel-3.herokuapp.com/auth/signup", {
        nama: nama,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        alert("Success Register");
        navigate("/");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        alert("Failed Register");
        navigate("/register");
        setLoading(false);
      });
  };

  return (
    <div>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <img src={gambar} className="img-fluid" alt="..." />
          </Col>
          <Col lg={6}>
            <div className="d-flex justify-content-center">
              <Form>
                <div className="fw-bold fs-3 mb-4">Daftar</div>
                <Form.Group className="mb-3" style={{ width: "452px" }}>
                  <Form.Label>Nama</Form.Label>
                  <Form.Control type="email" className="rounded-4" placeholder="Nama Lengkap" onChange={(e) => handleNama(e)} />
                </Form.Group>

                <Form.Group className="mb-3" style={{ width: "452px" }}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" className="rounded-4" placeholder="Contoh: johndee@gmail.com" onChange={(e) => handleEmail(e)} />
                </Form.Group>

                <Form.Group className="mb-3" style={{ width: "452px" }}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" className="rounded-4" placeholder="Masukan password" onChange={(e) => handlePassword(e)} />
                </Form.Group>

                <Button className="btn mt-4 rounded-4" style={{ width: "452px" }} onClick={handleSubmit} disabled={loading}>
                  {loading && <span className="spinner-border spinner-border-sm"></span>}
                  Daftar
                </Button>

                <div className="text-center mt-5 fw-semibold">
                  Sudah punya akun?{" "}
                  <Link to="/" className="fw-bold" style={{ color: "#7126b5" }}>
                    Masuk di sini
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
