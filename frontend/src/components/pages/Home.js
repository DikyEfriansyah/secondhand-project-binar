import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import carouselImg from "../assets/img/carouselImg.svg";
import toggler from "../assets/icons/toggler.svg";
import notif from "../assets/icons/notif.svg";
import iconProfile from "../assets/icons/profile.svg";
import logo from "../assets/img/logo.svg";
import jamTangan from "../assets/img/jam-tangan.svg";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
    if (searchInput !== "") {
      const filteredData = products.filter((item) => {
        return Object.values(item).join("").toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(products);
    }
  };

  useEffect(() => {
    axios
      .get("https://final-project-kel-3.herokuapp.com/api/v1/products")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const currentUserLogon = localStorage.getItem("USER_TOKEN");
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUserLogon != null) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [currentUserLogon, navigate]);

  return (
    <div>
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Cari di sini ..." className="rounded-4 me-2" style={{ width: "20rem", backgroundColor: "#EEEEEE", border: "none" }} onChange={(e) => handleSearch(e)} />
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

      <Container>
        <Container className="p-5 mt-5">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={carouselImg} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={carouselImg} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={carouselImg} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Container>

        <div className="d-grid gap-2 d-md-block">
          <h5>Telusuri Kategori</h5>
          <Button className="outlineBtnV2 me-3">
            <FiSearch className="mb-1 me-1" /> Semua
          </Button>
          <Button className="outlineBtnV2 me-3">
            <FiSearch className="mb-1 me-1" /> Hobi
          </Button>
          <Button className="outlineBtnV2 me-3">
            <FiSearch className="mb-1 me-1" /> Kendaraan
          </Button>
          <Button className="outlineBtnV2 me-3">
            <FiSearch className="mb-1 me-1" /> Baju
          </Button>
          <Button className="outlineBtnV2 me-3">
            <FiSearch className="mb-1 me-1" /> Elektronik
          </Button>
          <Button className="outlineBtnV2 me-3">
            <FiSearch className="mb-1 me-1" /> Kesehatan
          </Button>
        </div>

        <Row>
          {searchInput.length > 1
            ? filteredResults.map((product) => (
                <Col key={product.id} lg={2} md={3} sm={4} xs={6} className="g-4">
                  <Link to={`/buyer-halaman-produk/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
                    <Card>
                      <Card.Img variant="top" src={product.foto} className="p-3" />
                      <Card.Body>
                        <Card.Text className="fs-6 fw-semibold">{product.nama}</Card.Text>
                        <Card.Text className="fs-6 fw-semibold text-black-50">{product.Category.nama}</Card.Text>
                        <Card.Text className="fs-6 fw-semibold">Rp {product.harga}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))
            : products.map((product) => (
                <Col key={product.id} lg={2} md={3} sm={4} xs={6} className="g-4">
                  <Link to={`/buyer-halaman-produk/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
                    <Card>
                      <Card.Img variant="top" src={product.foto} className="p-3" />
                      <Card.Body>
                        <Card.Text className="fs-6 fw-semibold">{product.nama}</Card.Text>
                        <Card.Text className="fs-6 fw-semibold text-black-50">{product.Category.nama}</Card.Text>
                        <Card.Text className="fs-6 fw-semibold">Rp {product.harga}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
        </Row>
      </Container>
      <Link to="/seller-info-produk" className="btn shadow" style={{ width: "8rem", position: "fixed", top: "90%", marginLeft: "45%" }}>
        + Jual
      </Link>
    </div>
  );
}
