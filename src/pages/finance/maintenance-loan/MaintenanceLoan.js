import React from "react";
import styled from "styled-components";
import { DesktopPagePadding, gap } from "../../../settings/sizing";
import { SectionContentAndImages } from "components/shared/SectionContentAndImages";
import { TRANSLATION } from "translation/translation";
import InfoWithBulletSection from "components/shared/InfoWithBulletSection";
import InfoWithTable from "components/shared/InfoWithTable";
import LoanRepaymentInfo from "./LoanRepaymentInfo";
import { Paragraph } from "components/HomeSloganSection";

const MaintenanceLoan = () => {
  const lang = localStorage.getItem("lang") || "en";
  return (
    <MainContainer>
      <SectionContentAndImages
        image="w2"
        title={TRANSLATION?.maintenance_loan?.maintenance_loan_heading[lang]}
        paragraph={
          TRANSLATION?.maintenance_loan?.maintenance_loan_heading_description[
            lang
          ]
        }
        hasBackground
      />

      <InfoWithTable
        title={TRANSLATION?.maintenance_loan?.what_is_maintenance_loan[lang]}
        description={
          TRANSLATION?.maintenance_loan?.what_is_maintenance_loan_description[
            lang
          ]
        }
        tableTitle="💸 Example: Maximum Maintenance Loan amounts for students living in London:"
        tableData={[
          [
            TRANSLATION?.maintenance_loan?.household_income[lang],
            TRANSLATION?.maintenance_loan?.maximum_annual[lang],
          ],
          ["less than £25,000", "£14,202"],
          ["£30,000", "£13,147"],
          ["£35,000", "£12,091"],
          ["£40,000", "£11,035"],
          ["£42,875", "£10,428"],
          ["£45,000", "£10,120"],
        ]}
        finalNote={TRANSLATION?.maintenance_loan?.the_loan_is_paid[lang]}
      />
      <InfoWithBulletSection
        image={"w6"}
        title={
          TRANSLATION?.maintenance_loan?.who_can_apply_for_the_maintenance_loan[
            lang
          ]
        }
        sections={[
          {
            description: TRANSLATION?.maintenance_loan?.to_be_eligible[lang],
            bullets: [
              TRANSLATION?.maintenance_loan?.bullets?.bullet1[lang],
              TRANSLATION?.maintenance_loan?.bullets?.bullet2[lang],
              TRANSLATION?.maintenance_loan?.bullets?.bullet3[lang],
              TRANSLATION?.maintenance_loan?.bullets?.bullet4[lang],
            ],
          },
          {
            description: TRANSLATION?.maintenance_loan?.additionally[lang],
            bullets: [
              TRANSLATION?.maintenance_loan?.bullets?.bullet5[lang],
              TRANSLATION?.maintenance_loan?.bullets?.bullet6[lang],
              TRANSLATION?.maintenance_loan?.bullets?.bullet7[lang],
            ],
          },
          {
            description: TRANSLATION?.maintenance_loan?.in_practice[lang],
          },
        ]}
      />
      <LoanRepaymentInfo
        title={
          TRANSLATION?.maintenance_loan?.how_is_the_maintenance_loan_repaid[
            lang
          ]
        }
        descriptions={[
          TRANSLATION?.maintenance_loan?.the_maintenance_loan_is_repaid[lang],
        ]}
        bullets={[
          TRANSLATION?.maintenance_loan?.repayments_start_one[lang],
          {
            text: TRANSLATION?.maintenance_loan?.only_if_your_income[lang],
            subBullets: [
              TRANSLATION?.maintenance_loan?.sub_uk[lang],

              TRANSLATION?.maintenance_loan?.sub_poland[lang],
            ],
          },

          TRANSLATION?.maintenance_loan?.if_you_earn_below[lang],
        ]}
        tableTitle={TRANSLATION?.maintenance_loan?.examples[lang]}
        tableData={[
          [
            TRANSLATION?.maintenance_loan?.country[lang],
            TRANSLATION?.maintenance_loan?.repayment_threshold[lang],
            TRANSLATION?.maintenance_loan?.monthly_income[lang],
            TRANSLATION?.maintenance_loan?.amount_over_threshold[lang],
            TRANSLATION?.maintenance_loan?.monthly_repayment[lang],
          ],
          ["UK", "£25,000", "£2,500", "£400", "£36"],
          ["Poland", "~£15,000 (73k PLN)", "7,000 PLN", "1,000 PLN", "90 PLN"],
        ]}
        finalNote={TRANSLATION?.maintenance_loan?.repayments_are_low[lang]}
      />

      <InfoWithBulletSection
        image={"w7"}
        title={TRANSLATION?.maintenance_loan?.why_is_it_worth_applying[lang]}
        sections={[
          {
            bullets: [
              TRANSLATION?.maintenance_loan?.bullets?.bullet5[lang],
              TRANSLATION?.maintenance_loan?.bullets?.bullet6[lang],
              TRANSLATION?.maintenance_loan?.bullets?.bullet7[lang],
            ],
          },
          {
            description: TRANSLATION?.maintenance_loan?.in_practice[lang],
          },
          {
            description: TRANSLATION?.maintenance_loan?.with_admit_go[lang],
          },
          {
            description: TRANSLATION?.maintenance_loan?.you_are_not_alone[lang],
          },
        ]}
      />
    </MainContainer>
  );
};

export default MaintenanceLoan;

export const MainContainer = styled.div`
  padding: ${DesktopPagePadding}px;
`;
