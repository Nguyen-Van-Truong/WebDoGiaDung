import React, {useEffect, useRef} from 'react';
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Cropper from 'cropperjs';

import './assets/plugin/cropper/cropper.min.css';
import './assets/css/ebazar.style.min.css';
import './assets/plugin/multi-select/css/multi-select.css';
import './assets/plugin/bootstrap-tagsinput/bootstrap-tagsinput.css';
import './assets/plugin/dropify/dist/css/dropify.min.css';
import './assets/plugin/datatables/responsive.dataTables.min.css';
import './assets/plugin/datatables/dataTables.bootstrap5.min.css';

import product1 from './assets/images/product/product-1.jpg'
import {useDispatch, useSelector} from "react-redux";
import {setQuantity, setTotalQuantity} from "./redux/actions/ProductActions";

const ProductEdit = () => {
    // dispatch action
    const dispatch = useDispatch();
    const totalQuantity = useSelector((state) => state.productAdmin.totalQuantity);
    //dung useselector de lay gia tri cua quantity tu store
    const quantity = useSelector((state) => state.productAdmin.quantity);
    const handleQuantityChange = (event) => {
        const inputQuantity = parseInt(event.target.value, 10) || 0;

        dispatch(setQuantity(inputQuantity));

        dispatch(setTotalQuantity(100 + inputQuantity));
    };

    return (<div id="ebazar-layout" className="theme-blue">
        {/* sidebar */}
        <Sidebar/>

        {/* main body area */}
        <div className="main px-lg-4 px-md-4">
            {/* Body: Header */}
            <Header/>
            {/* Body: Body */}
            <div className="body d-flex py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="border-0 mb-4">
                            <div
                                className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                <h3 className="fw-bold mb-0">Chỉnh sửa sản phẩm</h3>
                                <button type="submit"
                                        className="btn btn-primary btn-set-task w-sm-100 py-2 px-5 text-uppercase">Lưu
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
                                        <h6 className="m-0 fw-bold">Thông tin về giá</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-3 align-items-center">
                                            <div className="col-md-12">
                                                <label className="form-label">Giá sản phẩm cũ</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label">Giá sản phẩm mới</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div
                                        className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                        <h6 className="m-0 fw-bold">Trạng thái hiển thị</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio"
                                                   name="couponsstatus" defaultChecked/>
                                            <label className="form-check-label">
                                                Có sẵn
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio"
                                                   name="couponsstatus"/>
                                            <label className="form-check-label">
                                                Được phát hành
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio"
                                                   name="couponsstatus"/>
                                            <label className="form-check-label">
                                                Lên kế hoạch
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio"
                                                   name="couponsstatus"/>
                                            <label className="form-check-label">
                                                Ân
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mb-3">
                                    <div
                                        className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                        <h6 className="m-0 fw-bold">Loại sản phẩm</h6>
                                    </div>
                                    <div className="card-body">
                                        <label className="form-label">Chọn danh mục</label>
                                        <select className="form-select" size={7}
                                                aria-label="size 3 select example">
                                            <option value="1">Electronics</option>
                                            <option value="2">--Laptops</option>
                                            <option value="3">----Gaming Laptops</option>
                                            <option value="4">--Mobile Phones</option>
                                            <option value="5">Apparel</option>
                                            <option value="6">--Men's Clothing</option>
                                            <option value="7">--Women's Clothing</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="card">
                                    <div
                                        className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                        <h6 className="m-0 fw-bold">Thông tin hàng tồn kho</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-3 align-items-center">
                                            <div className="col-md-12">
                                                <label className="form-label">Tổng số lượng hàng tồn kho</label>
                                                <input type="text" className="form-control"
                                                       value={totalQuantity} readOnly/>
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
                                    <h6 className="mb-0 fw-bold ">Thông tin cơ bản</h6>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-md-6">
                                                <label className="form-label">Tên</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Số lượng</label>
                                                <input type="number" className="form-control" min="0"
                                                       value={quantity} onChange={handleQuantityChange}/>
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label">Mô tả Sản phẩm</label>
                                                <div id="editor">
                                                    <h4>Nhập Mô tả Sản phẩm Tại đây</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div
                                    className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                    <h6 className="mb-0 fw-bold ">Hình ảnh</h6>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-md-12">
                                                <label className="form-label">Tải lên hình ảnh sản phẩm</label>
                                                <small className="d-block text-muted mb-2">Chỉ hình ảnh dọc hoặc
                                                    hình vuông, chiều cao tối đa 2M và chiều cao tối đa
                                                    2000px.</small>
                                                <input type="file" id="input-file-to-destroy"
                                                       className="dropify"
                                                       data-allowed-formats="portrait square"
                                                       data-max-file-size="2M" data-max-height={2000}/>
                                            </div>
                                        </div>
                                    </form>
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
    </div>);
};

export default ProductEdit;