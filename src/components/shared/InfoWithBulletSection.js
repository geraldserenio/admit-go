import React from "react";
import { LIGHT_ORANGE_BACKGROUND, PURPLE } from "settings/colors";
import { generateIcon, Icon } from "settings/generate-icon";
import {
  desktopDevice,
  gap,
  largeScreens,
  tabletDevice,
} from "settings/sizing";
import styled from "styled-components";

const InfoWithBulletSection = ({ image, title, sections }) => {
  return (
    <SectionWrapper>
      <Content>
        <Title>{title}</Title>
        {sections.map((section, idx) => (
          <div key={idx}>
            {section.description && (
              <Paragraph>{section.description}</Paragraph>
            )}
            {section.bullets && (
              <BulletList>
                {section.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </BulletList>
            )}
          </div>
        ))}
      </Content>

      {image && (
        <ImageContainer>
          <Icon src={generateIcon(image)} />
        </ImageContainer>
      )}
    </SectionWrapper>
  );
};

export default InfoWithBulletSection;

const SectionWrapper = styled.section`
  display: block;
  gap: 40px;
  padding: 60px 30px;
  margin: auto;
  margin-bottom: ${gap * 5}px;
  background-color: ${LIGHT_ORANGE_BACKGROUND};
  box-sizing: border-box;
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

const Content = styled.div`
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
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

const Title = styled.h2`
  color: ${PURPLE};
  font-size: 28px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin: 16px 0 8px;
  color: #333;
`;

const BulletList = styled.ul`
  margin: 0 0 24px 0;
  padding-left: 20px;
  font-size: 16px;
  color: #555;

  li {
    margin-bottom: 10px;
    list-style-type: disc;
  }
`;
