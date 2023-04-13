import React, { useRef, useEffect } from "react";

const { tableau } = window;


function TableauEmbedOura3() {
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/Tom_Workout/Workout?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

    function initViz () {
        new tableau.Viz(ref.current, url);
    }
    useEffect(() => {
        initViz();
    }, [])
    return (
        <div>
            <div ref={ref}></div>
        </div>
    );
}

export default TableauEmbedOura3;