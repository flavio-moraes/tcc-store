import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Container = styled.div`
    //width: 700px;
    //height: 370px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    color: gray;

    .table {
      margin: 10px;
      width: unset;

      .cellWrapper {
        display: flex;
        align-items: center;
    
        .image {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin-right: 10px;
          object-fit: cover;
        }
      }
  
      .status {
        padding: 5px;
        border-radius: 5px;
    
        &.Approved {
          color: green;
          background-color: rgba(0, 128, 0, 0.151);
        }
        &.Pending {
          color: goldenrod;
          background-color: rgba(189, 189, 3, 0.103);
        }
      }
    }
`;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
`;

const MyTable = ({title}) => {
    const rows = [
        {
          id: 1143155,
          product: "Acer Nitro 5",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 785,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
          product: "Playstation 5",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Michael Doe",
          date: "1 March",
          amount: 900,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
          product: "Redragon S101",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 35,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
          product: "Razer Blade 15",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Jane Smith",
          date: "1 March",
          amount: 920,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          product: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Harold Carol",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",
        },
      ];


  return (
    <Container>
        {title && <Title>{title}</Title>}
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell className="tableCell">ID</TableCell>
                    <TableCell className="tableCell">Produto</TableCell>
                    <TableCell className="tableCell">Cliente</TableCell>
                    <TableCell className="tableCell">Data</TableCell>
                    <TableCell className="tableCell">Valor</TableCell>
                    <TableCell className="tableCell">Método de Pagamento</TableCell>
                    <TableCell className="tableCell">Situação</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id}</TableCell>
                    <TableCell className="tableCell">
                        <div className="cellWrapper">
                        <img src={row.img} alt="" className="image" />
                        {row.product}
                        </div>
                    </TableCell>
                    <TableCell className="tableCell">{row.customer}</TableCell>
                    <TableCell className="tableCell">{row.date}</TableCell>
                    <TableCell className="tableCell">{row.amount}</TableCell>
                    <TableCell className="tableCell">{row.method}</TableCell>
                    <TableCell className="tableCell">
                        <span className={`status ${row.status}`}>{row.status}</span>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Container>
  )
}

export default MyTable