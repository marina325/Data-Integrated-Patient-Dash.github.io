import { React, useRef }  from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import NewTeam from "components/features/NewTeam"
import Diary from "components/features/Diaries/Diary.jsx"
import ArrowButton from "components/features/Buttons/ArrowButtons.js"

export default () => {
  const newTeamRef = useRef(null)
  const dashboardRef = useRef(null);
  return (
    <AnimationRevealPage>
      <Hero newTeamRef={newTeamRef} dashboardRef={dashboardRef}/>
      <Diary/>
      <ArrowButton/>
    </AnimationRevealPage>
  );
}
