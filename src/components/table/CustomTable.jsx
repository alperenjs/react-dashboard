import "./table.scss";
import { userRows, userColumns } from "../../datatablesource";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function CustomTable() {
  return (
    <div>
      <TableContainer className="table" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Id</TableCell>
              <TableCell>User Img</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell classes="tableCell">{row.id}</TableCell>
                <TableCell classes="tableCell">
                  <div className="cellWrapper">
                    <img className="image" src={row.img} alt="" />
                  </div>
                </TableCell>
                <TableCell classes="tableCell">{row.username}</TableCell>
                <TableCell classes="tableCell">{row.email}</TableCell>
                <TableCell classes="tableCell">{row.age}</TableCell>
                <TableCell classes="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CustomTable;
