import styled from "styled-components";
import img1 from "../assets/images/img1.png";
import w1 from "../assets/images/w1.webp";
import w2 from "../assets/images/w2.webp";
import w3 from "../assets/images/w3.webp";
import w4 from "../assets/images/w4.webp";
import w5 from "../assets/images/w5.webp";
import w6 from "../assets/images/w6.webp";
import w7 from "../assets/images/w7.webp";
import w8 from "../assets/images/w8.webp";
import w9 from "../assets/images/w9.webp";
import Logo from "../assets/images/Logo.webp";
import WhatsApp from "../assets/icons8-whatsapp-48.png";
import { slideFromRight } from "pages/home/Home";

export const generateIcon = (icon) => {
  switch (icon) {
    case "WhatsApp":
      return WhatsApp;
    case "img1":
      return img1;
    case "w1":
      return w1;
    case "w2":
      return w2;
    case "w3":
      return w3;
    case "w4":
      return w4;
    case "w5":
      return w5;
    case "w6":
      return w6;
    case "w7":
      return w7;
    case "w8":
      return w8;
    case "w9":
      return w9;
    case "Logo":
      return Logo;

    default:
      return "";
  }
};

export const Icon = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 40px;
  animation: ${slideFromRight} 1s ease-out forwards;
`;
