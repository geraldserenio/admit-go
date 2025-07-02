import React from "react";
import { desktopDevice, largeScreens, tabletDevice } from "settings/sizing";
import styled from "styled-components";

const Section = styled.section`
  max-width: 900px;
  margin: 60px auto;
  padding: 0 20px;
  font-family: "Poppins", sans-serif;
  margin-top: 0px;
`;

const Title = styled.h2`
  color: #6c30c2;
  font-size: 28px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 16px;
  line-height: 1.6;
`;

const BulletList = styled.ul`
  font-size: 16px;
  color: #444;
  margin-bottom: 20px;
  padding-left: 20px;

  li {
    margin-bottom: 12px;
    list-style-type: disc;
  }

  ul {
    margin-top: 8px;
    padding-left: 20px;

    li {
      list-style-type: circle;
      font-size: 15px;
    }
  }
`;

const TableTitle = styled.h4`
  font-size: 18px;
  margin: 20px 0 10px;
  color: #444;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 12px 16px;
    font-size: 15px;
    text-align: left;
  }

  th {
    background-color: #f3eaff;
    color: #6c30c2;
    font-weight: bold;
  }

  tr:nth-child(even) td {
    background-color: #fafafa;
  }
  display: none;

  @media (min-width: ${tabletDevice}px) {
    display: none;
  }

  @media (min-width: ${desktopDevice}px) {
    display: block;
  }

  @media (min-width: ${largeScreens}px) {
    display: block;
  }
`;

const StyledTableMobile = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 12px 16px;
    font-size: 15px;
    text-align: left;
  }

  th {
    background-color: #f3eaff;
    color: #6c30c2;
    font-weight: bold;
  }

  tr:nth-child(even) td {
    background-color: #fafafa;
  }
  display: flex;

  @media (min-width: ${tabletDevice}px) {
    display: flex;
  }

  @media (min-width: ${desktopDevice}px) {
    display: none;
  }

  @media (min-width: ${largeScreens}px) {
    display: none;
  }
`;

const LoanRepaymentInfo = ({
  title,
  descriptions,
  bullets,
  tableTitle,
  tableData,
  finalNote,
}) => {
  return (
    <Section>
      <Title>{title}</Title>

      {descriptions.map((desc, i) => (
        <Paragraph key={`desc-${i}`}>{desc}</Paragraph>
      ))}

      <BulletList>
        {bullets.map((item, i) =>
          typeof item === "string" ? (
            <li key={`bullet-${i}`}>{item}</li>
          ) : (
            <li key={`bullet-${i}`}>
              {item.text}
              {item.subBullets && (
                <ul>
                  {item.subBullets.map((sub, j) => (
                    <li key={`sub-${i}-${j}`}>{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          )
        )}
      </BulletList>

      {tableTitle && <TableTitle>{tableTitle}</TableTitle>}

      {tableData && (
        <div>
          {" "}
          <StyledTable>
            <thead>
              <tr>
                {tableData[0].map((col, i) => (
                  <th key={`th-${i}`}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.slice(1).map((row, i) => (
                <tr key={`row-${i}`}>
                  {row.map((cell, j) => (
                    <td key={`td-${i}-${j}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </StyledTable>
          <StyledTableMobile>
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Country</th>
                <td style={{ width: "20%" }}>UK</td>
                <td style={{ width: "20%" }}>Poland</td>
              </tr>
              <tr>
                <th>Repayment Threshold</th>
                <td>£25,000</td>
                <td>~£15,000 (73k PLN)</td>
              </tr>
              <tr>
                <th>Monthly Income</th>
                <td>£2,500</td>
                <td>7,000 PLN</td>
              </tr>
              <tr>
                <th>Amount Over Threshold</th>
                <td>£400</td>
                <td>1,000 PLN</td>
              </tr>
              <tr>
                <th>Monthly Repayment</th>
                <td>£36</td>
                <td>90 PLN</td>
              </tr>
            </thead>
            <tbody></tbody>
          </StyledTableMobile>
        </div>
      )}

      {finalNote && <Paragraph>{finalNote}</Paragraph>}
    </Section>
  );
};

export default LoanRepaymentInfo;
