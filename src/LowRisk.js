import React, { Component } from 'react';
import ToggleInfo from "./ToggleInfo";

class LowRisk extends Component {
  render() {
    return (
    <div>
        <h1>Low Risk Container</h1>
        <h4>
          Based on the information provided you are least likely to get
          pregnant at this time of your cycle.
        </h4>
        
        <ToggleInfo>
          <div>
            <ul>
              <li>
                <a href="https://www.planbonestep.com/taking-plan-b/" target="_blank" rel="noopener noreferrer">
                Pregnancy
                </a>{" "}
              </li>
            
              <li>
                <a href="https://stayteen.org/ask" target="_blank" rel="noopener noreferrer">
                Sex Ed
                </a>
              </li>
            
              <li>
                <a href="https://www.plannedparenthood.org/learn/teens/preventing-pregnancy-stds" target="_blank" rel="noopener noreferrer">
                STD
                </a>
              </li>

              <li>
                <a href="https://www.healthychildren.org/English/ages-stages/teen/dating-sex/Pages/Birth-Control-for-Sexually-Active-Teens.aspx" target="_blank" rel="noopener noreferrer">
                Contraceptives
                </a>
              </li>
          </ul>
        </div>
      </ToggleInfo>
      </div>
    );
  }
}

export default LowRisk;
