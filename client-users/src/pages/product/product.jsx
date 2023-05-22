import ProductCard from "../../components/product/Product-card"
import { useDispatch, useSelector } from "react-redux";
import { ProductsPage } from '../../store/action/actionCreator'
import { useEffect } from "react";


export default function FetchProducts() {
    const { products, productsLoading } = useSelector((state) => {
        console.log(state);
        return state.ProductReducer
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ProductsPage())

    }, [])

    return (
        <section className="section mt-8" id="products">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>Our Latest Products</h2>
                            <span>Check out all of our products.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {productsLoading ? (
                        <h1>Loading...</h1>
                    ) : products.map((el) => {
                        return <ProductCard key={el.id} product={el} />;
                    })}
                </div>
            </div>

        </section>
    );
}