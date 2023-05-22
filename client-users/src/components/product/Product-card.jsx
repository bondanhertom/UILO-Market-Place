import Card from 'react-bootstrap/Card';
import './index.css'
import { Link } from 'react-router-dom';
import toRupiah from '../../helpers/toRupiah';


function ProductCard({ product }) {
    return (

        <Card className="product-card">
            <Link to={`/product/${product.id}`} className="product-link">
                <Card.Img variant="top" src={product.mainImg} className="product-image" />
                <Card.Body>
                    <h2 className="product-title">{product.name}</h2>
                    <h2 className="product-title">{toRupiah(product.price)}</h2>
                </Card.Body>
            </Link>
        </Card>

    );
}


export default ProductCard;
