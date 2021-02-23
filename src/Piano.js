import React, { Component } from "react";
import * as Tone from "tone";
import {
  droneC2,
  droneDb2,
  droneD2,
  droneEb2,
  droneE2,
  droneF2,
  droneGb2,
  droneG2,
  droneAb2,
  droneA2,
  droneBb2,
  droneB2,
} from "./tone.fn.js";

export default function Piano() {
  const synth = new Tone.Synth().toDestination();

  function playNote(note) {
    synth.triggerAttackRelease(`${note}`, "4n");
  }

  return (
    <div className="main">
      <div className="circle" onClick={() => playNote("D3")}></div>
      <div className="circle" onClick={() => playNote("B4")}></div>
      <div className="circle" onClick={() => playNote("B6")}></div>
      <div className="circle" onClick={() => playNote("E1")}></div>
      <div className="circle" onClick={() => playNote("F1")}></div>
      <div className="circle" onClick={() => playNote("G1")}></div>
      <div className="circle" onClick={() => playNote("A1")}></div>
      <div className="circle" onClick={() => playNote("B1")}></div>
      <div className="circle" onClick={() => playNote("C2")}></div>
      <div className="circle" onClick={() => playNote("D2")}></div>
      <div className="circle" onClick={() => playNote("F2")}></div>
      <div className="circle" onClick={() => playNote("F1")}></div>
      <div className="circle" onClick={() => playNote("F1")}></div>
      <div className="circle" onClick={() => playNote("E2")}></div>
      <div className="circle" onClick={() => playNote("G2")}></div>
      <div className="circle" onClick={() => playNote("A2")}></div>
      <div className="circle" onClick={() => playNote("B2")}></div>
      <div className="circle" onClick={() => playNote("C3")}></div>
      <div className="circle" onClick={() => playNote("E3")}></div>
      <div className="circle" onClick={() => playNote("F3")}></div>
      <div className="circle" onClick={() => playNote("G3")}></div>
      <div className="circle" onClick={() => playNote("A3")}></div>
      <div className="circle" onClick={() => playNote("B3")}></div>
      <div className="circle" onClick={() => playNote("C4")}></div>
      <div className="circle" onClick={() => playNote("D4")}></div>
      <div className="circle" onClick={() => playNote("E4")}></div>
      <div className="circle" onClick={() => playNote("F4")}></div>
      <div className="circle" onClick={() => playNote("G4")}></div>
      <div className="circle" onClick={() => playNote("A4")}></div>
      <div className="circle" onClick={() => playNote("E5")}></div>
      <div className="circle" onClick={() => playNote("C5")}></div>
      <div className="circle" onClick={() => playNote("D5")}></div>
      <div className="circle" onClick={() => playNote("F5")}></div>
      <div className="circle" onClick={() => playNote("G5")}></div>
      <div className="circle" onClick={() => playNote("A5")}></div>
      <div className="circle" onClick={() => playNote("B5")}></div>
      <div className="circle" onClick={() => playNote("C6")}></div>
      <div className="circle" onClick={() => playNote("D6")}></div>
      <div className="circle" onClick={() => playNote("E6")}></div>
      <div className="circle" onClick={() => playNote("F6")}></div>
      <div className="circle" onClick={() => playNote("G6")}></div>
      <div className="circle" onClick={() => playNote("A6")}></div>
      <div className="circle" onClick={() => playNote("C7")}></div>
      <div className="circle" onClick={() => playNote("D7")}></div>
      <div className="circle" onClick={() => playNote("E7")}></div>
      <div className="circle" onClick={() => playNote("F7")}></div>
      <div className="circle" onClick={() => playNote("G7")}></div>
      <div className="circle" onClick={() => playNote("A7")}></div>
      <div className="circle" onClick={() => playNote("B7")}></div>
      <div className="circle" onClick={() => playNote("C8")}></div>
      <div className="circle" onClick={() => playNote("D8")}></div>
      <div className="circle" onClick={() => playNote("E8")}></div>
      <div className="circle" onClick={() => playNote("F8")}></div>
      <div className="circle" onClick={() => playNote("G8")}></div>
      <div className="circle" onClick={() => playNote("A8")}></div>
      <div className="circle" onClick={() => playNote("B8")}></div>
      <div className="circle" onClick={() => playNote("F0")}></div>
      <div className="circle" onClick={() => playNote("G0")}></div>
      <div className="circle" onClick={() => playNote("A0")}></div>
      <div className="circle" onClick={() => playNote("B0")}></div>
      <div className="circle" onClick={() => playNote("C1")}></div>
      <div className="circle" onClick={() => playNote("D1")}></div>
      {/* black keys */}
      <div className="circle" onClick={() => playNote("Ab0")}></div>
      <div className="circle" onClick={() => playNote("Bb8")}></div>
      <div className="circle" onClick={() => playNote("Gb0")}></div>
      <div className="circle" onClick={() => playNote("Db1")}></div>
      <div className="circle" onClick={() => playNote("Eb1")}></div>
      <div className="circle" onClick={() => playNote("Gb1")}></div>
      <div className="circle" onClick={() => playNote("Ab1")}></div>
      <div className="circle" onClick={() => playNote("Bb1")}></div>
      <div className="circle" onClick={() => playNote("Db2")}></div>
      <div className="circle" onClick={() => playNote("Eb2")}></div>
      <div className="circle" onClick={() => playNote("Gb2")}></div>
      <div className="circle" onClick={() => playNote("Ab2")}></div>
      <div className="circle" onClick={() => playNote("Bb2")}></div>
      <div className="circle" onClick={() => playNote("Db3")}></div>
      <div className="circle" onClick={() => playNote("Eb3")}></div>
      <div className="circle" onClick={() => playNote("Gb3")}></div>
      <div className="circle" onClick={() => playNote("Ab3")}></div>
      <div className="circle" onClick={() => playNote("Bb3")}></div>
      <div className="circle" onClick={() => playNote("Db4")}></div>
      <div className="circle" onClick={() => playNote("Eb4")}></div>
      <div className="circle" onClick={() => playNote("Gb4")}></div>
      <div className="circle" onClick={() => playNote("Ab4")}></div>
      <div className="circle" onClick={() => playNote("Bb4")}></div>
      <div className="circle" onClick={() => playNote("Db5")}></div>
      <div className="circle" onClick={() => playNote("Eb5")}></div>
      <div className="circle" onClick={() => playNote("Gb5")}></div>
      <div className="circle" onClick={() => playNote("Ab5")}></div>
      <div className="circle" onClick={() => playNote("Bb5")}></div>
      <div className="circle" onClick={() => playNote("Db6")}></div>
      <div className="circle" onClick={() => playNote("Eb6")}></div>
      <div className="circle" onClick={() => playNote("Gb6")}></div>
      <div className="circle" onClick={() => playNote("Ab6")}></div>
      <div className="circle" onClick={() => playNote("Bb6")}></div>
      <div className="circle" onClick={() => playNote("Db7")}></div>
      <div className="circle" onClick={() => playNote("Eb7")}></div>
      <div className="circle" onClick={() => playNote("Gb7")}></div>
      <div className="circle" onClick={() => playNote("Ab7")}></div>
      <div className="circle" onClick={() => playNote("Bb7")}></div>
      <div className="circle" onClick={() => playNote("Db8")}></div>
      <div className="circle" onClick={() => playNote("Eb8")}></div>
      <div className="circle" onClick={() => playNote("Gb8")}></div>
      <div className="circle" onClick={() => playNote("Ab8")}></div>
      <div className="circle" onClick={() => playNote("Bb0")}></div>

      <div className="chromaticDivsMain">
        <div className="chromaticDivs" onClick={droneC2}></div>
        <div className="chromaticDivs" onClick={droneDb2}></div>
        <div className="chromaticDivs" onClick={droneD2}></div>
        <div className="chromaticDivs" onClick={droneEb2}></div>
        <div className="chromaticDivs" onClick={droneE2}></div>
        <div className="chromaticDivs" onClick={droneF2}></div>
        <div className="chromaticDivs" onClick={droneGb2}></div>
        <div className="chromaticDivs" onClick={droneG2}></div>
        <div className="chromaticDivs" onClick={droneAb2}></div>
        <div className="chromaticDivs" onClick={droneA2}></div>
        <div className="chromaticDivs" onClick={droneBb2}></div>
        <div className="chromaticDivs" onClick={droneB2}></div>
      </div>
    </div>
  );
}
