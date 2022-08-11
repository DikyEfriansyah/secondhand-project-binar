import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, ListGroup, Tab } from "react-bootstrap";
import "../.././assets/css/style.css";
import Navbar1 from "../../parts/Navbar1";
import fotoProfile from "../../assets/img/foto-profile.svg";
import diminatiTidakTersedia from "../../assets/img/diminati-tidak-tersedia.svg";
import terjualTidakTersedia from "../../assets/img/terjual-tidak-tersedia.svg";
import { BsBox, BsChevronRight, BsCurrencyDollar, BsHeart, BsPlus } from "react-icons/bs";
import axios from "axios";

export default function DaftarJual() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://final-project-kel-3.herokuapp.com/api/v1/products")
      .then((response) => {
        console.log(response.data.data);
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar1 />
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={10}>
            <div className="my-3">
              <h3>Daftar Jual Saya</h3>
            </div>
          </Col>
          <Col lg={10}>
            <Card className="rounded-4 shadow" style={{ border: "none" }}>
              <Card.Body>
                <Row className="g-0">
                  <Col lg={1}>
                    <Card.Img variant="top" src={fotoProfile} style={{ width: "48px", height: "48px" }} />
                  </Col>
                  <Col lg={10}>
                    <Card.Text className="fw-semibold">{products.User?.nama}</Card.Text>
                    <Card.Text className="text-black-50 fw-semibold">
                      <small>{products.User?.kota}</small>
                    </Card.Text>
                  </Col>
                  <Col lg={1} className="text-end">
                    <Button href="/profile" className="outlineBtn rounded-4 mt-2">
                      Edit
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={10}>
            <Row className="mt-3">
              <Tab.Container id="list-group-tabs-example" defaultActiveKey="#semuaProduk">
                <Col lg={4}>
                  <Card className="align-items-left shadow p-3 mb-1 bg-white rounded-4" style={{ width: "14rem", border: "none" }}>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="fw-bold">Kategori</ListGroup.Item>
                    </ListGroup>

                    <ListGroup variant="flush">
                      <ListGroup.Item action href="#semuaProduk">
                        <BsBox /> Semua Produk &ensp; <BsChevronRight />
                      </ListGroup.Item>

                      <ListGroup.Item action href="#diminati">
                        <BsHeart /> Diminati &emsp;&emsp;&ensp;&ensp;&nbsp; <BsChevronRight />
                      </ListGroup.Item>

                      <ListGroup.Item action href="#terjual">
                        <BsCurrencyDollar /> Terjual &emsp;&emsp;&emsp;&ensp;&ensp; <BsChevronRight />
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
                <Col lg={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#semuaProduk">
                      <Row className="g-4">
                        <Col lg={4}>
                          <Card className="text-center" style={{ height: "224px", orderStyle: "dashed" }}>
                            <Card.Body className="align-items-center d-flex justify-content-center">
                              <Card.Link href="/seller-info-produk">
                                <BsPlus />
                                <p> Tambah Produk </p>
                              </Card.Link>
                            </Card.Body>
                          </Card>
                        </Col>
                        {products.map((product) => (
                          <Col lg={4} key={product.id}>
                            <Card>
                              <Card.Img variant="top" src={product.foto} className="p-2" />
                              <Card.Body>
                                <Card.Text className="fs-6 fw-semibold">{product.nama}</Card.Text>
                                <Card.Text className="fs-6 fw-semibold text-black-50">{product.Category.nama}</Card.Text>
                                <Card.Text className="fs-6 fw-semibold">Rp {product.harga}</Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#diminati">
                      <Row className="d-flex justify-content-center align-item-center">
                        <Col className="d-flex justify-content-center">
                          <img src={diminatiTidakTersedia} alt="" />
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#terjual">
                      <Row className="d-flex justify-content-center align-item-center">
                        <Col className="d-flex justify-content-center">
                          <img src={terjualTidakTersedia} alt="" />
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Tab.Container>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
