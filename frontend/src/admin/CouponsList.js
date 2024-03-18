import React from 'react';

const CouponsList = () => {
    // Logic của component ở đây

    return (
        <div id="ebazar-layout" className="theme-blue">
            {/* sidebar */}
            <div className="sidebar px-4 py-4 py-md-4 me-0">
                <div className="d-flex flex-column h-100">
                    <a href="index.html" className="mb-0 brand-icon">
              <span className="logo-icon">
                <i className="bi bi-bag-check-fill fs-4"/>
              </span>
                        <span className="logo-text">eTTShop</span>
                    </a>
                    {/* Menu: main ul */}
                    <ul className="menu-list flex-grow-1 mt-3">
                        <li><a className="m-link" href="index.html"><i className="icofont-home fs-5"/> <span>Bảng điều khiển</span></a>
                        </li>
                        <li className="collapsed">
                            <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-product" href="#">
                                <i className="icofont-truck-loaded fs-5"/> <span>Sản phẩm</span> <span
                                className="arrow icofont-rounded-down ms-auto text-end fs-5"/></a>
                            {/* Menu: Sub menu ul */}
                            <ul className="sub-menu collapse" id="menu-product">
                                <li><a className="ms-link" href="product-list.html">Danh sách sản phẩm</a></li>
                                <li><a className="ms-link" href="product-edit.html">Chỉnh sửa sản phẩm</a></li>
                                <li><a className="ms-link" href="product-add.html">Thêm sản phẩm</a></li>
                            </ul>
                        </li>
                        <li className="collapsed">
                            <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-order" href="#">
                                <i className="icofont-notepad fs-5"/> <span>Đơn hàng</span> <span
                                className="arrow icofont-rounded-down ms-auto text-end fs-5"/></a>
                            {/* Menu: Sub menu ul */}
                            <ul className="sub-menu collapse" id="menu-order">
                                <li><a className="ms-link" href="order-list.html">Danh sách đơn hàng</a></li>
                                <li><a className="ms-link" href="order-details.html">Chi tiết đơn hàng</a></li>
                                <li><a className="ms-link" href="order-invoices.html">Hoá đơn đặt hàng</a></li>
                            </ul>
                        </li>
                        <li className="collapsed">
                            <a className="m-link" data-bs-toggle="collapse" data-bs-target="#customers-info" href="#">
                                <i className="icofont-funky-man fs-5"/> <span>Khách hàng</span> <span
                                className="arrow icofont-rounded-down ms-auto text-end fs-5"/></a>
                            {/* Menu: Sub menu ul */}
                            <ul className="sub-menu collapse" id="customers-info">
                                <li><a className="ms-link" href="customers.html">Danh sách khách hàng</a></li>
                                <li><a className="ms-link" href="customer-detail.html">Chi tiết khách hàng</a></li>
                            </ul>
                        </li>
                        <li className="collapsed">
                            <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-sale" href="#">
                                <i className="icofont-sale-discount fs-5"/> <span>Khuyến mãi </span> <span
                                className="arrow icofont-rounded-down ms-auto text-end fs-5"/></a>
                            {/* Menu: Sub menu ul */}
                            <ul className="sub-menu collapse" id="menu-sale">
                                <li><a className="ms-link" href="coupons-list.html">Danh sách mã giảm giá</a></li>
                                <li><a className="ms-link" href="coupon-add.html">Thêm mã sản phẩm</a></li>
                            </ul>
                        </li>
                        <li className="collapsed">
                            <a className="m-link" data-bs-toggle="collapse" data-bs-target="#app" href="#">
                                <i className="icofont-code-alt fs-5"/> <span>App</span> <span
                                className="arrow icofont-rounded-down ms-auto text-end fs-5"/></a>
                            {/* Menu: Sub menu ul */}
                            <ul className="sub-menu collapse" id="app">
                                <li><a className="ms-link" href="chat.html"> Chat App</a></li>
                            </ul>
                        </li>
                    </ul>
                    {/* Menu: menu collepce btn */}
                    <button type="button" className="btn btn-link sidebar-mini-btn text-light">
                        <span className="ms-2"><i className="icofont-bubble-right"/></span>
                    </button>
                </div>
            </div>
            {/* main body area */}
            <div className="main px-lg-4 px-md-4">
                {/* Body: Header */}
                <div className="header">
                    <nav className="navbar py-4">
                        <div className="container-xxl">
                            {/* header rightbar icon */}
                            <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                                <div className="d-flex">
                                    <a className="nav-link text-primary collapsed" href="help.html" title="Get Help">
                                        <i className="icofont-info-square fs-5"/>
                                    </a>
                                </div>
                                <div className="dropdown zindex-popover">
                                    <a className="nav-link dropdown-toggle pulse" href="#" role="button"
                                       data-bs-toggle="dropdown">
                                        <img src="../dist/assets/images/flag/GB.png" alt=""/>
                                    </a>
                                    <div
                                        className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0 mt-3">
                                        <div className="card border-0">
                                            <ul className="list-unstyled py-2 px-3">
                                                <li>
                                                    <a href="#" className><img src="../dist/assets/images/flag/GB.png"
                                                                               alt=""/> English</a>
                                                </li>
                                                <li>
                                                    <a href="#" className><img src="../dist/assets/images/flag/DE.png"
                                                                               alt=""/> German</a>
                                                </li>
                                                <li>
                                                    <a href="#" className><img src="../dist/assets/images/flag/FR.png"
                                                                               alt=""/> French</a>
                                                </li>
                                                <li>
                                                    <a href="#" className><img src="../dist/assets/images/flag/IT.png"
                                                                               alt=""/> Italian</a>
                                                </li>
                                                <li>
                                                    <a href="#" className><img src="../dist/assets/images/flag/RU.png"
                                                                               alt=""/> Russian</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown notifications">
                                    <a className="nav-link dropdown-toggle pulse" href="#" role="button"
                                       data-bs-toggle="dropdown">
                                        <i className="icofont-alarm fs-5"/>
                                        <span className="pulse-ring"/>
                                    </a>
                                    <div id="NotificationsDiv"
                                         className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0 mt-3">
                                        <div className="card border-0 w380">
                                            <div className="card-header border-0 p-3">
                                                <h5 className="mb-0 font-weight-light d-flex justify-content-between">
                                                    <span>Notifications</span>
                                                    <span className="badge text-white">06</span>
                                                </h5>
                                            </div>
                                            <div className="tab-content card-body">
                                                <div className="tab-pane fade show active">
                                                    <ul className="list-unstyled list mb-0">
                                                        <li className="py-2 mb-1 border-bottom">
                                                            <a href="javascript:void(0);" className="d-flex">
                                                                <img className="avatar rounded-circle"
                                                                     src="assets/images/xs/avatar1.svg" alt=""/>
                                                                <div className="flex-fill ms-2">
                                                                    <p className="d-flex justify-content-between mb-0 ">
                                                                        <span
                                                                            className="font-weight-bold">Chloe Walkerr</span>
                                                                        <small>2MIN</small></p>
                                                                    <span className>Added New Product 2021-07-15 <span
                                                                        className="badge bg-success">Add</span></span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li className="py-2 mb-1 border-bottom">
                                                            <a href="javascript:void(0);" className="d-flex">
                                                                <div className="avatar rounded-circle no-thumbnail">AH
                                                                </div>
                                                                <div className="flex-fill ms-2">
                                                                    <p className="d-flex justify-content-between mb-0 ">
                                                                        <span
                                                                            className="font-weight-bold">Alan	Hill</span>
                                                                        <small>13MIN</small></p>
                                                                    <span className>Invoice generator </span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li className="py-2 mb-1 border-bottom">
                                                            <a href="javascript:void(0);" className="d-flex">
                                                                <img className="avatar rounded-circle"
                                                                     src="assets/images/xs/avatar3.svg" alt=""/>
                                                                <div className="flex-fill ms-2">
                                                                    <p className="d-flex justify-content-between mb-0 ">
                                                                        <span className="font-weight-bold">Melanie	Oliver</span>
                                                                        <small>1HR</small></p>
                                                                    <span className>Orader  Return RT-00004</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li className="py-2 mb-1 border-bottom">
                                                            <a href="javascript:void(0);" className="d-flex">
                                                                <img className="avatar rounded-circle"
                                                                     src="assets/images/xs/avatar5.svg" alt=""/>
                                                                <div className="flex-fill ms-2">
                                                                    <p className="d-flex justify-content-between mb-0 ">
                                                                        <span
                                                                            className="font-weight-bold">Boris Hart</span>
                                                                        <small>13MIN</small></p>
                                                                    <span className>Product Order to Toyseller</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li className="py-2 mb-1 border-bottom">
                                                            <a href="javascript:void(0);" className="d-flex">
                                                                <img className="avatar rounded-circle"
                                                                     src="assets/images/xs/avatar6.svg" alt=""/>
                                                                <div className="flex-fill ms-2">
                                                                    <p className="d-flex justify-content-between mb-0 ">
                                                                        <span className="font-weight-bold">Alan	Lambert</span>
                                                                        <small>1HR</small></p>
                                                                    <span className>Leave Apply</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li className="py-2">
                                                            <a href="javascript:void(0);" className="d-flex">
                                                                <img className="avatar rounded-circle"
                                                                     src="assets/images/xs/avatar7.svg" alt=""/>
                                                                <div className="flex-fill ms-2">
                                                                    <p className="d-flex justify-content-between mb-0 ">
                                                                        <span
                                                                            className="font-weight-bold">Zoe Wright</span>
                                                                        <small className>1DAY</small></p>
                                                                    <span className>Product Stoke Entry Updated</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a className="card-footer text-center border-top-0" href="#"> View all
                                                notifications</a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover">
                                    <div className="u-info me-2">
                                        <p className="mb-0 text-end line-height-sm "><span className="font-weight-bold">John Quinn</span>
                                        </p>
                                        <small>Admin Profile</small>
                                    </div>
                                    <a className="nav-link dropdown-toggle pulse p-0" href="#" role="button"
                                       data-bs-toggle="dropdown" data-bs-display="static">
                                        <img className="avatar lg rounded-circle img-thumbnail"
                                             src="assets/images/profile_av.svg" alt="profile"/>
                                    </a>
                                    <div
                                        className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                                        <div className="card border-0 w280">
                                            <div className="card-body pb-0">
                                                <div className="d-flex py-1">
                                                    <img className="avatar rounded-circle"
                                                         src="assets/images/profile_av.svg" alt="profile"/>
                                                    <div className="flex-fill ms-3">
                                                        <p className="mb-0"><span className="font-weight-bold">John	Quinn</span>
                                                        </p>
                                                        <small className>Johnquinn@gmail.com</small>
                                                    </div>
                                                </div>
                                                <div>
                                                    <hr className="dropdown-divider border-dark"/>
                                                </div>
                                            </div>
                                            <div className="list-group m-2 ">
                                                <a href="admin-profile.html"
                                                   className="list-group-item list-group-item-action border-0 "><i
                                                    className="icofont-ui-user fs-5 me-3"/>Profile Page</a>
                                                <a href="order-invoices.html"
                                                   className="list-group-item list-group-item-action border-0 "><i
                                                    className="icofont-file-text fs-5 me-3"/>Order Invoices</a>
                                                <a href="ui-elements/auth-signin.html"
                                                   className="list-group-item list-group-item-action border-0 "><i
                                                    className="icofont-logout fs-5 me-3"/>Signout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="setting ms-2">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#Settingmodal"><i
                                        className="icofont-gear-alt fs-5"/></a>
                                </div>
                            </div>
                            {/* menu toggler */}
                            <button className="navbar-toggler p-0 border-0 menu-toggle order-3" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#mainHeader">
                                <span className="fa fa-bars"/>
                            </button>
                            {/* main menu Search*/}
                            <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                                <div className="input-group flex-nowrap input-group-lg">
                                    <input type="search" className="form-control" placeholder="Search"
                                           aria-label="search" aria-describedby="addon-wrapping"/>
                                    <button type="button" className="input-group-text" id="addon-wrapping"><i
                                        className="fa fa-search"/></button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* Body: Body */}
                <div className="body d-flex py-lg-3 py-md-2">
                    <div className="container-xxl">
                        <div className="row align-items-center">
                            <div className="border-0 mb-4">
                                <div
                                    className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                    <h3 className="fw-bold mb-0">Coupons</h3>
                                    <div className="col-auto d-flex w-sm-100">
                                        <a href="coupon-add.html" className="btn btn-primary btn-set-task w-sm-100"><i
                                            className="icofont-plus-circle me-2 fs-6"/>Thêm phiếu giảm giá</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Row end  */}
                        <div className="row clearfix g-3">
                            <div className="col-sm-12">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <table id="myProjectTable" className="table table-hover align-middle mb-0"
                                               style={{width: '100%'}}>
                                            <thead>
                                            <tr>
                                                <th>Mã giảm giá</th>
                                                <th>Loại</th>
                                                <th>Giảm giá</th>
                                                <th>Ngày bắt đầu</th>
                                                <th>Ngày giảm giá</th>
                                                <th>Trạng thái</th>
                                                <th>Sản phẩm giảm giá</th>
                                                <th>Hành động</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><span className="fw-bold ms-1">DTZQT-8547</span></td>
                                                <td>Fixed Amount</td>
                                                <td>$12.6</td>
                                                <td>18/08/2021</td>
                                                <td>06/09/2021</td>
                                                <td><span className="badge bg-success">Active</span></td>
                                                <td>Clothes</td>
                                                <td>
                                                    <div className="btn-group" role="group"
                                                         aria-label="Basic outlined example">
                                                        <a href="coupon-edit.html"
                                                           className="btn btn-outline-secondary"><i
                                                            className="icofont-edit text-success"/></a>
                                                        <button type="button"
                                                                className="btn btn-outline-secondary deleterow"><i
                                                            className="icofont-ui-delete text-danger"/></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-bold ms-1">AXXQT-2547</span></td>
                                                <td>Percentage</td>
                                                <td>20%</td>
                                                <td>08/03/2021</td>
                                                <td>30/03/2021</td>
                                                <td><span className="badge bg-danger">In Active</span></td>
                                                <td>Watches</td>
                                                <td>
                                                    <div className="btn-group" role="group"
                                                         aria-label="Basic outlined example">
                                                        <a href="coupon-edit.html"
                                                           className="btn btn-outline-secondary"><i
                                                            className="icofont-edit text-success"/></a>
                                                        <button type="button"
                                                                className="btn btn-outline-secondary deleterow"><i
                                                            className="icofont-ui-delete text-danger"/></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-bold ms-1">FiFty-50%</span></td>
                                                <td>Percentage</td>
                                                <td>50%</td>
                                                <td>08/03/2021</td>
                                                <td>30/03/2021</td>
                                                <td><span className="badge bg-warning">Future Plann</span></td>
                                                <td>Toy</td>
                                                <td>
                                                    <div className="btn-group" role="group"
                                                         aria-label="Basic outlined example">
                                                        <a href="coupon-edit.html"
                                                           className="btn btn-outline-secondary"><i
                                                            className="icofont-edit text-success"/></a>
                                                        <button type="button"
                                                                className="btn btn-outline-secondary deleterow"><i
                                                            className="icofont-ui-delete text-danger"/></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-bold ms-1">BATTT-XA47</span></td>
                                                <td>Fixed Amount</td>
                                                <td>$18.00</td>
                                                <td>06/05/2021</td>
                                                <td>06/09/2021</td>
                                                <td><span className="badge bg-success">Active</span></td>
                                                <td>Shoes</td>
                                                <td>
                                                    <div className="btn-group" role="group"
                                                         aria-label="Basic outlined example">
                                                        <a href="coupon-edit.html"
                                                           className="btn btn-outline-secondary"><i
                                                            className="icofont-edit text-success"/></a>
                                                        <button type="button"
                                                                className="btn btn-outline-secondary deleterow"><i
                                                            className="icofont-ui-delete text-danger"/></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-bold ms-1">FALT-40</span></td>
                                                <td>Percentage</td>
                                                <td>18%</td>
                                                <td>16/04/2021</td>
                                                <td>06/09/2021</td>
                                                <td><span className="badge bg-success">Active</span></td>
                                                <td>Shoes</td>
                                                <td>
                                                    <div className="btn-group" role="group"
                                                         aria-label="Basic outlined example">
                                                        <a href="coupon-edit.html"
                                                           className="btn btn-outline-secondary"><i
                                                            className="icofont-edit text-success"/></a>
                                                        <button type="button"
                                                                className="btn btn-outline-secondary deleterow"><i
                                                            className="icofont-ui-delete text-danger"/></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-bold ms-1">SHIP-ZERO</span></td>
                                                <td>Free shipping</td>
                                                <td>$0.0</td>
                                                <td>12/05/2021</td>
                                                <td>06/10/2021</td>
                                                <td><span className="badge bg-success">Active</span></td>
                                                <td>Cream Tube</td>
                                                <td>
                                                    <div className="btn-group" role="group"
                                                         aria-label="Basic outlined example">
                                                        <a href="coupon-edit.html"
                                                           className="btn btn-outline-secondary"><i
                                                            className="icofont-edit text-success"/></a>
                                                        <button type="button"
                                                                className="btn btn-outline-secondary deleterow"><i
                                                            className="icofont-ui-delete text-danger"/></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Row End */}
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

export default CouponsList;