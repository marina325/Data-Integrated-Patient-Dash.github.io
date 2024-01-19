import React from "react";
import tw from "twin.macro";

const Container = tw.div` bg-primary-800 px-16 text-black text-center`;
const today = new Date().toDateString();
let yesterday = new Date();
yesterday.setDate(yesterday.getDate()-1);
yesterday = yesterday.toDateString();
let entries = [];
function addNote() { 
    // entries.push(document.getElementById("entry").value);
    // console.log(document.getElementById("entry").value)
    //alert(entries)
 } 
 function SaveEntries(){
    //alert(entries)
   // document.getElementById("EntryButton").innerHTML = "YOU CLICKED ME!";
}   
function changeDate(){
    // document.getElementById("currentDay").value = "YOU CLICKED ME!";
}
export default () => {
return (
    <Container>
        <h1> Diary Entries </h1>
        <input type="toDateString" value={yesterday} id="yesterday"></input> 
        <input type="toDateString" value={today} id="currentDay"></input> <br></br>
        {/* <button>Tomorrow</button><br></br> */}
        <input type="text" placeholder="Enter entry" id="entry"></input>
        <input type="text" placeholder="Enter entry" id="entry"></input> <br></br>
    </Container>
  );
};

