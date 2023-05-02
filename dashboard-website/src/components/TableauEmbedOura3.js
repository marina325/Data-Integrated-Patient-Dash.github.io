import React, { useRef, useEffect } from "react";

const { tableau } = window;


function TableauEmbedOura3() {
    const ref = useRef(null);
    const url = "https://public.tableau.com/app/profile/seongjin.park5546/viz/T_HeartRate/Workout?publish=yes";

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