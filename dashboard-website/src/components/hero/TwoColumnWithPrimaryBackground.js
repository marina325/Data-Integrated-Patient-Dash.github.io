import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, {
  LogoLink as LogoLinkBase,
  NavLinks,
  NavLink as NavLinkBase,
  PrimaryLink as PrimaryLinkBase
} from "../headers/light.js";
import { Container as ContainerBase, ContentWithVerticalPadding, Content2Xl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import logoImageSrc from "images/dashboard_icon.svg";

const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-800 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(NavLinkBase)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const Heading = tw(SectionHeading)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Description = tw(SectionDescription)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;

const Hero = ({ 
  heading = "MedDash",
  description = "MedDash aims to consolidate multiple sources of health data into a comprehensive medical dashboard",
  }) => {
    const logoLink = (
      <LogoLink href="/">
        <img src={logoImageSrc} alt="Logo" />
        MedDash
      </LogoLink>
    );
    const navLinks = [
      <NavLinks key={1}>
        <NavLink href="/#/About-Our-Project">About our Project</NavLink>
      </NavLinks>
    ];
    return (
      <PrimaryBackgroundContainer>
        <Content2Xl>
          <Header logoLink={logoLink} links={navLinks} />
          <Container>
            <ContentWithVerticalPadding>
              <Row>
                <TextColumn>
                  <Heading>{heading}</Heading>
                  <Description>{description}</Description>
                </TextColumn>
              </Row>
            </ContentWithVerticalPadding>
          </Container>
        </Content2Xl>
      </PrimaryBackgroundContainer>
    );
  };

export default Hero;
