import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";

const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-800 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const FaqsContainer = tw.div`mt-10 sm:mt-16 w-full flex-1 lg:flex justify-between items-start max-w-screen-lg mx-auto`;
const FaqsColumn = tw.div`w-full lg:max-w-lg lg:mr-12 last:mr-0`;
const Faq = tw.div`select-none cursor-pointer border-b-2 border-primary-300 hover:border-primary-500 transition-colors duration-300 py-6`;
const Question = tw.div`flex justify-between items-center`;
const QuestionText = tw.div`text-sm sm:text-lg font-semibold tracking-wide`;
const QuestionToggleIcon = styled(motion.span)`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const Answer = tw(motion.div)`hidden text-sm font-normal mt-4 text-gray-300`;

export default ({
  subheading = "",
  heading = "About MedDash",
  description = "MedDash was created to provide both providers and patients with a summary of their health data that is both informative and easy to read",
  faqs = [
    {
      question: "What does MedDash currently provide?",
      answer:
        "This dashboard currently provides a 1) Pearson Correlation graph that enables you to select any 2 out of 25 metrics available from Oura Ring data and obtain the Pearson Correlation Coefficient between the 2 selected metrics; 2) Longitudinal Plot for Oura Ring data that enables you to select one metric and see how it trended for a user-selected month/year; 3) Workout Plot that enables you to see the frequency of specified workouts from Oura Ring data over user-selected months/years; 4) Life Events plot that shows all user-tracked life events from Oura Ring data over a user-specified time interval; 5) Recent Heart Rate plot that shows a user’s heart rate data obtained from Oura Ring over a 24 hour time window; and 6) Apple Health Longitudinal Plots that enables the simultaneous viewing of various health metrics automatically tracked by Apple Health over a user-specified month/year."
    },
    {
      question: "Where does the data come from?",
      answer:
        "MedDash is a health and wellness platform that compiles data from a variety of sources to provide a comprehensive view of your health. This includes data related to activity levels, sleep patterns, and medical history. For example, the platform can integrate with Apple Health, which tracks a range of health data such as heart rate, steps taken, and calories burned. In addition, data related to life events and workouts can be obtained from devices such as the Oura Ring. By bringing together these various sources of data, MedDash enables users to gain valuable insights into their health and make informed decisions about their wellness."
    },
    {
      question: "Can MedDash be viewed on a mobile app?",
      answer:
        "At the moment, there is no app available for accessing the dashboards. This applies to both IOS and Android users. However, you can still view the dashboards by accessing the website on your phone. It's important to note that if you choose to view the website on your phone, please ensure that you display it horizontally to optimize the viewing experience. We are constantly working to improve our user experience, and we appreciate your patience as we work on developing an app for our dashboards. In the meantime, please do not hesitate to contact us if you have any questions or concerns."
    },
    {
      question: "What technology was used to create MedDash?",
      answer:
        "Google Cloud Functions were used to develop pipelines for the automated extraction and parsing of health data from Oura Ring and Apple Health. Python was used to load and clean the data which is then uploaded to Tableau to create the dashboard. The dashboard itself is hosted on a website created through GitHub Pages."
    },
    {
      question: "What makes MedDash unique or different from existing dashboards?",
      answer:
        "MedDash, a dashboard that integrates multiple health data sources, distinguishes itself from existing medical dashboards through its unique features as it consolidates data from various healthcare systems and devices, providing a comprehensive view of a patient's health. It excels in real-time data aggregation, enabling continuous monitoring and proactive care management. Equipped with advanced analytics and decision support tools, MedDash empowers healthcare providers to derive meaningful insights and make data-driven decisions. Prioritizing interoperability and cross-platform accessibility, MedDash ensures seamless data exchange and access to patient information from anywhere. Its customizable and scalable nature allows healthcare organizations to tailor MedDash to their specific needs while effectively handling large volumes of data."
    },
    {
      question: "What features would be added to MedDash in the future?",
      answer:
        "Ideally, MedDash will incorporate EHR records (such as those present in Epic) as well as an automated data collection, uploading, and visualization pipeline for various other wearable devices and patients' personal calendars (such as Google Calendar).",
    }
  ]
}) => {
  const faqCol1 = [];
  const faqCol2 = [];
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  faqs.map((faq, index) => {
    const renderedFaq = (
      <Faq key={index} onClick={() => toggleQuestion(index)}>
        <Question>
          <QuestionText>{faq.question}</QuestionText>
          <QuestionToggleIcon
            variants={{
              collapsed: { rotate: 0 },
              open: { rotate: -180 }
            }}
            initial="collapsed"
            animate={activeQuestionIndex === index ? "open" : "collapsed"}
            transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ChevronDownIcon />
          </QuestionToggleIcon>
        </Question>
        <Answer
          variants={{
            open: { opacity: 1, height: "auto", marginTop: "16px", display: "block" },
            collapsed: { opacity: 0, height: 0, marginTop: "0px", display: "none" }
          }}
          initial="collapsed"
          animate={activeQuestionIndex === index ? "open" : "collapsed"}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {faq.answer}
        </Answer>
      </Faq>
    );

    if (index % 2 === 0) faqCol1.push(renderedFaq);
    else faqCol2.push(renderedFaq);

    return null;
  });
  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <FaqsContainer>
          <FaqsColumn>{faqCol1}</FaqsColumn>
          <FaqsColumn>{faqCol2}</FaqsColumn>
        </FaqsContainer>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
