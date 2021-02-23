import React, { Component } from "react";
import { playC4, playDb4, playD4 } from "./tone.fn.js";
export class Piano extends Component {
  render() {
    return (
      <div className="main">
        <div className="circle">D6</div>
        <div className="circle">B4</div>
        <div className="circle">B6</div>
        <div className="circle">E1</div>
        <div className="circle">F1</div>
        <div className="circle">G1</div>
        <div className="circle">A1</div>
        <div className="circle">B1</div>
        <div className="circle">C2</div>
        <div className="circle">D2</div>
        <div className="circle">F2</div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle">E2</div>
        <div className="circle">G2</div>
        <div className="circle">A2</div>
        <div className="circle">B2</div>
        <div className="circle">C3</div>
        <div className="circle">E3</div>
        <div className="circle">F3</div>
        <div className="circle">G3</div>
        <div className="circle">A3</div>
        <div className="circle">B3</div>
        <div className="circle">C4</div>
        <div className="circle">D4</div>
        <div className="circle">E4</div>
        <div className="circle">F4</div>
        <div className="circle">G4</div>
        <div className="circle">A4</div>
        <div className="circle">E8</div>
        <div className="circle">C5</div>
        <div className="circle">D5</div>
        <div className="circle">F5</div>
        <div className="circle">G5</div>
        <div className="circle">A5</div>
        <div className="circle">B5</div>
        <div className="circle">C6</div>
        <div className="circle">D6</div>
        <div className="circle">E6</div>
        <div className="circle">F6</div>
        <div className="circle">G6</div>
        <div className="circle">A6</div>
        <div className="circle">C7</div>
        <div className="circle">D7</div>
        <div className="circle">E7</div>
        <div className="circle">F7</div>
        <div className="circle">G7</div>
        <div className="circle">A7</div>
        <div className="circle">B7</div>
        <div className="circle">C8</div>
        <div className="circle">D8</div>
        <div className="circle">E8</div>
        <div className="circle">F8</div>
        <div className="circle">G8</div>
        <div className="circle">A8</div>
        <div className="circle">B8</div>
        <div className="circle">F0</div>
        <div className="circle">G0</div>
        <div className="circle">A0</div>
        <div className="circle">B0</div>
        <div className="circle" onClick={playC4}>
          C1
        </div>
        <div className="circle" onClick={playD4}>
          D1
        </div>
        {/* black keys */}
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle" onClick={playDb4}>
          xxxxDb4
        </div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>

        <div className="chromaticDivsMain">
          <div className="chromaticDivs"></div>
          <div className="chromaticDivs"></div>
          <div className="chromaticDivs"></div>
          <div className="chromaticDivs"></div>
          <div className="chromaticDivs"></div>
          <div className="chromaticDivs"></div>
          <div className="chromaticDivs"></div>
          <div className="chromaticDivs"></div>
          <div className="chromaticDivs"></div>
          <div className="chromaticDivs"></div>
          <div className="chromaticDivs"></div>
          <div className="chromaticDivs"></div>
        </div>
      </div>
    );
  }
}

export default Piano;
