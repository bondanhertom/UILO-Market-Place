import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonGroup, Button } from 'react-bootstrap';

import {
    addCategory,
    editCategory,
    fetchOneCategory
} from "../../store/action/actionCategory";

export default function FormCategoryPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [formCategory, setFormCategory] = useState({
        name: "",
    });

    function handleOnChange(e) {
        setFormCategory({
            ...formCategory,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        if (id) {
            dispatch(fetchOneCategory(id)).then((result) => {
                setFormCategory({ name: result.name });

            });
        }
    }, [dispatch, id]);

    function handleCategory(e) {
        e.preventDefault();
        if (!id) {
            dispatch(addCategory(formCategory));
        } else {
            dispatch(editCategory(formCategory, id));

        }
        navigate("/category");
        setFormCategory({ name: "" });
    }

    return (
        <section className="col-10 m-auto px-md-4">
            <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                {!id ? (
                    <h1 className="display-7 fw-bold text-uppercase">New Category</h1>
                ) : (
                    <h1 className="display-7 fw-bold text-uppercase">Edit Category</h1>
                )}
            </div>

            <div className="row">
                <div className="col-12">
                    <form onSubmit={handleCategory}>
                        <div className="col-12">
                            <label htmlFor="category-name">
                                Name <span className="text-danger fw-bold">*</span>
                            </label>
                            <input
                                name="name"
                                value={formCategory.name}
                                onChange={handleOnChange}
                                type="text"
                                className="form-control"
                                id="category-name"
                                placeholder="Enter category name"
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div className="d-flex justify-content-center mt-5 mb-3">
                            <ButtonGroup>
                                <Button variant="secondary" size="lg" onClick={() => navigate("/category")}>Cancel</Button>
                                <Button variant="primary" size="lg" type="submit">Submit</Button>
                            </ButtonGroup>
                        </div>


                    </form>
                </div>
            </div>
        </section>
    );
}
