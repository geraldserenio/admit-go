import React from "react";
import styled, { keyframes } from "styled-components";
import {
  desktopDevice,
  gap,
  largeScreens,
  tabletDevice,
} from "settings/sizing";
import { DARK_PURPLE, ORANGE, PURPLE } from "settings/colors";
import { useNavigate } from "react-router-dom";
import { slideFromRight } from "pages/home/Home";

export const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const SloganSection = (props) => {
  const { title, paragraph, buttonText, navigation } = props;
  const navigate = useNavigate();
  return (
    <HeroSection>
      <H1>{title}</H1>
      <Paragraph>{paragraph}</Paragraph>
      {buttonText && (
        <PrimaryButton
          onClick={navigation ? () => navigate(navigation) : () => {}}
        >
          {buttonText}
        </PrimaryButton>
      )}
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
  animation: ${bounce} 1.5s infinite ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

export default SloganSection;
