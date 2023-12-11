import { React, useRef }  from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import NewTeam from "components/features/NewTeam"
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Diaries from "components/features/Diaries";

export default () => {
  const newTeamRef = useRef(null)
  const dashboardRef = useRef(null);
  return (
    <AnimationRevealPage>
      <Hero newTeamRef={newTeamRef} dashboardRef={dashboardRef}/>
      {<Diaries></Diaries>}
      <NewTeam ref={newTeamRef}/>
    </AnimationRevealPage>
  );
}
