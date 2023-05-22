import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../store/action/actionProduct'
import { Card } from 'react-bootstrap';
import { fetchCategories } from '../../store/action/actionCategory';

const Dashboard = () => {
    const { products, productsLoading } = useSelector((state) => {
        return state.ProductReducer
    })
    const { categories, categoriesLoading } = useSelector((state) => {
        return state.CategoryReducer
    })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())

    }, [])

    useEffect(() => {
        dispatch(fetchCategories())

    }, [])

    return (
        <div className="d-flex justify-content-start align-items-center flex-wrap"  style={{marginLeft: '70px'}}>
            <Card style={{ width: '15rem' }} className="m-3">
                <Card.Body>
                    <Card.Title>Total Products</Card.Title>
                    <Card.Text style={{ fontSize: '32px', fontWeight: 'bold' }}>
                        {products.length}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="m-3">
                <Card.Body>
                    <Card.Title>Total Categories</Card.Title>
                    <Card.Text style={{ fontSize: '32px', fontWeight: 'bold' }}>
                        {categories.length}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
}

export default Dashboard;
