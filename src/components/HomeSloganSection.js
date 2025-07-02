import React from "react";
import styled, { keyframes, css } from "styled-components";
import { DARK_PURPLE, ORANGE, PURPLE } from "../settings/colors";
import {
  desktopDevice,
  gap,
  largeScreens,
  tabletDevice,
} from "../settings/sizing";
import { TRANSLATION } from "../translation/translation";
import { bounce } from "./shared/SloganSection";
import { useInView } from "react-intersection-observer";

// Animation keyframes
export const slideFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

export const animateOnVisible = css`
  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${slideFromLeft} 1.5s ease-out forwards;
    `}
`;

const HomeSloganSection = () => {
  const lang = localStorage.getItem("lang") || "en";
  const [ref, inView] = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.3, // % of component visible before triggering
  });

  return (
    <HeroSection ref={ref} $isVisible={inView}>
      <H1 $isVisible={inView}>{TRANSLATION?.slogan[lang]}</H1>
      <Paragraph $isVisible={inView}>
        We’re here to help every step of the way
      </Paragraph>
      <PrimaryButton>Get Started</PrimaryButton>
    </HeroSection>
  );
};

export const H1 = styled.h1`
  color: ${PURPLE};
  font-size: 3rem;
  font-weight: 700;
  ${animateOnVisible}
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
  ${animateOnVisible}
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
  overflow: hidden;

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
  background-color: ${ORANGE};
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

export default HomeSloganSection;
