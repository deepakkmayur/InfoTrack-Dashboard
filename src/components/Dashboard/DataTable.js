import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useDispatch,useSelector } from 'react-redux';
import { fetchData } from '../../redux/actions/dataAction';

function createData(id,name, calories, fat, select, deleteRow) {
  return {id, name, calories, fat, select, deleteRow };
}

const rows = [
  createData(1,'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(2,'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(3,'Eclair', 262, 16.0, 24, 6.0),
  createData(4,'Cupcake', 305, 3.7, 67, 4.3),
  createData(5,'Gingerbread', 356, 16.0, 49, 3.9),
  createData(6,'Brownie', 135, 10.0, 28, 5.0),
  createData(7,'Cheesecake', 255, 18.0, 45, 7.0),
];

export default  function DataTable() {
  const dispatch= useDispatch()
  const []  
  useEffect(()=>{
  dispatch(fetchData())
 },[dispatch])

  const data=useSelector((state)=>state)
  localStorage.setItem("getData",JSON.stringify(data.data.data))
  let ans=JSON.parse(localStorage.getItem("getData"))
  
  
  



  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3); 
  const [searchQuery, setSearchQuery] = useState('');



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0); // Reset to the first page on new search
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, filteredRows.length - page * rowsPerPage);

  return (
    <Box sx={{ display: 'flex', flexDirection:"column"}}>
      <TextField
        variant="standard"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{
           justifyContent: 'flex-end',
           boxShadow:" 0 0 10px rgba(0, 0, 0, 0.3)",
           borderRadius:"5px",
           marginBottom:1,
           height:"40px",
           width:"250px",
           marginLeft:"auto",
                 '& .MuiInputLabel-root': {
                    color: 'lightgray', 
                    fontWeight: 'bold', 
                    fontSize: '20px', 
                    position:"absolute",
                    top:"12px",
                    left:"20px"
                  },
               }}
               InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                  )
                }}
      />
      <TableContainer component={Paper} style={{ maxHeight: 200 }}>
        <Table sx={{ minWidth: "50%" }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>S.No</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Calories</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Fat&nbsp;(g)</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Carbs&nbsp;(g)</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Protein&nbsp;(g)</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Protein&nbsp;(g)</TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>Select</TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (

              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell >{row.id}</TableCell>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell align='center'><Button variant="contained" sx={{backgroundColor:"#6960ec",width:"100px",height:"23px"}}>Select</Button></TableCell>
              <TableCell align='center'><Button variant="contained" sx={{backgroundColor:"red",width:"100px",height:"23px"}}>Delete</Button></TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 33 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[3, 5, 10]} // Options for rows per page
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}
