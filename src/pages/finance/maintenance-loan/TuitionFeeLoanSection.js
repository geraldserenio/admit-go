import { slideFromLeft } from "components/HomeSloganSection";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 900px;
  margin: 60px auto;
  padding: 0 20px;
  font-family: "Poppins", sans-serif;
  animation: ${slideFromLeft} 1s ease-out forwards;
`;

const Title = styled.h2`
  color: #6c30c2;
  font-size: 28px;
  margin-bottom: 24px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const List = styled.ul`
  margin: 0 0 16px 20px;
  padding-left: 20px;

  li {
    margin-bottom: 10px;
    font-size: 16px;
    list-style-type: disc;
  }
`;

const SubheadingQuestion = styled.h3`
  color: #6c30c2; /* purple */
  font-size: 20px;
  margin: 24px 0 12px;
`;

const SubheadingDefault = styled.h3`
  color: #333; /* dark gray */
  font-size: 20px;
  margin: 24px 0 12px;
`;

const TuitionFeeLoanSection = ({ language = "en" }) => {
  const isEnglish = language === "en";

  const content = {
    en: {
      title: "Tuition Fee Loan – Study in the UK with No Upfront Costs",
      sections: [
        `Studying in the UK is an investment in your future. It means gaining a prestigious degree, international experience, fluency in English, and valuable skills that are highly regarded on the global job market. However, for many students, the cost of tuition at British universities can be a major concern.`,
        `Fortunately, there’s a solution that allows you to start your studies without paying out of pocket – the Tuition Fee Loan, a government-funded student loan that covers your full tuition fees. If you meet the eligibility criteria, your education becomes fully accessible.`,
        `What is a Tuition Fee Loan?`,
        `The Tuition Fee Loan is a financial support programme provided by the UK government that covers 100% of your university tuition fees for undergraduate or postgraduate study. The money is paid directly to the university – you don’t receive the funds yourself, and you don’t need to worry about handling payments.`,
        `You apply for the loan annually, and for subsequent years of study, you simply fill out a “continuing student” application to confirm your enrolment at the same institution.`,
        `Who is eligible?`,
      ],
      bulletPoints: [
        "Have been accepted by a university in the UK",
        "Are a citizen of an EU country",
        "Have not completed a degree-level qualification (bachelor’s or master’s)",
        "Are under 60 years old on the first day of your course",
        "Have lived in the EEA or Switzerland for at least three years before starting your studies",
      ],
      more: [
        `If you are a Polish national starting your first degree – you are most likely eligible.`,
        `How does repayment work?`,
        `You begin repaying your Tuition Fee Loan only after graduating – and only if your income exceeds a specific threshold.`,
        `In the UK, this threshold is £25,000 per year.`,
        `In Poland, it’s around £73,000 per year.`,
        `If your income is below the threshold, you don’t make any payments. If you lose your job or take a parental leave, repayment is automatically paused.`,
        `Even better – after 30 years, any remaining balance is automatically written off, regardless of how much you’ve repaid.`,
        `How much will you repay?`,
        `You only repay 9% of the amount you earn over the threshold.`,
        `Examples:`,
        `– £2,500/month in the UK (i.e., £400 over the threshold) → £36/month`,
        `– 7,000 PLN/month in Poland (1,000 PLN over the threshold) → 90 PLN/month`,
        `Is the loan interest-free?`,
        `The Tuition Fee Loan does have interest, but it’s relatively low and depends on your earnings:`,
        `– Around 3.3% for lower incomes`,
        `– Up to 6.3% for higher incomes`,
        `What if you work outside the UK or change universities?`,
        `If you move abroad after graduation, you must notify the Student Loans Company and complete an Overseas Income Assessment form.`,
        `If you transfer to a university with higher tuition fees, you can request an increase in your loan amount.`,
        `If you interrupt your studies due to unforeseen circumstances, you’ll only repay the portion of the loan that was actually used.`,
        `Why is it worth it?`,
        `The Tuition Fee Loan is a safe, flexible and accessible solution that opens the door to a prestigious UK education – regardless of your financial background.`,
        `AdmitGo offers comprehensive, free support to help you apply for the Tuition Fee Loan – from guidance and eligibility checks to completing all required documents.`,
      ],
    },
    pl: {
      title: "Kredyt na czesne – Tuition Fee Loan",
      sections: [
        `Studia w Wielkiej Brytanii to nie tylko prestiżowy dyplom, ale także szansa na międzynarodowe doświadczenie, znajomość języka angielskiego i cenione kompetencje na rynku pracy.`,
        `Jednak czesne na brytyjskich uczelniach może być barierą. Na szczęście istnieje Tuition Fee Loan – rządowy kredyt pokrywający 100% kosztów czesnego.`,
        `Czym jest Tuition Fee Loan?`,
        `To pożyczka rządowa pokrywająca czesne na studiach licencjackich lub magisterskich. Środki trafiają bezpośrednio na konto uczelni.`,
        `Wniosek składa się co roku, a kontynuacja studiów wymaga tylko wniosku potwierdzającego.`,
        `Kto może otrzymać kredyt na czesne?`,
      ],
      bulletPoints: [
        "zostały przyjęte na uczelnię w Wielkiej Brytanii",
        "są obywatelami Unii Europejskiej",
        "nie posiadają dyplomu ukończenia studiów wyższych",
        "nie ukończyły 60. roku życia w dniu rozpoczęcia studiów",
        "przebywały w EOG lub Szwajcarii przez co najmniej 3 lata przed studiami",
      ],
      more: [
        `Jeśli jesteś obywatelem Polski i planujesz swoją pierwszą edukację wyższą – kredyt jest dostępny.`,
        `Jak wygląda spłata kredytu?`,
        `Spłata następuje po ukończeniu studiów i przekroczeniu progu dochodowego:`,
        `– UK: £25,000 rocznie`,
        `– Polska: ~73 000 zł rocznie`,
        `Jeśli zarabiasz mniej – nie spłacasz. Jeśli więcej – 9% nadwyżki.`,
        `Po 30 latach niespłacona część kredytu zostaje umorzona.`,
        `Jak obliczane są raty?`,
        `– £2 500/mies. w UK → £36/mies.`,
        `– 7 000 zł/mies. w Polsce → 90 zł/mies.`,
        `Czy kredyt jest oprocentowany?`,
        `Tak, ale zależy od dochodu:`,
        `– ok. 3,3% przy niższych zarobkach`,
        `– maks. 6,3% przy wyższych`,
        `Praca za granicą lub zmiana uczelni?`,
        `Należy zgłosić się do Student Loans Company i wypełnić formularz dochodów z zagranicy.`,
        `Można zwiększyć pożyczkę przy wyższych opłatach uczelni.`,
        `W przypadku przerwania nauki spłaca się tylko wykorzystaną kwotę.`,
        `Dlaczego warto?`,
        `Tuition Fee Loan to bezpieczne, elastyczne i dostępne rozwiązanie.`,
        `AdmitGo oferuje pełne, bezpłatne wsparcie – od doradztwa po złożenie wniosku.`,
      ],
    },
  };

  const data = isEnglish ? content.en : content.pl;

  return (
    <Wrapper>
      <Title>{data.title}</Title>
      {data.sections.map((text, i) => (
        <Paragraph key={`sec-${i}`}>{text}</Paragraph>
      ))}
      <List>
        {data.bulletPoints.map((item, i) => (
          <li key={`bullet-${i}`}>{item}</li>
        ))}
      </List>
      {data.more.map((text, i) => {
        if (text.endsWith("?")) {
          return (
            <SubheadingQuestion key={`subq-${i}`}>{text}</SubheadingQuestion>
          );
        } else if (/^[A-Z\s]+$/.test(text)) {
          return (
            <SubheadingDefault key={`subd-${i}`}>{text}</SubheadingDefault>
          );
        } else {
          return <Paragraph key={`para-${i}`}>{text}</Paragraph>;
        }
      })}
    </Wrapper>
  );
};

export default TuitionFeeLoanSection;
