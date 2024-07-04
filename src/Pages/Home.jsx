import React, { useState, useEffect } from 'react'
import img1 from '../assets/fratelli-img/images/Banner/ani.png'
import img2 from '../assets/fratelli-img/images/shapes/banner-1-shape-1.png'
import img3 from '../assets/fratelli-img/images/Banner/imp.png'
import img4 from '../assets/fratelli-img/images/shapes/banner-1-shape-1.png'
import img5 from '../assets/fratelli-img/images/Banner/agro-team.png'
import img6 from '../assets/fratelli-img/images/shapes/banner-1-shape-1.png'
import grapesImage from '../assets/fratelli-img/images/services/grapes.png'
// import grapesImage from '../../assets/fratelli-img/images/services/grapes.png'
import chocolate from '../assets/fratelli-img/images/services/Chocolate-Covered-Raisin.jpg'
import pomo from '../assets/fratelli-img/images/services/pomo.jpg'
import team1 from '../assets/fratelli-img/images/team/team-1-1.jpg'
import teamSir from '../assets/fratelli-img/images/team/sir.jpg'
import partner1 from '../assets/fratelli-img/images/partner/1.jpg'
import partner2 from '../assets/fratelli-img/images/partner/2.jpg'
import carouselImage1 from '../assets/fratelli-img/images/projects/22.jpg'
import carouselImage2 from '../assets/fratelli-img/images/projects/22.jpg'
import carouselImage3 from '../assets/fratelli-img/images/projects/33.jpg'
import carouselImage4 from '../assets/fratelli-img/images/projects/44.jpg'
import carouselImage5 from '../assets/fratelli-img/images/projects/C.jpg'
import carouselImage6 from '../assets/fratelli-img/images/projects/D.jpg'
import carouselImage7 from '../assets/fratelli-img/images/projects/33.jpg'
import carouselImage8 from '../assets/fratelli-img/images/projects/44.jpg'
import carouselImage9 from '../assets/fratelli-img/images/projects/C.jpg'
import CountUp from 'react-countup';

// import '../../Styles/Home.css'
import '../Styles/Home.css'
import WhatsAppLink from './WhatsAppLink'


