import React from 'react';
import $ from 'jquery';
import Sidebar from "./component/Sidebar";
import profile from "./assets/images/profile_av.jpg";
import Header from "./component/Header";

const ProductList = () => {
    // Logic của component ở đây

    return (
        <div>
            <div id="ebazar-layout" className="theme-blue">
                {/* sidebar */}
                <Sidebar />

                {/* main body area */}
                <div className="main px-lg-4 px-md-4">
                    {/* Body: Header */}
                    <Header />


                    {/* Body: Body */}
                    <div className="body d-flex py-3">
                        <div className="container-xxl">
                            <div className="row align-items-center">
                                <div className="border-0 mb-4">
                                    <div
                                        className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                        <h3 className="fw-bold mb-0">Products</h3>
                                        <div className="btn-group group-link btn-set-task w-sm-100">
                                            <a href="product-grid" className="btn d-inline-flex align-items-center"
                                               aria-current="page"><i className="icofont-wall px-2 fs-5"/>Grid View</a>
                                            <a href="product-list"
                                               className="btn active d-inline-flex align-items-center"><i
                                                className="icofont-listing-box px-2 fs-5"/> List View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Row end  */}
                            <div className="row g-3 mb-3">
                                <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-3">
                                    <div className="sticky-lg-top">
                                        <div className="card mb-3">
                                            <div className="reset-block">
                                                <div className="filter-title">
                                                    <h4 className="title">Filter</h4>
                                                </div>
                                                <div className="filter-btn">
                                                    <a className="btn btn-primary" href="#">Reset</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="categories">
                                                <div className="filter-title">
                                                    <a className="title" data-bs-toggle="collapse" href="#category"
                                                       role="button" aria-expanded="true">Categories</a>
                                                </div>
                                                <div className="collapse show" id="category">
                                                    <div className="filter-search">
                                                        <form action="#">
                                                            <input type="text" placeholder="Search"
                                                                   className="form-control"/>
                                                            <button><i className="lni lni-search-alt"/></button>
                                                        </form>
                                                    </div>
                                                    <div className="filter-category">
                                                        <ul className="category-list">
                                                            <li><a href="#" data-bs-toggle="collapse"
                                                                   data-bs-target="#collapseOne" aria-expanded="false"
                                                                   className="collapsed">Game accessories</a>
                                                                <ul id="collapseOne" className="sub-category collapse"
                                                                    data-parent="#category">
                                                                    <li><a href="#">PlayStation 4</a></li>
                                                                    <li><a href="#">Oculus VR</a></li>
                                                                    <li><a href="#">Remote</a></li>
                                                                    <li><a href="#">Lighting Keyborad</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a className="collapsed" href="#"
                                                                   data-bs-toggle="collapse"
                                                                   data-bs-target="#collapseTwo">Bags</a>
                                                                <ul id="collapseTwo" className="sub-category collapse"
                                                                    data-parent="#category">
                                                                    <li><a href="#">School Bags</a></li>
                                                                    <li><a href="#">Traveling Bags</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a className="collapsed" href="#"
                                                                   data-bs-toggle="collapse"
                                                                   data-bs-target="#collapseThree">Flower Port</a>
                                                                <ul id="collapseThree" className="sub-category collapse"
                                                                    data-parent="#category">
                                                                    <li><a href="#">Woodan Port</a></li>
                                                                    <li><a href="#">Pattern Port</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a className="collapsed" href="#"
                                                                   data-bs-toggle="collapse"
                                                                   data-bs-target="#collapseFour">Watch</a>
                                                                <ul id="collapseFour" className="sub-category collapse"
                                                                    data-parent="#category">
                                                                    <li><a href="#">Wall Clock</a></li>
                                                                    <li><a href="#">Smart Watch</a></li>
                                                                    <li><a href="#">Rado Watch</a></li>
                                                                    <li><a href="#">Fasttrack Watch</a></li>
                                                                    <li><a href="#">Noise Watch</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a className="collapsed" href="#"
                                                                   data-bs-toggle="collapse"
                                                                   data-bs-target="#collapseFive">Accessories</a>
                                                                <ul id="collapseFive" className="sub-category collapse"
                                                                    data-parent="#category">
                                                                    <li><a href="#">Note Diaries</a></li>
                                                                    <li><a href="#">Fold Diaries</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="size-block">
                                                <div className="filter-title">
                                                    <a className="title" data-bs-toggle="collapse" href="#size"
                                                       role="button" aria-expanded="true">Select Size</a>
                                                </div>
                                                <div className="collapse show" id="size">
                                                    <div className="filter-size" id="filter-size-1">
                                                        <ul>
                                                            <li>XS</li>
                                                            <li>S</li>
                                                            <li className>M</li>
                                                            <li>L</li>
                                                            <li>XL</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="color-block">
                                                <div className="filter-title">
                                                    <a className="title" data-bs-toggle="collapse" href="#color"
                                                       role="button" aria-expanded="false">Select Color</a>
                                                </div>
                                                <div className="collapse show" id="color">
                                                    <div className="filter-color">
                                                        <ul>
                                                            <li>
                                                                <div className="color-check">
                                                                    <p><span style={{backgroundColor: '#4114e4'}}/>
                                                                        <strong>Blue</strong></p>
                                                                    <input type="checkbox" id="color-1"/>
                                                                    <label htmlFor="color-1"><span/></label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="color-check">
                                                                    <p><span style={{backgroundColor: '#E14C7B'}}/>
                                                                        <strong>Red</strong></p>
                                                                    <input type="checkbox" id="color-2"/>
                                                                    <label htmlFor="color-2"><span/></label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="color-check">
                                                                    <p><span style={{backgroundColor: '#7CB637'}}/>
                                                                        <strong>Green</strong></p>
                                                                    <input type="checkbox" id="color-3"/>
                                                                    <label htmlFor="color-3"><span/></label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="color-check">
                                                                    <p><span style={{backgroundColor: '#161359'}}/>
                                                                        <strong>Dark</strong></p>
                                                                    <input type="checkbox" id="color-4"/>
                                                                    <label htmlFor="color-4"><span/></label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="price-range-block">
                                                <div className="filter-title">
                                                    <a className="title" data-bs-toggle="collapse" href="#pricingTwo"
                                                       role="button" aria-expanded="false">Pricing Range</a>
                                                </div>
                                                <div className="collapse show" id="pricingTwo">
                                                    <div className="price-range">
                                                        <div className="price-amount flex-wrap">
                                                            <div className="amount-input mt-1">
                                                                <label className="fw-bold">Minimum Price</label>
                                                                <input type="text" id="minAmount2"
                                                                       className="form-control"/>
                                                            </div>
                                                            <div className="amount-input mt-1">
                                                                <label className="fw-bold">Maximum Price</label>
                                                                <input type="text" id="maxAmount2"
                                                                       className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div id="slider-range2"
                                                             className="slider-range noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="rating-block">
                                                <div className="filter-title">
                                                    <a className="title" data-bs-toggle="collapse" href="#rating"
                                                       role="button" aria-expanded="false">Select Rating</a>
                                                </div>
                                                <div className="collapse show" id="rating">
                                                    <div className="filter-rating">
                                                        <ul>
                                                            <li>
                                                                <div className="rating-check">
                                                                    <input type="checkbox" id="rating-5"/>
                                                                    <label htmlFor="rating-5"><span/>
                                                                    </label>
                                                                    <p>
                                                                        <i className="icofont-star"/>
                                                                        <i className="icofont-star"/>
                                                                        <i className="icofont-star"/>
                                                                        <i className="icofont-star"/>
                                                                        <i className="icofont-star"/>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="rating-check">
                                                                    <input type="checkbox" id="rating-4"/>
                                                                    <label htmlFor="rating-4"><span/></label>
                                                                    <p>
                                                                        <i className="icofont-star"/>
                                                                        <i className="icofont-star"/>
                                                                        <i className="icofont-star"/>
                                                                        <i className="icofont-star"/>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="rating-check">
                                                                    <input type="checkbox" id="rating-3"/>
                                                                    <label htmlFor="rating-3"><span/></label>
                                                                    <p>
                                                                        <i className="icofont-star"/>
                                                                        <i className="icofont-star"/>
                                                                        <i className="icofont-star"/>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="rating-check">
                                                                    <input type="checkbox" id="rating-2"/>
                                                                    <label htmlFor="rating-2"><span/></label>
                                                                    <p>
                                                                        <i className="icofont-star"/>
                                                                        <i className="icofont-star"/>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="rating-check">
                                                                    <input type="checkbox" id="rating-1"/>
                                                                    <label htmlFor="rating-1"><span/></label>
                                                                    <p>
                                                                        <i className="icofont-star"/>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-8 col-xl-8 col-xxl-9">
                                    <div className="card mb-3 bg-transparent p-2">
                                        <div className="card border-0 mb-1">
                                            <div
                                                className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
                                                <input className="form-check-input" type="checkbox" id="Eaten-switch1"
                                                       defaultChecked/>
                                                <label className="form-check-label" htmlFor="Eaten-switch1">Add to
                                                    Cart</label>
                                            </div>
                                            <div
                                                className="card-body d-flex align-items-center flex-column flex-md-row">
                                                <a href="product-detail">
                                                    <img className="w120 rounded img-fluid"
                                                         src="assets/images/product/product-1.jpg" alt=""/>
                                                </a>
                                                <div
                                                    className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                                    <a href="product-detail"><h6 className="mb-3 fw-bold">Oculus
                                                        VR <span className="text-muted small fw-light d-block">Reference 1204</span>
                                                    </h6></a>
                                                    <div
                                                        className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Special priceends</div>
                                                            <strong>20h:46m:30s</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Offer</div>
                                                            <strong>Bank Offer</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Price</div>
                                                            <strong>$149</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Ratings</div>
                                                            <strong><i className="icofont-star text-warning"/>4.5 <span
                                                                className="text-muted">(145)</span></strong>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                                                        <button type="button" className="btn btn-primary">Add Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 mb-1">
                                            <div
                                                className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
                                                <input className="form-check-input" type="checkbox" id="Eaten-switch2"/>
                                                <label className="form-check-label" htmlFor="Eaten-switch2">Add to
                                                    Cart</label>
                                            </div>
                                            <div
                                                className="card-body d-flex align-items-center flex-column flex-md-row">
                                                <a href="product-detail">
                                                    <img className="w120 rounded img-fluid"
                                                         src="assets/images/product/product-2.jpg" alt=""/>
                                                </a>
                                                <div
                                                    className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                                    <a href="product-detail"><h6 className="mb-3 fw-bold">Wall
                                                        Clock <span className="text-muted small fw-light d-block">Reference 1004</span>
                                                    </h6></a>
                                                    <div
                                                        className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Special priceends</div>
                                                            <strong>20h:46m:30s</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Offer</div>
                                                            <strong>Bank Offer</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Price</div>
                                                            <strong>$399</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Ratings</div>
                                                            <strong><i className="icofont-star text-warning"/>3.5 <span
                                                                className="text-muted">(77)</span></strong>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                                                        <button type="button" className="btn btn-primary">Add Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 mb-1">
                                            <div
                                                className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
                                                <input className="form-check-input" type="checkbox" id="Eaten-switch3"/>
                                                <label className="form-check-label" htmlFor="Eaten-switch3">Add to
                                                    Cart</label>
                                            </div>
                                            <div
                                                className="card-body d-flex align-items-center flex-column flex-md-row">
                                                <a href="product-detail">
                                                    <img className="w120 rounded img-fluid"
                                                         src="assets/images/product/product-3.jpg" alt=""/>
                                                </a>
                                                <div
                                                    className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                                    <a href="product-detail"><h6 className="mb-3 fw-bold">Note
                                                        Diaries <span className="text-muted small fw-light d-block">Reference 1224</span>
                                                    </h6></a>
                                                    <div
                                                        className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Special priceends</div>
                                                            <strong>20h:46m:30s</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Offer</div>
                                                            <strong>Bank Offer</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Price</div>
                                                            <strong>$49</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Ratings</div>
                                                            <strong><i className="icofont-star text-warning"/>3.5 <span
                                                                className="text-muted">(98)</span></strong>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                                                        <button type="button" className="btn btn-primary">Add Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 mb-1">
                                            <div
                                                className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
                                                <input className="form-check-input" type="checkbox" id="Eaten-switch4"/>
                                                <label className="form-check-label" htmlFor="Eaten-switch4">Add to
                                                    Cart</label>
                                            </div>
                                            <div
                                                className="card-body d-flex align-items-center flex-column flex-md-row">
                                                <a href="product-detail">
                                                    <img className="w120 rounded img-fluid"
                                                         src="assets/images/product/product-4.jpg" alt=""/>
                                                </a>
                                                <div
                                                    className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                                    <a href="product-detail"><h6 className="mb-3 fw-bold">Flower
                                                        Port <span className="text-muted small fw-light d-block">Reference 1414</span>
                                                    </h6></a>
                                                    <div
                                                        className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Special priceends</div>
                                                            <strong>18h:46m:30s</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Offer</div>
                                                            <strong>Bank Offer</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Price</div>
                                                            <strong>$199</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Ratings</div>
                                                            <strong><i className="icofont-star text-warning"/>4.5 <span
                                                                className="text-muted">(1455)</span></strong>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                                                        <button type="button" className="btn btn-primary">Add Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 mb-1">
                                            <div
                                                className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
                                                <input className="form-check-input" type="checkbox" id="Eaten-switch5"/>
                                                <label className="form-check-label" htmlFor="Eaten-switch5">Add to
                                                    Cart</label>
                                            </div>
                                            <div
                                                className="card-body d-flex align-items-center flex-column flex-md-row">
                                                <a href="product-detail">
                                                    <img className="w120 rounded img-fluid"
                                                         src="assets/images/product/product-5.jpg" alt=""/>
                                                </a>
                                                <div
                                                    className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                                    <a href="product-detail"><h6 className="mb-3 fw-bold">School
                                                        Bag <span className="text-muted small fw-light d-block">Reference 1000</span>
                                                    </h6></a>
                                                    <div
                                                        className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Special priceends</div>
                                                            <strong>03h:30m:30s</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Offer</div>
                                                            <strong>Bank Offer</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Price</div>
                                                            <strong>$99</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Ratings</div>
                                                            <strong><i className="icofont-star text-warning"/>4.5 <span
                                                                className="text-muted">(145)</span></strong>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                                                        <button type="button" className="btn btn-primary">Add Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 mb-1">
                                            <div
                                                className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
                                                <input className="form-check-input" type="checkbox" id="Eaten-switch6"/>
                                                <label className="form-check-label" htmlFor="Eaten-switch6">Add to
                                                    Cart</label>
                                            </div>
                                            <div
                                                className="card-body d-flex align-items-center flex-column flex-md-row">
                                                <a href="product-detail">
                                                    <img className="w120 rounded img-fluid"
                                                         src="assets/images/product/product-6.jpg" alt=""/>
                                                </a>
                                                <div
                                                    className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                                    <a href="product-detail"><h6 className="mb-3 fw-bold">Rado
                                                        Watch <span className="text-muted small fw-light d-block">Reference 9204</span>
                                                    </h6></a>
                                                    <div
                                                        className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Special priceends</div>
                                                            <strong>20h:46m:30s</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Offer</div>
                                                            <strong>Bank Offer</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Price</div>
                                                            <strong>$594</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Ratings</div>
                                                            <strong><i className="icofont-star text-warning"/>4.5 <span
                                                                className="text-muted">(1245)</span></strong>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                                                        <button type="button" className="btn btn-primary">Add Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 mb-1">
                                            <div
                                                className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
                                                <input className="form-check-input" type="checkbox" id="Eaten-switch7"/>
                                                <label className="form-check-label" htmlFor="Eaten-switch7">Add to
                                                    Cart</label>
                                            </div>
                                            <div
                                                className="card-body d-flex align-items-center flex-column flex-md-row">
                                                <a href="product-detail">
                                                    <img className="w120 rounded img-fluid"
                                                         src="assets/images/product/product-7.jpg" alt=""/>
                                                </a>
                                                <div
                                                    className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                                    <a href="product-detail"><h6 className="mb-3 fw-bold">Traveling
                                                        Bag <span className="text-muted small fw-light d-block">Reference 1155</span>
                                                    </h6></a>
                                                    <div
                                                        className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Special priceends</div>
                                                            <strong>20h:46m:30s</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Offer</div>
                                                            <strong>Bank Offer</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Price</div>
                                                            <strong>$49</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Ratings</div>
                                                            <strong><i className="icofont-star text-warning"/>4.5 <span
                                                                className="text-muted">(1045)</span></strong>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                                                        <button type="button" className="btn btn-primary">Add Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 mb-1">
                                            <div
                                                className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
                                                <input className="form-check-input" type="checkbox" id="Eaten-switch8"/>
                                                <label className="form-check-label" htmlFor="Eaten-switch8">Add to
                                                    Cart</label>
                                            </div>
                                            <div
                                                className="card-body d-flex align-items-center flex-column flex-md-row">
                                                <a href="product-detail">
                                                    <img className="w120 rounded img-fluid"
                                                         src="assets/images/product/product-4.jpg" alt=""/>
                                                </a>
                                                <div
                                                    className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                                    <a href="product-detail"><h6 className="mb-3 fw-bold">Flower
                                                        Port <span className="text-muted small fw-light d-block">Reference 1414</span>
                                                    </h6></a>
                                                    <div
                                                        className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Special priceends</div>
                                                            <strong>18h:46m:30s</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Offer</div>
                                                            <strong>Bank Offer</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Price</div>
                                                            <strong>$109</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Ratings</div>
                                                            <strong><i className="icofont-star text-warning"/>4.5 <span
                                                                className="text-muted">(1455)</span></strong>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                                                        <button type="button" className="btn btn-primary">Add Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 mb-1">
                                            <div
                                                className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
                                                <input className="form-check-input" type="checkbox" id="Eaten-switch9"/>
                                                <label className="form-check-label" htmlFor="Eaten-switch9">Add to
                                                    Cart</label>
                                            </div>
                                            <div
                                                className="card-body d-flex align-items-center flex-column flex-md-row">
                                                <a href="product-detail">
                                                    <img className="w120 rounded img-fluid"
                                                         src="assets/images/product/product-2.jpg" alt=""/>
                                                </a>
                                                <div
                                                    className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                                    <a href="product-detail"><h6 className="mb-3 fw-bold">Wall
                                                        Clock <span className="text-muted small fw-light d-block">Reference 1004</span>
                                                    </h6></a>
                                                    <div
                                                        className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Special priceends</div>
                                                            <strong>20h:46m:30s</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Offer</div>
                                                            <strong>Bank Offer</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Price</div>
                                                            <strong>$144</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Ratings</div>
                                                            <strong><i className="icofont-star text-warning"/>4.5 <span
                                                                className="text-muted">(77)</span></strong>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                                                        <button type="button" className="btn btn-primary">Add Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 mb-1">
                                            <div
                                                className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
                                                <input className="form-check-input" type="checkbox" id="Eaten-switch10"
                                                       defaultChecked/>
                                                <label className="form-check-label" htmlFor="Eaten-switch10">Add to
                                                    Cart</label>
                                            </div>
                                            <div
                                                className="card-body d-flex align-items-center flex-column flex-md-row">
                                                <a href="product-detail">
                                                    <img className="w120 rounded img-fluid"
                                                         src="assets/images/product/product-1.jpg" alt=""/>
                                                </a>
                                                <div
                                                    className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                                    <a href="product-detail"><h6 className="mb-3 fw-bold">Oculus
                                                        VR <span className="text-muted small fw-light d-block">Reference 1204</span>
                                                    </h6></a>
                                                    <div
                                                        className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Special priceends</div>
                                                            <strong>20h:46m:30s</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Offer</div>
                                                            <strong>Bank Offer</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Price</div>
                                                            <strong>$149</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Ratings</div>
                                                            <strong><i className="icofont-star text-warning"/>4.5 <span
                                                                className="text-muted">(145)</span></strong>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                                                        <button type="button" className="btn btn-primary">Add Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 mb-1">
                                            <div
                                                className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
                                                <input className="form-check-input" type="checkbox"
                                                       id="Eaten-switch11"/>
                                                <label className="form-check-label" htmlFor="Eaten-switch11">Add to
                                                    Cart</label>
                                            </div>
                                            <div
                                                className="card-body d-flex align-items-center flex-column flex-md-row">
                                                <a href="product-detail">
                                                    <img className="w120 rounded img-fluid"
                                                         src="assets/images/product/product-2.jpg" alt=""/>
                                                </a>
                                                <div
                                                    className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                                    <a href="product-detail"><h6 className="mb-3 fw-bold">Wall
                                                        Clock <span className="text-muted small fw-light d-block">Reference 1004</span>
                                                    </h6></a>
                                                    <div
                                                        className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Special priceends</div>
                                                            <strong>20h:46m:30s</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Offer</div>
                                                            <strong>Bank Offer</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Price</div>
                                                            <strong>$149</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Ratings</div>
                                                            <strong><i className="icofont-star text-warning"/>4.5 <span
                                                                className="text-muted">(77)</span></strong>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                                                        <button type="button" className="btn btn-primary">Add Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 mb-1">
                                            <div
                                                className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
                                                <input className="form-check-input" type="checkbox"
                                                       id="Eaten-switch12"/>
                                                <label className="form-check-label" htmlFor="Eaten-switch12">Add to
                                                    Cart</label>
                                            </div>
                                            <div
                                                className="card-body d-flex align-items-center flex-column flex-md-row">
                                                <a href="product-detail">
                                                    <img className="w120 rounded img-fluid"
                                                         src="assets/images/product/product-3.jpg" alt=""/>
                                                </a>
                                                <div
                                                    className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                                    <a href="product-detail"><h6 className="mb-3 fw-bold">Note
                                                        Diaries <span className="text-muted small fw-light d-block">Reference 1224</span>
                                                    </h6></a>
                                                    <div
                                                        className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Special priceends</div>
                                                            <strong>20h:46m:30s</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Offer</div>
                                                            <strong>Bank Offer</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Price</div>
                                                            <strong>$149</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Ratings</div>
                                                            <strong><i className="icofont-star text-warning"/>4.5 <span
                                                                className="text-muted">(98)</span></strong>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                                                        <button type="button" className="btn btn-primary">Add Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0">
                                            <div
                                                className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
                                                <input className="form-check-input" type="checkbox"
                                                       id="Eaten-switch13"/>
                                                <label className="form-check-label" htmlFor="Eaten-switch13">Add to
                                                    Cart</label>
                                            </div>
                                            <div
                                                className="card-body d-flex align-items-center flex-column flex-md-row">
                                                <a href="product-detail">
                                                    <img className="w120 rounded img-fluid"
                                                         src="assets/images/product/product-4.jpg" alt=""/>
                                                </a>
                                                <div
                                                    className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                                    <a href="product-detail"><h6 className="mb-3 fw-bold">Flower
                                                        Port <span className="text-muted small fw-light d-block">Reference 1414</span>
                                                    </h6></a>
                                                    <div
                                                        className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Special priceends</div>
                                                            <strong>18h:46m:30s</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Offer</div>
                                                            <strong>Bank Offer</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Price</div>
                                                            <strong>$149</strong>
                                                        </div>
                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                            <div className="text-muted small">Ratings</div>
                                                            <strong><i className="icofont-star text-warning"/>4.5 <span
                                                                className="text-muted">(1455)</span></strong>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                                                        <button type="button" className="btn btn-primary">Add Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-3 mb-3">
                                        <div className="col-md-12">
                                            <nav className="justify-content-end d-flex">
                                                <ul className="pagination">
                                                    <li className="page-item disabled">
                                                        <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a>
                                                    </li>
                                                    <li className="page-item active" aria-current="page">
                                                        <a className="page-link" href="#">2</a>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#">Next</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Row end  */}
                        </div>
                    </div>
                    {/* Modal Custom Settings*/}
                    <div className="modal fade right" id="Settingmodal" tabIndex={-1} aria-hidden="true">
                        <div className="modal-dialog  modal-sm">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Custom Settings</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"/>
                                </div>
                                <div className="modal-body custom_setting">
                                    {/* Settings: Color */}
                                    <div className="setting-theme pb-3">
                                        <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i
                                            className="icofont-color-bucket fs-4 me-2 text-primary"/>Template Color
                                            Settings</h6>
                                        <ul className="list-unstyled row row-cols-3 g-2 choose-skin mb-2 mt-2">
                                            <li data-theme="indigo">
                                                <div className="indigo"/>
                                            </li>
                                            <li data-theme="tradewind">
                                                <div className="tradewind"/>
                                            </li>
                                            <li data-theme="monalisa">
                                                <div className="monalisa"/>
                                            </li>
                                            <li data-theme="blue" className="active">
                                                <div className="blue"/>
                                            </li>
                                            <li data-theme="cyan">
                                                <div className="cyan"/>
                                            </li>
                                            <li data-theme="green">
                                                <div className="green"/>
                                            </li>
                                            <li data-theme="orange">
                                                <div className="orange"/>
                                            </li>
                                            <li data-theme="blush">
                                                <div className="blush"/>
                                            </li>
                                            <li data-theme="red">
                                                <div className="red"/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-gradient py-3">
                                        <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i
                                            className="icofont-paint fs-4 me-2 text-primary"/>Sidebar Gradient</h6>
                                        <div className="form-check form-switch gradient-switch pt-2 mb-2">
                                            <input className="form-check-input" type="checkbox" id="CheckGradient"/>
                                            <label className="form-check-label" htmlFor="CheckGradient">Enable Gradient!
                                                ( Sidebar )</label>
                                        </div>
                                    </div>
                                    {/* Settings: Template dynamics */}
                                    <div className="dynamic-block py-3">
                                        <ul className="list-unstyled choose-skin mb-2 mt-1">
                                            <li data-theme="dynamic">
                                                <div className="dynamic"><i className="icofont-paint me-2"/> Click to
                                                    Dyanmic Setting
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="dt-setting">
                                            <ul className="list-group list-unstyled mt-1">
                                                <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                    <label>Primary Color</label>
                                                    <button id="primaryColorPicker"
                                                            className="btn bg-primary avatar xs border-0 rounded-0"/>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                    <label>Secondary Color</label>
                                                    <button id="secondaryColorPicker"
                                                            className="btn bg-secondary avatar xs border-0 rounded-0"/>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                    <label className="text-muted">Chart Color 1</label>
                                                    <button id="chartColorPicker1"
                                                            className="btn chart-color1 avatar xs border-0 rounded-0"/>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                    <label className="text-muted">Chart Color 2</label>
                                                    <button id="chartColorPicker2"
                                                            className="btn chart-color2 avatar xs border-0 rounded-0"/>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                    <label className="text-muted">Chart Color 3</label>
                                                    <button id="chartColorPicker3"
                                                            className="btn chart-color3 avatar xs border-0 rounded-0"/>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                    <label className="text-muted">Chart Color 4</label>
                                                    <button id="chartColorPicker4"
                                                            className="btn chart-color4 avatar xs border-0 rounded-0"/>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                    <label className="text-muted">Chart Color 5</label>
                                                    <button id="chartColorPicker5"
                                                            className="btn chart-color5 avatar xs border-0 rounded-0"/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Settings: Font */}
                                    <div className="setting-font py-3">
                                        <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i
                                            className="icofont-font fs-4 me-2 text-primary"/> Font Settings</h6>
                                        <ul className="list-group font_setting mt-1">
                                            <li className="list-group-item py-1 px-2">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="radio" name="font"
                                                           id="font-poppins" defaultValue="font-poppins"/>
                                                    <label className="form-check-label" htmlFor="font-poppins">
                                                        Poppins Google Font
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="list-group-item py-1 px-2">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="radio" name="font"
                                                           id="font-opensans" defaultValue="font-opensans"
                                                           defaultChecked/>
                                                    <label className="form-check-label" htmlFor="font-opensans">
                                                        Open Sans Google Font
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="list-group-item py-1 px-2">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="radio" name="font"
                                                           id="font-montserrat" defaultValue="font-montserrat"/>
                                                    <label className="form-check-label" htmlFor="font-montserrat">
                                                        Montserrat Google Font
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="list-group-item py-1 px-2">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="radio" name="font"
                                                           id="font-mukta" defaultValue="font-mukta"/>
                                                    <label className="form-check-label" htmlFor="font-mukta">
                                                        Mukta Google Font
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Settings: Light/dark */}
                                    <div className="setting-mode py-3">
                                        <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i
                                            className="icofont-layout fs-4 me-2 text-primary"/>Contrast Layout</h6>
                                        <ul className="list-group list-unstyled mb-0 mt-1">
                                            <li className="list-group-item d-flex align-items-center py-1 px-2">
                                                <div className="form-check form-switch theme-switch mb-0">
                                                    <input className="form-check-input" type="checkbox"
                                                           id="theme-switch"/>
                                                    <label className="form-check-label" htmlFor="theme-switch">Enable
                                                        Dark Mode!</label>
                                                </div>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center py-1 px-2">
                                                <div className="form-check form-switch theme-high-contrast mb-0">
                                                    <input className="form-check-input" type="checkbox"
                                                           id="theme-high-contrast"/>
                                                    <label className="form-check-label" htmlFor="theme-high-contrast">Enable
                                                        High Contrast</label>
                                                </div>
                                            </li>
                                            <li className="list-group-item d-flex align-items-center py-1 px-2">
                                                <div className="form-check form-switch theme-rtl mb-0">
                                                    <input className="form-check-input" type="checkbox" id="theme-rtl"/>
                                                    <label className="form-check-label" htmlFor="theme-rtl">Enable RTL
                                                        Mode!</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="modal-footer justify-content-start">
                                    <button type="button" className="btn btn-white border lift"
                                            data-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-primary lift">Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;