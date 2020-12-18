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
import Img32 from "../images/img_3.png";
import WebImg from "../images/about-img.png";
import Img4 from "../images/img_4.png";
import Img2 from "../images/img_2.png";
import Imgabout45 from "../images/img_5.png";
import Img22 from "../images/imgage.png";
import Img33 from "../images/image331.png";
import { Link } from 'react-router-dom';

const Landing3 = () => {
  return (
    <>
      <div className="landing-bg home-text">
        <div className="text-center">
          <h4 className="pt-4">Кой е Вашият кариерен път?</h4>
        </div>
        <Container>
          <div className="d-flex justify-content-center">
            <div className="img__know">
              <img src={Img32} />
            </div>
          </div>
          <div className="lorem-para">
            <Card.Link className="pl-4">
              {" "}
              <i class="fa fa-user" aria-hidden="true"></i>Лили Маркова
            </Card.Link>
            <Card.Link className="pl-5">
              {" "}
              <i class="fa fa-clock-o" aria-hidden="true"></i>23.07.2020г.
            </Card.Link>
            <p className="pt-4 pb-0 pl-4 pr-4">
            Ох, пак е понеделник… Защо правя това? На прав път ли съм? Тази ли е моята работа? Защо не съм удовлетворен? Искам да съм успешен! - Минават ли Ви такива мисли понякога през главата? Ако сте се припознали това означава, че  не използвате пълния си потенциал и ресурс заложен във Вас, както и не го влагате по коректния за Вас начин.
            </p>{" "}
            <p className="pt-0 pb-0 pl-4 pr-4">
            Как да разбера какво ми е отредено да правя?
            </p>
          </div>
          <div className="text-center text-og">
            <p>Когато постигнете онова усещане за блажена удовлетвореност, успех и спокойствие - Вие ще знаете, че сте намерили Вашето призвание. Как да стигнете до там е сложният въпрос. Освен знание за пътя на живота Ви, Хюман дизайн Ви дава обяснение каква е и мисията, с която сте дошли. Някои от вас ще са родени иноватори и инициатори, но ще са слаби в това да довършват и приключват започнатото. Други ще имат плавен и бавен подем, но сигурно и стабилно ще напредват с много постоянна и удовлетворяваща работа. Други са тук, за да насочват и помагат на хората около себе си и като резултат да намерят своя успех и смисъл в живота.</p>
          </div>
          <div className="lorem-para">
            {" "}
            <p className="pt-0 pb-0 pl-4 pr-4">
            Какво е най-важното, което трябва да знаете за себе си, започвайки работа?
            </p>{" "}
            <p className="pt-0 pb-0 pl-4 pr-4">
              {" "}
              Много определящо за професионалното Ви развитие са каналите и порталите, които имате активирани в картата си. Те ще Ви покажат много ясно силните Ви страни и начина, по който да ги приложите. Успехът Ви зависи от това колко автентично следвате себе си и до колко използвате заложбите си, а не сте в плен на слабостите си.
            </p>
            <p>
            Кое определя ефективността на една компания или екип?
            </p>
            <p>
            В сърцевината си всяка една компания трябва да има здраво ядро от генератори/манифестиращи генератори. Ако Вашият тип е такъв поздравления! Вие доминирате света и без Вашата енергия нищо не може да бъде стабилно или завършено. Също така ефективността на екипи, от които сте част, е основно определяща за успеха на Вашата лична работа. Това може много лесно да бъде видяно като се приложи групов анализ и се види дали този екип притежава синергия и до колко успешно Вие може да реализирате потенциала си там. Ако сте част от организация, Вие имате точно определено място в нея и точно заложени силни страни, които да използвате в конкретни процеси. Възможността да използвате тези Ваши силни страни по най-коректния начин ще привлече много ресурси към Вас, както и просперитет.
            </p>
            <p>
            Наслаждавайте се на работата си и винаги помнете, че това, което Ви носи удоволствие ще Ви донесе най-много щастие, изобилие и успех. Дори и да обичате да продавате домати, ако го правите от сърце и с най-голямата си любов, няма да мине много време преди да привлечете неминуем просперитет и завидно богатство.
            </p>
          </div>
        </Container>
        <div className="spacer20"></div>
      </div>
    </>
  );
};

export default Landing3;