const Home = () => {
    // Disable ESLint for the entire block
    /* eslint-disable */

    const [projectCount, setProjectCount] = useState(0);
    const [accurateCount, setAccurateCount] = useState(0);
    useEffect(() => {
        const projectCountInterval = setInterval(() => {
            setProjectCount((prevCount) => {
                if (prevCount + 1 === 400) {
                    clearInterval(projectCountInterval);
                }
                return prevCount + 1;
            });
        }, 1);

        const accurateCountInterval = setInterval(() => {
            setAccurateCount((prevCount) => {
                if (prevCount + 1 === 500) {
                    clearInterval(accurateCountInterval);
                }
                return prevCount + 1;
            });
        }, 0.1);

        return () => {
            clearInterval(projectCountInterval);
            clearInterval(accurateCountInterval);
        };
    }, []);

    // useEffect(() => {
    //   const projectCountInterval = setInterval(() => {
    //     setProjectCount((prevCount) => prevCount + 1);
    //     if (projectCount === 400) {
    //       clearInterval(projectCountInterval);
    //     }
    //   }, 1);

    //   const accurateCountInterval = setInterval(() => {
    //     setAccurateCount((prevCount) => prevCount + 1);
    //     if (accurateCount === 500) {
    //       clearInterval(accurateCountInterval);
    //     }
    //   }, 0.1);

    //   return () => {
    //     clearInterval(projectCountInterval);
    //     clearInterval(accurateCountInterval);
    //   };
    // }, [projectCount, accurateCount]);

    return (
        <div>
            {/* <CountUp start={0} end={100} delay={0}>
                {({ countUpRef }) => (
                    <div>
                        <span ref={countUpRef} />
                    </div>
                )}
            </CountUp> */}
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                {/* Your carousel content goes here */}
                {/* <!-- below component --> */}
                {/* <div id="carouselExampleAutoplaying" className="carousel slide mt-5" data-bs-ride="carousel"> */}
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        {/* <!-- <img src="..." className="" alt="..."> --> */}
                        <div className="row d-block w-100">
                            <div className="col-lg-12 col-md-12 h-100 w-100 image-fluid">
                                <div className="image  mt-1">
                                    {/* <!-- Background Image --> */}
                                    <div className="cal">
                                    </div>
                                </div>
                                <div className="cal2">
                                </div>
                                <div className="content">
                                    {/* <!-- Text and images go here --> */}
                                    <img src={img1} className="anim image-fluid" alt="Image 1" />
                                    <h1 style={{ position: "relative", top: "-15px" }}><img height="100px" width="100px"
                                        src={img2} className="wi-anim image-fluid"
                                        alt="" /> Grapes & Chocolate
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="row d-block w-100">
                            <div className="col-lg-12 col-md-12 h-100 w-100 image-fluid">
                                <div className="image  mt-1">
                                    {/* <!-- Background Image --> */}
                                    <div className="cal">
                                    </div>
                                </div>
                                <div className="cal2">
                                </div>
                                <div className="content">
                                    {/* <!-- Text and images go here --> */}
                                    <img src={img3} className="anim image-fluid" alt="Image 1" />
                                    <h1 className="grape"><img height="100px" width="100px"
                                        src={img4}
                                        className="wi-anim-2 image-fluid" alt="" />Import Export </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="row d-block w-100">
                            <div className="col-lg-12 col-md-12 h-100 w-100 image-fluid">
                                <div className="image  mt-1">
                                    {/* <!-- Background Image --> */}
                                    <div className="cal">
                                    </div>
                                </div>
                                <div className="cal2">
                                </div>
                                <div className="content">
                                    {/* <!-- Text and images go here --> */}
                                    <img src={img5} className="anim image-fluid"
                                        alt="Image 1" />
                                    <h1 style={{ position: "relative", top: "-20px" }}><img height="100px" width="100px"
                                        src={img6}
                                        className="wi-anim-3 image-fluid" /> Agronomy </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Start 3 Card --> */}
            <div className="container">
                <div className="wow fadeInUp animated">
                    <div className="row row-cols-1 row-cols-md-3  justify-content-center mb-3 mt-5">
                        <div className="col d-flex justify-content-center g-2">
                            <div className="card h-100 w-75">
                                <img src={grapesImage} className="card-img-top h-100" alt="..." />
                                <div className="card-footer">
                                    <h3 className="text-center">Grapes</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center g-2">
                            <div className="card h-100 w-75">
                                <img src={chocolate}
                                    className="card-img-top h-100" alt="..." />
                                <div className="card-footer">
                                    <h3 className="text-center">Raisins Chocolates</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center g-2">
                            <div className="card h-100 w-75">
                                <img src={pomo} className="card-img-top h-100" alt="..." />
                                <div className="card-footer">
                                    <h3 className="text-center">Pomogranates</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End card --> */}

            {/* <!-- Counter section (Facts Start) --> */}
            <div className="container-fluid bg-primary facts py-5 mb-5 mt-5">
                <div className="container py-5">
                    <div className="row gx-5 gy-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                    style={{ width: "60px", height: "60px" }}>
                                    <i className="fa fa-star fs-4 text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Our Experience</h5>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">{projectCount + "+"}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                    style={{ width: "60px", height: "60px" }}>
                                    <i className="fa fa-users fs-4 text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Farm Specialist</h5>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">{accurateCount}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                    style={{ width: "60px", height: "60px" }}>
                                    <i className="fa fa-check fs-4 text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Complete Project</h5>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">{accurateCount}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                    style={{ width: "60px", height: "60px" }}>
                                    <i className="fa fa-mug-hot fs-4 text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Happy Clients</h5>
                                    <h1 className="display-5 text-white mb-0" data-toggle="counter-up">{accurateCount}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--  End --> */}

            {/* <!-- Start our Journey --> */}
            <div className="container">
                <div className="row" style={{ 'text-align': "justify" }}>
                    <div className="col">
                        <h3 className="text-center heading mt-5">Our Journey</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo consequuntur omnis est laudantium laborum
                            molestias exercitationem expedita, eligendi nisi. Deleniti minus reiciendis recusandae reprehenderit
                            ipsum, quasi cupiditate temporibus dignissimos, laudantium natus doloremque debitis adipisci rerum non
                            quod quia culpa veniam dolores dolorum ab facere, aut architecto! Atque omnis accusantium consequatur
                            maiores! Officiis facilis blanditiis dignissimos. Eaque, nulla accusantium dolores rem autem debitis
                            facere, cumque velit dolore corrupti iusto quia! Deleniti alias voluptatum laborum perferendis porro
                            sequi eos quibusdam quod obcaecati reprehenderit atque, officia, dolor cupiditate animi enim quae
                            perspiciatis repellendus possimus quidem distinctio. Quisquam fuga alias doloremque facilis vero a
                            distinctio nobis dolor, mollitia voluptate dolore minus rem expedita quasi! Nisi assumenda ad incidunt
                            nostrum ipsum voluptas, minus debitis ducimus tempore voluptatibus iusto alias quidem cumque nam aut
                            molestiae eveniet quam. Et accusamus eum ad earum numquam alias aliquam. Ex reiciendis ratione tempora
                            recusandae, exercitationem corporis minima quo fugiat itaque sed mollitia nulla laudantium dolores
                            tenetur nemo, pariatur deserunt quis quisquam earum, praesentium consequuntur natus laborum voluptas.
                            Eos rerum libero dignissimos quis eius dolores excepturi earum molestiae veritatis labore ut nobis
                            tenetur cum, consequatur temporibus cupiditate repellat vero iure laborum? Fugiat repellat dicta
                            blanditiis facilis corrupti! Quos, eveniet rerum voluptas reprehenderit minus labore iste enim sunt fuga
                            quasi sed nisi obcaecati corrupti eos numquam porro ratione ex aliquam a consequatur perspiciatis. Animi
                            vitae expedita saepe quae modi aut incidunt maiores ipsam non. Nesciunt provident quidem quod explicabo
                            obcaecati natus accusantium magni facere voluptatibus deserunt doloribus sunt voluptatem, in quo
                            delectus nemo cumque distinctio rerum esse inventore sapiente! Corrupti, dolore dolorem. Non commodi
                            exercitationem amet laudantium consectetur architecto, obcaecati impedit. Adipisci minus recusandae
                            numquam quo? Commodi aliquid similique cupiditate iusto possimus praesentium obcaecati, qui ipsum
                            deleniti perspiciatis officiis aut, odit maiores ex non eaque veritatis amet. Perspiciatis tempore
                            quaerat deleniti, voluptatum saepe, dolores eveniet eos modi dolore sit maxime autem. Ipsum veniam
                            adipisci beatae, eveniet voluptas minus repudiandae labore saepe iure alias qui doloribus, reprehenderit
                            praesentium delectus asperiores modi. Pariatur cumque id rem provident quisquam fugit quis doloremque!
                            Enim cum itaque magni voluptates commodi similique rerum eaque minus natus praesentium tenetur tempora
                            et, recusandae impedit quibusdam dicta odio aspernatur quas incidunt? Laborum exercitationem dolorum
                            officiis omnis suscipit velit? Corporis beatae aut ducimus eligendi, cupiditate repellat hic voluptas
                            qui voluptatum incidunt praesentium ex vitae enim atque veniam illum, dicta aperiam ab sed reiciendis
                            nam molestiae, modi repudiandae. Alias qui nesciunt ipsa enim? Repudiandae nesciunt, explicabo dolorem
                            eius et unde sit consequatur ullam nostrum id quo dicta architecto iste!
                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- Start our Expert --> */}
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col">
                        <h3 className="text-center heading">Our Expert</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center mb-3">
                    <div className="col-lg-3 col-md-3 d-flex justify-content-center g-2">
                        <div className="card">
                            <img style={{ 'box-shadow': "0 0 24px 0 rgba(0, 0, 0, 0.12)" }}
                                src={team1} className="card-img-top h-100" alt="..." />

                            <div className="card-footer text-center">
                                <h3 className="sub-heading">Anant More</h3>
                                <p>Chairmen</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 d-flex justify-content-center align-items-center g-2 p-5"
                        style={{ 'text-align': "justify", 'box-shadow': "0 0 24px 0 rgba(0, 0, 0, 0.12)" }}>

                        Exporting may help a company achieve experience curve effects and location economies in their home
                        country. Ownership advantages include the firm assets, international experience, and the ability to
                        develop either low-cost or differentiated products. Ownership advantages include the firm assets,

                    </div>
                    <div className="col-lg-3 col-md-3 d-flex justify-content-center g-2">
                        <div className="card  ">
                            <img src={teamSir} className="card-img-top h-100" alt="..." />
                            <div className="card-footer text-center">
                                <h3 className="sub-heading">Harish More</h3>
                                <p>Managing Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Start our Agronomy --> */}
            <div className="container mt-5">
                <div className="row" style={{ 'text-align': "justify" }}>
                    <div className="col">
                        <h3 className="text-center heading">Agronomy</h3>
                        <p>Fratelli started with training farmers to grow world className fruits. We started our journey with
                            research &
                            we developed a precise flow of work to obtain the best quality & thus Fratelli farm training
                            program
                            begun. Today we are team of 9 agronomist who travel farm to farm training farmers to grow
                            quality
                            fruits.</p>
                        <h4 className="text-center sub-heading">PRECISE AGRICULTURAL PRACTISES & TRAINING</h4>
                        <p>We are India’s first farmer producer company to practice precise agriculture and training our
                            farmers for
                            the same. By precision, we make no compromise in quality output. we are engaged in high tech
                            farming
                            also we are sensitive about sustainability which we portray in our irrigation management which
                            is
                            helping many in terms of saving water & gaining output.</p>
                        <h4 className="text-center sub-heading">CATERING THE WORLD WITH BEST QUALITY PRODUCTS</h4>
                        <p>We started with a thought of catering the world with best quality products to fulfil the
                            requirement of
                            world, that took us to produce the best quality. We at Fratelli make sure we produce & serve
                            only the
                            best.</p>
                    </div>
                </div>
            </div>

            {/* <!-- Start What we offering  --> */}
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col">
                        <h3 className="text-center heading">What We're Offering</h3>
                    </div>
                </div>
            </div>
            {/* <!-- Our Partner --> */}
            <section className="pat-logo">
                <div className="container">
                    <h3 className="text-center heading">Our Partner</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pat-img grey">
                                <img src={partner1} alt="Partner Logo 1" className="img-responsive" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pat-img grey">
                                <img src={partner2} alt="Partner Logo 2" className="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End --> */}
            {/* <!-- Start Carousel --> */}
            <div className="container-fluid">
                <div className="row" >
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner"  >
                            <div className="carousel-item active" >
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    <div className="col">
                                        <div className="card h-100"  >
                                            <img src={carouselImage1} className="card-img-top h-100"
                                                alt="..." />
                                            {/* <img [src]="data.image" alt="Carousel Image" style="max-width: 300px; margin: 10px;">
                                        {{ data.image }} */}
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                            <img src={carouselImage2} className="card-img-top h-100"
                                                alt="..." />

                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                            <img src={carouselImage3} className="card-img-top h-100"
                                                alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    <div className="col">
                                        <div className="card h-100">
                                            <img src={carouselImage4} className="card-img-top h-100"
                                                alt="..." />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <img src={carouselImage5} className="card-img-top h-100"
                                                alt="..." />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                            <img src={carouselImage6} className="card-img-top h-100"
                                                alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    <div className="col">
                                        <div className="card h-100">
                                            <img src={carouselImage7} className="card-img-top h-100"
                                                alt="..." />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                            <img src={carouselImage8} className="card-img-top h-100"
                                                alt="..." />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                            <img src={carouselImage9} className="card-img-top h-100"
                                                alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* <a href="https://wa.me/8698878010/?text=Hello" target="_blank" rel="noopener noreferrer">
                <img src={whatsAppLogo} alt="WhatsApp" width={"70px"} height={"70px"} style={{'float':"right",'marginRight':"30px"}} />
            </a> */}
            <div>
                <WhatsAppLink />
            </div>
        </div >

    );
};

export default Home