import SelectDate from "./SelectDate.jsx" 
import EditEntry from "./EditEntry.jsx" 
function Buttons(){
    return(
        <>
         <button onClick={SelectDate}> Select Date</button>
         <button onClick={EditEntry}>Edit Entry</button> 
        </>
    );
}
export default Buttons;