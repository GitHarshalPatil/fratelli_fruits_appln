import React from 'react'
import img1 from '../assets/fratelli-img/images/services/grapes.png'
import img2 from '../assets/fratelli-img/images/services/banana.jpg'
import img3 from '../assets/fratelli-img/images/services/33.jpg'
import img4 from '../assets/fratelli-img/images/services/istockphoto-485021759-612x612.jpg'
import img5 from '../assets/fratelli-img/images/services/Chocolate-Covered-Raisin.jpg'
import img6 from '../assets/fratelli-img/images/services/pomo.jpg'

const Product = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="top-position ">
          <div className="row row-cols-1 row-cols-md-3  justify-content-center mb-3">
            <div className="col d-flex justify-content-center g-2">
              <div className="card h-100 w-75  ">
                <img src={img1} className="card-img-top h-100" alt="..."/>
              </div>
            </div>
            <div className="col d-flex justify-content-center g-2">
              <div className="card h-100 w-75">
                <img src={img2}
                  className="card-img-top h-100" alt="..."/>
              </div>
            </div>
            <div className="col d-flex justify-content-center g-2">
              <div className="card h-100 w-75">
                <img src={img3} className="card-img-top h-100" alt="..."/>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="row row-cols-1 row-cols-md-3  justify-content-center mb-3">
            <div className="col d-flex justify-content-center g-2">
              <div className="card h-100 w-75  ">
                <img src={img4} className="card-img-top h-100" alt="..."/>
              </div>
            </div>
            <div className="col d-flex justify-content-center g-2">
              <div className="card h-100 w-75">
                <img src={img5}
                  className="card-img-top h-100" alt="..."/>
              </div>
            </div>
            <div className="col d-flex justify-content-center g-2">
              <div className="card h-100 w-75">
                <img src={img6} className="card-img-top h-100" alt="..."/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer component --> */}
    </div>
  )
}

export default Product