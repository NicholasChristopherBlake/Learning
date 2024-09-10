import React from "react"
import food1 from '../assets/images/greek salad.jpg'
import food2 from '../assets/images/bruchetta.svg'
import food3 from '../assets/images/lemon dessert.jpg'
import { Link } from "react-router-dom";

const Specials = (props) => {
  return (
    <main>
        <section>
          <div className="top-row">
            <p className="title-article">This weeks specials!</p>
            <button>Online Menu</button>
          </div>
          <div className="articles">
            <article>
              <img src={food1} alt=""/>
              <div className="bottom">
                <div className="first-row">
                  <p className="name">Greek salad</p>
                  <p className="price">$12.99</p>
                </div>
                <p className="main-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <div className="delivery-div">
                  <Link path="/order" className="delivery-btn">Order a delivery</Link>
                </div>
              </div>
            </article>
            <article>
              <img src={food2} alt=""/>
              <div className="bottom">
                <div className="first-row">
                  <p className="name">Bruschetta</p>
                  <p className="price">$5.99</p>
                </div>
                <p className="main-text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <div className="delivery-div">
                  <Link path="/order" className="delivery-btn">Order a delivery</Link>
                </div>
              </div>
            </article>
            <article>
              <img src={food3} alt=""/>
              <div className="bottom">
                <div className="first-row">
                  <p className="name">Lemon Dessert</p>
                  <p className="price">$5.00</p>
                </div>
                <p className="main-text">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.h</p>
                <div className="delivery-div">
                  <Link path="/order" className="delivery-btn">Order a delivery</Link>
                </div>
              </div>
            </article>
          </div>
      </section>
    </main>
  )
};

export default Specials;
