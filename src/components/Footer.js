import React from "react";
import styled from "styled-components";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  LIGHT_ORANGE,
  LIGHT_ORANGE_BACKGROUND,
  ORANGE,
  PURPLE,
} from "settings/colors";
import { generateIcon, Icon } from "settings/generate-icon";
import { slideFromLeft } from "./HomeSloganSection";
import { bounce } from "./shared/SloganSection";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <FooterGrid>
        <Column>
          <Icon
            src={generateIcon("Logo")}
            style={{ height: "70px", width: "70px" }}
          />
          {/* <Description>
            Open the doors to top USA & Canada Universities
          </Description> */}
          <ContactItem>
            <FaPhone /> +44 7830 351402
          </ContactItem>
          <ContactItem>
            <FaEnvelope /> director@admitgo.co.uk
          </ContactItem>
          <SocialIcons>
            <a href="#">
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576917226235"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a href="https://www.tiktok.com/@admitgo_uk" target="_blank">
              <FaTiktok />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/admitgo_ltd/" target="_blank">
              <FaInstagram />
            </a>
          </SocialIcons>
        </Column>

        <Column>
          {/* <h4>Courses</h4>
          <LinkList>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Nursing</a>
            </li>
            <li>
              <a href="#">Computer Science</a>
            </li>
            <li>
              <a href="#">Engineering</a>
            </li>
            <li>
              <a href="#">Psychology</a>
            </li>
          </LinkList> */}
          <h4>Website Navigation:</h4>
          <LinkList>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Study</a>
              <LinkList>
                <li>
                  <a href="/study/year-zero"> • Year zero</a>
                </li>
                <li>
                  <a href="/study/bachelor"> • Bachelor</a>
                </li>
                <li>
                  <a href="/study/master"> • Master</a>
                </li>
              </LinkList>
            </li>
            <li>
              <a href="#">Finance</a>
              <LinkList>
                <li>
                  <a href="/finance/tuition-fee-loan"> • Credit for tuition</a>
                </li>
                <li>
                  <a href="/finance/maintenance-loan"> • Maintenance Loan</a>
                </li>
              </LinkList>
            </li>
            <li>
              <a href="#">Refer a friend</a>
            </li>
            <li>
              <a href="/contact-us">Contact</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-and-conditions">Terms & Condition</a>
            </li>
            <li>
              <a href="/cookies">Cookies</a>
            </li>
          </LinkList>
        </Column>

        <Column>
          <h4>Apply Now</h4>
          <ActionBox>
            <ApplyNowButton onClick={() => navigate("/contact-us")}>
              Apply Now
            </ApplyNowButton>
          </ActionBox>
          <h4 style={{ marginTop: "20px" }}>Tell a Friend</h4>
          <p style={{ fontSize: "14px" }}>
            Get a reward for every student you refer!
          </p>
          <ActionBox>
            <ApplyNowButton>Refer a Friend</ApplyNowButton>
          </ActionBox>
        </Column>
      </FooterGrid>

      <BottomBar>
        © AdmitGo {new Date().getFullYear()}. All rights reserved.
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;

const ApplyNowButton = styled.button`
  animation: ${slideFromLeft} 1s ease-out forwards,
    ${bounce} 1.5s infinite ease-in-out;
`;

const FooterContainer = styled.footer`
  background: ${LIGHT_ORANGE};
  padding: 60px 20px 20px;
  font-family: "Poppins", sans-serif;
  color: #333;
  border-top: 1px solid #eee;
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
  }
`;

const Column = styled.div``;

const Logo = styled.h3`
  color: ${PURPLE};
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 10px 0;
  color: #555;
  font-size: 14px;
`;

const ContactItem = styled.p`
  margin: 8px 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  svg {
    margin-right: 8px;
    color: #f15c2f;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 14px;

  li {
    margin: 10px 0;
    a {
      color: #333;
      text-decoration: none;
      &:hover {
        color: ${PURPLE};
      }
    }
  }
`;

const ActionBox = styled.div`
  text-align: center;

  button {
    margin-top: 12px;
    background-color: ${ORANGE};
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 12px;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: #${LIGHT_ORANGE};
    }
  }
`;

const SocialIcons = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 12px;

  a {
    color: ${ORANGE};
    font-size: 16px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const BottomBar = styled.div`
  margin-top: 40px;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 12px;
  text-align: center;
  color: #888;
`;
