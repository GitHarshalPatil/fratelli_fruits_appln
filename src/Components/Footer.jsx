import React,{ useEffect } from 'react'
import img1 from '../assets/fratelli-img/loader.png'

const Footer = () => {
    useEffect(() => {
        // Include Bootstrap JS and Popper.js
        // const bootstrapJS = document.createElement('script');
        // bootstrapJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js';
        // document.body.appendChild(bootstrapJS);
    
        // const popperJS = document.createElement('script');
        // popperJS.src = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js';
        // document.body.appendChild(popperJS);
    
        // Include Favicon
        // const faviconLink = document.createElement('link');
        // faviconLink.rel = 'icon';
        // faviconLink.href = 'assets/img/favicon.ico';
        // document.head.appendChild(faviconLink);
    
        // Include Google Web Fonts
        // const googleFontsLink = document.createElement('link');
        // googleFontsLink.rel = 'stylesheet';
        // googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@500;700&display=swap';
        // document.head.appendChild(googleFontsLink);
    
        // Include Icon Font Stylesheet
        const fontAwesomeLink = document.createElement('link');
        fontAwesomeLink.rel = 'stylesheet';
        fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css';
        document.head.appendChild(fontAwesomeLink);
        // const bootstrapIconsLink = document.createElement('link');
        // bootstrapIconsLink.rel = 'stylesheet';
        // bootstrapIconsLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css';
        // document.head.appendChild(bootstrapIconsLink);
    
        // Include Libraries Stylesheet
        // const owlCarouselLink = document.createElement('link');
        // owlCarouselLink.rel = 'stylesheet';
        // owlCarouselLink.href = './assets/lib/owlcarousel/assets/owl.carousel.min.css';
        // document.head.appendChild(owlCarouselLink);
    
        // Include Customized Bootstrap Stylesheet
        // const customizedBootstrapLink = document.createElement('link');
        // customizedBootstrapLink.rel = 'stylesheet';
        // customizedBootstrapLink.href = './assets/css/bootstrap.min.css';
        // document.head.appendChild(customizedBootstrapLink);
    
        // Include Template Stylesheet
        // const templateStylesheetLink = document.createElement('link');
        // templateStylesheetLink.rel = 'stylesheet';
        // templateStylesheetLink.href = './assets/css/style.css';
        // document.head.appendChild(templateStylesheetLink);
    
        // Include Animate Stylesheet
        // const animateLink = document.createElement('link');
        // animateLink.rel = 'stylesheet';
        // animateLink.href = './assets/fruits/css/animate.css';
        // document.head.appendChild(animateLink);
    
        return () => {
          // Cleanup: Remove added elements when the component unmounts
        //   document.body.removeChild(bootstrapJS);
        //   document.body.removeChild(popperJS);
        //   document.head.removeChild(faviconLink);
        //   document.head.removeChild(googleFontsLink);
          document.head.removeChild(fontAwesomeLink);
        //   document.head.removeChild(bootstrapIconsLink);
        //   document.head.removeChild(owlCarouselLink);
        //   document.head.removeChild(customizedBootstrapLink);
        //   document.head.removeChild(templateStylesheetLink);
        //   document.head.removeChild(animateLink);
        //   document.body.removeChild(wowScript);
        };
      }, []);
    return (
        <div>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-footer bg-dark text-white mt-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5 footer-contain-center">
                                <div className="col-lg-4 col-md-12 pt-5 mb-5 ">
                                    <h4 className="text-white mb-4">Get In Touch</h4>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-geo-alt text-white me-2"></i>
                                        <p className="text-white mb-0">123 Street, New York, USA</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-envelope-open text-white me-2"></i>
                                        <p className="text-white mb-0">info@example.com</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-telephone text-white me-2"></i>
                                        <p className="text-white mb-0">+012 345 67890</p>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <a className="btn btn-secondary btn-square rounded-circle me-2" href="#"><i
                                            className="fab fa-twitter"></i></a>
                                        <a className="btn btn-secondary btn-square rounded-circle me-2" href="#"><i
                                            className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-secondary btn-square rounded-circle me-2" href="#"><i
                                            className="fab fa-linkedin-in"></i></a>
                                        <a className="btn btn-secondary btn-square rounded-circle" href="#"><i
                                            className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <h4 className="text-white mb-4">Quick Links</h4>
                                    <div className="d-flex flex-column justify-content-start">
                                        <a className="text-white mb-2" href="#" routerLink=""><i className="bi bi-arrow-right text-white me-2"
                                        ></i>Home</a>
                                        <a className="text-white mb-2" routerLink="agronomy"><i className="bi bi-arrow-right text-white me-2"
                                        ></i>Agronomy</a>
                                        <a className="text-white mb-2" routerLink="activity"><i className="bi bi-arrow-right text-white me-2"
                                        ></i>Activity</a>
                                        <a className="text-white mb-2" routerLink="product"><i className="bi bi-arrow-right text-white me-2"
                                        ></i>Product</a>
                                        <a className="text-white mb-2" routerLink="vision"><i className="bi bi-arrow-right text-white me-2"
                                        ></i>Vision/Mission</a>
                                        <a className="text-white" routerLink="contact-us"><i className="bi bi-arrow-right text-white me-2"
                                        ></i>Contact Us</a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <h4 className="text-white mb-4">Popular Links</h4>
                                    <div className="d-flex flex-column justify-content-start">
                                        <a className="text-white mb-2" href="#"><i
                                            className="bi bi-arrow-right text-white me-2"></i>Home</a>
                                        <a className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2"></i>About
                                            Us</a>
                                        <a className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2"></i>Our
                                            Services</a>
                                        <a className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2"></i>Meet
                                            The Team</a>
                                        <a className="text-white mb-2" href="#"><i className="bi bi-arrow-right text-white me-2"></i>Latest
                                            Blog</a>
                                        <a className="text-white" href="#"><i className="bi bi-arrow-right text-white me-2"></i>Contact
                                            Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-lg-n5">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100  p-5">
                                {/* <!-- <h4 className="text-white">Newsletter</h4>
                                <h6 className="text-white">Subscribe Our Newsletter</h6> --> */}
                                <div className="img-fluid" style={{top: "100px"}}>
                                    <img src={img1} alt="" height="150px" width="150px"
                                        className="img-responsive" />
                                        <p className="text-white ">Achiving the new Heights in upcoming years Join our team and grow
                                            with us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white py-4 text-center">
                <p className="mb-0"> <a className="text-secondary fw-bold" href="#">Fratelli fruits</a>. All Rights
                    Reserved. Designed by <a className="text-secondary fw-bold" href="#">Harshal</a></p>
            </div>
            {/* <!-- Footer End --> */}
        </div>
    )
}

export default Footer