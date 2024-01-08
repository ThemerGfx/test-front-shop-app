import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ProductItem } from "./types";
import { Button } from "@mui/material";

type ProductListProps = {
  data: ProductItem[];
};

const Cart: React.FC<ProductListProps> = () => {
  const [cart, setCart] = React.useState<ProductItem[]>([]);

  React.useEffect(() => {
    const storedCartString = localStorage.getItem("cart");
    const storedCart: ProductItem[] = storedCartString
      ? JSON.parse(storedCartString)
      : [];

    setCart(storedCart);
    console.log(storedCart);
  }, []);

  const removeProduct = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.map((item: any) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.category}
              </TableCell>
              <TableCell align="center">{item.price}</TableCell>
              <TableCell align="center">{item.title}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removeProduct(item.id)}
                  style={{ margin: "5px" }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Cart;
