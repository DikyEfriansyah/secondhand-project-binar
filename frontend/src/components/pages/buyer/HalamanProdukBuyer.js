import React, { useEffect, useState } from "react";
import "../.././assets/css/style.css";
import Navbar1 from "../../parts/Navbar1";
import fotoProfile from "../.././assets/img/foto-profile.svg";
import { Container, Button, Row, Col, Carousel, Card, Modal } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function HalamanProdukBuyer() {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://final-project-kel-3.herokuapp.com/api/v1/products/${id}`)
      .then((response) => {
        console.log(id);
        console.log(response.data.data);
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <Navbar1 />
      <Container className="mt-5">
        <Row>
          <Col lg={7}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={products.foto} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={products.foto} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={products.foto} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
            <Card className="rounded-4 my-5">
              <Card.Body>
                <Card.Title className="fw-bold">Deskripsi</Card.Title>
                <Card.Text>{products.deskripsi}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={5}>
            <Row>
              <Col lg={12}>
                <Card className="shadow bg-body rounded-4 mb-3" style={{ width: "22rem", border: "none" }}>
                  <Card.Body>
                    <Card.Title className="fw-semibold">{products.nama}</Card.Title>
                    <Card.Text>{products.Category?.nama}</Card.Text>
                    <Card.Text className="fw-semibold">{products.harga}</Card.Text>
                    <Button onClick={handleShow} className="mt-4 mb-2" style={{ width: "20rem" }}>
                      Saya tertarik dan ingin nego
                    </Button>

                    <Modal show={show} onHide={handleClose} size={"sm"}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body>
                        <strong>Masukkan Harga Tawarmu</strong>
                        <p className="mt-2">Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
                        <Card className="shadow rounded-4 my-3" style={{ backgroundColor: "#EEEEEE", border: "none" }}>
                          <Row>
                            <Col lg={4} className="d-flex justify-content-center align-items-center ps-5">
                              <img src={products.foto} style={{ width: "5rem" }} alt=".." />
                            </Col>
                            <Col lg={8}>
                              <Card.Body className="mt-2">
                                <Card.Text className="fs-6 fw-bold">{products.nama}</Card.Text>
                                <Card.Text className="fs-6 fw-semibold text-black-50">{products.Category?.nama}</Card.Text>
                                <Card.Text className="fs-6 fw-semibold">Rp {products.harga}</Card.Text>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                        <strong>Harga Tawar</strong>
                        <input type="text" className="rounded-4 form-control mt-2" placeholder="Rp. 0.00" autoFocus />
                        <Button className="mt-4 rounded-4" style={{ width: "16.625rem" }} onClick={handleClose}>
                          Save Changes
                        </Button>
                      </Modal.Body>
                    </Modal>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={12}>
                <Card className="shadow bg-body rounded-4" style={{ width: "22rem", border: "none" }}>
                  <Row>
                    <Col lg={3}>
                      <img src={fotoProfile} className="p-2 m-2" style={{ width: "5rem" }} alt=".." />
                    </Col>
                    <Col lg={9}>
                      <Card.Body>
                        <Card.Title className="fs-6 fw-bold">{products.User?.nama}</Card.Title>
                        <Card.Text className="fs-6">{products.User?.kota}</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
