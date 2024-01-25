// import { useState } from 'react';
import Arrow from "./assets/arrow.png";

function handleClicks() {
  console.log("Clicked!")
}

export default function ArrowButton() {
  return (
    <>
      <button onClick={handleClicks}><img className="left-arrow" src={Arrow} alt="Left Arrow" /></button>
      <button onClick={handleClicks}><img className="right-arrow" src={Arrow} alt="Right Arrow" /></button>
    </>
  );
}