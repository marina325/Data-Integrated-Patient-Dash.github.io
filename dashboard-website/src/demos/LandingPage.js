import { React, useRef }  from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/Overview.js";
import OurTeam from "components/features/OurTeam";
import MainFeature from "components/features/GoodSleepFeature.js";
import GoodDietFeature from "components/features/GoodDietFeature.js";
import FAQ from "components/faqs/Questions.js";
// import Footer from "components/footers/Footer.js";
// import TableauEmbed from "components/TableauEmbed.js";
// import TableauScoresEmbed from "components/TableauScoresEmbed";
import TableauEmbedAH from "components/TableauEmbedAH"
import TableauEmbedOura1 from "components/TableauEmbedOura1";
import TableauEmbedOura2 from "components/TableauEmbedOura2";
import TableauEmbedOura3 from "components/TableauEmbedOura3";
import TableauEmbedOura4 from "components/TableauEmbedOura4";
import TableauEmbedOura5 from "components/TableauEmbedOura5";
// import TableauEmbedOuraHeartRate from "components/TableauEmbedOuraHeartRate";
import sleepIllustrationImageSrc from "images/sleep.png"
import healthyfoodIllustrationImageSrc from "images/healthyfood.jpg"
import Signup from "pages/Signup";


export default () => {
  const ourTeamRef = useRef(null);
  const dashboardRef = useRef(null);
  return (
    <AnimationRevealPage>
      <Hero ourTeamRef={ourTeamRef} dashboardRef={dashboardRef}/>
      <OurTeam  ref={ourTeamRef}/>
      {/*<TableauScoresEmbed ref={dashboardRef}/>*/}
      <TableauEmbedOura1 />
      {/*<TableauEmbed />*/}
      <TableauEmbedOura2 />
      <TableauEmbedOura3 />
      <TableauEmbedOura4 />
      <TableauEmbedOura5 />
      <TableauEmbedAH />
      {/*<TableauEmbedOuraHeartRate />*/}
      <MainFeature
        subheading=""
        heading="The Importance of Sleep"
        imageSrc={sleepIllustrationImageSrc}
        buttonRounded={false}
      />
      <GoodDietFeature 
        subheading=""
        heading="What a Good Diet Can Do For You"
        imageSrc={healthyfoodIllustrationImageSrc}
        buttonRounded={false}
        textOnLeft={false}
      />
      {/* <Testimonial /> */}
      <FAQ />
      <Signup />
      {/* <Footer /> */}
    </AnimationRevealPage>
  );
}
