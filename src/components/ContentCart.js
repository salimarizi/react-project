import '../App.css';
import '../css/styles.css';

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { getAllCategories } from '../actions/Category'
import { getProfile } from '../actions/Auth'
import { getAllTransactions } from '../actions/Transaction'
import { useEffect, useState } from 'react';

import axios from 'axios'

const Cart = (props) => {
    const [token, setToken] = useState('')
    const [products, setProducts] = useState([])
    const [shippingCost, setShippingCost] = useState(0)
    const [showAddress, setShowAddress] = useState(false)

    useEffect(() => {
        let token = localStorage.getItem('token')
        setToken(token)
        props.getProfile(token)
        props.getAllCategories()

        if (props.user_data) {
            props.getAllTransactions(props.user_data._id)
        }

        if (props.transactions_data.length > 0) {
            setProducts(props.transactions_data[0].products)
        }
    }, [])

    const handleCheckout = () => {
        setShowAddress(!showAddress)

        axios.post('https://api.rajaongkir.com/starter/cost', {
            "origin": 501,
            "destination": 114,
            "weight": 1000,
            "courier": "jne"
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "Key": "a9475ddfadc9f2c1f3e70b0356a8082e",
            }
        }).then((data) => {
            console.log(data);
        })
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-10' style={{margin: 'auto'}}>
                    <div className='card m-4' style={{textAlign: 'left'}}>
                        <div className='card-header'>
                            <h4>Cart</h4>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <b>Product Name</b>
                                </div>
                                <div className='col-md-2'>
                                    <b>Category</b>
                                </div>
                                <div className='col-md-4'>
                                    <b>Description</b>
                                </div>
                                <div className='col-md-2'>
                                    <b>Price</b>
                                </div>
                            </div>
                            {
                                products.map(product => (
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            { product.name }
                                        </div>
                                        <div className='col-md-2'>
                                            { 
                                                props.categories_data?.map(category => {
                                                    if (category._id === product.category_id) {
                                                        return category.name
                                                    }
                                                }) 
                                            }
                                        </div>
                                        <div className='col-md-4'>
                                            { product.description }
                                        </div>
                                        <div className='col-md-2'>
                                            Rp. { product.price.toLocaleString().replace(',', '.') }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='card-footer'>
                            <button 
                                className='btn btn-primary'
                                style={{float: 'right'}}
                                onClick={() => handleCheckout()}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {
                showAddress && <div className='row'>
                    <div className='col-md-10' style={{margin: 'auto'}}>
                        <div className='card m-4' style={{textAlign: 'left'}}>
                            <div className='card-header'>
                                <h4>Checkout</h4>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <h5>Address</h5>
                                        <b>From</b>
                                        <br/>
                                        Jl. Monjali, Kab. Sleman, DI Yogyakarta, 55284
                                        <br/><br/>

                                        <b>To</b>
                                        <br/>
                                        Jl. Padalarang, Kab. Bandung Barat, Jawa Barat, 40553
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                Shipping Method
                                            </div>
                                            <div className='col-md-8'>
                                                <select className='form-select'>
                                                    <option>JNE</option>
                                                </select>
                                            </div>
                                        </div>
                                        <hr/>
                                        <h5>Total</h5>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                Subtotal
                                            </div>
                                            <div className='col-md-8'>
                                                : <b>Rp. { props.transactions_data[0]?.total_price.toLocaleString().replace(',', '.') }</b>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                Shipping Cost
                                            </div>
                                            <div className='col-md-8'>
                                                : <b>{ shippingCost }</b><br/>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                Total Price
                                            </div>
                                            <div className='col-md-8'>
                                                : <b>Rp. { (props.transactions_data[0]?.total_price + shippingCost).toLocaleString().replace(',', '.') }</b><br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

const mapStateToProps = state => ({
    transactions_data: state.TransactionReducer.transactions_data,
    categories_data: state.CategoryReducer.categories_data,
    user_data: state.AuthReducer.user_data
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllCategories,
        getProfile,
        getAllTransactions
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
