import '../../App.css';
import '../../css/styles.css';
import { Link } from "react-router-dom";

function ProductContent() {
    return (
        <>
            <div className="App">
                <div className='container py-5' style={{minHeight: 600, textAlign: 'left'}}>
                    <div className='row'>
                        <div className='col-md-2'>
                            Name
                        </div>
                        <div className='col-md-8'>
                            <input type='text' className='form-control' placeholder='Name'/>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-md-2'>
                            Category
                        </div>
                        <div className='col-md-8'>
                            <select className='form-control' placeholder='Category'>
                                <option>Sample Category</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-md-2'>
                            Normal Price
                        </div>
                        <div className='col-md-8'>
                            <input type='number' className='form-control' placeholder='Normal Price'/>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-md-2'>
                            Discount Price
                        </div>
                        <div className='col-md-8'>
                            <input type='number' className='form-control' placeholder='Discount Price'/>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-md-2'>
                            Description
                        </div>
                        <div className='col-md-8'>
                            <textarea className='form-control' placeholder='Description'></textarea>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-md-2'>
                            <a className='btn btn-secondary'>
                                Cancel
                            </a>
                            &nbsp;
                            <button className='btn btn-primary'>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductContent;
