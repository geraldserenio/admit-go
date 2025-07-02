import { slideFromLeft } from "components/HomeSloganSection";
import { bounce } from "components/shared/SloganSection";
import { MainContainer } from "pages/home/Home";
import React, { useState } from "react";
import { ORANGE, PURPLE } from "settings/colors";
import { generateIcon, Icon } from "settings/generate-icon";
import { gap } from "settings/sizing";
import styled from "styled-components";
import { TRANSLATION } from "translation/translation";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const lang = localStorage.getItem("lang") || "en";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form data:", form);
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "" });
  };

  return (
    <MainContainer>
      <Container>
        <Icon
          src={generateIcon("w4")}
          style={{ width: "50%", height: "600px", borderRadius: "40px" }}
        />
        <FormWrapper>
          <Title>{TRANSLATION?.contact_form?.want_to_know_more[lang]}</Title>
          <Subtitle>
            {
              TRANSLATION?.contact_form?.contact_us_through_the_contact_form[
                lang
              ]
            }
          </Subtitle>
          <SmallNote>{TRANSLATION?.contact_form?.promis_spam[lang]}</SmallNote>
          <SmallNote>
            {TRANSLATION?.contact_form?.send_us_your_details[lang]}
          </SmallNote>

          <StyledForm onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder={TRANSLATION?.contact_form?.name[lang]}
              value={form.name}
              onChange={handleChange}
            />
            <Input
              type="tel"
              name="phone"
              placeholder={`* ${TRANSLATION?.contact_form?.phone[lang]}`}
              value={form.phone}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder={`* ${TRANSLATION?.contact_form?.email[lang]}`}
              value={form.email}
              onChange={handleChange}
              required
            />
            <Button type="submit">Send Message</Button>
            {submitted && (
              <SuccessMessage>Thanks! We’ll be in touch soon.</SuccessMessage>
            )}
          </StyledForm>

          <Legal>
            {TRANSLATION?.contact_form?.by_submitting[lang]}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#6c30c2", textDecoration: "underline" }}
            >
              Privacy Policy
            </a>
            .
          </Legal>
        </FormWrapper>
      </Container>
    </MainContainer>
  );
};

export default ContactForm;

const Container = styled.div`
  display: flex;
  gap: ${gap * 2}px;
  animation: ${slideFromLeft} 1s ease-out forwards;
`;

const FormWrapper = styled.div`
  max-width: 640px;
  margin: 60px auto;
  padding: 40px;
  background-color: #fdf7f1;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin-top: 0;
`;

const Title = styled.h2`
  color: ${PURPLE};
  font-size: 28px;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #444;
  margin-bottom: 10px;
`;

const SmallNote = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${bounce} 1.5s infinite ease-in-out;
`;

const Input = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 14px 16px;
  margin-bottom: 16px;
  border: 2px solid #ccc;
  border-radius: 12px;
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: #6c30c2;
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 500px;
  padding: 14px 20px;
  font-size: 16px;
  background-color: ${ORANGE};
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background-color: #d9491e;
  }
`;

const Legal = styled.p`
  font-size: 13px;
  color: #666;
  margin-top: 20px;
  max-width: 500px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  margin-top: 20px;
`;
