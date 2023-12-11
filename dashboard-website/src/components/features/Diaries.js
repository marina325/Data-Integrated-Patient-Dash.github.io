import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
const Container = tw.div`relative bg-primary-800 -mx-8 px-8 text-gray-100`;
{/* <html>
<body.React>
    <script src="Textbox.js" type="text/JavaScript"></script>
    <h1> Diary Entries </h1>
    <input type="text" placeholder="Enter entry"></input>
    <input type="button" value="Submit"></input>
</body.React>
</html> */}
export default () => {
return (
    <Container>
        <script src="Textbox.js" type="text/JavaScript"></script>
        <h1> Diary Entries </h1>
        <input type="text" placeholder="Enter entry"></input>
        <input type="button" value="Submit"></input>
    </Container>
  );
};