import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  ListGroup,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import ImgContact from "../images/contct.png";
import API from "./API"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BounceLoader from "react-spinners/BounceLoader";
import WebImg from "../images/about-img.png";
import Imgabout4 from "../images/img_4.png";
import Imgabout44 from "../images/img_3.png";
import Imgabout45 from "../images/img_5.png";
import Img22 from "../images/imgage.png";
import Img33 from "../images/image331.png";

const Landing = () => {
  const [email, setEmail] = useState("")
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const clearInput  = ()=> {
    setEmail("")
    setTitle("")
    setMessage("")
    setUsername("")
    setLoading(false)
  }
  const submithandle = async (e)=>{
    
    e.preventDefault()
    
    let data ={
      "email":email,
      "title":title,
      "message":message,
      "username":username,
    }
    setLoading(true)
    let jsonRes  = await API.createContact(data)
    
    if(jsonRes.err === undefined)
    { 
    
       toast.success("изпратено успешно");
    }else
    {
      toast.error(jsonRes.err);
    }
    clearInput()
  }
  return (
    <>
      <div className="contact-us">
        
        <div className="text-center pt-2">
          <h4 className="pt-4 contact-text ">КОНТАКТИ</h4>
        </div>
       
        <Container className="form-section">
          <Row className="Row-contain pb-5">
            <Col sm={12} md={12} lg={6} className="col-flex">
              <Form onSubmit={(e)=>submithandle(e)}>
                <h4 className="heading-contact">Форма за Контакт:</h4>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    className="mail-form"
                    placeholder="Име:"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    className="mail-form"
                    placeholder="email:"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    className="mail-form"
                    placeholder="Тема:"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    className="text-field"
                    placeholder="Съобщение:"
                    rows="3"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-org">
                  ВИЖ ОЩЕ
                </Button>
              </Form>
            </Col>
            <Col sm={12} md={12} lg={6} className="col-flex">
              <h4 className="head-contact">Форма за Контакт:</h4>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <div className="mail-col"><a href="tel:+359879222333">+359 879 222 333</a></div>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <div className="mail-col"><a href="mailto:office4humandesign@gmail.com">office4humandesign@gmail.com</a></div>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <div className="">
                    <ul className="contact-social-links">
                      <li>
                        <a href="https://www.facebook.com/4humandesignofficial/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/4humandesign/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UC3tu5BLETBLJcmC54Dbx_AA" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                      </li>
                    </ul>
                  </div>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <div className="contact-img">
                    {" "}
                    <img src={ImgContact} />
                  </div>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
          <BounceLoader
            className="app-loader"
      
            size={70}
            color={"#123abc"}
            loading={loading}
            />
        </Container>
      </div>
    </>
  );
};

export default Landing;
