import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import img1 from '../img/div.png'
import img2 from '../img/div (1).png'
const Deals = () => {
  return (
    <div className='container'>
            <div className="card ">
        <div className="card-body d-flex justify-content-between align-items-center ">
          <div>
            <span className='text-gray'>Featured</span>
          <h4 className='text-primary'>ebay</h4>
            <h5 className="card-title"> Deals made easy all year long.</h5>
            <p className="card-text">Free shipping. Best prices.</p>
            <a href="#" className="btn btn-outline-dark">
            Get your thing<AiOutlineArrowRight size={20} />
            </a>
          </div>
          <div>
            <img src={img1}  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deals