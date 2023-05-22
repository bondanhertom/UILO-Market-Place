import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import Preloader from "../../components/preloader";
import { useDispatch, useSelector } from "react-redux";
import { DetailProducts } from "../../store/action/actionCreator";
import { useEffect } from "react";
import toRupiah from "../../helpers/toRupiah";
import './index.css'

const ProductDetail = () => {
    const { id } = useParams();
    const { detailProducts, detailProductsLoading } = useSelector((state) => {
        console.log(state);
        return state.DetailProductReducer;
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(DetailProducts(id));
    }, [id]);

    return (
        <section className="section" id="product">
            {detailProductsLoading ? <Preloader /> : <></>}
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="left-images">
                            <Slider dots={true}>
                                {detailProducts.Images?.map((el) => {
                                    return (
                                        <div key={el.id}>
                                            <img src={el.imgUrl} alt="detail" />
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="right-content">
                            <h4 className="fw-bold">{detailProducts?.name}</h4>
                            <span className="price">{toRupiah(detailProducts?.price)}</span>
                            <span className="description">{detailProducts?.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
