import React from "react";
import styled from "styled-components";
import { generateIcon } from "../../settings/generate-icon";
import { ORANGE, PURPLE } from "../../settings/colors";
import { Hero } from "pages/bachelor/Bachelor";
import { TRANSLATION } from "translation/translation";
import { slideFromRight } from "pages/home/Home";
import { slideFromLeft } from "components/HomeSloganSection";
import { PrimaryButton } from "pages/home/sections/WhoWeAre";
import { useNavigate } from "react-router-dom";
import { gap } from "settings/sizing";

const MeetAdmitGoSection = () => {
  const lang = localStorage.getItem("lang") || "en";
  const isEnglish = lang === "en";
  const navigate = useNavigate();
  const content = {
    en: {
      label: "About Us",
      title: "Let’s Get to Know Each Other!",
      paragraphs: [
        "We are AdmitGo – a dynamic team of experts passionate about helping students achieve their dreams of studying in the UK.",
        "With years of experience in international student recruitment, we know the British education system inside out. Our mission is simple: to make the application process easy and help you get into your dream university in the UK – completely free of charge.",
        "Why choose AdmitGo?",
        "Because our support is 100% free. You focus on your goals, and we take care of the rest. Our team will guide you through every step of the journey:",
      ],
      bullets: [
        "Helping you choose the right course and university",
        "Advising you on how to write a standout Personal Statement",
        "Assisting with all your documents, UCAS applications, and student finance forms",
        "Preparing you for the necessary English language tests",
      ],
      closing: [
        "With us, studying in the UK isn’t just a dream – it’s a real plan.",
        "AdmitGo – your fast track to a UK university! 🎓",
      ],
    },
    pl: {
      label: "O Nas",
      title: "Poznajmy się!",
      paragraphs: [
        "Jesteśmy AdmitGo – energicznym zespołem ekspertów, którzy z pasją wspierają studentów w realizacji marzeń o studiach w Wielkiej Brytanii.",
        "Mamy wieloletnie doświadczenie w rekrutacji międzynarodowej i doskonale wiemy, jak odnaleźć się w brytyjskim systemie edukacji. Naszym celem jest jedno: uprościć cały proces aplikacji i pomóc Ci dostać się na wymarzoną uczelnię w UK – bez żadnych opłat.",
        "Dlaczego właśnie AdmitGo?",
        "Bo u nas nie płacisz ani grosza za pomoc – skupiasz się na swoich planach, a my zajmujemy się formalnościami. Nasz zespół przeprowadzi Cię przez każdy etap rekrutacji:",
      ],
      bullets: [
        "Pomożemy wybrać odpowiedni kierunek i uczelnię",
        "Doradzimy, jak napisać wyróżniające się Personal Statement",
        "Wesprzemy Cię w przygotowaniu dokumentów, wniosków o finansowanie i aplikacjach UCAS",
        "Podpowiemy, jak najlepiej zdać wymagane testy językowe",
      ],
      closing: [
        "Z nami studia w Wielkiej Brytanii to nie marzenie – to realny plan.",
        "AdmitGo – prosta droga na studia w UK! 🎓",
      ],
    },
  };

  const data = isEnglish ? content.en : content.pl;

  return (
    <div>
      <Hero>
        <h1>{TRANSLATION?.who_are_we[lang]}</h1>
        <p>{TRANSLATION?.your_uk_study_partner[lang]}</p>
        <Paragraph style={{ marginTop: 0 }}>
          {TRANSLATION?.we_are_a_team[lang]}
        </Paragraph>
        <PrimaryButton
          onClick={() => navigate("/contact-us")}
          style={{ marginTop: gap * 2 }}
        >
          Apply now
        </PrimaryButton>
      </Hero>
      <Wrapper>
        <Left>
          <Label>{data.label}</Label>
          <Heading>{data.title}</Heading>
          {data.paragraphs.map((p, i) => (
            <Paragraph key={`p-${i}`}>{p}</Paragraph>
          ))}
          <BulletList>
            {data.bullets.map((item, i) => (
              <li key={`b-${i}`}>{item}</li>
            ))}
          </BulletList>
          {data.closing.map((p, i) => (
            <Paragraph key={`c-${i}`}>{p}</Paragraph>
          ))}
          <PrimaryButton onClick={() => navigate("/contact-us")}>
            Apply now
          </PrimaryButton>
        </Left>
        <Image>
          <img
            style={{ height: "100%" }}
            src={generateIcon("w3")}
            alt="AdmitGo team"
          />
        </Image>
      </Wrapper>
    </div>
  );
};

export default MeetAdmitGoSection;

const Wrapper = styled.section`
  max-width: 1100px;
  margin: 80px auto;
  padding: 0 20px;
  display: flex;
  gap: 40px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  animation: ${slideFromLeft} 1s ease-out forwards;
`;

const Label = styled.div`
  color: ${ORANGE};
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 12px;
`;

const Heading = styled.h2`
  color: ${PURPLE};
  font-size: 30px;
  margin-bottom: 24px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 18px;
`;

const BulletList = styled.ul`
  padding-left: 20px;
  margin-bottom: 18px;

  li {
    margin-bottom: 10px;
    font-size: 16px;
    list-style: disc;
    color: #333;
  }
`;

const Image = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  animation: ${slideFromRight} 1s ease-out forwards;

  img {
    max-width: 100%;
    max-height: 500px;
    object-fit: contain;
  }
`;
