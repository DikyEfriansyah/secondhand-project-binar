import React from "react";
import toggler from "../assets/icons/toggler.svg";
import notif from "../assets/icons/notif.svg";
import iconProfile from "../assets/icons/profile.svg";
import logo from "../assets/img/logo.svg";
import jamTangan from "../assets/img/jam-tangan.svg";
import "../assets/css/style.css";

import { Col, Container, Form, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";

export default function Navbar1() {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Cari di sini ..." className="rounded-4 me-2" style={{ width: "20rem", backgroundColor: "#EEEEEE", border: "none" }} />
            </Form>
            <Nav className="ms-auto">
              <Nav.Link href="/seller-daftar-jual">
                <img src={toggler} alt="" />
              </Nav.Link>
              <NavDropdown title={<img src={notif} alt="..." />}>
                <NavDropdown.Item href="/seller-info-penawar">
                  <Row>
                    <Col lg={4}>
                      <img src={jamTangan} alt="" className="img-fluid" />
                    </Col>
                    <Col lg={8}>
                      <p className="text-black-50">
                        <small>Penawaran Produk</small>
                      </p>
                      <p className="fw-semibold">Jam Tangan Casio</p>
                      <p>Rp 250000</p>
                      <p>Ditawar Rp 200000</p>
                    </Col>
                  </Row>
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href="/profile">
                <img src={iconProfile} alt="" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
