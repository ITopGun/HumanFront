import React from "react";
import {
  Button,
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Footerlogo from "../../images/biglogo.png";
import { Link } from 'react-router-dom';

const Foot = () => {
  return (
    <>
    <div className="footer-reaction">
      <Container>
        <Row className="Row-contain">
          <Col sm={12} md={12} lg={3} className="footer-col first-col">
            <div className="footer-logo">
              <img src={Footerlogo} />
            </div>
          </Col>
          <Col sm={12} md={12} lg={5} className="footer-col Second-col">
            <Row>
              <Col sm={6} md={6} lg={6} className="footer-col">
                <ul className="footer-links">
                  <li><Link to="/" className style= {{ color:'#ffffff', fontSize:"30px"}}>Начало</Link></li>
                  <li><Link to="/about" className style= {{ color:'#ffffff', fontSize:"30px"}}>За Нас</Link></li>
                  <li><Link to="/blog" className style= {{ color:'#ffffff', fontSize:"30px"}}>Блог</Link></li>
                  <li><Link to="/contact" className style= {{ color:'#ffffff', fontSize:"30px"}}>Контакти</Link></li>
                </ul>
              </Col>
              <Col sm={6} md={6} lg={6} className="footer-col">
                <ul className="footer-links">
                  <li><Link to="/terms" style= {{ color:'#ffffff', fontSize:"30px"}}>Политика За Поверителност</Link></li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={4} className="footer-col third-col">
            <Row>
              <Col sm={12}>
                <div className="social-links social-icons">
                  <Row>
                    <Col sm={6} lg={4}>
                      <p className="social-link-text"  style= {{ color:'#ffffff', fontSize:"15px"}}>Последвай ни:</p>
                    </Col>
                    <Col sm={6} lg={8} className="float-div">
                      <ul className="social-iconsl-style">
                        <li>
                          <div className="outer-bg">
                            <a href="https://www.facebook.com/4humandesignofficial/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                          </div>
                        </li>
                        <li>
                          <div className="outer-bg">
                            <a href="https://www.instagram.com/4humandesign/" target="_blank"><i className="fab fa-instagram"></i></a>
                          </div>
                        </li>
                        <li>
                          <div className="outer-bg youtube">
                            <a href="https://www.youtube.com/channel/UC3tu5BLETBLJcmC54Dbx_AA" target="_blank"><i className="fab fa-youtube"></i></a>
                          </div>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col sm={12}>
                <div className="social-links email-field">
                  <label className="rel-position" style= {{ color:'#ffffff', fontSize:"15px"}}>Абонирай се:</label>

                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Email Address"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      className="input-style"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2" className="ok-style">
                        OK
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      </div>
      <div className="footer-text"> © 2019-2020 4 Хюман Дизайн. Всички права запазени</div>
    </>
  );
};

export default Foot;
