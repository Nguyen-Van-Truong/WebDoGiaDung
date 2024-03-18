import React from 'react';
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";

const ProductEdit = () => {
    // Logic của component ở đây

    return (
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
                                    <h3 className="fw-bold mb-0">Products Edit</h3>
                                    <button type="submit"
                                            className="btn btn-primary btn-set-task w-sm-100 py-2 px-5 text-uppercase">Save
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Row end  */}
                        <div className="row g-3 mb-3">
                            <div className="col-xl-4 col-lg-4">
                                <div className="sticky-lg-top">
                                    <div className="card mb-3">
                                        <div
                                            className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                            <h6 className="m-0 fw-bold">Pricing Info</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="row g-3 align-items-center">
                                                <div className="col-md-12">
                                                    <label className="form-label">Product Price Old</label>
                                                    <input type="text" className="form-control" defaultValue="$350"/>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label">Product Price New</label>
                                                    <input type="text" className="form-control" defaultValue="$355"/>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label">Product Coupon</label>
                                                    <input type="text" className="form-control"
                                                           defaultValue="BATTT-XA47"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div
                                            className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                            <h6 className="m-0 fw-bold">Visibility Status</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="couponsstatus"
                                                       defaultChecked/>
                                                <label className="form-check-label">
                                                    Published
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="couponsstatus"/>
                                                <label className="form-check-label">
                                                    Scheduled
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="couponsstatus"/>
                                                <label className="form-check-label">
                                                    Hidden
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div
                                            className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                            <h6 className="m-0 fw-bold">Size</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue
                                                       id="sizechek1"/>
                                                <label className="form-check-label" htmlFor="sizechek1">
                                                    XS
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue
                                                       id="sizechek2"/>
                                                <label className="form-check-label" htmlFor="sizechek2">
                                                    S
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue
                                                       id="sizechek3"/>
                                                <label className="form-check-label" htmlFor="sizechek3">
                                                    M
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue
                                                       id="sizechek4"/>
                                                <label className="form-check-label" htmlFor="sizechek4">
                                                    L
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue
                                                       id="sizechek5" defaultChecked/>
                                                <label className="form-check-label" htmlFor="sizechek5">
                                                    XL
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div
                                            className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                            <h6 className="m-0 fw-bold">Publish Schedule</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="row g-3 align-items-center">
                                                <div className="col-md-12">
                                                    <label className="form-label">Publish Date</label>
                                                    <input type="date" className="form-control w-100"
                                                           defaultValue="2021-03-28"/>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label">Publish Time</label>
                                                    <input type="time" className="form-control w-100"
                                                           defaultValue="10:30"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div
                                            className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                            <h6 className="m-0 fw-bold">Tags</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group demo-tagsinput-area">
                                                <div className="form-line">
                                                    <input type="text" className="form-control" data-role="tagsinput"
                                                           defaultValue="Amsterdam,Washington,Sydney,Beijing,Cairo"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div
                                            className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                            <h6 className="m-0 fw-bold">Categories</h6>
                                        </div>
                                        <div className="card-body">
                                            <label className="form-label">Categories Select</label>
                                            <select className="form-select" size={3} aria-label="size 3 select example">
                                                <option selected>Gaming accessories</option>
                                                <option value={1}>Watch</option>
                                                <option value={2}>Clothes</option>
                                                <option value={3}>Toy</option>
                                                <option value={4}>Cosmetic</option>
                                                <option value={5}>Laptop</option>
                                                <option value={6}>Mobile</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div
                                            className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                            <h6 className="m-0 fw-bold">Inventory Info</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="row g-3 align-items-center">
                                                <div className="col-md-12">
                                                    <label className="form-label">SKU</label>
                                                    <input type="text" className="form-control" defaultValue="SKUN111"/>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label">Total Stock Quantity</label>
                                                    <input type="text" className="form-control" defaultValue={1455}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="card mb-3">
                                    <div
                                        className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                        <h6 className="mb-0 fw-bold ">Basic information</h6>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-md-6">
                                                    <label className="form-label">Name</label>
                                                    <input type="text" className="form-control"
                                                           defaultValue="Oculus VR"/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Page Title</label>
                                                    <input type="text" className="form-control"
                                                           defaultValue="Gaming VR"/>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label">Product Identifier URL</label>
                                                    <div className="input-group mb-3">
                                                        <span className="input-group-text">https://eBazar.com</span>
                                                        <input type="text" className="form-control"
                                                               defaultValue="/product/Fossilsmart"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label">Product Description</label>
                                                    <div id="editor">
                                                        <p>This is some sample content.</p>
                                                        <ul>
                                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                elit.
                                                            </li>
                                                            <li>Integer vitae leo quis urna pulvinar tristique..</li>
                                                            <li>In porttitor sem at ligula vehicula, at scelerisque
                                                                lectus placerat.
                                                            </li>
                                                            <li>Nullam ornare risus ac tellus ullamcorper rhoncus.</li>
                                                            <li>Nam dictum neque et velit fermentum blandit.</li>
                                                            <li>Vivamus congue metus sit amet sapien pulvinar
                                                                tincidunt.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div
                                        className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                        <h6 className="mb-0 fw-bold ">Shipping Country</h6>
                                    </div>
                                    <div className="card-body">
                                        <select id="optgroup" className="ms w-100" multiple="multiple">
                                            <optgroup label="Alaskan/Hawaiian Time Zone">
                                                <option value="AK">Alaska</option>
                                                <option value="HI">Hawaii</option>
                                            </optgroup>
                                            <optgroup label="Pacific Time Zone">
                                                <option value="CA">California</option>
                                                <option value="NV">Nevada</option>
                                                <option value="OR">Oregon</option>
                                                <option value="WA">Washington</option>
                                            </optgroup>
                                            <optgroup label="Mountain Time Zone">
                                                <option value="AZ">Arizona</option>
                                                <option value="CO">Colorado</option>
                                                <option value="ID">Idaho</option>
                                                <option value="MT">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="UT">Utah</option>
                                                <option value="WY">Wyoming</option>
                                            </optgroup>
                                            <optgroup label="Central Time Zone">
                                                <option value="AL">Alabama</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IA">Iowa</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MO">Missouri</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TX">Texas</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="WI">Wisconsin</option>
                                            </optgroup>
                                            <optgroup label="Eastern Time Zone">
                                                <option value="CT">Connecticut</option>
                                                <option value="DE">Delaware</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="IN">Indiana</option>
                                                <option value="ME">Maine</option>
                                                <option value="MD">Maryland</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MI">Michigan</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NY">New York</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="OH">Ohio</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WV">West Virginia</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div
                                        className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                        <h6 className="mb-0 fw-bold ">Images</h6>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-md-12">
                                                    <label className="form-label">Product Images Upload</label>
                                                    <small className="d-block text-muted mb-2">Only portrait or square
                                                        images, 2M max and 2000px max-height.</small>
                                                    <input type="file" id="input-file-to-destroy" className="dropify"
                                                           data-allowed-formats="portrait square"
                                                           data-max-file-size="2M" data-max-height={2000}
                                                           data-default-file="./assets/images/product/product-1.jpg"/>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label w-100">Select Product Color</label>
                                                    <input type="color" id="color"/>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="product-cart">
                                                        <div className="checkout-table table-responsive">
                                                            <table id="myCartTable"
                                                                   className="table display dataTable table-hover align-middle"
                                                                   style={{width: '100%'}}>
                                                                <thead>
                                                                <tr>
                                                                    <th className="product">Product</th>
                                                                    <th className="product">Product Tag Name</th>
                                                                    <th className="quantity">Color</th>
                                                                    <th className="quantity">Quantity</th>
                                                                    <th className="quantity">Action</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div
                                                                            className="product-cart d-flex align-items-center">
                                                                            <div className="product-thumb">
                                                                                <img
                                                                                    src="assets/images/product/thunb-2.jpg"
                                                                                    className="img-fluid avatar xl"
                                                                                    alt="Product"/>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control"
                                                                               defaultValue="Oculus VR back"/>
                                                                    </td>
                                                                    <td>
                                                                        <input type="color" className="form-control"
                                                                               defaultValue="#cccccc"/>
                                                                    </td>
                                                                    <td>
                                                                        <div className="product-quantity d-inline-flex">
                                                                            <input type="number" defaultValue={1}/>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="btn-group" role="group"
                                                                             aria-label="Basic outlined example">
                                                                            <button type="button"
                                                                                    className="btn btn-outline-secondary deleterow">
                                                                                <i className="icofont-ui-delete text-danger"/>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div
                                                                            className="product-cart d-flex align-items-center">
                                                                            <div className="product-thumb">
                                                                                <img
                                                                                    src="assets/images/product/thunb-3.jpg"
                                                                                    className="img-fluid avatar xl"
                                                                                    alt="Product"/>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control"
                                                                               defaultValue="Oculus VR right"/>
                                                                    </td>
                                                                    <td>
                                                                        <input type="color" className="form-control"
                                                                               defaultValue="#426531"/>
                                                                    </td>
                                                                    <td>
                                                                        <div className="product-quantity d-inline-flex">
                                                                            <input type="number" defaultValue={1}/>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="btn-group" role="group"
                                                                             aria-label="Basic outlined example">
                                                                            <button type="button"
                                                                                    className="btn btn-outline-secondary deleterow">
                                                                                <i className="icofont-ui-delete text-danger"/>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div
                                                                            className="product-cart d-flex align-items-center">
                                                                            <div className="product-thumb">
                                                                                <img
                                                                                    src="assets/images/product/thunb-4.jpg"
                                                                                    className="img-fluid avatar xl"
                                                                                    alt="Product"/>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control"
                                                                               defaultValue="Oculus VR left"/>
                                                                    </td>
                                                                    <td>
                                                                        <input type="color" className="form-control"
                                                                               defaultValue="#547681"/>
                                                                    </td>
                                                                    <td>
                                                                        <div className="product-quantity d-inline-flex">
                                                                            <input type="number" defaultValue={1}/>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="btn-group" role="group"
                                                                             aria-label="Basic outlined example">
                                                                            <button type="button"
                                                                                    className="btn btn-outline-secondary deleterow">
                                                                                <i className="icofont-ui-delete text-danger"/>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div
                                                                            className="product-cart d-flex align-items-center">
                                                                            <div className="product-thumb">
                                                                                <img
                                                                                    src="assets/images/product/thunb-5.jpg"
                                                                                    className="img-fluid avatar xl"
                                                                                    alt="Product"/>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control"
                                                                               defaultValue="Oculus VR Front"/>
                                                                    </td>
                                                                    <td>
                                                                        <input type="color" className="form-control"
                                                                               defaultValue="#45df81"/>
                                                                    </td>
                                                                    <td>
                                                                        <div className="product-quantity d-inline-flex">
                                                                            <input type="number" defaultValue={1}/>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="btn-group" role="group"
                                                                             aria-label="Basic outlined example">
                                                                            <button type="button"
                                                                                    className="btn btn-outline-secondary deleterow">
                                                                                <i className="icofont-ui-delete text-danger"/>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header py-3 bg-transparent border-bottom-0">
                                        <h6 className="m-0 fw-bold">Cropped Images</h6>
                                        <small>If You Cropped Images Please Upload and croppd easily.</small>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-3 mb-3">
                                            <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                <div className="img-container">
                                                    <img id="image" src="./assets/images/product/product-1.jpg"
                                                         className="img-responsive" alt="Picture"/>
                                                </div>
                                            </div>
                                            <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                <div className="docs-preview clearfix">
                                                    <div className="img-preview preview-lg"/>
                                                    <div className="img-preview preview-md"/>
                                                    <div className="img-preview preview-sm"/>
                                                    <div className="img-preview preview-xs"/>
                                                </div>
                                                <div className="docs-data">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">X</span>
                                                        </div>
                                                        <input type="text" className="form-control" id="dataX"
                                                               placeholder="x"/>
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">PX</span>
                                                        </div>
                                                    </div>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">Y</span>
                                                        </div>
                                                        <input type="text" className="form-control" id="dataY"
                                                               placeholder="y"/>
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">PX</span>
                                                        </div>
                                                    </div>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">Width</span>
                                                        </div>
                                                        <input type="text" className="form-control" id="dataWidth"
                                                               placeholder="width"/>
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">PX</span>
                                                        </div>
                                                    </div>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">Height</span>
                                                        </div>
                                                        <input type="text" className="form-control" id="dataHeight"
                                                               placeholder="height"/>
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">PX</span>
                                                        </div>
                                                    </div>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">Rotate</span>
                                                        </div>
                                                        <input type="text" className="form-control" id="dataRotate"
                                                               placeholder="rotate"/>
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">Deg</span>
                                                        </div>
                                                    </div>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">ScaleX</span>
                                                        </div>
                                                        <input type="text" className="form-control" id="dataScaleX"
                                                               placeholder="scaleX"/>
                                                    </div>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">ScaleY</span>
                                                        </div>
                                                        <input type="text" className="form-control" id="dataScaleY"
                                                               placeholder="scaleY"/>
                                                    </div>
                                                    {/* /.pixels of image */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Row end  */}
                                        <div className="row g-3">
                                            <div className="col-lg-7 col-md-12 docs-buttons">
                                                {/* .btn groups */}
                                                <button type="button" className="btn btn-sm btn-info"
                                                        data-method="setDragMode" data-option="move" title="Move"><span
                                                    className="docs-tooltip" data-toggle="tooltip"
                                                    title="$().cropper(&quot;setDragMode&quot;, &quot;move&quot;)"> <i
                                                    className="icofont-drag1"/> </span></button>
                                                <button type="button" className="btn btn-sm btn-info"
                                                        data-method="setDragMode" data-option="crop" title="Crop"><span
                                                    className="docs-tooltip" data-toggle="tooltip"
                                                    title="$().cropper(&quot;setDragMode&quot;, &quot;crop&quot;)"> <i
                                                    className="icofont-crop"/> </span></button>
                                                <button type="button" className="btn btn-sm btn-success"
                                                        data-method="zoom" data-option="0.1" title="Zoom In"><span
                                                    className="docs-tooltip" data-toggle="tooltip"
                                                    title="$().cropper(&quot;zoom&quot;, 0.1)"> <i
                                                    className="icofont-ui-zoom-in"/> </span></button>
                                                <button type="button" className="btn btn-sm btn-success"
                                                        data-method="zoom" data-option="-0.1" title="Zoom Out"><span
                                                    className="docs-tooltip" data-toggle="tooltip"
                                                    title="$().cropper(&quot;zoom&quot;, -0.1)"> <i
                                                    className="icofont-ui-zoom-out"/> </span></button>
                                                <button type="button" className="btn btn-sm btn-secondary"
                                                        data-method="move" data-option={-10} data-second-option={0}
                                                        title="Move Left"><span className="docs-tooltip"
                                                                                data-toggle="tooltip"
                                                                                title="$().cropper(&quot;move&quot;, -10, 0)"> <i
                                                    className="icofont-circled-left"/></span></button>
                                                <button type="button" className="btn btn-sm btn-secondary"
                                                        data-method="move" data-option={10} data-second-option={0}
                                                        title="Move Right"><span className="docs-tooltip"
                                                                                 data-toggle="tooltip"
                                                                                 title="$().cropper(&quot;move&quot;, 10, 0)"> <i
                                                    className="icofont-circled-right"/> </span></button>
                                                <button type="button" className="btn btn-sm btn-secondary"
                                                        data-method="move" data-option={0} data-second-option={-10}
                                                        title="Move Up"><span className="docs-tooltip"
                                                                              data-toggle="tooltip"
                                                                              title="$().cropper(&quot;move&quot;, 0, -10)"> <i
                                                    className="icofont-circled-up"/> </span></button>
                                                <button type="button" className="btn btn-sm btn-secondary"
                                                        data-method="move" data-option={0} data-second-option={10}
                                                        title="Move Down"><span className="docs-tooltip"
                                                                                data-toggle="tooltip"
                                                                                title="$().cropper(&quot;move&quot;, 0, 10)"> <i
                                                    className="icofont-circled-down"/></span></button>
                                                <button type="button" className="btn btn-sm btn-secondary"
                                                        data-method="rotate" data-option={-45} title="Rotate Left"><span
                                                    className="docs-tooltip" data-toggle="tooltip"
                                                    title="$().cropper(&quot;rotate&quot;, -45)"> <i
                                                    className="icofont-rotation"/> </span></button>
                                                <button type="button" className="btn btn-sm btn-secondary"
                                                        data-method="rotate" data-option={45} title="Rotate Right"><span
                                                    className="docs-tooltip" data-toggle="tooltip"
                                                    title="$().cropper(&quot;rotate&quot;, 45)"> <i
                                                    className="icofont-rotation"/> </span></button>
                                                <button type="button" className="btn btn-sm btn-secondary"
                                                        data-method="scaleX" data-option={-1} title="Flip Horizontal">
                                                    <span className="docs-tooltip" data-toggle="tooltip"
                                                          title="$().cropper(&quot;scaleX&quot;, -1)"> <i
                                                        className="icofont-exchange"/> </span></button>
                                                <button type="button" className="btn btn-sm btn-secondary"
                                                        data-method="scaleY" data-option={-1} title="Flip Vertical">
                                                    <span className="docs-tooltip" data-toggle="tooltip"
                                                          title="$().cropper(&quot;scaleY&quot;, -1)"> <i
                                                        className="icofont-expand-alt"/> </span></button>
                                                <button type="button" className="btn btn-sm btn-secondary"
                                                        data-method="crop" title="Crop"><span className="docs-tooltip"
                                                                                              data-toggle="tooltip"
                                                                                              title="$().cropper(&quot;crop&quot;)"> <i
                                                    className="icofont-checked"/> </span></button>
                                                <button type="button" className="btn btn-sm btn-secondary"
                                                        data-method="clear" title="Clear"><span className="docs-tooltip"
                                                                                                data-toggle="tooltip"
                                                                                                title="$().cropper(&quot;clear&quot;)"> <i
                                                    className="icofont-ui-delete"/> </span></button>
                                                <button type="button" className="btn btn-sm btn-secondary"
                                                        data-method="disable" title="Disable"><span
                                                    className="docs-tooltip" data-toggle="tooltip"
                                                    title="$().cropper(&quot;disable&quot;)"> <i
                                                    className="icofont-lock"/> </span></button>
                                                <button type="button" className="btn btn-sm btn-secondary"
                                                        data-method="enable" title="Enable"><span
                                                    className="docs-tooltip" data-toggle="tooltip"
                                                    title="$().cropper(&quot;enable&quot;)"> <i
                                                    className="icofont-unlock"/> </span></button>
                                                <button type="button" className="btn btn-sm btn-secondary"
                                                        data-method="reset" title="Reset"><span className="docs-tooltip"
                                                                                                data-toggle="tooltip"
                                                                                                title="$().cropper(&quot;reset&quot;)"> <i
                                                    className="icofont-refresh"/> </span></button>
                                                <label className="btn btn-sm btn-secondary btn-upload"
                                                       htmlFor="inputImage" title="Upload image file">
                                                    <input type="file" className="sr-only" id="inputImage" name="file"
                                                           accept="image/*"/>
                                                    <span className="docs-tooltip" data-toggle="tooltip"
                                                          title="Import image with Blob URLs"> <i
                                                        className="icofont-upload"/> </span>
                                                </label>
                                                <button type="button" className="btn btn-sm  btn-secondary"
                                                        data-method="destroy" title="Destroy"><span
                                                    className="docs-tooltip" data-toggle="tooltip"
                                                    title="$().cropper(&quot;destroy&quot;)"> <i
                                                    className="icofont-power"/> </span></button>
                                                <button type="button" className="btn btn-sm btn-danger"
                                                        data-method="getCroppedCanvas" data-bs-toggle="modal"
                                                        data-bs-target="#getCroppedCanvasModal"><span
                                                    className="docs-tooltip" data-toggle="tooltip"
                                                    title="$().cropper(&quot;getCroppedCanvas&quot;)"> Get Cropped Canvas </span>
                                                </button>
                                                <button type="button" className="btn btn-sm btn-danger"
                                                        data-method="getCroppedCanvas" data-bs-toggle="modal"
                                                        data-bs-target="#getCroppedCanvasModal"
                                                        data-option="{ &quot;width&quot;: 160, &quot;height&quot;: 90 }">
                                                    <span className="docs-tooltip" data-toggle="tooltip"
                                                          title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 160, height: 90 })"> 160×90 </span>
                                                </button>
                                                <button type="button" className="btn btn-sm btn-danger"
                                                        data-method="getCroppedCanvas" data-bs-toggle="modal"
                                                        data-bs-target="#getCroppedCanvasModal"
                                                        data-option="{ &quot;width&quot;: 320, &quot;height&quot;: 180 }">
                                                    <span className="docs-tooltip" data-toggle="tooltip"
                                                          title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 320, height: 180 })"> 320×180 </span>
                                                </button>
                                                <button type="button" className="btn btn-secondary"
                                                        data-method="getData" data-option data-target="#putData"><span
                                                    className="docs-tooltip" data-toggle="tooltip"
                                                    title="$().cropper(&quot;getData&quot;)"> Get Data </span></button>
                                                <button type="button" className="btn btn-secondary"
                                                        data-method="setData" data-target="#putData"><span
                                                    className="docs-tooltip" data-toggle="tooltip"
                                                    title="$().cropper(&quot;setData&quot;, data)"> Set Data </span>
                                                </button>
                                                <button type="button" className="btn btn-secondary"
                                                        data-method="getContainerData" data-option
                                                        data-target="#putData"><span className="docs-tooltip"
                                                                                     data-toggle="tooltip"
                                                                                     title="$().cropper(&quot;getContainerData&quot;)"> Get Container Data </span>
                                                </button>
                                                <button type="button" className="btn btn-secondary"
                                                        data-method="getImageData" data-option data-target="#putData">
                                                    <span className="docs-tooltip" data-toggle="tooltip"
                                                          title="$().cropper(&quot;getImageData&quot;)"> Get Image Data </span>
                                                </button>
                                                <button type="button" className="btn btn-secondary"
                                                        data-method="getCanvasData" data-option data-target="#putData">
                                                    <span className="docs-tooltip" data-toggle="tooltip"
                                                          title="$().cropper(&quot;getCanvasData&quot;)"> Get Canvas Data </span>
                                                </button>
                                                <button type="button" className="btn btn-secondary"
                                                        data-method="setCanvasData" data-target="#putData"><span
                                                    className="docs-tooltip" data-toggle="tooltip"
                                                    title="$().cropper(&quot;setCanvasData&quot;, data)"> Set Canvas Data </span>
                                                </button>
                                                <button type="button" className="btn btn-secondary"
                                                        data-method="getCropBoxData" data-option data-target="#putData">
                                                    <span className="docs-tooltip" data-toggle="tooltip"
                                                          title="$().cropper(&quot;getCropBoxData&quot;)"> Get Crop Box Data </span>
                                                </button>
                                                <button type="button" className="btn btn-secondary"
                                                        data-method="setCropBoxData" data-target="#putData"><span
                                                    className="docs-tooltip" data-toggle="tooltip"
                                                    title="$().cropper(&quot;setCropBoxData&quot;, data)"> Set Crop Box Data </span>
                                                </button>
                                                <button type="button" className="btn btn-secondary" data-method="moveTo"
                                                        data-option={0}><span className="docs-tooltip"
                                                                              data-toggle="tooltip"
                                                                              title="cropper.moveTo(0)"> 0,0 </span>
                                                </button>
                                                <button type="button" className="btn btn-secondary" data-method="zoomTo"
                                                        data-option={1}><span className="docs-tooltip"
                                                                              data-toggle="tooltip"
                                                                              title="cropper.zoomTo(1)"> 100% </span>
                                                </button>
                                                <button type="button" className="btn btn-secondary"
                                                        data-method="rotateTo" data-option={180}><span
                                                    className="docs-tooltip" data-toggle="tooltip"
                                                    title="cropper.rotateTo(180)"> 180° </span></button>
                                                <input type="text" className="form-control" id="putData"
                                                       placeholder="Get data to here or set data with this value"/>
                                            </div>
                                            <div className="col-lg-5 col-md-12 docs-toggles">
                                                {/* .btn groups */}
                                                <div className="btn-group btn-group-justified" data-toggle="buttons">
                                                    <label className="btn btn-secondary active">
                                                        <input type="radio" className="sr-only" id="aspectRatio0"
                                                               name="aspectRatio" defaultValue="1.7777777777777777"/>
                                                        <span className="docs-tooltip" data-toggle="tooltip"
                                                              title="aspectRatio: 16 / 9"> 16:9 </span> </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" className="sr-only" id="aspectRatio1"
                                                               name="aspectRatio" defaultValue="1.3333333333333333"/>
                                                        <span className="docs-tooltip" data-toggle="tooltip"
                                                              title="aspectRatio: 4 / 3"> 4:3 </span> </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" className="sr-only" id="aspectRatio2"
                                                               name="aspectRatio" defaultValue={1}/>
                                                        <span className="docs-tooltip" data-toggle="tooltip"
                                                              title="aspectRatio: 1 / 1"> 1:1 </span> </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" className="sr-only" id="aspectRatio3"
                                                               name="aspectRatio" defaultValue="0.6666666666666666"/>
                                                        <span className="docs-tooltip" data-toggle="tooltip"
                                                              title="aspectRatio: 2 / 3"> 2:3 </span> </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" className="sr-only" id="aspectRatio4"
                                                               name="aspectRatio" defaultValue="NaN"/>
                                                        <span className="docs-tooltip" data-toggle="tooltip"
                                                              title="aspectRatio: NaN"> Free </span> </label>
                                                </div>
                                                <div className="btn-group btn-group-justified" data-toggle="buttons">
                                                    <label className="btn btn-secondary active">
                                                        <input type="radio" className="sr-only" id="viewMode0"
                                                               name="viewMode" defaultValue={0} defaultChecked/>
                                                        <span className="docs-tooltip" data-toggle="tooltip"
                                                              title="View Mode 0"> VM0 </span> </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" className="sr-only" id="viewMode1"
                                                               name="viewMode" defaultValue={1}/>
                                                        <span className="docs-tooltip" data-toggle="tooltip"
                                                              title="View Mode 1"> VM1 </span> </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" className="sr-only" id="viewMode2"
                                                               name="viewMode" defaultValue={2}/>
                                                        <span className="docs-tooltip" data-toggle="tooltip"
                                                              title="View Mode 2"> VM2 </span> </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" className="sr-only" id="viewMode3"
                                                               name="viewMode" defaultValue={3}/>
                                                        <span className="docs-tooltip" data-toggle="tooltip"
                                                              title="View Mode 3"> VM3 </span> </label>
                                                </div>
                                                <div className="dropdown dropup docs-options">
                                                    <button type="button"
                                                            className="btn btn-success btn-block dropdown-toggle"
                                                            id="toggleOptions" data-bs-toggle="dropdown"
                                                            aria-expanded="true"> Toggle Options <span
                                                        className="caret"/></button>
                                                    <ul className="dropdown-menu" aria-labelledby="toggleOptions"
                                                        role="menu">
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="responsive"
                                                                       defaultChecked/> responsive </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="restore"
                                                                       defaultChecked/> restore </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="checkCrossOrigin"
                                                                       defaultChecked/> checkCrossOrigin </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="checkOrientation"
                                                                       defaultChecked/> checkOrientation </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="modal"
                                                                       defaultChecked/> modal </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="guides"
                                                                       defaultChecked/> guides </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="center"
                                                                       defaultChecked/> center </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="highlight"
                                                                       defaultChecked/> highlight </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="background"
                                                                       defaultChecked/> background </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="autoCrop"
                                                                       defaultChecked/> autoCrop </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="movable"
                                                                       defaultChecked/> movable </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="rotatable"
                                                                       defaultChecked/> rotatable </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="scalable"
                                                                       defaultChecked/> scalable </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="zoomable"
                                                                       defaultChecked/> zoomable </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="zoomOnTouch"
                                                                       defaultChecked/> zoomOnTouch </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="zoomOnWheel"
                                                                       defaultChecked/> zoomOnWheel </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="cropBoxMovable"
                                                                       defaultChecked/> cropBoxMovable </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="cropBoxResizable"
                                                                       defaultChecked/> cropBoxResizable </label>
                                                        </li>
                                                        <li role="presentation">
                                                            <label className="checkbox-inline">
                                                                <input type="checkbox" name="toggleDragModeOnDblclick"
                                                                       defaultChecked/> toggleDragModeOnDblclick
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Row end  */}
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
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body custom_setting">
                                {/* Settings: Color */}
                                <div className="setting-theme pb-3">
                                    <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i
                                        className="icofont-color-bucket fs-4 me-2 text-primary"/>Template Color Settings
                                    </h6>
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
                                        <label className="form-check-label" htmlFor="CheckGradient">Enable Gradient! (
                                            Sidebar )</label>
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
                                                       id="font-opensans" defaultValue="font-opensans" defaultChecked/>
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
                                                <input className="form-check-input" type="checkbox" id="theme-switch"/>
                                                <label className="form-check-label" htmlFor="theme-switch">Enable Dark
                                                    Mode!</label>
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
                                <button type="button" className="btn btn-white border lift" data-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary lift">Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Cropper*/}
                <div className="modal docs-cropped" id="getCroppedCanvasModal" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Cropped</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body"/>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-white border lift"
                                        data-bs-dismiss="modal">Close
                                </button>
                                <a className="btn btn-primary" id="download" href="javascript:void(0);"
                                   download="cropped.jpg">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductEdit;