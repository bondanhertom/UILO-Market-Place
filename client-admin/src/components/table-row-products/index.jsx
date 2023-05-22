import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../store/action/actionProduct";
import { BiEdit, BiTrash } from 'react-icons/bi';
import { Button } from 'react-bootstrap';
import toRupiah from "../../helper/toRupiah";


const TableProductRow = ({ product, index }) => {
    const dispatch = useDispatch();

    function handleDeleteProduct() {
        dispatch(deleteProduct(product.id));
    }

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td className="fw-bold">{product.name}</td>
            <td className="fw-bold">{product.Category.name}</td>
            <td className="fw-bold">{toRupiah(product.price)}</td>
            <td>
                <img src={product.mainImg} style={{ maxWidth: '100px', height: 'auto' }} alt="Product" />
            </td>
            <td className="fw-bold">{product.User.username}</td>
            <td className="fw-bold">

                <Link
                    className="btn btn-warning me-3"
                    to={`/product-form/${product.id}`}
                >
                    <BiEdit />
                </Link>
                <Button variant="danger" className="ms-3" onClick={handleDeleteProduct}>
                    <BiTrash />
                </Button>
            </td>
        </tr>
    );

}

export default TableProductRow;