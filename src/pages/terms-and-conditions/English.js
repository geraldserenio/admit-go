// TermsPage.jsx
import React from "react";
import { DARK_PURPLE, ORANGE, PURPLE } from "settings/colors";
import { gap } from "settings/sizing";
import styled from "styled-components";

const English = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>Terms & Conditions</Heading>
        <Section>
          <p>
            ADMITGO LTD ("we", "us", "our", or the "Company"), a company
            organized and existing under the laws of Great Britain at 20 Wenlock
            Road, London, N1 7GU, England, provides these Terms and Conditions
            to govern the use of our website and services.
          </p>

          <Subheading>1. Introduction</Subheading>
          <ul>
            <li>
              1.1 We are committed to delivering high-quality, professional
              support to individuals seeking to enhance their qualifications
              through study in the UK.
            </li>
            <li>
              1.2 While many of our services are offered free of charge, we
              uphold the highest standards of professionalism and integrity in
              all our operations.
            </li>
            <li>
              1.3 These Terms and Conditions, along with our Privacy Policy and
              Cookies Policy, form an integral part of our relationship with
              website users.
            </li>
          </ul>

          <Subheading>2. Definitions</Subheading>
          <ul>
            <li>
              2.1 "Applicant" refers to a registered user who utilizes the Apply
              with Edu4u service...
            </li>
            <li>
              2.2 "Non-Applicant" refers to a person who does not have an
              account...
            </li>
            <li>2.3 "Service Provider" refers to ADMITGO LTD.</li>
            <li>2.4 "User" refers to any individual accessing our website.</li>
            <li>
              2.5 "Website" refers to the platform operated by ADMITGO LTD.
            </li>
          </ul>

          <Subheading>3. Services</Subheading>
          <ul>
            <li>
              3.1 Our website offers: a) Info about UK studies b) Application
              support
            </li>
            <li>
              3.2 Details of each service will be provided by our consultants.
            </li>
          </ul>

          <Subheading>4. User Eligibility and Account Registration</Subheading>
          <ul>
            <li>
              4.1 Users must be adults or minors with consent, or legal
              entities.
            </li>
            <li>4.2 Website not for individuals under 16.</li>
            <li>4.3 Users may need accounts and must keep them secure.</li>
          </ul>

          <Subheading>5. Fees and Charges</Subheading>
          <ul>
            <li>5.1 Website use is free of charge.</li>
            <li>5.2 Services free for Applicants.</li>
            <li>5.3 Charges for Non-Applicants apply in some cases.</li>
          </ul>

          <Subheading>6. User Obligations</Subheading>
          <ul>
            <li>6.1 Provide accurate info.</li>
            <li>6.2 Follow laws and rules.</li>
            <li>6.3 Follow application deadlines.</li>
          </ul>

          <Subheading>7. Intellectual Property Rights</Subheading>
          <ul>
            <li>7.1 Content is protected by copyright law.</li>
            <li>7.2 No licenses or rights are granted.</li>
            <li>7.3 Limited license for personal use.</li>
            <li>7.4 Copying, reselling, or reusing content is prohibited.</li>
            <li>
              7.5 Competitive use of content is forbidden and can result in
              contract termination.
            </li>
          </ul>

          <Subheading>8. Privacy and Data Protection</Subheading>
          <ul>
            <li>
              8.1 Governed by Privacy Policy (incorporated herein by reference).
            </li>
            <li>8.2 We comply with Data Protection Act 2018 and UK GDPR.</li>
          </ul>

          <Subheading>9. Complaints Procedure</Subheading>
          <ul>
            <li>9.1 Complaints to office@edu-4u.uk</li>
            <li>9.2 Include name, issue description, contact email</li>
            <li>9.3 We aim to respond in 14 days</li>
          </ul>

          <Subheading>10. Limitation of Liability</Subheading>
          <ul>
            <li>
              10.1 We are not liable for indirect, special, or consequential
              damages.
            </li>
            <li>10.2 Liability limited to maximum allowed by law.</li>
          </ul>

          <Subheading>11. Amendments</Subheading>
          <ul>
            <li>
              11.1 We may update these Terms for new services or legal changes.
            </li>
            <li>11.2 Material changes will be emailed to Registered Users.</li>
            <li>11.4 If you disagree, email us and stop using the site.</li>
          </ul>

          <Subheading>12. Termination</Subheading>
          <ul>
            <li>
              12.1 We may suspend or terminate your access for any reason
              without notice.
            </li>
            <li>12.2 Your rights end immediately upon termination.</li>
          </ul>

          <Subheading>13. Governing Law</Subheading>
          <ul>
            <li>
              13.1 These Terms are governed by the laws of England & Wales.
            </li>
            <li>
              13.2 Disputes will be handled by the courts of England & Wales.
            </li>
          </ul>

          <Subheading>14. Contact</Subheading>
          <p>
            For questions about these Terms, contact us at:
            <br />
            ADMITGO LTD <br />
            20 Wenlock Road, London, N1 7GU, England <br />
            Email: office@edu-4u.uk
          </p>
          <br />
          <p>
            <strong>Last updated: 06/2025</strong>
          </p>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default English;

// STYLES
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${gap * 3}px ${gap}px;
`;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
`;

const Heading = styled.h1`
  color: ${PURPLE};
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: ${gap}px;
`;

const Subheading = styled.h2`
  font-size: 1.5rem;
  color: ${ORANGE};
  font-weight: 700;
  margin: 1.5rem 0 0.5rem;
`;

const Section = styled.div`
  color: ${DARK_PURPLE};
  font-size: 1.05rem;

  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.25rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;
