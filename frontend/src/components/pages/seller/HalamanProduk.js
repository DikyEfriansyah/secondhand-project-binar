import React from "react";
import "../.././assets/css/style.css";
import jamTangan from "../.././assets/img/jam-tangan.svg";
import fotoProfile from "../.././assets/img/foto-profile.svg";
import { Container, Button, Row, Col, Carousel, Card } from "react-bootstrap";
import Navbar1 from "../../parts/Navbar1";


export default function HalamanProduk() {
  return (
    <div>
      <Navbar1 />
      <Container className="mt-5">
        <Row>
          <Col lg={7}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={jamTangan} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={jamTangan} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={jamTangan} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
            <Card className="rounded-4 my-5">
              <Card.Body>
                <Card.Title className="fw-bold">Deskripsi</Card.Title>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Card.Body>
            </Card>
          </Col>

          <Col lg={5}>
            <Row>
              <Col lg={12}>
                <Card className="shadow bg-body rounded-4 mb-3" style={{ width: "22rem", border: "none" }}>
                  <Card.Body>
                    <Card.Title className="fw-semibold">Jam Tangan Casio</Card.Title>
                    <Card.Text>Aksesoris</Card.Text>
                    <Card.Text className="fw-semibold">Rp. 250.000</Card.Text>
                    <Button className="btn rounded-4 mt-4" style={{ width: "20rem" }}>
                      Terbitkan
                    </Button>
                    <br />
                    <br />
                    <Button href="/seller-info-produk" className="outlineBtn rounded-4" style={{ width: "20rem" }}>
                      Edit
                    </Button>
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
                        <Card.Title className="fs-6 fw-bold">Nama Penjual</Card.Title>
                        <Card.Text className="fs-6">Kota</Card.Text>
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
