import React from 'react';
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Pagination from "./component/Index/Pagination";

const CustomerDetail = () => {
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
                                    <h3 className="fw-bold mb-0">Customer Detail</h3>
                                </div>
                            </div>
                        </div>
                        {/* Row end  */}
                        <div className="row g-3 mb-xl-3">
                            <div className="col-xxl-4 col-xl-12 col-lg-12 col-md-12">
                                <div
                                    className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-1 row-deck g-3">
                                    <div className="col">
                                        <div className="card profile-card">
                                            <div
                                                className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                <h6 className="mb-0 fw-bold ">Profile</h6>
                                            </div>
                                            <div className="card-body d-flex profile-fulldeatil flex-column">
                                                <div className="profile-block text-center w220 mx-auto">
                                                    <a href="#">
                                                        <img src="assets/images/lg/avatar4.svg" alt=""
                                                             className="avatar xl rounded img-thumbnail shadow-sm"/>
                                                    </a>
                                                    <div
                                                        className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                                                        <span className="text-muted small">ID : #CS-00002</span>
                                                    </div>
                                                </div>
                                                <div className="profile-info w-100">
                                                    <h6 className="mb-0 mt-2  fw-bold d-block fs-6 text-center"> Joan
                                                        Dyer</h6>
                                                    <span
                                                        className="py-1 fw-bold small-11 mb-0 mt-1 text-muted text-center mx-auto d-block">24 years, California</span>
                                                    <p className="mt-2">Duis felis ligula, pharetra at nisl sit amet,
                                                        ullamcorper fringilla mi. Cras luctus metus non enim porttitor
                                                        sagittis. Sed tristique scelerisque arcu id dignissim.</p>
                                                    <div className="row g-2 pt-2">
                                                        <div className="col-xl-12">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-touch-phone"/>
                                                                <span className="ms-2">202-555-0174 </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-email"/>
                                                                <span className="ms-2">adrianallan@gmail.com</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-birthday-cake"/>
                                                                <span className="ms-2">19/03/1980</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-address-book"/>
                                                                <span className="ms-2">2734  West Fork Street,EASTON 02334.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div
                                                className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                <h6 className="mb-0 fw-bold ">Expence Count</h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="d-flex justify-content-end text-center">
                                                    <div className="p-2">
                                                        <h6 className="mb-0 fw-bold">$1790</h6>
                                                        <span className="text-muted">Total</span>
                                                    </div>
                                                    <div className="p-2 ms-4">
                                                        <h6 className="mb-0 fw-bold">$149.16</h6>
                                                        <span className="text-muted">Avg Month</span>
                                                    </div>
                                                </div>
                                                <div id="apex-circle-gradient"/>
                                                <div className="row">
                                                    <div className="col">
                                                        <span className="mb-3 d-block">Food</span>
                                                        <div className="progress-bar  bg-secondary" role="progressbar"
                                                             style={{width: '55%', height: '5px'}}/>
                                                        <span className="mt-2 d-block text-secondary">$597 spend</span>
                                                    </div>
                                                    <div className="col">
                                                        <span className="mb-3 d-block">Cloth</span>
                                                        <div className="progress-bar  bg-primary" role="progressbar"
                                                             style={{width: '60%', height: '5px'}}/>
                                                        <span className="mt-2 d-block text-primary">$845 spend</span>
                                                    </div>
                                                    <div className="col">
                                                        <span className="mb-3 d-block">Other</span>
                                                        <div className="progress-bar  bg-lavender-purple"
                                                             role="progressbar" style={{width: '70%', height: '5px'}}/>
                                                        <span
                                                            className="mt-2 d-block color-lavender-purple">$348 spend</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-3">
                                    <div
                                        className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                        <h6 className="mb-0 fw-bold ">Status report</h6>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-4">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h6 className="mb-0">54</h6>
                                                    <span className="small text-muted">Product Visit</span>
                                                </div>
                                                <div className="progress" style={{height: '2px'}}>
                                                    <div className="progress-bar bg-success" role="progressbar"
                                                         aria-valuemin={0} aria-valuemax={100} aria-valuenow={87}
                                                         data-transitiongoal={87} style={{width: '87%'}}/>
                                                </div>
                                            </li>
                                            <li className="mb-4">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h6 className="mb-0">27</h6>
                                                    <span className="small text-muted">Product Buy</span>
                                                </div>
                                                <div className="progress" style={{height: '2px'}}>
                                                    <div className="progress-bar bg-info" role="progressbar"
                                                         aria-valuemin={0} aria-valuemax={100} aria-valuenow={34}
                                                         data-transitiongoal={34} style={{width: '34%'}}/>
                                                </div>
                                            </li>
                                            <li className="mb-4">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h6 className="mb-0">102</h6>
                                                    <span className="small text-muted">Comment on Product</span>
                                                </div>
                                                <div className="progress" style={{height: '2px'}}>
                                                    <div className="progress-bar bg-primary" role="progressbar"
                                                         aria-valuemin={0} aria-valuemax={100} aria-valuenow={14}
                                                         data-transitiongoal={14} style={{width: '14%'}}/>
                                                </div>
                                            </li>
                                            <li className="mb-0">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h6 className="mb-0">1024 Hours</h6>
                                                    <span className="small text-muted">Total spent time</span>
                                                </div>
                                                <div className="progress" style={{height: '2px'}}>
                                                    <div className="progress-bar bg-danger" role="progressbar"
                                                         aria-valuemin={0} aria-valuemax={100} aria-valuenow={67}
                                                         data-transitiongoal={67} style={{width: '67%'}}/>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-8 col-xl-12 col-lg-12 col-md-12">
                                <div className="row g-3 mb-3 row-cols-1 row-cols-md-1 row-cols-lg-2 row-deck">
                                    <div className="col">
                                        <div className="card auth-detailblock">
                                            <div
                                                className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                <h6 className="mb-0 fw-bold ">Delivery Address</h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <label className="form-label col-6 col-sm-5">Block
                                                            Number:</label>
                                                        <span><strong>A-510</strong></span>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label col-6 col-sm-5">Address:</label>
                                                        <span><strong>81 Fulton London</strong></span>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label col-6 col-sm-5">Pincode:</label>
                                                        <span><strong>385467</strong></span>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label col-6 col-sm-5">Phone:</label>
                                                        <span><strong>202-458-4568</strong></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div
                                                className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                <h6 className="mb-0 fw-bold ">Billing Address</h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <label className="form-label col-6 col-sm-5">Block
                                                            Number:</label>
                                                        <span><strong>A-510</strong></span>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label col-6 col-sm-5">Address:</label>
                                                        <span><strong>81 Fulton London</strong></span>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label col-6 col-sm-5">Pincode:</label>
                                                        <span><strong>385467</strong></span>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label col-6 col-sm-5">Phone:</label>
                                                        <span><strong>202-458-4568</strong></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div
                                        className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                        <h6 className="mb-0 fw-bold ">Customer Order</h6>
                                    </div>
                                    <div className="card-body">
                                        <table id="myProjectTable" className="table table-hover align-middle mb-0"
                                               style={{width: '100%'}}>
                                            <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Item</th>
                                                <th>Payment Info</th>
                                                <th>Order Date</th>
                                                <th>Price</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-78414</strong></a></td>
                                                <td><img src="assets/images/product/product-1.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span> Oculus VR </span>
                                                </td>
                                                <td>Credit Card</td>
                                                <td>June 16, 2021</td>
                                                <td>
                                                    $420
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-58414</strong></a></td>
                                                <td><img src="assets/images/product/product-2.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Wall Clock</span>
                                                </td>
                                                <td>Debit Card</td>
                                                <td>June 16, 2021</td>
                                                <td>
                                                    $220
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-48414</strong></a></td>
                                                <td><img src="assets/images/product/product-3.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Note Diaries</span>
                                                </td>
                                                <td>Debit Card</td>
                                                <td>June 16, 2021</td>
                                                <td>
                                                    $250
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-38414</strong></a></td>
                                                <td><img src="assets/images/product/product-4.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Flower Port</span>
                                                </td>
                                                <td>Credit Card</td>
                                                <td>June 16, 2021</td>
                                                <td>
                                                    $320
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-28414</strong></a></td>
                                                <td><img src="assets/images/product/product-1.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Oculus VR</span>
                                                </td>
                                                <td>Debit Card</td>
                                                <td>June 17, 2021</td>
                                                <td>
                                                    $20
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-18414</strong></a></td>
                                                <td><img src="assets/images/product/product-2.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Wall Clock</span>
                                                </td>
                                                <td>Debit Card</td>
                                                <td>June 18, 2021</td>
                                                <td>
                                                    $820
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-11414</strong></a></td>
                                                <td><img src="assets/images/product/product-3.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Note Diaries</span>
                                                </td>
                                                <td>Bank Emi</td>
                                                <td>March 16, 2021</td>
                                                <td>
                                                    $620
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-27414</strong></a></td>
                                                <td><img src="assets/images/product/product-5.jpg"
                                                         className="avatar lg rounded me-2"
                                                         alt="profile-image"/><span>Bag</span></td>
                                                <td>Debit Card</td>
                                                <td>June 18, 2021</td>
                                                <td>
                                                    $820
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-78514</strong></a></td>
                                                <td><img src="assets/images/product/product-6.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Rado Watch</span>
                                                </td>
                                                <td>Bank Emi</td>
                                                <td>March 16, 2021</td>
                                                <td>
                                                    $620
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <Pagination/>

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
            </div>
        </div>
    );
};

export default CustomerDetail;