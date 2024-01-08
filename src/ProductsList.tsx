import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ProductItem } from "./types";

type ProductListProps = {
  data: ProductItem[];
};

const ProductsList: React.FC<ProductListProps> = ({ data }) => {
  const navigate = useNavigate();
  const handleAddProduct = (productId: number) => {
    const selectedProduct = data.find((product) => product.id === productId);

    if (selectedProduct) {
      const existingCartString = localStorage.getItem("cart");
      const existingCart: ProductItem[] = existingCartString
        ? JSON.parse(existingCartString)
        : [];

      const updatedCart = [...existingCart, selectedProduct];

      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const goToDetails = (id: any) => {
    navigate(`/products/${id}`);
  };
  const goToCart = (id: any) => {
    navigate("/cart");
  };

  return (
    <TableContainer component={Paper}>
      <Button variant="contained" color="success" fullWidth onClick={goToCart}>
        Show Cart
      </Button>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item: any) => (
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
                  onClick={() => goToDetails(item.id)}
                  style={{ margin: "5px" }}
                >
                  Details
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handleAddProduct(item.id)}
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsList;
