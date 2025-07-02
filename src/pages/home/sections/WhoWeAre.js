import React from "react";
import styled, { css } from "styled-components";
import {
  desktopDevice,
  gap,
  largeScreens,
  tabletDevice,
} from "../../../settings/sizing";
import { DARK_PURPLE, ORANGE, PURPLE } from "../../../settings/colors";
import { TRANSLATION } from "../../../translation/translation";
import { Title } from "./StudentTestimonials";
import { slideFromLeft } from "components/HomeSloganSection";
import { bounce } from "components/shared/SloganSection";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { slideFromRight } from "../Home";

const animateOnVisibleRight = css`
  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${slideFromRight} 1.5s ease-out forwards;
    `}
`;

const WhoWeAre = () => {
  const lang = localStorage.getItem("lang") || "en";
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.3, // % of component visible before triggering
  });
  return (
    <HeroSection ref={ref} $isVisible={inView}>
      <Title>{TRANSLATION?.lets_get_to_know_each_other[lang]}</Title>
      <H1>{TRANSLATION?.who_are_we[lang]}</H1>
      <Paragraph>{TRANSLATION?.your_uk_study_partner[lang]}</Paragraph>
      <Paragraph style={{ marginTop: 0 }}>
        {TRANSLATION?.we_are_a_team[lang]}
      </Paragraph>
      <PrimaryButton onClick={() => navigate("/who-we-are")}>
        Read more
      </PrimaryButton>
    </HeroSection>
  );
};

export const H1 = styled.h1`
  color: ${PURPLE};
  font-size: 3rem;
  font-weight: 700;
`;

export const H2 = styled.h2`
  color: ${PURPLE};
  font-size: 2rem;
  font-weight: 700;
`;

export const H3 = styled.h3`
  color: ${PURPLE};
  font-size: 1rem;
  font-weight: 700;
`;

export const Paragraph = styled.h1`
  color: ${DARK_PURPLE};
  font-size: 1.25rem;
  margin: 1rem 0;
`;

const HeroSection = styled.div`
  position: relative;
  background: url("/assets/hero-bg.jpg") center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--text-on-primary);
  text-align: center;
  width: 100%;
  padding: ${gap}px;
  box-sizing: border-box;
  ${animateOnVisibleRight}

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

export const PrimaryButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  background: ${ORANGE};
  color: var(--text-on-primary);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  animation: ${slideFromLeft} 1s ease-out forwards,
    ${bounce} 1.5s infinite ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

export default WhoWeAre;
