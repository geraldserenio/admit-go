import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  font-family: Lato, sans-serif;
  color: #333;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #6a1b9a;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  color: #ef6c00;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  margin: 0.5rem 0;
`;

const List = styled.ul`
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const PrivacyPolicy = ({ language = "en" }) => {
  const content = {
    en: {
      title: "Privacy Policy",
      sections: [
        {
          title: "1. Definitions and Interpretation",
          body: [
            '"Cookie" means a small text file placed on your computer or device by our Site...',
            '"Personal data" means any and all data that relates to an identifiable person...',
            '"Controller of your data – We/Us/Our" means: AdmitGO Ltd, a limited company...',
          ],
        },
        {
          title: "2. What Does This Policy Cover?",
          body: [
            "This Privacy Policy applies only to your use of our website and our services...",
          ],
        },
        {
          title: "3. Data Protection Officer / EU Representative",
          body: [
            "The company is not required to appoint a Data Protection Officer...",
          ],
        },
        {
          title: "4. What Data Do We Collect?",
          body: [
            "We collect personal data (name and surname, home address, email address, phone number...)...",
            "Technical information, including IP address, browser type...",
            "Our cookies policy, which can be viewed from the home page...",
          ],
        },
        {
          title: "5. How And How Long Do We Use Your Data?",
          body: [
            "All personal data is processed and stored securely...",
            "Our use of your personal data will always have a lawful basis...",
            "Data security is very important to us...",
          ],
        },
        {
          title: "6. Your Rights",
          body: [
            "The right to be informed, access, rectification, erasure, restrict processing, etc...",
            "Our internal procedures aim to protect your data...",
            "If you have any complaints...",
          ],
        },
        {
          title: "7. Do We Share Your Data?",
          body: [
            "To support your educational pursuits, we need to share your data...",
            "We may contract with third parties...",
            "We may compile anonymised statistics...",
          ],
        },
        {
          title: "8. Your Right to Withhold Information",
          body: [
            "You may access certain areas of our website without providing any data...",
            "You may restrict our use of Cookies...",
          ],
        },
        {
          title: "9. How Can You Access Your Data?",
          body: [
            "You have the right to ask for a copy of your personal data...",
          ],
        },
        {
          title: "10. Contacting Us",
          body: ["Please contact us by email at director@admitgo.co.uk..."],
        },
        {
          title: "11. Changes to Our Privacy Policy",
          body: [
            "We may change this Privacy Policy from time to time...",
            "Issue date: 06/2025",
          ],
        },
      ],
    },
    pl: {
      title: "Polityka Prywatności",
      sections: [
        {
          title: "1. Definicje i interpretacja",
          body: [
            '"Cookie" oznacza mały plik tekstowy...',
            '"Dane osobowe" oznaczają wszelkie dane...',
            '"Administrator Twoich danych – My/Nas/Nasze" oznacza: AdmitGO Ltd...',
          ],
        },
        {
          title: "2. Zakres niniejszej Polityki",
          body: [
            "Niniejsza Polityka Prywatności dotyczy wyłącznie korzystania z naszej strony...",
          ],
        },
        {
          title: "3. Inspektor ochrony danych / Przedstawiciel w UE",
          body: ["Spółka nie jest zobowiązana do wyznaczenia Inspektora..."],
        },
        {
          title: "4. Jakie dane zbieramy?",
          body: [
            "Zbieramy dane osobowe...",
            "Informacje techniczne...",
            "Nasza polityka cookies...",
          ],
        },
        {
          title: "5. Jak i jak długo wykorzystujemy Twoje dane?",
          body: [
            "Wszystkie dane osobowe są przetwarzane i przechowywane...",
            "Nasze wykorzystanie Twoich danych osobowych...",
            "Bezpieczeństwo danych jest dla nas bardzo ważne...",
          ],
        },
        {
          title: "6. Twoje prawa",
          body: [
            "informacji o sposobie zbierania i wykorzystywania danych...",
            "Niniejsza Polityka oraz wewnętrzne procedury...",
            "Masz także prawo do złożenia skargi...",
          ],
        },
        {
          title: "7. Czy udostępniamy Twoje dane?",
          body: [
            "W celu wsparcia Twojej ścieżki edukacyjnej...",
            "Czasami możemy zawierać umowy z innymi podmiotami...",
            "Możemy sporządzać statystyki dotyczące korzystania ze strony...",
          ],
        },
        {
          title: "8. Prawo do niepodawania danych",
          body: [
            "Możesz korzystać z niektórych części naszej strony bez podawania danych...",
            "Możesz ograniczyć stosowanie cookies...",
          ],
        },
        {
          title: "9. Jak uzyskać dostęp do swoich danych?",
          body: ["Masz prawo do uzyskania kopii swoich danych osobowych..."],
        },
        {
          title: "10. Kontakt z nami",
          body: [
            "Prosimy o kontakt e-mailowy na adres: director@admitgo.co.uk...",
          ],
        },
        {
          title: "11. Zmiany w naszej Polityce Prywatności",
          body: [
            "Możemy okresowo aktualizować niniejszą Politykę Prywatności...",
            "Data publikacji: 06/2025",
          ],
        },
      ],
    },
  };

  const { title, sections } = content[language];

  return (
    <Container>
      <Title>{title}</Title>
      {sections.map((section, index) => (
        <Section key={index}>
          <SubTitle>{section.title}</SubTitle>
          {section.body.map((paragraph, idx) => (
            <Paragraph key={idx}>{paragraph}</Paragraph>
          ))}
        </Section>
      ))}
    </Container>
  );
};

export default PrivacyPolicy;
