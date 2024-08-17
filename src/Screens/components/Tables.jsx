import * as React from "react";   
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {   
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },   
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,   
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Tables({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Username</StyledTableCell>   
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e, i) => (
            <StyledTableRow key={e.id}>
              <StyledTableCell component="th" scope="row">
                {e.name}   
              </StyledTableCell>
              <StyledTableCell align="right">{e.email}</StyledTableCell>
              <StyledTableCell align="right">{e.username}</StyledTableCell>
              <StyledTableCell align="right">{e.phone}</StyledTableCell>
              <StyledTableCell align="right">
                <DeleteIcon sx={{ paddingRight: 3, color: "red" }} />
                <EditIcon sx={{ color: "blue" }} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}