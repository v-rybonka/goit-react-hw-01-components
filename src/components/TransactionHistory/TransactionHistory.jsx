import { PropTypes } from 'prop-types';
import {
  TransactionTable,
  TableHead,
  TableBody,
  TableHeadline,
  TableData,
  TransactionBodyLine,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <TransactionBodyLine>
          <TableHeadline>Type</TableHeadline>
          <TableHeadline>Amount</TableHeadline>
          <TableHeadline>Currency</TableHeadline>
        </TransactionBodyLine>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionBodyLine key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TransactionBodyLine>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
