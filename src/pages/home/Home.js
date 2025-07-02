import React from "react";
import styled, { keyframes } from "styled-components";
import HomeSloganSection, {
  slideFromLeft,
} from "../../components/HomeSloganSection";
import { DesktopPagePadding, gap, marginTop } from "../../settings/sizing";
import SecondSection from "./sections/SecondSection";
import { generateIcon, Icon } from "../../settings/generate-icon";
import { LIGHT_ORANGE_BACKGROUND } from "../../settings/colors";
import StudentTestimonials from "./sections/StudentTestimonials";
import WhoWeAre from "./sections/WhoWeAre";

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

const Home = () => {
  return (
    <MainContainer>
      <SloganContainer>
        <HomeSloganSection />
        <SloganRightImage>
          <Icon src={generateIcon("w9")} />
        </SloganRightImage>
      </SloganContainer>
      <SecondSection />
      <StudentTestimonials />
      <SloganContainer
        style={{ marginTop: marginTop, backgroundColor: "transparent" }}
      >
        <SloganRightImage>
          <Icon src={generateIcon("w8")} />
        </SloganRightImage>
        <WhoWeAre />
      </SloganContainer>
      {/* <InfoSection />
    <ContactForm /> */}
    </MainContainer>
  );
};

export default Home;

export const MainContainer = styled.div`
  padding: ${DesktopPagePadding}px;
`;

const SloganRightImage = styled.div`
  width: 50%;
  animation: ${slideFromRight} 0.6s ease-out forwards;
`;

const SloganContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  gap: ${gap}px;
  background-color: ${LIGHT_ORANGE_BACKGROUND};
  box-sizing: border-box;
  padding: ${gap}px;
`;
