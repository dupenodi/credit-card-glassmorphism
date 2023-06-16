import React from "react";
import "./App.css";
import Mastercard from "./mastercard.png";
import Sbi from "./sbi.png";
import Chip from './chip.png'
import Wifi from './wifi.png'

function Card() {
  return (
    <section>
      <div className="container">
        <div className="card front-face">
          <header>
            <span className="logo">
              <img src={Sbi} alt="" />
              <img src={Mastercard} alt="" />
            </span>
           <img src={Chip} alt="" className="chip" />
          </header>

          <div className="card-details">
            <div className="name-number">
              <h6>Card Number</h6>
              <h5 className="number">3434 5651 7541 9856</h5>
              <h6>Card Holder</h6>
              <h5 className="name">Sarath Donepudi</h5>
            </div>

            <div className="valid-date">
              <h6>Valid Thru</h6>
              <h5>05/28</h5>
            </div>
          </div>
        </div>

        <div className="card back-face">
          <h6>
            For customer service call 1800 900 898 or email at
            mastercard@gmail.com
          </h6>
          <span className="magnetic-strip"></span>
          <div className="signature"><i>005</i></div>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            maiores sed doloremque nesciunt neque beatae voluptatibus doloribus.
            Libero et quis magni magnam nihil temporibus? Facere consectetur
            dolore reiciendis et veniam.
          </h5>
        </div>
      </div>
    </section>
  );
}

export default Card;
