import React from "react";
import styled from "styled-components";
import { generateIcon, Icon } from "../../settings/generate-icon";
import {
  animateOnVisible,
  Paragraph,
  slideFromLeft,
} from "../HomeSloganSection";
import { GRAY_BACKGROUND } from "../../settings/colors";
import { gap } from "../../settings/sizing";
import { useInView } from "react-intersection-observer";

export const ImageWithDescriptionCard = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.3, // % of component visible before triggering
  });
  const { text, image } = props;
  return (
    <Container ref={ref} $isVisible={inView}>
      <Icon src={generateIcon(image)} />
      <Paragraph>{text}</Paragraph>
    </Container>
  );
};

const Container = styled.div`
  width: 33.33%;
  background-color: ${GRAY_BACKGROUND};
  border-radius: 40px;
  box-sizing: border-box;
  padding: ${gap}px;
  ${animateOnVisible};
`;
