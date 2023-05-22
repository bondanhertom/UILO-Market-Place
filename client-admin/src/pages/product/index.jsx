import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../store/action/actionProduct'
import TableProductRow from '../../components/table-row-products/index.jsx';
import { useNavigate } from 'react-router-dom';



function Product() {
    const navigate = useNavigate();

    const { products, productsLoading } = useSelector((state) => {
        console.log(state);
        return state.ProductReducer
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())

    }, [])

    const handleAddProduct = () => {
        navigate("/product-form");
    }


    return (
        <Container>
            <Row>
                <Col>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom" style={{ marginTop: '20px' }}>
                    <h1 className="display-7 fw-bold text-uppercase">List Product</h1>
                        <Button variant="dark" size='lg' onClick={handleAddProduct}>Add Product</Button>
                    </div>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col" width="150px">
                                    Main Image
                                </th>
                                <th scope="col">Created By</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((product, i) => {
                                return (
                                    <TableProductRow
                                        key={product.id}
                                        product={product}
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

export default Product;