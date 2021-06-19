import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faWind,faSun,faCloudMoon, faThermometerHalf} from '@fortawesome/free-solid-svg-icons';
function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sub-container-1">
        <span>Karachi</span>
        <span>Monday 7:00 PM</span>
      </div>

      <div className="weather-icon">
      <FontAwesomeIcon icon={faCloudMoon}  color ="rgb(218, 222, 224)" size='5x' />
      </div>

      <div className="sub-container-2">
        <span>
          22<sup>o</sup>C
        </span>
        <span> Good Night</span>
        <span>Wasim</span>

        <div className="h-divider"></div>
      </div>

      <div className="sub-container-3">
        <ul>
          <li>
            <span><FontAwesomeIcon icon={faSun}/></span>
            <span>Sunrise</span>
            <span>7:00</span>
          </li>

          <div className="v-divider"></div>

          <li>
            <span> <FontAwesomeIcon icon={faWind}/></span>
            <span>Wind</span>
            <span>4m/s</span>
          </li>

          <div className="v-divider"></div>

          <li>
            <span><FontAwesomeIcon icon={faThermometerHalf}/></span>
            <span>Temperature</span>
            <span>
              23<sup>o</sup>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
