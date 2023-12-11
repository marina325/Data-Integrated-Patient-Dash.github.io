import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
const Container = tw.div`relative bg-primary-800 -mx-8 px-8 text-gray-100`;


function SaveEntries(){
    var x = document.getElementById("entry").ariaValueText;
    alert(x);
    //const fs = require('fs')
 
// // Data which will write in a file.
// let data = "Learning how to write in a file."
 
// // Write data in 'Output.txt' .
// fs.writeFile('Output.txt', data, (err) => {
 
//     // In case of a error throw err.
//     if (err) throw err;
// })
}

export default () => {
return (
    <Container>
        <script src="Textbox.js" type="text/JavaScript"></script>
        <h1> Diary Entries </h1>
        <input type="text" placeholder="Enter entry" id="entry"></input> <br></br>
        <input type="SubmitButton" value="Submit" onClick="SaveEntries()"  ></input>
    </Container>
  );
};