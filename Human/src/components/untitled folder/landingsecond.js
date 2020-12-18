import React from "react";
import { Button, Row, Col, ListGroup, Container, Card } from "react-bootstrap";
import Imgabout from "../images/img_1.png";
import Imgabout2 from "../images/img_2.png";
import Imgabout4 from "../images/img_4.png";
import Imgabout44 from "../images/img_3.png";
import Imgabout45 from "../images/img_5.png";
import Img22 from "../images/imgage.png";
import Img33 from "../images/image331.png";
import { Link } from 'react-router-dom';
import CookieConsent, { Cookies } from "react-cookie-consent";

const Landing = () => {
  return (
    <>
    <CookieConsent
      style={{
        background: "#fcf0e9",
        color:"#898080"
      }} 
      buttonText="Приемете"
      buttonStyle={{
        background: "#feb89f 0% 0% no-repeat padding-box",
        boxShadow: "0px 2px 6px #00000029",
        borderRadius: "23px",
        fontSize: "14px",
        color:"white",
      }}
    location="bottom" cookieName="myAwesomeCookieName3" expires={999} overlay>
     
        Този уебсайт използва бисквитки за подобряване на потребителското изживяване.
    </CookieConsent>
      <div className="landing-section landing-bg-gradiant">
        <h3 className="text-center pt-4 pb-1 text-oorange">ХЮМАН ДИЗАЙН</h3>
        <h2 className="text-center textItalicLanding">Пътят към теб и другите</h2>
        <div className="spacer20"></div>
        <Container>
          <Row className="reverse-col">
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="lorem-text">
                <h2 className="text-left">Лично себепознание</h2>
                <p className="pt-4">
                Пътят към нас самите е онзи, който вървим цял живот и винаги откриваме с изненада нещо ново по него. Колкото и добре да се познаваме, ние се променяме всеки ден на базата на новите познания, които поемаме. Пътят на живота е една магия, а Хюман Дизайн повдига булото на нея и ни показва практично, какво ни е предначертано да преминем, важните житейски уроци, които учим и местата, където ще ни бъде лесно или трудно да се развиваме.
                </p>
                <Link to="/self-knowledge"><Button variant="primary" className="btn-org">
                  ВИЖ ОЩЕ
                </Button></Link>
              </div>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="image-flex">
                <img src={Imgabout} />
              </div>
            </Col>
          </Row>
          <div className="spacer20"></div>
          <Row className="flex-reverse-col">
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="image-flex">
                <img src={Imgabout2} />
              </div>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="lorem-text">
                <h2 className="text-left">Каква е Семейната Динамика?</h2>
                <p className="pt-4">
                Един от най-важните аспекти в живота ни е този, който отговаря за личните ни отношения и връзки. Ние влизаме в контакт с много хора в живота си и голяма част от тях оставят траен отпечатък в живота ни. Защо това е така? Връзката ни с всеки един човек е различна и като такава тя носи със себе си специфични характеристики. Тези качества на връзката определят местата, където ще се привличаме с партньора си както и тези, които ще ни разединяват. Често, там където има най-голямо привличане има и най-големи сблъсъци.
                </p>
                <Link to="/self-knowledge2"><Button variant="primary" className="btn-org">
                  ВИЖ ОЩЕ
                </Button></Link>
              </div>
            </Col>
          </Row>
          <div className="spacer20"></div>
          <Row className="reverse-col">
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="lorem-text">
                <h2 className="text-left"> Кой е Вашият кариерен път? </h2>
                <p className="pt-4">
                  Ох, пак е понеделник… Защо правя това? На прав път ли съм? Тази ли е моята работа? Защо не съм удовлетворен? Искам да съм успешен! - Минават ли Ви такива мисли понякога през главата? Ако сте се припознали това означава, че  не използвате пълния си потенциал и ресурс заложен във Вас, както и не го влагате по коректния за Вас начин.
                </p>
                <Link to="/self-knowledge3"><Button variant="primary" className="btn-org">
                  ВИЖ ОЩЕ
                </Button></Link>
              </div>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="image-flex">
                <img src={Imgabout4} />
              </div>
            </Col>
          </Row>
          <div className="spacer20"></div>
          <Row className="flex-reverse-col">
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="image-flex">
                <img src={Imgabout44} />
              </div>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="lorem-text">
                <h2 className="text-left">Каква е ролята Ви в семейството?</h2>
                <p className="pt-4">
                Синергията и изпълнението на правилната роля в семейството са ключови, то да бъде изобилно и щастливо. Напасването е първият етап от намирането на баланс и спокойствие. Когато всеки е наясно с особеностите на партньора си, какво и как му е отредено да прави и къде да не го притиска, защото просто не му е заложено да бъде такъв - Вие поставяте началото на едно много по-голямо разбирателство. Семейната динамика е нещо изключително важно за поддържането на здрави и стабилни отношения. Когато сами позволите на себе си да бъдете автентични, позволявате и на тези около Вас да бъдат такива.
                </p>
                <Link to="/self-knowledge4"><Button variant="primary" className="btn-org">
                  ВИЖ ОЩЕ
                </Button></Link>
              </div>
            </Col>
          </Row>
          <div className="spacer20"></div>
          <Row className="reverse-col">
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="lorem-text">
                <h2 className="text-left">Знаете ли какви са подходящите условия и начин на хранене според хюман дизайн и тялото Ви?</h2>
                <p className="pt-4">
                  Според Хюман дизайн, освен добрият диетичен режим, изключително важна роля оказват както условията, така и начинът на хранене. Колкото и добре да сте подбрали диетата си, понякога може да Ви е много трудно да постигнете желаните резултати. Стриктно може да следвате режима си и да полагате огромни усилия, но пак да не сте удовлетворени от това как реагира тялото Ви.
                </p>
                <Link to="/self-knowledge5"><Button variant="primary" className="btn-org">
                  ВИЖ ОЩЕ
                </Button></Link>
              </div>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="image-flex">
                <img src={Imgabout45} />
              </div>
            </Col>
          </Row>
          <div className="spacer20"></div>
          {/* <div className="bottom-images">
            <h4 className="text-center pb-3"> НОВО В СОЦИАЛНИТЕ МЕДИИ</h4>
            <Container>
              <Row className="row-contain">
                <Col sm={12} md={12} lg={4}>
                  <div className="cnter-img">
                    <img src={Img22} />
                  </div>
                </Col>
                <Col sm={6} md={12} lg={8} className="flex-contain">
                  <Row>
                    <Col sm={6} md={6} lg={6} className="">
                      <div className="trump-img d-flex justify-content-center ">
                        <img src={Img33} />
                      </div>
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                      <div className="trump-img">
                        <img src={Img33} />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>*/}
        </Container>
      </div>
    </>
  );
};

export default Landing;
