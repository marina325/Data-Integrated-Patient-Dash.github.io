function Entry(){
    const today = new Date().toDateString();
return(
    <>
    {/*<input type="text" placeholder="Enter entry" id="entry"></input> */}
    {today} 
    </>
);
}
export default Entry