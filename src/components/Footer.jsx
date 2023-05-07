import React from 'react';
import {AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai'
function EbayFooter() {
  return (
    <footer className="bg-light mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3 mb-md-0">
            <h5>Buy</h5>
            <ul className="list-unstyled">
              <li><a href="#">Registration</a></li>
              <li><a href="#">eBay Money Back Guarantee</a></li>
              <li><a href="#">Bidding & buying help</a></li>
              <li><a href="#">Stores</a></li>
              <li><a href="#">Charity Shop</a></li>
              <li><a href="#">Seasonal Sales and events</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5>Sell</h5>
            <ul className="list-unstyled">
              <li><a href="#">Start selling</a></li>
              <li><a href="#">How to sell</a></li>
              <li><a href="#">Business sellers</a></li>
              <li><a href="#">Affiliates</a></li>
            </ul>
            <h5>Tools & apps</h5>
            <ul className="list-unstyled">
              <li><a href="#">Developers</a></li>
              <li><a href="#">Security center</a></li>
              <li><a href="#">Site map</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-3 mb-md-0">
            <h5>Stay connected</h5>
            <ul className="list-unstyled">
              <li><a href="#"> <AiFillFacebook size={20} /> Facebook</a></li>
              <li><a href="#"><AiOutlineTwitter size={20} /> Twitter</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>About eBay</h5>
            <ul className="list-unstyled">
              <li><a href="#">Company info</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Diversity & Inclusion</a></li>
              <li><a href="#">Tools & apps</a></li>
              <li><a href="#">Advertise with us</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Help & Contact</h5>
            <ul className="list-unstyled">
              <li><a href="#">Seller Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">eBay Returns</a></li>
            </ul>
              <h5>Community</h5>
              <ul className="list-unstyled">
              <li><a href="#">Announcements</a></li>
              <li><a href="#">eBay Community</a></li>
              <li><a href="#">eBay for Business Podcast</a></li>
            </ul>
            <h5>eBay Sites</h5>
              
          </div>
        </div>
        <div className="row mt-4">
          <div >
            <a href="#">Copyright © 1995-2023 eBay Inc. All Rights Reserved</a> , <a href="#">Accessibility</a> , <a href="#">User Agreement</a> , <a href="#">Privacy</a> , <a href="#">Payments Terms of Use</a>
            , <a href="#">Cookies</a>  , <a href="#">Your Privacy Choices</a>  , <a href="#">AdChoice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default EbayFooter;
