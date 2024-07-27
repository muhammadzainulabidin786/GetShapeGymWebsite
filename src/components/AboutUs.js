import React from "react";
import "../assets/style/AboutUs.css";
import { Button } from "react-bootstrap";

function AboutUsForm() {
  return (
    <>
      <div className="about-us-form">
        <div className="about-us">
          <h1>About Us</h1>
          <p>
            Energym is Located in Sydney’s Inner West on over 3500 sq metres,
            our mission is simple: Keeping the Community Healthy.
          </p>
          <p>
            We pride ourselves on providing a friendly and motivating
            atmosphere, where our experienced staff are committed to getting to
            know you, and helping you to achieve your personal fitness goals.
          </p>
          <p>
            So whether you’re a class enthusiast, free weights champion or just
            looking to start out with a helping hand from our team of
            professional Personal Trainers, feel part of the community here at
            Energym.
          </p>
          <p>See you on the gym floor soon.</p>
        </div>

        <div className="form">
          <form>
            <h2>GET YOUR FIRST WORKOUT ON US!</h2>

            <label>
              <input type="text" placeholder="Full name*" />
            </label>

            <label>
              <input type="text" placeholder="Email address*" />
            </label>

            <label>
              <input type="text" placeholder="Phone Number*" />
            </label>

            <button type="button">Let's go</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AboutUsForm;
