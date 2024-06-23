import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './assets/plugin/nouislider/nouislider.min.css';
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./Api/CategoryApi";
import { fetchProducts } from "./Api/ProductApi";
import Pagination2 from "./component/Index/Pagination2";
import { setProducts, setViewMode } from "./redux/actions/ProductActions";
import { setSelectedCategory } from "./redux/actions/CategoryActions";
import { setCurrentPage, setPageCount } from "./redux/actions/CurrentPageAction";
import { formatPrice } from "../format/FormatMoney";
import Select from 'react-select';
import removeAccents from 'remove-accents';
import {getFullImageUrl} from "../config";

const ProductList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);

    const categories = useSelector(state => state.category.categories);
    const products = useSelector(state => state.productAdmin.products);
    const selectedCategory = useSelector(state => state.category.selectedCategory);
    const currentPage = useSelector(state => state.page.currentPage);
    const pageCount = useSelector(state => state.page.pageCount);
    const viewMode = useSelector(state => state.productAdmin.viewMode);
    const sortOrder = useSelector(state => state.productAdmin.sortOrder);
    const sortBy = useSelector(state => state.productAdmin.sortBy);

    const [searchKeyword, setSearchKeyword] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (!initialized) {
            dispatch(setCurrentPage(0));
            setInitialized(true);
        }
    }, [dispatch, initialized]);

    useEffect(() => {
        if (initialized) {
            dispatch(fetchCategories());
            loadProducts();
        }
    }, [dispatch, currentPage, selectedCategory, sortOrder, sortBy, searchKeyword, initialized]);

    const loadProducts = async () => {
        const data = await fetchProducts({
            categoryId: selectedCategory || undefined,
            page: currentPage,
            size: 5,
            sortOrder,
            sortBy,
            keyword: searchKeyword
        });
        dispatch(setProducts(data.content));
        dispatch(setPageCount(data.totalPages));
    };

    const handlePageClick = (data) => {
        dispatch(setCurrentPage(data.selected));
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
        dispatch(setViewMode(mode));
    };

    const handleNavigateToEdit = (productId) => {
        navigate(`/product-edit/${productId}`);
    };

    const handleSearchChange = (inputValue) => {
        dispatch(setCurrentPage(0));
        const value = inputValue || '';
        setSearchKeyword(value);

        if (value.length >= 1) {
            const filteredSuggestions = products
                .filter(product => removeAccents(product.productName).toLowerCase().includes(removeAccents(value).toLowerCase()))
                .map(product => product.productName)
                .slice(0, 3);
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSearchSelect = (selectedOption) => {
        const value = selectedOption ? selectedOption.value : '';
        setSearchKeyword(value);
        setSuggestions([]);
        handlePageClick({ selected: 0 });
    };

    const searchOptions = suggestions.map(suggestion => ({ value: suggestion, label: suggestion }));

    return (
        <div>
            <div id="ebazar-layout" className="theme-blue">
                <Sidebar />
                <div className="main px-lg-4 px-md-4">
                    <Header />
                    <div className="body d-flex py-3">
                        <div className="container-xxl">
                            <div className="row align-items-center">
                                <div className="border-0 mb-4">
                                    <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                        <h3 className="fw-bold mb-0">Danh sách sản phẩm</h3>
                                        <div className="btn-group group-link btn-set-task w-sm-100">
                                            <button
                                                className={`btn d-inline-flex align-items-center ${viewMode === 'grid' ? 'active' : ''}`}
                                                onClick={() => toggleViewMode('grid')}>
                                                <i className="icofont-wall px-2 fs-5" />Grid View
                                            </button>
                                            <button
                                                className={`btn d-inline-flex align-items-center ${viewMode === 'list' ? 'active' : ''}`}
                                                onClick={() => toggleViewMode('list')}>
                                                <i className="icofont-listing-box px-2 fs-5" /> List View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                        <div className="card mb-3">
                                            <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
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
                                                        dispatch(setSelectedCategory(e.target.value));
                                                        handlePageClick({ selected: 0 });
                                                    }}>
                                                    <option value="">Tất cả</option>
                                                    {buildOptions(categories)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                                <h6 className="m-0 fw-bold">Tìm kiếm sản phẩm</h6>
                                            </div>
                                            <div className="card-body">
                                                <Select
                                                    options={searchOptions}
                                                    onChange={handleSearchSelect}
                                                    onInputChange={handleSearchChange}
                                                    value={searchOptions.find(option => option.value === searchKeyword)}
                                                    isClearable
                                                    placeholder="Nhập từ khóa tìm kiếm"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-8 col-xl-8 col-xxl-9">
                                    <div className="card mb-3 bg-transparent p-2">
                                        {viewMode === 'list' && (
                                            <div>
                                                {products.map(product => (
                                                    <div className="col-md-12" key={product.productId}>
                                                        <div className="card border-0 mb-1">
                                                            <div className="card-body d-flex align-items-center flex-column flex-md-row">
                                                                <a onClick={() => handleNavigateToEdit(product.productId)}>
                                                                    <img className="w120 rounded img-fluid"
                                                                         src={getFullImageUrl(product.imageUrl) || "https://via.placeholder.com/120x120.png"}
                                                                         alt={product.productName} />
                                                                </a>
                                                                <div className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                                                                    <a onClick={() => handleNavigateToEdit(product.productId)}>
                                                                        <h6 className="mb-3 fw-bold">{product.productName}
                                                                            <span className="text-muted small fw-light d-block">Loại sản phẩm: {product.categoryName}</span>
                                                                        </h6>
                                                                    </a>
                                                                    <div className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                                            <div className="text-muted small">Giá</div>
                                                                            <strong>{formatPrice(product.price)} VNĐ</strong>
                                                                        </div>
                                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                                            <div className="text-muted small">Số lượng</div>
                                                                            <strong>{product.stockQuantity}</strong>
                                                                        </div>
                                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                                            <div className="text-muted small">Ngày tạo</div>
                                                                            <strong>{new Date(product.createdAt).toLocaleDateString()} {new Date(product.createdAt).toLocaleTimeString()}</strong>
                                                                        </div>
                                                                        <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                                                                            <div className="text-muted small">Trạng thái</div>
                                                                            <strong>{product.stockQuantity > 0 ? "Còn hàng" : "Hết hàng"}</strong>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <button className="btn p-0 me-2" title="Sửa"
                                                                                onClick={() => handleNavigateToEdit(product.productId)}>
                                                                            <i className="fa fa-pencil fa-lg text-primary"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {viewMode === 'grid' && (
                                            <div className="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-3">
                                                {products.map(product => (
                                                    <div className="col" key={product.productId}>
                                                        <div className="card">
                                                            <div className="product">
                                                                <div className="product-image">
                                                                    <div className="product-item active" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'center',
                                                                        alignItems: 'center',
                                                                        height: '200px'
                                                                    }}>
                                                                        <a onClick={() => handleNavigateToEdit(product.productId)}>
                                                                            <img
                                                                                src={getFullImageUrl(product.imageUrl) || "https://via.placeholder.com/120x120.png"}
                                                                                alt="product"
                                                                                className="img-fluid w-100"
                                                                                style={{
                                                                                    maxWidth: '100%',
                                                                                    maxHeight: '220px'
                                                                                }} />
                                                                        </a>
                                                                    </div>
                                                                    <a className="add-wishlist" href="#">
                                                                        <i className="bi bi-heart-fill text-danger"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="product-content p-3">
                                                                    <span className="rating mb-2 d-block"><i className="icofont-star text-warning"></i> 4.5 (145)</span>
                                                                    <a onClick={() => handleNavigateToEdit(product.productId)} className="fw-bold">{product.productName}</a>
                                                                    <p className="text-muted">Loại sản phẩm: {product.categoryName}</p>
                                                                    <span className="d-block fw-bold fs-5 text-secondary">{formatPrice(product.price)} VNĐ</span>
                                                                    <div className="d-flex align-items-center">
                                                                        <button className="btn p-0 me-2" title="Sửa" onClick={() => handleNavigateToEdit(product.productId)}>
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
                                    <Pagination2 onPageChange={handlePageClick} pageCount={pageCount} />
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
