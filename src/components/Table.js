import React from "react";
import styled from "styled-components";

const Table = styled.table`
  margin: 1rem;
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: ${props => props.background || "grey"};
  color: white;
  border: 1px solid #ddd;
  padding: 8px;
`;

export const TableRow = styled.tr`
  :hover {
    background-color: #ddd;
    cursor: pointer;
  }
  :nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export default Table;
