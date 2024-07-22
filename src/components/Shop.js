import React from "react";
import "../assets/style/Shop.css";
import BarbellBarSet from "../assets/images/Barbell BarSet.png";
import WeightSet from "../assets/images/Weight Set.png";
import DumbleSet from "../assets/images/Dumble set.png";
import KettlebelSet from "../assets/images/Kettlebell set.png";
import WhyProtein from "../assets/images/Whey Protein Powder.png";
import PreWorkout from "../assets/images/Preworkout.png";
import Creatine from "../assets/images/Creatine.png";
import FishOil from "../assets/images/FishOil.png";

function Shop() {
  return (
    <>
      <div className="shop-container">
        <h1>WEIGHT LIFTING EQUIPMENT</h1>
        <div className="weight-lifting-eq">
          <div className="equipment">
            <img src={BarbellBarSet} alt="Barbell set" />
            <h3>Barbell Bar Set</h3>
            <h4>70$</h4>
          </div>

          <div className="equipment">
            <img src={WeightSet} alt="Barbell set" />
            <h3>Weight Set</h3>
            <h4>30$</h4>
          </div>

          <div className="equipment">
            <img src={DumbleSet} alt="Barbell set" />
            <h3>Dumble Set</h3>
            <h4>29$</h4>
          </div>

          <div className="equipment">
            <img src={KettlebelSet} alt="Barbell set" />
            <h3>Kettle bell set</h3>
            <h4>40$</h4>
          </div>
        </div>

        <h1>WEIGHT LIFTING EQUIPMENT</h1>
        <div className="weight-lifting-eq">
          <div className="equipment">
            <img src={WhyProtein} alt="Why protein" />
            <h3>Whey Protein Powder</h3>
            <h4>31.99$</h4>
          </div>

          <div className="equipment">
            <img src={PreWorkout} alt="Preworkout" />
            <h3>PreWorkout</h3>
            <h4>19.24$</h4>
          </div>

          <div className="equipment">
            <img src={Creatine} alt="Creatine Monohydrate" />
            <h3>Creatine Monohydrate</h3>
            <h4>19.24$</h4>
          </div>

          <div className="equipment">
            <img src={FishOil} alt="FishOil" />
            <h3>Fish Oil</h3>
            <h4>31.99$</h4>
          </div>
        </div>
      </div>
    </>
  );
}
export default Shop;
