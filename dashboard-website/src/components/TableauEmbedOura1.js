import React, { useRef, useEffect } from "react";

const { tableau } = window;


function TableauEmbedOura1() {
    const ref = useRef(null);
    const url = "https://public.tableau.com/app/profile/seongjin.park5546/viz/T_HeartRate/Pearson?publish=yes";

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

export default TableauEmbedOura1;