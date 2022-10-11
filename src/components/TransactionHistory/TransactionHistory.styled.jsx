import styled from 'styled-components';

export const TableHead = styled.thead`
  background-color: #5892c5;
`;
export const TableBody = styled.tbody`
  background-color: #e2e9f2;
`;

export const TableHeadline = styled.th`
  color: white;
  padding: 10px;
`;
export const TableData = styled.td`
  padding: 10px;
`;

export const TransactionBodyLine = styled.tr`
  &:nth-child(2n) {
    background-color: #ffffff;
  }
`;
export const TransactionTable = styled.table`
  width: 560px;
  padding: 30px;
  margin: 0 auto;
  background-color: #a7bed9;
`;
