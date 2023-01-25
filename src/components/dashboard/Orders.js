import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, swapStation, paymentMethod) {
  return { id, date, name, swapStation, paymentMethod };
}

const rows = [
  createData(
    0,
    '16 Mar, 2022',
    'Shrikant',
    'Pune',
    'Credit Card',
  ),
  createData(
    1,
    '17 Mar, 2022',
    'Shrikant',
    'Pune',
    'Credit Card',
  ),
  createData(2, '17 Mar, 2022', 'Shrikant', 'Pune', 'Credit Card'),
  createData(
    3,
    '21 Mar, 2022',
    'Akash',
    'Mumbai',
    'UPI',
  ),
  createData(
    4,
    '22 Mar, 2022',
    'Saurabh',
    'Mumbai',
    'UPI',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Swaps</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Swapped At</TableCell>
            <TableCell>Payment Method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.swapStation}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See past swaps
      </Link>
    </React.Fragment>
  );
}
