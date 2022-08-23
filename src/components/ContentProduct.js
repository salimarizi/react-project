import '../App.css';
import '../css/styles.css';

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { getAllProducts, getAllProductsByCategory } from '../actions/Product'
import { getAllCategories } from '../actions/Category'
import { getProfile } from '../actions/Auth'
import { addToCart } from '../actions/Transaction'
import { useEffect, useState } from 'react';

const Product = (props) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        props.getAllProducts()
        props.getAllCategories()

        let token = localStorage.getItem('token')
        setToken(token)
        props.getProfile(token)
    }, [])

    const setOnChangeCategory = (category) => {
        if (category !== '') {
            props.getAllProductsByCategory(category)
        }else {
            props.getAllProducts()
        }
    }

    return (
        <div className="App">
            <section className="py-5">
                <div className="container px-4 px-lg-5">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>FILTER</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    Kategori: <br/>
                                    <select 
                                        name="category_id"
                                        className="form-select"
                                        onChange={(e) => setOnChangeCategory(e.target.value)}>
                                        <option value="">All</option>
                                        {
                                            props.categories_data?.map((category, index) => {
                                                return <option value={category._id} key={index}>
                                                    {category.name}
                                                </option>
                                            })
                                        }
                                    </select>
                                    <br/>
                                    Harga: <br/>
                                    <input type="number" name="min_price" className="form-control" placeholder="Minimum"/><br/>
                                    <input type="number" name="max_price" className="form-control" placeholder="Maximum"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4">
                                {
                                    props.products_data?.map((product, index) => {
                                        return <div className="col mb-5" key={index}>
                                            <div className="card h-100">
                                                <div className="badge bg-dark text-white position-absolute">Sale</div>
                                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                                <div className="card-body p-4">
                                                    <div className="text-center">
                                                        <h5 className="fw-bolder">{product.name}</h5>
                                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                                            <div className="bi-star-fill"></div>
                                                            <div className="bi-star-fill"></div>
                                                            <div className="bi-star-fill"></div>
                                                            <div className="bi-star-fill"></div>
                                                            <div className="bi-star-fill"></div>
                                                        </div>
                                                        Rp. {product.price.toLocaleString().replace(',', '.')}
                                                    </div>
                                                </div>
                                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                    <div className="text-center">
                                                        <button 
                                                            className="btn btn-outline-dark mt-auto" 
                                                            onClick={() => {
                                                                let formData = {
                                                                    user_id: props.user_data._id,
                                                                    product: {
                                                                        category_id: product.category_id,
                                                                        name: product.name,
                                                                        description: product.description,
                                                                        price: product.price,
                                                                    }
                                                                }
                                                                props.addToCart(formData)
                                                            }}>
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const mapStateToProps = state => ({
    products_data: state.ProductReducer.products_data,
    categories_data: state.CategoryReducer.categories_data,
    user_data: state.AuthReducer.user_data
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllProducts, 
        getAllCategories,
        getAllProductsByCategory,
        getProfile,
        addToCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
