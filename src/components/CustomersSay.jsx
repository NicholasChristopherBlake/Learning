import React from "react";
import star from '../assets/icons/star.png'
import photo1 from '../assets/images/photo1.jpg'
import photo2 from '../assets/images/photo2.jpg'
import photo3 from '../assets/images/photo3.jpg'
import photo4 from '../assets/images/photo4.jpg'


const CustomersSay = (props) => {
  return (
    <div className="customers-say">
      <p className="title">Customers Say</p>
      <div className="ratings-container">
      <div className="ratings">
        <p className="rating">5/5<img className="star" src={star} alt=""/></p>
        <div className="customer-photo-row">
          <img src={photo1} alt=""/>
          <p className="customer-name">David</p>
        </div>
        <p className="review-text">
          I was amazed that for such a good price I can eat as if I'm in Italy!
        </p>
      </div>
      <div className="ratings">
        <p className="rating">4/5<img className="star" src={star} alt=""/></p>
        <div className="customer-photo-row">
          <img src={photo2} alt=""/>
          <p className="customer-name">Monica</p>
        </div>
        <p className="review-text">
          The cooking took over 30 minutes, but was definitely worth the wait!
        </p>
      </div>
      <div className="ratings">
        <p className="rating">5/5<img className="star" src={star} alt=""/></p>
        <div className="customer-photo-row">
          <img src={photo3} alt=""/>
          <p className="customer-name">Kevin</p>
        </div>
        <p className="review-text">
          Great place to have a dinner, prices are fair and the taste is simply outstanding.
        </p>
      </div>
      <div className="ratings">
        <p className="rating">5/5<img className="star" src={star} alt=""/></p>
        <div className="customer-photo-row">
          <img src={photo4} alt=""/>
          <p className="customer-name">Elisabeth</p>
        </div>
        <p className="review-text">
          I loved the pizza. I felt like I was in Italy again! Thank you, chef!
        </p>
      </div>
      </div>
    </div>
  )
};

export default CustomersSay;
