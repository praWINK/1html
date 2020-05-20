import React, { Component, Fragment } from 'react';
import './header.css';
import './common.css';
import './responsive.css';
import logo from "./img/logo-color.png";
import banner from "./img/banner_img.jpg";
import about from './img/about-img.jpg';
import works_1 from './img/works-1.jpg';
import card1 from './img/card1.jpg';
import card2 from './img/card2.jpg';
import card3 from './img/card3.jpg';
import client_1 from './img/client_1.jpg';
import client_2 from './img/client_2.jpg';
import client_3 from './img/client_3.jpg';
import team_1 from './img/team-1.jpg';
import team_2 from './img/team-3.jpg';
import team_3 from './img/team-2.jpg';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false

    }
  }
  render() {
    return (
      <Fragment>
        <div>
          {/* SMALL HEADER SECTION START */}

          <section className="small-header">
            <div className="container">
              <section>
                <a href="#" className="float-left mr-4 f-13"><i className="fa fa-envelope pr-2" aria-hidden="true"></i>support@yourdomain.com</a>
                <a href="#" className="float-left f-13"><i className="fa fa-map-marker pr-2" aria-hidden="true"></i>Address CA-234/B New York, USA</a>
                <p className="m-0 float-right f-13">Call Now: <span className="font-bold">883-4565-123456</span></p>
              </section>
            </div>
          </section>
          {/* SMALL HEADER SECTION END */}


          {/*  BANNER SECTION START */}
          <section>
            <div className="banner position-relative">
              <img src={banner} className="img-fluid banner-img"></img>
              <section className={this.state.showOptions ? "display-options base-header py-1 px-2" : "base-header py-1 px-2"}>
                <div className="container">

                  <a href="#"><img src={logo} className="img-fluid"></img></a>
                  <ul className="float-right mb-0 f-13">
                    <li data-toggle="popover" data-container="body" data-placement="bottom" data-content="Vivamus">Home<i className="fa fa-caret-down align-middle p-1" aria-hidden="true"></i> </li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Pages<i className="fa fa-caret-down align-middle p-1" aria-hidden="true"></i></li>
                    <li>Project</li>
                    <li>Blog<i className="fa fa-caret-down align-middle p-1" aria-hidden="true"></i></li>
                    <li>Contact Us</li>
                    <li><a href="javascript:void(0);" class="icon" onClick={() => this.setState({ showOptions: !this.state.showOptions })}>
                      <i class="fa fa-bars"></i>
                    </a>
                    </li>
                  </ul>

                </div>
              </section>
              <div className="container">

                <div className="row">
                  <div className="col-md-5 position-absolute banner-content">
                    <span className="text-uppercase f-14 f-color">total business solutions</span>
                    <p className="text-capitalize banner-title font-bold">your most trusted business partner</p>
                    <p className="banner-description f-color">Holisticly procrastinate mission-critical convergence with reliable customer service. Assertively underwhelm idea-sharing for impactful solutions. </p>
                    <button type="button" className="btn get-start-btn">Get Start Now</button>

                  </div>

                </div>
              </div>
            </div>
          </section>
          {/* BANNER SECTION END */}
          {/* WORK ENVIRONMENT SECTION START */}
          <section className="container margin-top-align margin-btm-align">
            <div className="row">
              <div className="col-md-4">
                <div className="work-environments p-5">
                  <i className="fa fa-superpowers color-primary mb-3" aria-hidden="true"></i>
                  <h5>Creative Design</h5>
                  <p className="f-14">Compellingly promote collaborative products without synergistic schemas. </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-environments p-5">
                  <i className="fa fa-bandcamp color-primary mb-3 " aria-hidden="true"></i>
                  <h5>Cyber Security</h5>
                  <p className="f-14">Enthusiastically scale mission-critical imperatives rather than an expanded array. </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-environments p-5">
                  <i className="fa fa-grav color-primary mb-3" aria-hidden="true"></i>
                  <h5>Cloud Services</h5>
                  <p className="f-14">Rapidiously create cooperative resources rather than client-based leadership skills.</p>
                </div>
              </div>
            </div>
          </section>
          {/* WORK ENVIRONMENT SECTION END */}
          {/* BUSNINESS SOLUTION SECTION START */}
          <section className="business">
            <div className="container">
              <div className="d-flex business-content">
                <div className="w-50 business-solutions">
                  <h2 className="mb-3">Corporate Agency for Your Business Solutions</h2>
                  <p className="mb-4">Interactively develop timely niche markets before extensive imperatives. Professionally
                            repurpose strategies.</p>
                  <ul className="px-0 py-1 m-0">
                    <li><i className="fa fa-angle-double-right mr-2" aria-hidden="true"></i><strong className="f-500">Creative</strong> Websites Design</li>
                    <li><i className="fa fa-angle-double-right mr-2" aria-hidden="true"></i><strong className="f-500">Accounting</strong>  Procedures Guidebook</li>
                    <li><i className="fa fa-angle-double-right mr-2" aria-hidden="true"></i><strong className="f-500">Cost</strong>  Accounting Fundamentals</li>
                    <li><i className="fa fa-angle-double-right mr-2" aria-hidden="true"></i><strong className="f-500">Corporate</strong>  Cash Management</li>
                    <li><i className="fa fa-angle-double-right mr-2" aria-hidden="true"></i><strong className="f-500">SEO</strong>  Optimization Services</li>
                  </ul>
                </div>
                <div className="w-50 business-img">
                  <img src={about} className="img-fluid rounded"></img>
                </div>
              </div>
            </div>
          </section>
          {/* BUSNINESS SOLUTION SECTION END */}
          {/* SERVICE SECTION START */}
          <section className="service">
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="service-content col-md-8 text-center mb-5">
                  <h2 className="f-500 mb-3">We Provide Best Services</h2>
                  <p>Efficiently aggregate end-to-end core competencies without maintainable ideas. Dynamically
                            foster tactical solutions without enabled value.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="p-5 my-3 individual-services shadow-sm rounded text-center white-bg">
                    <i className="fa fa-volume-off mb-4 service-icon" aria-hidden="true"></i>
                    <h5 className="mb-3">Marketing Services</h5>
                    <p className="mb-43 f-100">Progressively empower business "outside the box" thinking with resource-leveling
                            partnerships.</p>
                    <a className="service-link" href="#" target="_blank" >Read more <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-5 my-3 individual-services shadow-sm rounded text-center white-bg">
                    <i className="fa fa-lightbulb-o mb-4 service-icon" aria-hidden="true"></i>
                    <h5 className="mb-3">Web App Development</h5>
                    <p className="mb-43 f-100">Progressively empower business "outside the box" thinking with resource-leveling
                            partnerships.</p>
                    <a className="service-link" href="#" target="_blank" >Read more <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-5 my-3 individual-services shadow-sm rounded text-center white-bg">
                    <i className="fa fa-headphones mb-4 service-icon" aria-hidden="true"></i>
                    <h5 className="mb-3">24/7 Call Center Service</h5>
                    <p className="mb-43 f-100">Progressively empower business "outside the box" thinking with resource-leveling
                            partnerships.</p>
                    <a className="service-link" href="#" target="_blank" >Read more <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="p-5 my-3 individual-services shadow-sm rounded text-center white-bg">
                    <i className="fa fa-bell mb-4 service-icon" aria-hidden="true"></i>
                    <h5 className="mb-3">Social Media Marketing</h5>
                    <p className="mb-43 f-100">Progressively empower business "outside the box" thinking with resource-leveling
                            partnerships.</p>
                    <a className="service-link" href="#" target="_blank" >Read more <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-5 my-3 individual-services shadow-sm rounded text-center white-bg">
                    <i className="fa fa-briefcase mb-4 service-icon" aria-hidden="true"></i>
                    <h5 className="mb-3">Corporate Business</h5>
                    <p className="mb-43 f-100">Progressively empower business "outside the box" thinking with resource-leveling
                            partnerships.</p>
                    <a className="service-link" href="#" target="_blank" >Read more <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-5 my-3 individual-services shadow-sm rounded text-center white-bg">
                    <i className="fa fa-rss mb-4 service-icon" aria-hidden="true"></i>
                    <h5 className="mb-3">Creative Consultancy</h5>
                    <p className="mb-43 f-100">Progressively empower business "outside the box" thinking with resource-leveling
                            partnerships.</p>
                    <a className="service-link" href="#" target="_blank" >Read more <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SERVICE SECTION END */}
          {/* APP SECTION START */}
          <section className="app-section">
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="text-center text-white col-md-8">
                  <h2>Download Apps Managing Business</h2>
                  <p>Building your Apps busines helps attract more potential clients.
                            Our integrated marketing team will work directly long-term high-impact convergence. </p>
                  <div className="d-flex download-btn">
                    <div className="download-section align-items-center">
                      <div className="d-flex">
                        <i className="fa fa-windows mr-3" aria-hidden="true"></i>
                        <div className="text-left">
                          <span className="f-13">Download from</span>
                          <p className="mb-0 f-15">Windows</p>
                        </div>
                      </div>
                    </div>
                    <div className="download-section  align-items-center">
                      <div className="d-flex">
                        <i className="fa fa-windows mr-3" aria-hidden="true"></i>
                        <div className="text-left">
                          <span className="f-13">Download from</span>
                          <p className="mb-0 f-15">Windows</p>
                        </div>
                      </div>
                    </div>
                    <div className="download-section align-items-center">
                      <div className="d-flex">
                        <i className="fa fa-windows mr-3" aria-hidden="true"></i>
                        <div className="text-left">
                          <span className="f-13">Download from</span>
                          <p className="mb-0 f-15">Windows</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>
            
          {/* QUALITY WORKS SECTION START */}
          <section className="works">
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="col-md-8 text-center works-content mb-5">
                  <h2 className="mb-3">Check Our Quality Work</h2>
                  <p>Dynamically pursue reliable convergence rather than 24/7 process improvements. Intrinsicly
                            develop end-to-end customer service without extensive data.</p>
                </div>
              </div>
              <div className="text-center pb-2">
                <button type="button" class="worksbtn active">All</button>
                <button type="button" class="worksbtn">branding</button>
                <button type="button" class="worksbtn">animation</button>
                <button type="button" class="worksbtn">others</button>
              </div>

              <div className="pt-3 d-flex works-row">

                <div className="individual-works pr-3">
                  <img src={works_1} class="img-fluid" />
                </div>


                <div className="individual-works pr-3">
                  <img src={works_1} class="img-fluid" />
                </div>

                <div className="individual-works">
                  <img src={works_1} class="img-fluid" />
                </div>

              </div>
              <div className="pt-3 d-flex works-row">
                <div className="individual-works pr-3">
                  <img src={works_1} class="img-fluid" />
                </div>


                <div className="individual-works pr-3">
                  <img src={works_1} class="img-fluid" />
                </div>

                <div className="individual-works">
                  <img src={works_1} class="img-fluid" />
                </div>
              </div>



            </div>

          </section>
          {/* QUALITY WORKS SECTION END */}
          {/* LATEST NEWS SECTION START */}
          <section className="latest-news">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="latest-news-heading mb-5">
                    <h2 className="mb-3">Our Latest News</h2>
                    <p>Enthusiastically drive revolutionary opportunities before emerging leadership. Distinctively
                        transform tactical methods of empowerment via resource.
                      </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 individual-news">
                  <div className="card d-flex flex-column">
                    <img src={card1} class="img-fluid position-relative" />
                    <span class="badge badge-pill badge-primary card-category position-absolute">Lifestyle</span>
                    <div className="card-body">
                      <h3 className="mb-0"><a href="#">Appropriately productize fully</a></h3>
                      <ul className="pl-0 mb-2">
                        <li className="d-inline-block">Jan 21, 2019</li>
                        <li className="d-inline-block">45 Comments</li>
                        <li className="d-inline-block">10 Share</li>
                      </ul>
                      <h5 className="card-text">Some quick example text to build on the card title and make up the bulk.</h5>
                      <a className="service-link" href="#" target="_blank" >Read more <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 individual-news">
                  <div className="card d-flex flex-column">
                    <img src={card2} class="img-fluid position-relative" />
                    <span class="badge badge-pill  badge-danger card-category position-absolute">Technology</span>
                    <div className="card-body">
                      <h3 className="mb-0"><a href="#">Quickly formulate backend</a></h3>
                      <ul className="pl-0 mb-2">
                        <li className="d-inline-block">May 26, 2019</li>
                        <li className="d-inline-block">30 Comments</li>
                        <li className="d-inline-block">5 Share</li>
                      </ul>
                      <h5 className="card-text">Synergistically engage effective ROI after customer directed partnerships.</h5>
                      <a className="service-link" href="#" target="_blank" >Read more <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 individual-news">
                  <div className="card d-flex flex-column">
                    <img src={card3} class="img-fluid position-relative" />
                    <span class="badge badge-pill badge-info card-category position-absolute">Science</span>
                    <div className="card-body">
                      <h3 className="mb-0"><a href="#">Objectively extend extensive</a></h3>
                      <ul className="pl-0 mb-2">
                        <li className="d-inline-block">Apr 25, 2019</li>
                        <li className="d-inline-block">41 Comments</li>
                        <li className="d-inline-block">30 Share</li>
                      </ul>
                      <h5 className="card-text">Holisticly mesh open-source leadership rather than proactive users. </h5>
                      <a className="service-link" href="#" target="_blank" >Read more <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* LATEST NEWS SECTION END */}
          {/* TESTIMONIALS SECTION START */}
          <section className="reviews">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                  <div className="text-center mb-5">
                    <h2>Testimonials what clients say</h2>
                    <p>
                      Rapidiously morph transparent internal or "organic" sources whereas resource sucking
                      e-business. Conveniently innovate compelling internal.
                        </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 individual-reviews">
                  <div className="client-thoughts p-3 position-relative rounded">
                    <p>Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything energistically underwhelm proactive.</p>
                    <ul className="client-ratings mb-1">
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                    </ul>
                    <h6 className="f-14"><span className="f-500">5.0</span> BizBite</h6>
                  </div>
                  <div className="client-info mt-5 d-flex align-items-center">
                    <div>
                      <img src={client_1} class="img-fluid rounded-circle mr-3" />
                    </div>
                    <div>
                      <h3 className="mb-0">Austin Cesar</h3>
                      <p className="mb-0 f-15 f-400">ThemeTags</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 individual-reviews">
                  <div className="client-thoughts p-3 position-relative rounded">
                    <p>
                      Intrinsicly facilitate functional imperatives without next-generation meta-services. Compellingly revolutionize worldwide users vis-a-vis enterprise best practices.
                        </p>
                    <ul className="client-ratings mb-1">
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                    </ul>
                    <h6 className="f-14"><span className="f-500">5.0</span> BizBite</h6>
                  </div>
                  <div className="client-info mt-5 d-flex align-items-center">
                    <div>
                      <img src={client_2} class="img-fluid rounded-circle mr-3" />
                    </div>
                    <div>
                      <h3 className="mb-0">Pirtle Karol</h3>
                      <p className="mb-0 f-15 f-400">ThemeTags</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 individual-reviews">
                  <div className="client-thoughts p-3 position-relative rounded">
                    <p>
                      Interactively grow backend scenarios through one paradigms. Distinctively and communicate efficient information without effective meta-services.
                        </p>
                    <ul className="client-ratings mb-1">
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                      <li><i class="fa fa-star" aria-hidden="true"></i></li>
                    </ul>
                    <h6 className="f-14"><span className="f-500">5.0</span> BizBite</h6>
                  </div>
                  <div className="client-info mt-5 d-flex align-items-center">
                    <div>
                      <img src={client_3} class="img-fluid rounded-circle mr-3" />
                    </div>
                    <div>
                      <h3 className="mb-0">Aminul Islam</h3>
                      <p className="mb-0 f-15 f-400">ThemeTags</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* TESTIMONIALS SECTION END */}
          {/* TEAM SECTION START */}
          <section className="team-members">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="text-center">
                    <h2 className="mb-3">Meet Our Lovely Team</h2>
                    <p>Distinctively grow go forward manufactured products and optimal networks. Enthusiastically
                            disseminate user-centric outsourcing.
                      </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 member-info">
                  <div className="d-flex flex-column ">
                    <img src={team_1} class="img-fluid position-relative" />
                    <div className="team-info-body p-4 text-center">
                      <h5 className="mb-0">Richard Ford</h5>
                      <p className="mb-0">Instructor of Mathematics</p>
                      <ul className="pl-0 mb-0">
                        <li className="d-inline mr-3"><i class="fa fa-facebook" aria-hidden="true"></i></li>
                        <li className="d-inline mr-3"> <i class="fa fa-linkedin" aria-hidden="true"></i></li>
                        <li className="d-inline"><i class="fa fa-dribbble" aria-hidden="true"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 member-info">
                  <div className="d-flex flex-column">
                    <img src={team_2} class="img-fluid position-relative" />
                    <div className="team-info-body p-4 text-center">
                      <h5 className="mb-0">Kely Roy</h5>
                      <p className="mb-0">Lead Designer</p>
                      <ul className="pl-0 mb-0">
                        <li className="d-inline mr-3"><i class="fa fa-facebook" aria-hidden="true"></i></li>
                        <li className="d-inline mr-3"> <i class="fa fa-linkedin" aria-hidden="true"></i></li>
                        <li className="d-inline"><i class="fa fa-dribbble" aria-hidden="true"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 member-info">
                  <div className="d-flex flex-column">
                    <img src={team_3} class="img-fluid position-relative" />
                    <div className="team-info-body p-4 text-center">
                      <h5 className="mb-0">Gerald Nichols</h5>
                      <p className="mb-0">Managing Director</p>
                      <ul className="pl-0 mb-0">
                        <li className="d-inline mr-3"><i class="fa fa-facebook" aria-hidden="true"></i></li>
                        <li className="d-inline mr-3"> <i class="fa fa-linkedin" aria-hidden="true"></i></li>
                        <li className="d-inline"><i class="fa fa-dribbble" aria-hidden="true"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* TEAM SECTION END */}
          {/* BUSINESS SECTION START */}
          <section className="py-5 contact-us">
            <div className="container">
              <div className="contact-info">
                <div className="row align-center">
                  <div className="col-md-7 consulting-info">
                    <h2 className="mb-1" >Consulting Agency for Your Business</h2>
                    <p className="f-15 mb-0">Rapidiously engage fully tested e-commerce with progressive architectures.</p>
                  </div>
                  <div className="col-md-5 text-lg-right text-sm-left">
                    <button type="button" class="btn btn-primary">Contact With Us</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
           {/* BUSINESS SECTION END */}
          {/* FOOTER SECTION START */}
          <section className="footer">
            <div className="container">
              <div className="d-flex footer-section justify-content-between">
                <div className="footer-info">
                  <h4>QUICK LINKS</h4>
                  <ul className="pl-0" >
                    <li> <a href="#">Make Appointment</a></li>
                    <li> <a href="#">Department Services</a></li>
                    <li> <a href="#">Our Case Studies</a></li>
                    <li> <a href="#">Our Business Growth</a></li>
                  </ul>
                </div>
                <div className="footer-info">
                  <h4>COMPANY</h4>
                  <ul className="pl-0" >
                    <li> <a href="#">About Our Services</a></li>
                    <li> <a href="#">Our Affiliates Program</a></li>
                    <li> <a href="#">View Our Blog</a></li>
                    <li> <a href="#">Check Our Careers</a></li>
                  </ul>
                </div>
                <div className="footer-info">
                  <h4>LEGAL</h4>
                  <ul className="pl-0" >
                    <li> <a href="#">Legal Information</a></li>
                    <li> <a href="#">Privacy Policy</a></li>
                    <li> <a href="#">Report Abuse</a></li>
                    <li> <a href="#">Terms of Service</a></li>
                  </ul>
                </div>
                <div className="footer-info">
                  <h4>SUPPORT</h4>
                  <ul className="pl-0" >
                    <li> <a href="#">Contact</a></li>
                    <li> <a href="#">Knowledge Base</a></li>
                    <li> <a href="#">Forums</a></li>
                    <li> <a href="#">System Status</a></li>
                  </ul>
                </div>
                <div className="footer-info">
                  <h4>GET IN TOUCH</h4>
                  <ul className="pl-0" >
                    <li className="f-600"><i class="fa fa-map-marker mr-2" aria-hidden="true"></i> <a href="#">1234 Street Name, City Name,India</a></li>
                    <li className="f-600 py-2"> <i class="fa fa-envelope mr-2" aria-hidden="true"></i><a href="#">You@domain.com</a></li>
                    <li className="f-600 py-2"> <i class="fa fa-phone mr-2" aria-hidden="true"></i><a href="#"> (123) 456-7890 - (123) 456-7890</a></li>

                  </ul>
                </div>

              </div>
            </div>
          </section>
          {/* FOOTER SECTION END */}
          {/* COPY RIGHTS SECTION START */}
          <section className="footer-bottom py-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <p className="f-13 mb-0">Copyrights © 2020. All
                          rights reserved by <a href="">ThemeTags</a>
                  </p>
                </div>
                <div className="col-md-5 text-right social-link">
                  <ul className="pl-0 mb-0">
                    <li className="d-inline"><i class="fa fa-facebook mr-2" aria-hidden="true"></i></li>
                    <li className="d-inline"><i class="fa fa-twitter mr-2" aria-hidden="true"></i></li>
                    <li className="d-inline"><i class="fa fa-linkedin mr-2" aria-hidden="true"></i></li>

                    <li className="d-inline"><i class="fa fa-dribbble mr-2" aria-hidden="true"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* COPY RIGHTS SECTION END */}
        </div>

      </Fragment>
    );
  }
}

