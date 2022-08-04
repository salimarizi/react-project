import '../../App.css';
import '../../css/styles.css';
import { Link } from "react-router-dom";

function ProductContent() {
    return (
        <>
            <div className="App">
                <div className='container py-5' style={{minHeight: 600}}>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Link
                                to='/admin/products/create' 
                                className='btn btn-primary' 
                                style={{float: 'right'}}>
                                Add Product
                            </Link>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-md-12'>
                            <table className='table table-bordered table-striped table-hover'>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Normal Price</th>
                                        <th>Discount Price</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>Sample Product</td>
                                        <td>Rp 100.000</td>
                                        <td>Rp 70.000</td>
                                        <td>Description Product</td>
                                        <td>
                                            <button className='btn btn-success'>
                                                Edit
                                            </button>
                                            &nbsp;
                                            <button className='btn btn-danger'>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductContent;
