import React from "react";
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
      )}

      {finalNote && <Paragraph>{finalNote}</Paragraph>}
    </Section>
  );
};

export default LoanRepaymentInfo;
