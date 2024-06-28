import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 'Frozen yoghurt', 159, 6.0, 24),
  createData(2, 'Ice cream sandwich', 237, 9.0, 37),
  createData(3, 'Eclair', 262, 16.0, 24),
  createData(4, 'Cupcake', 305, 3.7, 67),
  createData(5, 'Gingerbread', 356, 16.0, 49),
];

export default function SelectedRecord() {
  return (
    <TableContainer 
      component={Paper}
      sx={{
        width: '100%',
        maxHeight: 250, // Adjust the height to show only 3 rows
        overflow: 'auto',
      }}
    >
      <Table 
        sx={{ minWidth: '100%', boxShadow: '20px' }} 
        aria-label="simple table" 
        size="small"
        stickyHeader // To make the header sticky while scrolling
      >
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Header 1</TableCell>
            <TableCell>Header 2</TableCell>
            <TableCell>Header 3</TableCell>
            <TableCell>Header 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.id}</TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
