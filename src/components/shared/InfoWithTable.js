import React from "react";
import { PURPLE } from "settings/colors";
import styled from "styled-components";

const InfoWithTable = ({
  title,
  description,
  tableTitle,
  tableData,
  finalNote,
}) => {
  return (
    <Section>
      <Title>{title}</Title>
      {description && <Paragraph>{description}</Paragraph>}

      {tableTitle && <TableTitle>{tableTitle}</TableTitle>}

      {tableData && (
        <StyledTable>
          <thead>
            <tr>
              {tableData[0].map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.slice(1).map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
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

export default InfoWithTable;

const Section = styled.section`
  max-width: 900px;
  margin: 60px auto;
  padding: 0 20px;
  font-family: "Poppins", sans-serif;
`;

const Title = styled.h2`
  color: #6c30c2;
  font-size: 28px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.6;
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
    color: ${PURPLE};
    font-weight: bold;
  }

  tr:nth-child(even) td {
    background-color: #fafafa;
  }
`;
