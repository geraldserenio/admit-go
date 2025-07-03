import React from "react";
import styled, { keyframes, css } from "styled-components";
import HomeSloganSection, {
  animateOnVisible,
} from "../../components/HomeSloganSection";
import {
  desktopDevice,
  DesktopPagePadding,
  gap,
  largeScreens,
  marginTop,
  tabletDevice,
} from "../../settings/sizing";
import SecondSection from "./sections/SecondSection";
import { generateIcon, Icon } from "../../settings/generate-icon";
import { LIGHT_ORANGE_BACKGROUND } from "../../settings/colors";
import StudentTestimonials from "./sections/StudentTestimonials";
import WhoWeAre from "./sections/WhoWeAre";
import { useInView } from "react-intersection-observer";

export const slideFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

export const animateOnVisibleRight = css`
  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${slideFromRight} 1.5s ease-out forwards;
    `}
`;

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.3, // % of component visible before triggering
  });

  return (
    <MainContainer>
      <SloganContainer>
        <HomeSloganSection />
        <SloganRightImage ref={ref} $isVisible={inView}>
          <Icon src={generateIcon("w9")} />
        </SloganRightImage>
      </SloganContainer>
      <SecondSection />
      <StudentTestimonials />
      <SloganContainer
        style={{ marginTop: marginTop, backgroundColor: "transparent" }}
      >
        <SloganRightImage>
          <Icons src={generateIcon("w8")} ref={ref} $isVisible={inView} />
        </SloganRightImage>
        <WhoWeAre />
      </SloganContainer>
      {/* <InfoSection />
    <ContactForm /> */}
    </MainContainer>
  );
};

export default Home;

const Icons = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 40px;
  ${animateOnVisible};
`;

export const MainContainer = styled.div`
  box-sizing: border-box;
  padding: ${DesktopPagePadding - 80}px;

  @media (min-width: ${tabletDevice}px) {
    padding: ${DesktopPagePadding - 70}px;
  }

  @media (min-width: ${desktopDevice}px) {
    padding: ${DesktopPagePadding}px;
  }

  @media (min-width: ${largeScreens}px) {
    padding: ${DesktopPagePadding}px;
  }
`;

const SloganRightImage = styled.div`
  width: 100%;
  ${animateOnVisibleRight};
  @media (min-width: ${tabletDevice}px) {
    width: 100%;
  }

  @media (min-width: ${desktopDevice}px) {
    width: 50%;
  }

  @media (min-width: ${largeScreens}px) {
    width: 50%;
  }
`;

const SloganContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  gap: ${gap}px;
  background-color: ${LIGHT_ORANGE_BACKGROUND};
  box-sizing: border-box;
  padding: ${gap}px;
  display: block;

  @media (min-width: ${tabletDevice}px) {
    display: block;
  }

  @media (min-width: ${desktopDevice}px) {
    display: flex;
  }

  @media (min-width: ${largeScreens}px) {
    display: flex;
  }
`;
