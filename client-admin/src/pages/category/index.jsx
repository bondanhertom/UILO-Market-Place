import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from '../../store/action/actionCategory';
import TableCategoryRow from '../../components/table-row-categories/index.jsx';
import { useNavigate } from 'react-router-dom';


function Category() {
    const navigate = useNavigate()

    const { categories, categoriesLoading } = useSelector((state) => {
        return state.CategoryReducer
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategories())

    }, [])

    const handleAddCategory = () => {

        navigate("/category-form");
    }


    return (
        <Container>
            <Row>
                <Col>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom" style={{ marginTop: '20px' }}>
                    <h1 className="display-7 fw-bold text-uppercase">List Category</h1>
                        <Button variant="dark" size='lg'  onClick={handleAddCategory}>Add Category</Button>
                    </div>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Category</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories?.map((category, i) => {
                                return (
                                    <TableCategoryRow
                                        key={category.id}
                                        category={category}
                                        index={i}
                                    />
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container >
    );
}

export default Category;