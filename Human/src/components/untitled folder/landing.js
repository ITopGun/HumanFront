import React, {useState, useEffect} from "react";
import { Button, Row, Col, ListGroup, Container, Card } from "react-bootstrap";
import Img1 from "../images/img_1.png";
import Img2 from "../images/img_2.png";
import Img4 from "../images/img_4.png";
import Img3 from "../images/img_3.png";
import Imgg from "../images/imgg.png";
import { Link } from 'react-router-dom';
import CookieConsent, { Cookies } from "react-cookie-consent";
import API from "./API";
const Landing = () => {
  const [blogs, setBlogs] = useState([])

  const getBlogListHandle = async () =>{
      try{

        let jsonRes = await API.getList()
        if(jsonRes.err === undefined)
        {
            console.log("++++++++++++++++++++++")
            console.log(JSON.stringify(jsonRes))
            setBlogs(jsonRes)
        }else
        {
          console.log(jsonRes.err)
        }
      }
      catch(e)
      {

      }
  }
  useEffect(() => {
    getBlogListHandle()
  },[]);
  const renderBlogs= () => {
    return blogs.map((item, index)=>{
       return  (
                  <Col
                    sm={12}
                    md={12}
                    lg={6}
                    key={index}
                    className="d-flex justify-content-center"
                  >
                    <Card style={{ width: "35rem" }}>
                      <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                          <div className="landing-img">
                            <img src={item.Image} />
                          </div>
                        </Card.Subtitle>

                        <Card.Link className="">
                          {" "}
                          <i class="fa fa-user" aria-hidden="true"></i>{item.Author}
                        </Card.Link>
                        <Card.Link className="pl-5">
                          {" "}
                          <i class="fa fa-clock-o" aria-hidden="true"></i>{item.created_on}.
                        </Card.Link>
                        <Card.Text className="col-md-center">
                            {item.title}
                        </Card.Text>
                        <Link to={{
                          pathname:"blog-details/"+item.id
                        }}><Button variant="primary" className="btn-org">
                          ВИЖ ОЩЕ
                        </Button></Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  
         )
    })
  }
  return (
    <>

      <div className="landing-bg">
        <h3 className="text-center pt-5 pb-4">БЛОГ</h3>
        <Container>
          <Row>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center"
            >
              <Card style={{ width: "35rem" }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    <div className="landing-img">
                      <img src={Img1} />
                    </div>
                  </Card.Subtitle>

                  <Card.Link className="">
                    {" "}
                    <i class="fa fa-user" aria-hidden="true"></i>Лили Маркова
                  </Card.Link>
                  <Card.Link className="pl-5">
                    {" "}
                    <i class="fa fa-clock-o" aria-hidden="true"></i>23.07.2020г.
                  </Card.Link>
                  <Card.Text>Лично Себепознание, 23 Юли 2020</Card.Text>
                  <Link to="/self-knowledge"><Button variant="primary" className="btn-org">
                    ВИЖ ОЩЕ
                  </Button></Link>
                </Card.Body>
              </Card>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center"
            >
              <Card style={{ width: "35rem"}}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    <div className="landing-img">
                      <img src={Img2} />
                    </div>
                  </Card.Subtitle>

                  <Card.Link className="">
                    {" "}
                    <i class="fa fa-user" aria-hidden="true"></i>Лили Маркова
                  </Card.Link>
                  <Card.Link className="pl-5">
                    {" "}
                    <i class="fa fa-clock-o" aria-hidden="true"></i>23.07.2020г.
                  </Card.Link>
                  <Card.Text>Връзки и Лични Отношения, 23 Юли 2020</Card.Text>
                  <Link to="/self-knowledge2"><Button variant="primary" className="btn-org">
                    {" "}
                    ВИЖ ОЩЕ
                  </Button></Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center"
            >
              <Card style={{ width: "35rem" }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    <div className="landing-img">
                      <img src={Img4} />
                    </div>
                  </Card.Subtitle>

                  <Card.Link className="">
                    {" "}
                    <i class="fa fa-user" aria-hidden="true"></i>Лили Маркова
                  </Card.Link>
                  <Card.Link className="pl-5">
                    {" "}
                    <i class="fa fa-clock-o" aria-hidden="true"></i>23.07.2020г.
                  </Card.Link>
                  <Card.Text>Как Да Се Развиете Кариерно,23 Юли 2020</Card.Text>
                  <Link to="/self-knowledge3"><Button variant="primary" className="btn-org">
                    ВИЖ ОЩЕ
                  </Button></Link>
                </Card.Body>
              </Card>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center"
            >
              <Card style={{ width: "35rem" }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    <div className="landing-img">
                      <img src={Img3} />
                    </div>
                  </Card.Subtitle>

                  <Card.Link className="">
                    {" "}
                    <i class="fa fa-user" aria-hidden="true"></i>Лили Маркова
                  </Card.Link>
                  <Card.Link className="pl-5">
                    {" "}
                    <i class="fa fa-clock-o" aria-hidden="true"></i>23.07.2020г.
                  </Card.Link>
                  <Card.Text>
                    Каква е Семейната Динамика?, 23 Юли 2020
                  </Card.Text>
                  <Link to="/self-knowledge4"><Button variant="primary" className="btn-org">
                    {" "}
                    ВИЖ ОЩЕ
                  </Button></Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center"
            >
              <Card style={{ width: "35rem" }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    <div className="landing-img">
                      <img src={Imgg} />
                    </div>
                  </Card.Subtitle>

                  <Card.Link className="">
                    {" "}
                    <i class="fa fa-user" aria-hidden="true"></i>Лили Маркова
                  </Card.Link>
                  <Card.Link className="pl-5">
                    {" "}
                    <i class="fa fa-clock-o" aria-hidden="true"></i>23.07.2020г.
                  </Card.Link>
                  <Card.Text>
                    Какви са Подходящите Условия и Начин на Хранене за Вашето
                    Тяло и Дизайн?, 23 Юли 2020
                  </Card.Text>
                  <Link to="/self-knowledge5"><Button variant="primary" className="btn-org">
                    ВИЖ ОЩЕ
                  </Button></Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
          {renderBlogs()}
          </Row>
          {/* foreach loop blog */}
          {/* <Row>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center"
            >
              <Card style={{ width: "35rem" }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    <div className="landing-img">
                      <img src={Imgg} />
                    </div>
                  </Card.Subtitle>

                  <Card.Link className="">
                    {" "}
                    <i class="fa fa-user" aria-hidden="true"></i>Лили Маркова
                  </Card.Link>
                  <Card.Link className="pl-5">
                    {" "}
                    <i class="fa fa-clock-o" aria-hidden="true"></i>23.07.2020г.
                  </Card.Link>
                  <Card.Text>
                    Какви са Подходящите Условия и Начин на Хранене за Вашето
                    Тяло и Дизайн?, 23 Юли 2020
                  </Card.Text>
                  <Link to="/self-knowledge5"><Button variant="primary" className="btn-org">
                    ВИЖ ОЩЕ
                  </Button></Link>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
        </Container>
      </div>
    </>
  );
};

export default Landing;
