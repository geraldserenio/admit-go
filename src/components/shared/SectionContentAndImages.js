import React from "react";
import { LIGHT_ORANGE_BACKGROUND } from "settings/colors";
import { gap, marginTop } from "settings/sizing";
import styled from "styled-components";
import SloganSection from "./SloganSection";
import { generateIcon, Icon } from "settings/generate-icon";

export const SectionContentAndImages = (props) => {
  const {
    image,
    leftImage,
    hasBackground,
    title,
    paragraph,
    buttonText,
    navigation,
  } = props;
  return (
    <div style={{ marginBottom: marginTop }}>
      {leftImage ? (
        <SloganContainer
          style={{
            backgroundColor: hasBackground
              ? LIGHT_ORANGE_BACKGROUND
              : "transparent",
          }}
        >
          {image && (
            <SloganRightImage>
              <Icon src={generateIcon(image)} />
            </SloganRightImage>
          )}
          <SloganSection
            title={title}
            paragraph={paragraph}
            buttonText={buttonText}
            navigation={navigation}
          />
        </SloganContainer>
      ) : (
        <SloganContainer
          style={{
            backgroundColor: hasBackground
              ? LIGHT_ORANGE_BACKGROUND
              : "transparent",
          }}
        >
          <SloganSection
            title={title}
            paragraph={paragraph}
            buttonText={buttonText}
            navigation={navigation}
          />
          {image && (
            <SloganRightImage>
              <Icon src={generateIcon(image)} />
            </SloganRightImage>
          )}
        </SloganContainer>
      )}
    </div>
  );
};

const SloganRightImage = styled.div`
  width: 50%;
`;

const SloganContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  gap: ${gap}px;
  box-sizing: border-box;
  padding: ${gap}px;
`;
