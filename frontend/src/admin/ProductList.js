import React, {useEffect, useRef, useState} from 'react';
import noUiSlider from 'nouislider';
import './assets/plugin/nouislider/nouislider.min.css';
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Pagination from "./component/Index/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "./Api/CategoryApi";
import {fetchProducts} from "./Api/ProductApi";
import Pagination2 from "./component/Index/Pagination2";

const ProductList = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categories);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [sortOrder, setSortOrder] = useState('desc');
    const [sortBy, setSortBy] = useState('created_at');
    const [viewMode, setViewMode] = useState('list'); // State for view mode

    useEffect(() => {
        dispatch(fetchCategories());
        loadProducts();
    }, [dispatch, currentPage, selectedCategory, sortOrder, sortBy]); // Ensure currentPage is a dependency

    const loadProducts = async () => {
        const data = await fetchProducts({
            categoryId: selectedCategory || undefined,
            page: currentPage,
            size: 5,
            sortOrder,
            sortBy
        });
        setProducts(data.content);
        setPageCount(data.totalPages);
    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const buildOptions = (categories, parentId = null, prefix = '') => {
        return categories
            .filter(category => category.parentId === parentId)
            .map(category => (
                <React.Fragment key={category.categoryId}>
                    <option value={category.categoryId}>{prefix + category.categoryName}</option>
                    {buildOptions(categories, category.categoryId, prefix + '--')}
                </React.Fragment>
            ));
    };

    const toggleViewMode = (mode) => {
        setViewMode(mode);
    };

    return (
        <div>
            <div id="ebazar-layout" className="theme-blue">
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

                                {/* Add toggle buttons */}
                                <div className="border-0 mb-4">
                                    <div
                                        className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                        <h3 className="fw-bold mb-0">Danh sách sản phẩm</h3>
                                        <div className="btn-group group-link btn-set-task w-sm-100">
                                            <button
                                                className={`btn d-inline-flex align-items-center ${viewMode === 'grid' ? 'active' : ''}`}
                                                onClick={() => toggleViewMode('grid')}>
                                                <i className="icofont-wall px-2 fs-5"/>Grid View
                                            </button>
                                            <button
                                                className={`btn d-inline-flex align-items-center ${viewMode === 'list' ? 'active' : ''}`}
                                                onClick={() => toggleViewMode('list')}>
                                                <i className="icofont-listing-box px-2 fs-5"/> List View
                                            </button>
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
                                                    <h4 className="title">Bộ lọc</h4>
                                                </div>
                                                <div className="filter-btn">
                                                    <a className="btn btn-primary" href="#">Reset</a>
                                                </div>
                                            </div>
                                        </div>

                                        {/*categories*/}
                                        <div className="card mb-3">
                                            <div
                                                className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                                <h6 className="m-0 fw-bold">Loại sản phẩm</h6>
                                            </div>
                                            <div className="card-body">
                                                <label className="form-label">Chọn danh mục</label>
                                                <select
                                                    className="form-select"
                                                    size={7}
                                                    aria-label="size 3 select example"
                                                    value={selectedCategory}
                                                    onChange={e => {
                                                        setSelectedCategory(e.target.value);
                                                        handlePageClick({selected: 0})
                                                    }}>
                                                    <option value="">Tất cả</option>
                                                    {buildOptions(categories)}
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-8 col-xl-8 col-xxl-9">

                                    <div className="card mb-3 bg-transparent p-2">

                                        {/* list view */}
                                        {viewMode === 'list' && (
                                            <div>
                                                {products.map(product => (
                                                    <div className="col-md-12" key={product.productId}>
                                                        <div className="card border-0 mb-1">
                                                            <div
                                                                className="card-body d-flex align-items-center flex-column flex-md-row">
                                                                <a href={`product-detail/${product.productId}`}>
                                                                    <img className="w120 rounded img-fluid"
                                                                         src={product.imageUrl || "https://via.placeholder.com/120x120.png"}
                                                                         alt={product.productName}/>
                                                                </a>
                                                                <div
                                                                    className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                                                    <a href={`product-detail/${product.productId}`}>
                                                                        <h6 className="mb-3 fw-bold">{product.productName}
                                                                            <span
                                                                                className="text-muted small fw-light d-block">Loại sản phẩm: {product.categoryName}</span>
                                                                        </h6>
                                                                    </a>
                                                                    <div
                                                                        className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                                                        <div
                                                                            className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                                            <div className="text-muted small">Giá</div>
                                                                            <strong>${product.price} VNĐ</strong>
                                                                        </div>
                                                                        <div
                                                                            className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                                            <div className="text-muted small">Số lượng
                                                                            </div>
                                                                            <strong>{product.stockQuantity}</strong>
                                                                        </div>
                                                                        <div
                                                                            className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                                            <div className="text-muted small">Ngày tạo
                                                                            </div>
                                                                            <strong>{new Date(product.createdAt).toLocaleDateString()} {new Date(product.createdAt).toLocaleTimeString()}</strong>
                                                                        </div>
                                                                        <div
                                                                            className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                                            <div className="text-muted small">Trạng
                                                                                thái
                                                                            </div>
                                                                            <strong>{product.stockQuantity > 0 ? "Còn hàng" : "Hết hàng"}</strong>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <button className="btn p-0 me-2" title="Sửa">
                                                                            <i className="fa fa-pencil fa-lg text-primary"></i>
                                                                        </button>
                                                                        <button className="btn p-0" title="Xóa">
                                                                            <i className="fa fa-trash fa-lg text-danger"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* grid view */}
                                        {viewMode === 'grid' && (
                                            <div
                                                className="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-3">
                                                {products.map(product => (
                                                    <div className="col" key={product.productId}>
                                                        <div className="card">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="product-item active">
                                                                        <img
                                                                            src={product.imageUrl || "https://via.placeholder.com/120x120.png"}
                                                                            alt="product" className="img-fluid w-100"
                                                                            style={{
                                                                                maxWidth: '100%',
                                                                                maxHeight: '200px'
                                                                            }}/>
                                                                    </div>
                                                                    <a className="add-wishlist" href="#">
                                                                        <i className="bi bi-heart-fill text-danger"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="product-content p-3">
                            <span className="rating mb-2 d-block"><i
                                className="icofont-star text-warning"></i> 4.5 (145)</span>
                                                                    <a href={`product-detail/${product.productId}`}
                                                                       className="fw-bold">{product.productName}</a>
                                                                    <p className="text-muted">Loại sản
                                                                        phẩm: {product.categoryName}</p>
                                                                    <span
                                                                        className="d-block fw-bold fs-5 text-secondary">${product.price} VNĐ</span>
                                                                    <div className="d-flex align-items-center">
                                                                        <button className="btn p-0 me-2" title="Sửa">
                                                                            <i className="fa fa-pencil fa-lg text-primary"></i>
                                                                        </button>
                                                                        <button className="btn p-0" title="Xóa">
                                                                            <i className="fa fa-trash fa-lg text-danger"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}


                                    </div>


                                    <Pagination2 onPageChange={handlePageClick} pageCount={pageCount}
                                    />

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