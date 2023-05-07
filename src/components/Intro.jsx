import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import img1 from "../img/s-l400.webp.png";
import img2 from "../img/s-l400.webp (2).png";
import img3 from "../img/s-l400.webp (1).png";
import img4 from "../img/image.png";
const Intro = () => {
  return (
    <div className="container">
      <hr />
      <nav className="d-flex flex-row gap-3 justify-content-center mb-2">
      <a href="#">Home</a>
        <a href="#">Saved</a>
        <a href="#">Motors</a>
        <a href="#">Electronics</a>
        <a href="#">Collectibles</a>
        <a href="#">Home &amp; Garden</a>
        <a href="#">Fashion</a>
        <a href="#">Toys</a>
        <a href="#">Sporting Goods</a>
        <a href="#">Business &amp; Industrial</a>
        <a href="#">Jewelry &amp; Watches</a>
        <a href="#">eBay Live</a>
        <a href="#">Refurbished</a>
      </nav>
      <div className="card " style={{ background: "#FEB786" }}>
        <div className="card-body d-flex justify-content-between align-items-center ">
          <div>
            <h5 className="card-title">Super savings at the Brand Outlet</h5>
            <p className="card-text">Up to 60% off the brands you love.</p>
            <a href="#" className="btn btn-outline-dark">
              Shop Now <AiOutlineArrowRight size={20} />
            </a>
          </div>
          <div>
            <img src={img1} width={200} />
            <img src={img2} width={200} />
            <img src={img3} width={200} />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div
          className="card mt-5 w-50 "
          style={{ background: "#E4E4E4", height: "80px", width: "728" }}
        >
          <img src={img4} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
