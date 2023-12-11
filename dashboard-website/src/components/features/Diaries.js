import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = tw.div` bg-primary-800 px-16 text-black text-center`;
const today = new Date().toDateString();
let entries = [];
function addNote() { 
    // entries.push(document.getElementById("entry").value);
     console.log(document.getElementById("entry").value)
 } 
 function SaveEntries(){
    //alert(entries)
   // document.getElementById("EntryButton").innerHTML = "YOU CLICKED ME!";
}   
function changeDate(){
    document.getElementById("currentDay").value = "YOU CLICKED ME!";
}
export default () => {
return (
    <Container>
        <h1> Diary Entries </h1>
        <button onClick="yesterday()">Yesterday</button>
        <input type="toDateString" value={today} id="currentDay" onclick={changeDate()}></input> 
        <button>Tomorrow</button><br></br>
        <input type="text" placeholder="Enter entry" id="entry"></input> <br></br>
        <button onclick={addNote()}> Submit </button>  
        {/* <button onclick={SaveEntries()}> Display All </button> */}
    </Container>
  );
};

