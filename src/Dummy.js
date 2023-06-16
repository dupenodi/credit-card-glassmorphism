import React from 'react';
import './CreditCard.css'; // CSS styles for the credit card
import Mastercard from "./mastercard.png";
import Sbi from "./sbi.png";
import Chip from "./chip.png"
const CreditCard = () => {
  return (
    <div className="credit-card">
      <div className="bank-logo">
        {/* Replace the 'bank-logo.png' with the actual path to your bank logo */}
        <img src={Sbi} alt="Bank Logo" />
      </div>
      <div className="card-type">
        {/* Replace the 'mastercard-logo.png' with the actual path to the Mastercard logo */}
        <img src={Mastercard} alt="Mastercard Logo" />
      </div>
      <div className="card-number">
        <h4>1234 5678 9012 3456</h4>
      </div>
      <div className="card-details">
        <div className="card-holder">
          <p>Card Holder</p>
          <p>John Doe</p>
        </div>
        <div className="expiration">
          <p>Expires</p>
          <p>09/25</p>
        </div>
      </div>
      <div className="chip">
        {/* Replace the 'chip-image.png' with the actual path to the chip image */}
        <img src={Chip} alt="Chip" />
      </div>
    </div>
  );
};

export default CreditCard;
