// CookiePolicyPage.jsx
import React from "react";
import { DARK_PURPLE, ORANGE, PURPLE } from "settings/colors";
import { gap } from "settings/sizing";
import styled from "styled-components";

const English = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>Cookie Policy</Heading>
        <Section>
          <p>
            The website does not automatically collect any information, except
            for the information contained in cookies.
          </p>

          <Subheading>What are cookies?</Subheading>
          <p>
            Cookies are small data files that are placed on your computer or
            mobile device when visiting a website. Cookies are commonly used by
            website owners to ensure the proper or more efficient operation of
            their websites, as well as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner AdmitGO Ltd are called "first-party
            cookies." Cookies placed by entities other than the website owner
            are called "third-party cookies." Third-party cookies allow sharing
            of third-party features on the website or through it (e.g. ads,
            interactive content, and analytics). The websites that set these
            third-party cookies may recognize your computer both when visiting a
            specific website and when visiting some other websites.
          </p>

          <Subheading>How can you control cookies?</Subheading>
          <p>
            You have the right to decide whether to accept or reject cookies.
            You can exercise your cookie preferences by setting your preferences
            in the Cookie Consent Manager. The Cookie Consent Manager allows you
            to choose the categories of cookies you accept and reject.
          </p>
          <p>
            The Cookie Consent Manager can be found on the cookie notification
            banner when you visit our website. If you decide to reject cookies,
            you can still use our website, although access to some features and
            areas of our website may be limited. You can also set or change your
            internet browser settings to accept or reject cookies. Because the
            ways to reject cookies through internet browser controls vary
            depending on the browser, you should visit the browser's help menu
            for more information.
          </p>
          <p>
            Additionally, you can enable or disable cookie support in your
            internet browser. Most internet browsers also allow you to choose
            whether to disable all cookies or only third-party cookies.
          </p>
          <p>
            By default, most internet browsers accept cookies, but this can be
            changed. More information can be found in the internet browser's
            help menu or in the documentation provided with the device. You can
            delete cookies from your computer or device at any time, but you may
            lose any information that enables faster and more effective access
            to our website.
          </p>

          <Subheading>Why do we use cookies?</Subheading>
          <p>
            We use our own cookies and third-party cookies for several reasons.
            Some cookies are required for technical reasons to operate our
            websites, and we call them "essential" cookies. Other cookies also
            allow us to track and target our users' interests to improve the
            convenience of using our Internet services. Third parties provide
            cookies through our websites for advertising, analytics, and other
            purposes.
          </p>
          <p>
            Below, we describe specific types of first-party and third-party
            cookies provided through our websites and the purposes they serve:
          </p>

          <ul>
            <li>
              <strong>Essential website cookies:</strong> These cookies help in
              the usage of the website, enabling basic functions such as page
              navigation and access to secure areas of the site. Without these
              cookies, the website cannot function properly.
            </li>
            <li>
              <strong>Statistical cookies:</strong> These cookies collect
              information used in aggregate form to help us understand how our
              websites are being used or how effective our marketing campaigns
              are or help us tailor our websites to your needs.
            </li>
            <li>
              <strong>Marketing cookies:</strong> These cookies are used to
              customize advertising messages to the user. They perform functions
              such as preventing the same ad from continuously appearing,
              ensuring ads are displayed correctly to advertisers, and in some
              cases selecting ads based on your interests.
            </li>
            <li>
              <strong>Performance and Functionality Cookies:</strong> These
              cookies are used to identify and resolve technical issues,
              optimize page load speeds, improve overall site performance, and
              provide users with a more personalized experience.
            </li>
          </ul>

          <Subheading>How often do we update this Cookie Policy?</Subheading>
          <p>
            We may update this Cookie Policy from time to time to reflect
            changes in the cookies we use or for other operational, legal, or
            regulatory reasons. Therefore, please regularly review this Cookie
            Policy to stay informed about how we use cookies and related
            technologies.
          </p>

          <Subheading>Questions and clarifications</Subheading>
          <p>
            If you have any questions or need explanations about any of the
            principles, do not hesitate to contact us:{" "}
            <a href="mailto:director@admitgo.co.uk">director@admitgo.co.uk</a>
          </p>

          <p>
            <strong>Date of publication: 06/2025</strong>
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
    margin-bottom: 0.75rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${PURPLE};
    text-decoration: underline;
  }
`;
