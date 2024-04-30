import { styled } from '@mui/system';
import PropTypes from 'prop-types'; // Import PropTypes
import React from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const TableCellWrapper = ({ children, ...props }) => {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#EEF0F7',
      color: '#262829',
      fontSize: 16,
      fontWeight: 'bold',
      borderBottom: 'none',
    },
    [`&.${tableCellClasses.body}`]: {
      color: '#25282B',
      borderBottom: 'none',
    },
    '&.small': {
      fontSize: 14,
      fontWeight: 'regular',
    },
    '&.medium': {
      fontWeight: 'bold',
      fontSize: 16,
    },
  }));

  return <StyledTableCell {...props}>{children}</StyledTableCell>;
};

TableCellWrapper.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default TableCellWrapper;
