import '../App.css';
import '../css/styles.css';

function App() {
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
                                <select name="category_id" className="form-select">
                                    <option value="">Kategori</option>
                                </select>
                                <br/>
                                Harga: <br/>
                                <input type="number" name="min_price" className="form-control" placeholder="Minimum"/><br/>
                                <input type="number" name="max_price" className="form-control" placeholder="Maximum"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            <div className="col mb-5">
                                <div className="card h-100">
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">Fancy Product</h5>
                                            $40.00 - $80.00
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    <div className="badge bg-dark text-white position-absolute">Sale</div>
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">Special Item</h5>
                                            <div className="d-flex justify-content-center small text-warning mb-2">
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                            </div>
                                            <span className="text-muted text-decoration-line-through">$20.00</span>
                                            $18.00
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    <div className="badge bg-dark text-white position-absolute">Sale</div>
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">Sale Item</h5>
                                            <span className="text-muted text-decoration-line-through">$50.00</span>
                                            $25.00
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">Popular Item</h5>
                                            <div className="d-flex justify-content-center small text-warning mb-2">
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                            </div>
                                            $40.00
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    <div className="badge bg-dark text-white position-absolute">Sale</div>
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">Sale Item</h5>
                                            <span className="text-muted text-decoration-line-through">$50.00</span>
                                            $25.00
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">Fancy Product</h5>
                                            $120.00 - $280.00
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    <div className="badge bg-dark text-white position-absolute">Sale</div>
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">Special Item</h5>
                                            <div className="d-flex justify-content-center small text-warning mb-2">
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                            </div>
                                            <span className="text-muted text-decoration-line-through">$20.00</span>
                                            $18.00
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">Popular Item</h5>
                                            <div className="d-flex justify-content-center small text-warning mb-2">
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                            </div>
                                            $40.00
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;
