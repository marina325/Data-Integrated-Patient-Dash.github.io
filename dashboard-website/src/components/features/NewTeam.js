import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import defaultCardImage from "images/shield-icon.svg";
import MelissaProfile from "images/MelissaProfile.png"
import BenProfile from "images/BenProfile.png"


const Container = tw.div`relative bg-primary-800 -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`bg-gray-100 text-center rounded-full flex-shrink-0`}
    img {
      ${tw`w-20 h-20`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

const newTeam = React.forwardRef( ({
  members = null,
  heading = "New Team Members",
  subheading = "University of California, San Diego",
  description = "We are a team of Bioengineering students at UC San Diego, supported by a group of Data Science collaborators, advised by Dr. Benjamin Smarr.",
  description2 = "Data Science Collaborators: "
}, ref) => {

const DSCmembers = [
  {
    title: "Jessica Fong",
    description: ""
  },
  {
    title: "Owen Guan",
    description: ""
  },
  {
    title: "Ruchi Kamboj",
    description: ""
  },
  {
    title: "Shreya Nagesh",
    description: ""
  },
  {
    imageSrc: MelissaProfile,
    title: "Melissa Osheroff",
    description: ""
  },
  {
    title: "Marina Xu",
    description: ""
  },
  {
    imageSrc: BenProfile,
    title: "Dr. Benjamin Smarr",
    description: ""
  },
];




if (!members) members = DSCmembers;

return (
  <Container ref={ref}>
    <ThreeColumnContainer>
      {subheading && <Subheading>{subheading}</Subheading>}
      <Heading>{heading}</Heading>
      {description && <Description>{description}</Description>}
      <VerticalSpacer />
      {members.map((card, i) => (
        <Column key={i}>
          <Card>
            <span className="imageContainer">
              <img src={card.imageSrc || defaultCardImage} alt="profile picture" 
              style={{
                borderRadius: "50%",
                display: "block"
              }}
            />
            </span>
            <span className="textContainer">
              <span className="title">{card.title || "Fully Secure"}</span>
              <p className="description">
                {card.description || ""}
              </p>
            </span>
          </Card>
        </Column>
      ))}
      {description2 && <Description>{description2}</Description>}
    </ThreeColumnContainer>
  </Container>
);
});

export default newTeam;
