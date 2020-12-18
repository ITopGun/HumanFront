import React from "react";
import {
  Button,
  Row,
  Col,
  ListGroup,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import Img42 from "../images/img_4.png";
import WebImg from "../images/about-img.png";
import Img4 from "../images/img_4.png";
import Img2 from "../images/img_2.png";
import Imgabout45 from "../images/img_5.png";
import Img22 from "../images/imgage.png";
import Img33 from "../images/image331.png";
import { Link } from 'react-router-dom';

const Landing4 = () => {
  return (
    <>
      <div className="landing-bg home-text">
        <div className="text-center">
          <h4 className="pt-4">Каква е ролята Ви в семейството?</h4>
        </div>
        <Container>
          <div className="d-flex justify-content-center">
            <div className="img__know">
              <img src={Img42} />
            </div>
          </div>
          <div className="lorem-para">
            <Card.Link className="pl-4">
              {" "}
              <i class="fa fa-user" aria-hidden="true"></i>Лили Маркова
            </Card.Link>
            <Card.Link className="pl-5">
              {" "}
              <i class="fa fa-clock-o" aria-hidden="true"></i>23.05.2020г.
            </Card.Link>
            <p className="pt-4 pb-0 pl-4 pr-4">
            Защо едни семейства са по-сплотени от други? Каква е причината за разпадането на някои и до колко това е поправимо?
            </p>{" "}
            <p className="pt-0 pb-0 pl-4 pr-4">
            Синергията и изпълнението на правилната роля в семейството са ключови, то да бъде изобилно и щастливо. Напасването е първият етап от намирането на баланс и спокойствие. Когато всеки е наясно с особеностите на партньора си, какво и как му е отредено да прави и къде да не го притиска, защото просто не му е заложено да бъде такъв - Вие поставяте началото на едно много по-голямо разбирателство. Семейната динамика е нещо изключително важно за поддържането на здрави и стабилни отношения. Когато сами позволите на себе си да бъдете автентични, позволявате и на тези около Вас да бъдат такива.
            </p>
          </div>
          <div className="text-center text-og">
            <p>Как да разберете какъв е правилният подход към децата Ви?</p>
          </div>
          <div className="lorem-para">
            {" "}
            <p className="pt-0 pb-0 pl-4 pr-4">
            Всяко едно дете е напълно различно и като такова изисква уникален и специфичен подход. Някои деца изискват повече внимание от други, но най-основно е уважението към специфичната им природа и дизайн. Ако искате детето Ви да бъде уверено, да се свърза спокойно с Вас и околните, само трябва да намерите подхода, който работи за него и да му позволите истински  да разгърне потенциала си.
            </p>{" "}
            <p className="pt-0 pb-0 pl-4 pr-4">
              {" "}
              Средата и условията, в които се развива Вашето дете също са важни, но по-важно е отношението Ви към него и какви принципи ще възпитате в младата душа. Дори и да смятате, че нещо перфектно работи за Вас, това не на всяка цена ще бъде приложимо и за Вашето малко съкровище. Поради това е необходимо в дълбочина да се запознаете с дизайна на децата си, правилния подход към тях, какво ги прави уникални и различни и как Вие да си взаимодействате с тях най-ефективно.
            </p>
          </div>
        </Container>
        <div className="spacer20"></div>
      </div>
    </>
  );
};

export default Landing4;
