import React from "react";
import "../assets/style/Classes.css";
import Bodybuilding from "../assets/images/Bodybuilding.png";
import Yoga from "../assets/images/Yoga.png";
import Pilates from "../assets/images/Pilates.png";
import Boxfit from "../assets/images/Boxfit.png";
import Cardio from "../assets/images/Cardio.png";
import Cardio_circuit from "../assets/images/Cardio Circuit.png";
import Service1 from "../assets/images/Service1.png";
import Service2 from "../assets/images/Service2.png";

function ClassesServices() {
  return (
    <>
      <div className="Classes-components">
        <div className="Header">
          <h1>Our Classes</h1>
        </div>
        <div className="Cards">
          <div className="card-1">
            <img src={Bodybuilding} alt="Bodybuilding" />
            <h3>Bodybuilding</h3>
            <p>
              {" "}
              Flexibility and stretching class delivered with a sense of
              spiritual and physical wellbeing. Styles of yoga are focused on a
              combination of Hatha and Ashtanga- dynamic moving and breathing
              yoga as opposed to stand still and hold a pose
            </p>
          </div>

          <div className="card-1">
            <img src={Yoga} alt="Yoga" />
            <h3>Yoga</h3>
            <p>
              Flexibility and stretching class delivered with a sense of
              spiritual and physical wellbeing. Styles of yoga are focused on a
              combination of Hatha and Ashtanga- dynamic moving and breathing
              yoga as opposed to stand still and hold a pose
            </p>
          </div>

          <div className="card-1">
            <img src={Pilates} alt="Pilates" />
            <h3>Pilates</h3>
            <p>
              Traditional mat pilates utilising exercises and movements to help
              improve posture, flexibility and coordination. No machines are
              used in this class
            </p>
          </div>
        </div>

        <div className="Cards">
          <div className="card-1">
            <img src={Boxfit} alt="Boxfit" />
            <h3>Boxfit</h3>
            <p>
              Get ready to get sweaty! Our bootcamp-style boxing class will put
              you through the wringer with both boxing combinations and body
              weight exercises
            </p>
          </div>

          <div className="card-1">
            <img src={Cardio} alt="Cardio" />
            <h3>Cardio</h3>
            <p>
              Cardio exercise, which is sometimes referred to as aerobic
              exercise, is any rhythmic activity that raises your heart rate
              into your target heart rate
            </p>
          </div>

          <div className="card-1">
            <img src={Cardio_circuit} alt="Cardio_circuit" />
            <h3>Cardio Circuit</h3>
            <p>
              Push your body to the limit in this high-intensity cardio class.
              Designed for all levels of fitness, utilising cardio equipment and
              body weight exercises
            </p>
          </div>
        </div>
        <div className="Services">
          <div className="Services-header">
            <h1>Our Services</h1>
          </div>
          <div className="Services-imgs">
            <div className="img-1">
              <img src={Service1} alt="service1" />
            </div>
            <div className="img-2">
              <img src={Service2} alt="service2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassesServices;
