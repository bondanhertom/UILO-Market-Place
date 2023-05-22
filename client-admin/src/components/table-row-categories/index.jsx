import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCategory } from "../../store/action/actionCategory";
import { Button } from 'react-bootstrap';
import { BiEdit, BiTrash } from 'react-icons/bi';

const TableCategoryRow = ({ category, index }) => {
    const dispatch = useDispatch();

    function handleDeleteCategory() {
        dispatch(deleteCategory(category.id));
    }

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td className="fw-bold">{category.name}</td>
            <td>
                <Link
                    className="btn btn-warning me-3"
                    to={`/category-form/${category.id}`}
                >
                    <BiEdit />
                </Link>
                <Button variant="danger" className="ms-3" onClick={handleDeleteCategory}>
                    <BiTrash />
                </Button>
            </td>
        </tr>
    );
}

export default TableCategoryRow;
