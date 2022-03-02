import React from "react";
// import {Card, CardGroup} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import yi from "../../img/IMG_clean.svg";

function project() {
  return (
    <section id="work">
      <div className="card">
        <img src={yi} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>

      <div class="production">
        <h2>Projects</h2>
        <div class="flex-container">
          <h3>Adulis</h3>
          <div class="flex-item" id="container-one">
            <a href="https://nahom-assefa.github.io/weather-dashboard/">
              <img
                src="assets/images/weather-dashboard.png"
                alt="weather-dashboard"
              />
              weather Dashboard
            </a>
            <div></div>
          </div>

          <div class="flex-item" id="container-two">
            <a href="https://feortegas.github.io/SpotiTube/">
              <img src="assets/images/spotiTube.png" alt="SpotiTube" />
              SpotiTube
            </a>
            <div>
              <h2>SpotiTube</h2>
            </div>
          </div>

          <div class="flex-item" id="container-two">
            <a href="https://saladbarmn.com/">
              <img src="assets/images/calorie-tracker.png" alt="" /> Salad Bar
            </a>
            <div>
              <h2> Calorie Tracker </h2>
            </div>
          </div>
          <div class="flex-item" id="container-three">
            <a href="https://codesavior.herokuapp.com/">
              <img src="assets/images/code-savior.png" alt="code-savior" /> Code
              Savior
            </a>
            <div>
              <h2>Code Savior</h2>
            </div>
          </div>
          <div class="flex-item" id="container-four">
            <a href="https://nahom-assefa.github.io/run-buddy/">
              <img src="assets/images/run-buddy.png" alt="" /> Run Buddy
            </a>
            <div>
              <h2>Athletic Website</h2>
            </div>
          </div>
          <div class="flex-item" id="container-five">
            <a href="https://www.wellsfargo.com/online-banking/">
              <img src="assets/images/mobile-banking.png" alt="" /> Banking
            </a>
            <div>
              <h2>Banking App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default project;
