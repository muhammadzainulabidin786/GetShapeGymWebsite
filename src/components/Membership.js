import React from "react";
import "../assets/style/Membership.css";

function Membership() {
  return (
    <>
      <div className="membership-container">
        <div className="membership-heading">
          <h1>Membership</h1>
        </div>
        <div className="membership-cards">
          <div className="membership-card">
            <h2>Month To Month</h2>
            <p className="price">
              $165 <span>/mo</span>
            </p>

            <ul>
              <li className="green-tick">All classes</li>
              <li className="green-tick">All member events</li>
              <li className="green-tick">Full gym access</li>
            </ul>

            <p className="charges">Charges every month unless you cancel</p>
            <button className="trial-button">start 7 day free trial</button>
          </div>

          <div className="membership-card">
            <h2>6 Month Membership</h2>
            <p className="price">
              $145<span>/mo</span>
            </p>
            <ul>
              <li className="green-tick">All classes</li>
              <li className="green-tick">All member events</li>
              <li className="green-tick">Full gym access</li>
            </ul>
            <p className="charges">Charges every 6 months unless you cancel</p>
            <button className="trial-button">start 7 day free trial</button>
          </div>

          <div className="membership-card">
            <h2>1 Year Membership</h2>
            <p className="price">
              $125<span>/mo</span>
            </p>
            <ul>
              <li className="green-tick">All classes</li>
              <li className="green-tick">All member events</li>
              <li className="green-tick">Full gym access</li>
            </ul>
            <p className="charges">Charges every year unless you cancel</p>
            <button className="trial-button">start 7 day free trial</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Membership;
