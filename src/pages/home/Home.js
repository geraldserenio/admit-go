import React from "react";
import styled, { keyframes, css } from "styled-components";
import HomeSloganSection, {
  slideFromLeft,
} from "../../components/HomeSloganSection";
import { DesktopPagePadding, gap, marginTop } from "../../settings/sizing";
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
  ${animateOnVisibleRight};
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
