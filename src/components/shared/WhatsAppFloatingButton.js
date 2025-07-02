// components/WhatsAppFloatingButton.js
import React from "react";
import { generateIcon } from "settings/generate-icon";
import styled from "styled-components";

const WhatsAppFloatingButton = () => {
  return (
    <WhatsAppLink
      href="https://wa.me/447830351402" // Replace with your WhatsApp number (with country code)
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={generateIcon("WhatsApp")} alt="WhatsApp" />
    </WhatsAppLink>
  );
};

const WhatsAppLink = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  background-color: #25d366;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 40px;
    height: 40px;
    display: block;
  }
`;

export default WhatsAppFloatingButton;
