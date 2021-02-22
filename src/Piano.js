import React, { Component } from "react";

export class Piano extends Component {
  render() {
    return (
      <div className="main">
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
      /*  <div className="pianoPage">
        <div id="circle"></div>
        <div className="white-key" id="w1"></div>
        <div className="black-key" id="b1"></div>
        <div className="white-key" id="w2"></div>
        <div className="white-key" id="w3"></div>
        <div className="black-key" id="b2"></div>
        <div className="white-key" id="w4"></div>
        <div className="black-key" id="b3"></div>
        <div className="white-key" id="w5"></div>
        <div className="white-key" id="w6"></div>
        <div className="black-key" id="b4"></div>
        <div className="white-key" id="w7"></div>
        <div className="black-key" id="b5"></div>
        <div className="white-key" id="w8"></div>
        <div className="black-key" id="b6"></div>
        <div className="white-key" id="w9"></div>
        <div className="white-key" id="w10"></div>
        <div className="black-key" id="b7"></div>
        <div className="white-key" id="w11"></div>
        <div className="black-key" id="b8"></div>
        <div className="white-key" id="w12"></div>
        <div className="white-key" id="w13"></div>
        <div className="black-key" id="b9"></div>
        <div className="white-key" id="w14"></div>
        <div className="black-key" id="b10"></div>
        <div className="white-key" id="w15"></div>
        <div className="black-key" id="b11"></div>
        <div className="white-key" id="w16"></div>
        <div className="white-key" id="w17"></div>
        <div className="black-key" id="b12"></div>
        <div className="white-key" id="w18"></div>
        <div className="black-key" id="b13"></div>
        <div className="white-key" id="w19"></div>
        <div className="white-key" id="w20"></div>
        <div className="black-key" id="b14"></div>
        <div className="white-key" id="w21"></div>
        <div className="black-key" id="b15"></div>
        <div className="white-key" id="w22"></div>
        <div className="black-key" id="b16"></div>
        <div className="white-key" id="w23"></div>
        <div className="white-key" id="w24"></div>
        <div className="black-key" id="b17"></div>
        <div className="white-key" id="w25"></div>
        <div className="black-key" id="b18"></div>
        <div className="white-key" id="w26"></div>
        <div className="white-key" id="w27"></div>
        <div className="black-key" id="b19"></div>
        <div className="white-key" id="w28"></div>
        <div className="black-key" id="b20"></div>
        <div className="white-key" id="w29"></div>
        <div className="black-key" id="b21"></div>
        <div className="white-key" id="w30"></div>
        <div className="white-key" id="w31"></div>
        <div className="black-key" id="b22"></div>
        <div className="white-key" id="w32"></div>
        <div className="black-key" id="b23"></div>
        <div className="white-key" id="w33"></div>
        <div className="white-key" id="w34"></div>
        <div className="black-key" id="b24"></div>
        <div className="white-key" id="w35"></div>
        <div className="black-key" id="b25"></div>
        <div className="white-key" id="w36"></div>
        <div className="black-key" id="b26"></div>
        <div className="white-key" id="w37"></div>
        <div className="white-key" id="w38"></div>
        <div className="black-key" id="b27"></div>
        <div className="white-key" id="w39"></div>
        <div className="black-key" id="b28"></div>
        <div className="white-key" id="w40"></div>
        <div className="white-key" id="w41"></div>
        <div className="black-key" id="b29"></div>
        <div className="white-key" id="w42"></div>
        <div className="black-key" id="b30"></div>
        <div className="white-key" id="w43"></div>
        <div className="black-key" id="b31"></div>
        <div className="white-key" id="w44"></div>
        <div className="white-key" id="w45"></div>
        <div className="black-key" id="b32"></div>
        <div className="white-key" id="w46"></div>
        <div className="black-key" id="b33"></div>
        <div className="white-key" id="w47"></div>
        <div className="white-key" id="w48"></div>
        <div className="black-key" id="b34"></div>
        <div className="white-key" id="w49"></div>
        <div className="black-key" id="b35"></div>
        <div className="white-key" id="w50"></div>
        <div className="black-key" id="b36"></div>
        <div className="white-key" id="w51"></div>
        <div className="white-key" id="w52"></div>
      </div> */
    );
  }
}

export default Piano;
