import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
const Container = tw.div` bg-primary-800 px-16 text-black text-center`;

function SaveEntries(){
    // var x = document.getElementById("entry").ariaValueText;
     alert("why is this error running immediately when there is no click")

 }  
export default () => {
return (
    <Container>
        <h1> Diary Entries </h1>
        <input type="text" placeholder="Enter entry" id="entry"></input> <br></br>
        {/* <button onClick={this.handleClick.SaveEntries()} > Submit </button> */}
        <script src="Textbox.js" type="text/JavaScript"></script>
    </Container>
  );
};

