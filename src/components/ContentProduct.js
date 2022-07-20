import '../App.css';
import '../css/styles.css';

function App() {
  return (
    <div className="App">
        <section class="py-5">
            <div class="container px-4 px-lg-5">
                <div class="row">
                    <div class="col-md-2">
                        <div class="row">
                            <div class="col-md-12">
                                <h4>FILTER</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                Kategori: <br/>
                                <select name="category_id" class="form-select">
                                    <option value="">Kategori</option>
                                </select>
                                <br/>
                                Harga: <br/>
                                <input type="number" name="min_price" class="form-control" placeholder="Minimum"/><br/>
                                <input type="number" name="max_price" class="form-control" placeholder="Maximum"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-10">
                        <div class="row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Fancy Product</h5>
                                            $40.00 - $80.00
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <div class="badge bg-dark text-white position-absolute">Sale</div>
                                    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Special Item</h5>
                                            <div class="d-flex justify-content-center small text-warning mb-2">
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                            </div>
                                            <span class="text-muted text-decoration-line-through">$20.00</span>
                                            $18.00
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <div class="badge bg-dark text-white position-absolute">Sale</div>
                                    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Sale Item</h5>
                                            <span class="text-muted text-decoration-line-through">$50.00</span>
                                            $25.00
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Popular Item</h5>
                                            <div class="d-flex justify-content-center small text-warning mb-2">
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                            </div>
                                            $40.00
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <div class="badge bg-dark text-white position-absolute">Sale</div>
                                    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Sale Item</h5>
                                            <span class="text-muted text-decoration-line-through">$50.00</span>
                                            $25.00
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Fancy Product</h5>
                                            $120.00 - $280.00
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <div class="badge bg-dark text-white position-absolute">Sale</div>
                                    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Special Item</h5>
                                            <div class="d-flex justify-content-center small text-warning mb-2">
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                            </div>
                                            <span class="text-muted text-decoration-line-through">$20.00</span>
                                            $18.00
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-5">
                                <div class="card h-100">
                                    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder">Popular Item</h5>
                                            <div class="d-flex justify-content-center small text-warning mb-2">
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                                <div class="bi-star-fill"></div>
                                            </div>
                                            $40.00
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
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
