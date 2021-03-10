import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table as MyTable } from '@material-ui/core';

import TableContainer from '@material-ui/core/TableContainer';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Table = (props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
        <MyTable className={classes.table} aria-label="simple table">
            {props.children}
        </MyTable>
    </TableContainer>
  );
}

export default Table;