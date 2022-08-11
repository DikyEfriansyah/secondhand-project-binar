import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Modal, Navbar, Row } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import fotoProfile from "../../assets/img/foto-profile.svg";
import jamTangan from "../../assets/img/jam-tangan.svg";
import panah from "../../assets/img/panah.svg";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import axios from "../../../http-service/http-request.config.js";


export default function InfoPenawar() {
  const [orders, setOrders] = useState([]);
  const [show, setShow] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  const handleCloseStatus = () => setShowStatus(false);
  const handleShowStatus = () => setShowStatus(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("https://final-project-kel-3.herokuapp.com/api/v1/orders")
      .then((response) => {
        console.log(response.data.data);
        setOrders(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Row className="justify-content-center mt-5">
        <Col lg={1} md={1} sm={1} xs={2}>
          <Link to="/home">
            <img src={panah} alt="" />
          </Link>
        </Col>

        <Col lg={5} md={5} sm={5} xs={5}>
          <Card className="rounded-4 shadow" style={{ border: "none" }}>
            <Card.Body>
              <Row className="g-0">
                <Col lg={2}>
                  <Card.Img variant="top" src={fotoProfile} style={{ width: "48px", height: "48px" }} />
                </Col>
                <Col lg={8}>
                  <Card.Text className="fw-semibold">Nama Penjual</Card.Text>
                  <Card.Text className="text-black-50 fw-semibold">
                    <small>Kota</small>
                  </Card.Text>
                </Col>
                <Col lg={2} className="text-end">
                  <Button href="/profile" className="outlineBtn rounded-4 mt-2">
                    Edit
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <h6 className="my-4">Daftar produkmu yang ditawar</h6>
          <Card className="rounded-4 shadow" style={{ border: "none" }}>
            <Card.Body>
              <Row>
                <Col lg={4}>
                  <Card.Img variant="top" src={jamTangan} className="img-fluid" />
                </Col>
                <Col lg={8}>
                  <Card.Text className="text-black-50">
                    <small>Penawaran Produk</small>
                  </Card.Text>
                  <Card.Text className="fw-semibold">Jam Tangan Casio</Card.Text>
                  <Card.Text>Rp 250000</Card.Text>
                  <Card.Text>Ditawar Rp 200000</Card.Text>
                  <div className="text-end mt-5">
                    <Button className="outlineBtn me-3 rounded-4" style={{ width: "150px" }}>
                      Tolak
                    </Button>
                    <Button onClick={handleShow} className="rounded-4" style={{ width: "150px" }}>
                      Terima
                    </Button>
                    <Modal show={show} onHide={handleClose} size={"sm"}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body>
                        <strong>Yeay kamu berhasil mendapat harga yang sesuai</strong>
                        <p className="mt-2">Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>
                        <Card className="shadow rounded-4 my-3" style={{ backgroundColor: "#EEEEEE", border: "none" }}>
                          <p className="text-center fw-bold">Product Match</p>
                          <Row>
                            <Col lg={3}>
                              <img src={fotoProfile} className="p-2 m-2" style={{ width: "5rem", height: "5rem" }} alt=".." />
                            </Col>
                            <Col lg={9}>
                              <Card.Body className="mt-2">
                                <Card.Title className="fs-6 fw-bold">Nama Pembeli</Card.Title>
                                <Card.Text className="fs-6 fw-semibold text-black-50">Kota</Card.Text>
                              </Card.Body>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={3}>
                              <img src={jamTangan} className="p-2 m-2" style={{ width: "5rem", height: "5rem" }} alt=".." />
                            </Col>
                            <Col lg={9}>
                              <Card.Body className="mt-2">
                                <Card.Title className="fs-6 fw-bold">Jam Tangan Casio</Card.Title>
                                <Card.Text className="fs-6 fw-semibold text-black-50">Aksesoris</Card.Text>
                                <Card.Text className="fs-5 fw-semibold">Rp 250000</Card.Text>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                        <Button href="https://wa.me/085928993274" className="mt-4 rounded-4" style={{ width: "16.625rem" }} onClick={handleClose}>
                          Hubungi via whatsapp <BsWhatsapp />
                        </Button>
                      </Modal.Body>
                    </Modal>

                    <Button onClick={handleShowStatus} className="outlineBtn me-3 rounded-4 mt-3" style={{ width: "150px" }}>
                      Status
                    </Button>
                    <Modal show={showStatus} onHide={handleCloseStatus} size={"sm"}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body>
                        <InputGroup>
                          <Form.Check
                            type="radio"
                            id="radio1"
                            name="radio"
                            label={
                              <div>
                                <p>Berhasil Terjual</p>
                                <p class="fw-lighter">Kamu telah sepakat menjual produk ini kepada pembeli</p>
                              </div>
                            }
                          />
                          <Form.Check
                            type="radio"
                            id="radio2"
                            name="radio"
                            label={
                              <div>
                                <p>Batalkan Transaksi</p>
                                <p class="fw-lighter">Kamu membatalkan transaksi produk ini dengan pembeli</p>
                              </div>
                            }
                          />
                          <Button className="mt-4 rounded-4" style={{ width: "16.625rem" }} onClick={handleCloseStatus}>
                            Kirim
                          </Button>
                        </InputGroup>
                      </Modal.Body>
                    </Modal>

                    <Button href={"https://wa.me/0" + 85928993274} className="btn rounded-4 mt-3" style={{ width: "150px" }}>
                      Hubungi di <BsWhatsapp />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
