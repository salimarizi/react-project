import '../../App.css';
import '../../css/styles.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function CategoryContent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Form Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input name='category_name' className='form-control' placeholder='Category Name'/>
                </Modal.Body>
                <Modal.Footer>
                <button className='btn btn-secondary' onClick={handleClose}>
                    Close
                </button>
                <button className='btn btn-primary' onClick={handleClose}>
                    Save Changes
                </button>
                </Modal.Footer>
            </Modal>

            <div className="App">
                <div className='container py-5' style={{minHeight: 600}}>
                    <div className='row'>
                        <div className='col-md-12'>
                            <button 
                                className='btn btn-primary' 
                                style={{float: 'right'}}
                                onClick={handleShow}>
                                Add Category
                            </button>
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
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>Sample Category</td>
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

export default CategoryContent;
