import React from "react";
import { Button, Row, Col, ListGroup, Container, Card } from "react-bootstrap";
import Imgabout from "../images/img_1.png";
import Imgabout2 from "../images/img_2.png";
import Imgabout4 from "../images/img_4.png";
import Imgabout44 from "../images/img_3.png";
import Imgabout45 from "../images/img_5.png";
import Img22 from "../images/imgage.png";
import Img33 from "../images/image331.png";
import Movie1 from "../images/1movie.png";
import Movie2 from "../images/2movie.png";
import ImgCarousel1 from "../images/carousel-1.png";
import ImgCarousel2 from "../images/carousel-2.jpg";
import ImgCarousel3 from "../images/carousel-3.png";
import ImgCarousel4 from "../images/carousel-4.png";
import ImgCarousel5 from "../images/carousel-5.png";
import ImgCarousel6 from "../images/carousel-6.png";
import ImgCarousel7 from "../images/carousel-7.png";
import { Link } from 'react-router-dom';
import CookieConsent, { Cookies } from "react-cookie-consent";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

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

      <div className="home-web-image">
        <div className="box-image">
          <p className="web-text-custome">
            Your soul came here with a plan to live a spectacular life.
          </p>

          <p className="web-text-custome-detail">
            Human Design is the roadmap on how to live yours
          </p>
          <a href="#" className="demi-btn-white">DISCOVER YOUR CHART</a>
        </div>
        
      </div>
      <div className="b-preview-sub">
        <div className="container">
            <div className="orange-box hover-anima">
                <div className="w900 mobile-link-small">
                    <p>The world floods us with messages about who we should be in order to survive and thrive in this world – but Human Design teaches that the same advice is not correct for everybody.</p>
                    <p>The road to being your happiest, most successful self is one that is totally unique to you. Human Design is here to help you recognise your innate gifts and traits, so that you can be who you truly came here to be - which is the most effortless road to living your dream life.</p>
                    <p><a href="#" target="_blank" rel="noopener"><b>Discover your design now</b></a></p>
                </div>
            </div>
        </div>
      </div>

      <div className="container m-145-40">
        <div className="w1030">
          <section className="beige-box beige-box-lines aura-sunset no-borders rounded-corners">
            <div className="section-t w650">
              <div className="steps">
                  one
              </div>
              <h3>Start with your energy type…</h3>
              <p>The first thing you look at in your chart is your Energy Type.&nbsp;&nbsp;There are five main types, and each has different way of bringing in more opportunities and flow into their life.</p>
              <p>&nbsp;</p>
            </div>

            <div className="md-w485">
              <div className="row p15 b-15 justify-content-center">
                <div className="new-col-lg-5 col-md-4 b15">
                    <a href="#" className="en-box">
                      <div className="en-box-icon">
                        {/* <img className="lazyloaded" src=""/> */}
                        <noscript><img src="https://www.myhumandesign.com/wp-content/themes/myhumandesign/images/en1.svg" alt=""></img></noscript>
                        <img class="lazyloaded" src="https://www.myhumandesign.com/wp-content/themes/myhumandesign/images/en1.svg" data-src="https://www.myhumandesign.com/wp-content/themes/myhumandesign/images/en1.svg" alt=""></img>
                      </div>
                      <div class="en-box-info">
                        <div class="en-box-name">MANIFESTOR</div>
                        <div class="en-box-info">The Fire Starter</div>
                      </div>
                    </a>
                </div>

                <div className="new-col-lg-5 col-md-4 b15">
                    <a href="#" className="en-box">
                      <div className="en-box-icon">
                        {/* <img className="lazyloaded" src=""/> */}
                        <noscript><img src="https://www.myhumandesign.com/wp-content/themes/myhumandesign/images/en2.svg" alt=""></img></noscript>
                        <img class="lazyloaded" src="https://www.myhumandesign.com/wp-content/themes/myhumandesign/images/en2.svg" data-src="https://www.myhumandesign.com/wp-content/themes/myhumandesign/images/en1.svg" alt=""></img>
                      </div>
                      <div class="en-box-info">
												<div class="en-box-name">MANIFESTING GENERATOR</div>
												<div class="en-box-info">The Multi-Hyphenate</div>
											</div>
                    </a>
                </div>

                <div className="new-col-lg-5 col-md-4 b15">
                    <a href="#" className="en-box">
                      <div className="en-box-icon">
                        {/* <img className="lazyloaded" src=""/> */}
                        <noscript><img src="https://www.myhumandesign.com/wp-content/themes/myhumandesign/images/en3.svg" alt=""></img></noscript>
                        <img class="lazyloaded" src="https://www.myhumandesign.com/wp-content/themes/myhumandesign/images/en3.svg" data-src="https://www.myhumandesign.com/wp-content/themes/myhumandesign/images/en1.svg" alt=""></img>
                      </div>
                      <div class="en-box-info">
												<div class="en-box-name">GENERATOR</div>
												<div class="en-box-info">The Life Force</div>
											</div>
                    </a>
                </div>

                <div className="new-col-lg-5 col-md-4 b15">
                    <a href="#" className="en-box">
                      <div className="en-box-icon">
                        {/* <img className="lazyloaded" src=""/> */}
                        <noscript><img src="https://www.myhumandesign.com/wp-content/themes/myhumandesign/images/en4.svg" alt=""></img></noscript>
                        <img class="lazyloaded" src="https://www.myhumandesign.com/wp-content/themes/myhumandesign/images/en4.svg" data-src="https://www.myhumandesign.com/wp-content/themes/myhumandesign/images/en1.svg" alt=""></img>
                      </div>
                      <div class="en-box-info">
												<div class="en-box-name">PROJECTOR</div>
												<div class="en-box-info">The Seer</div>
											</div>
                    </a>
                </div>

                <div className="new-col-lg-5 col-md-4 b15">
                    <a href="#" className="en-box">
                      <div className="en-box-icon">
                        {/* <img className="lazyloaded" src=""/> */}
                        <noscript><img src="https://www.myhumandesign.com/wp-content/themes/myhumandesign/images/en5.svg" alt=""></img></noscript>
                        <img class="lazyloaded" src="https://www.myhumandesign.com/wp-content/themes/myhumandesign/images/en5.svg" data-src="https://www.myhumandesign.com/wp-content/themes/myhumandesign/images/en1.svg" alt=""></img>
                      </div>
                      <div class="en-box-info">
												<div class="en-box-name">Reflector</div>
													<div class="en-box-info">The Shape Shifter</div>
											</div>
                    </a>
                </div>


              </div>
            </div>
            <div class="tac b15 hover-anima section-t">
							<p>&nbsp;</p>
              <p>Don’t know your type? <a href="/get-your-chart/"><b>Click here</b></a> to find out.</p>
						</div>
          </section>
        </div>
      </div>

      
      <div className="dive-in-deeper">
          <Container>
            <Row className="flex-reverse-col">
              <Col
                sm={12}
                md={12}
                lg={12}
                className="d-flex justify-content-center align-items-center"
              >
                <div>
                  <div className="section-t">
                    <div className="steps">two</div>
                    <h3>&nbsp;and then dive in deeper</h3>
                    <p>Your chart can also tell you how your specific intuition works, what your personality is, your unique way of eating, manifesting, and so much more.</p>
                    <p>Use our videos to build yourself a customised explanation of who you are designed to be.</p>
                    <p><a href="/custom-videos/" className="demi-btn-white">EXPLORE</a></p>
                    <p><img className="alignnone size-full wp-image-31792" src="https://www.myhumandesign.com/wp-content/uploads/2020/07/human-body-graph-desktop-1.png" alt="" width='1298' height='1110' /></p>
                    <p>&nbsp;</p>
                  </div>
                  <div className="unique-t">
                    <p>" This is a place where you can have anything you want; you just gotta know how to use what you got."</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="ptb50">
          <Container>
            <Row>
              <Col
                  lg={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div className="col-lg-auto order-2 order-lg-1">
                    <div className="about-person">
                      <div className="tac">
                        <h2 className="about-person-title">About</h2>
                        <h3 className="text-center">Jenna Zoe</h3>
                      </div>
                      <p className="text-center">Jenna has an innate gift for channelling Human Design, a new system of self-discovery helping reconnect people to who they came to be. The main focus of her work is de-conditioning – ie. unlearning who you were told to be, so that you can be free to be who your Soul came here to be.</p>
                      <hr></hr>
                      <h4 className="text-center">PRAISE FOR JENNA</h4>
                      <p className="text-center"><i><q>I’ve tried most “esoteric readings” out there, but Human Design felt as if Jenna was vocalizing my soul</q> <br></br>– Lacy Phillips, To Be Magnetic</i></p>
                      <hr></hr>
                      <p className="text-center"><a href="/about-us/" class="demi-btn-white">LEARN MORE</a></p>
                    </div>
                  </div>
              </Col>
              <Col
                  lg={6}
                  className="d-flex justify-content-center align-items-center"
                >
                <div className="col-lg order-1 order-lg-2">
                  <figure className="photo-person brd-5 ml-50 mtb40 no-borders border-radius-img">
                    <img src="https://www.myhumandesign.com/wp-content/uploads/2020/04/jenna.jpg" data-src="https://www.myhumandesign.com/wp-content/uploads/2020/04/jenna.jpg" className="responsive-img" alt="" />
                  </figure>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="featured-box">
          <Container>
            <Row>
              <Col
                  lg={3}
                  className="d-flex justify-content-center align-items-center b20"
                >
                <section className="section-t hover-anima tac">
                  <h2 className="about-person-title">Listen to Jenna</h2>
                  <h3 className="mb0">Featured here</h3>
                  <p className="md-none md-hide">
                    <a href="https://www.myhumandesign.com/interviews/">
                      <i>- view all -</i>
                    </a>
                  </p>
                </section>
              </Col>
              <Col
                  lg={9}
                  className="tac b20"
                >
                <div className="carousel-container">
                  <Carousel 
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={1000}
                    keyBoardControl={false}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-5-px">
                    <a href="#">
                      <img src={ImgCarousel1} />
                    </a>
                    <a href="#">
                      <img src={ImgCarousel2} />
                    </a>
                    <a href="#">
                      <img src={ImgCarousel3} />
                    </a>
                    <a href="#">
                      <img src={ImgCarousel4} />
                    </a>
                    <a href="#">
                      <img src={ImgCarousel5} />
                    </a>
                    <a href="#">
                      <img src={ImgCarousel6} />
                    </a>
                    <a href="#">
                      <img src={ImgCarousel7} />
                    </a>
                  </Carousel>
                </div>
                <br></br>
                <div className="hover-anima md-visible">
                  <p className="md-none">
                    <a href="https://www.myhumandesign.com/interviews/">
                      <i>- view all -</i>
                    </a>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>



    </>
  );
};

export default Landing;
