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
      {/* <iframe src="https://calendar.google.com/calendar/embed?src=1108d89f79f90127fc6bfe3412ad18857e9825201b0880ceb41f29d529a398be%40group.calendar.google.com&ctz=America%2FLos_Angeles" style="border: 0" width="800" height="600" frameborder="0" ></iframe> */}
    </AnimationRevealPage>
  );
}
