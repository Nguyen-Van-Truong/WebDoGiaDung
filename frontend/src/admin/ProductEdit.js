import React, {useEffect, useRef, useState} from 'react';
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Cropper from 'cropperjs';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import './assets/plugin/cropper/cropper.min.css';
import './assets/css/ebazar.style.min.css';
import './assets/plugin/multi-select/css/multi-select.css';
import './assets/plugin/bootstrap-tagsinput/bootstrap-tagsinput.css';
import './assets/plugin/dropify/dist/css/dropify.min.css';
import './assets/plugin/datatables/responsive.dataTables.min.css';
import './assets/plugin/datatables/dataTables.bootstrap5.min.css';
import {useDispatch, useSelector} from "react-redux";
import {setQuantity, setTotalQuantity} from "./redux/actions/ProductActions";
import {fetchCategories} from "./Api/CategoryApi";
import {showNotification} from "./redux/actions/NotificationsActions";
import Notification from "./component/Notification";
import ImageUploader from "./component/ImageUploader";

const ProductEdit = () => {
    // dispatch action
    const dispatch = useDispatch();
    const totalQuantity = useSelector((state) => state.productAdmin.totalQuantity);
    //dùng useselector để lấy giá trị của quantity từ store
    const quantity = useSelector((state) => state.productAdmin.quantity);
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = useSelector((state) => state.category.categories);
    const [selectedFiles, setSelectedFiles] = useState([]);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    // Đặt danh mục được chọn ban đầu khi danh mục được tải
    useEffect(() => {
        if (categories.length > 0) {
            setSelectedCategory(categories[0].categoryId);
        }
    }, [categories]);

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

    const handleQuantityChange = (event) => {
        const inputQuantity = parseInt(event.target.value, 10) || 0;
        dispatch(setQuantity(inputQuantity));
        dispatch(setTotalQuantity(100 + inputQuantity));
    };

    const handleFileSelect = (event) => {
        const newFiles = Array.from(event.target.files).filter(file => file.type.startsWith('image/')).map(file => ({
            file,
            id: Date.now() + Math.random()
        }));
        setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]);
        console.log(newFiles);
    };

    const handleRemoveFile = (fileId) => {
        setSelectedFiles(prevFiles => prevFiles.filter(file => file.id !== fileId));
    };

    return (
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
                        {/* Row end */}
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
                                                    <input type="text" className="form-control" value={price}
                                                           onChange={(e) => setPrice(e.target.value)}/>
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
                                                <input className="form-check-input" type="radio" name="couponsstatus"
                                                       defaultChecked/>
                                                <label className="form-check-label">
                                                    Có sẵn
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="couponsstatus"/>
                                                <label className="form-check-label">
                                                    Được phát hành
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="couponsstatus"/>
                                                <label className="form-check-label">
                                                    Lên kế hoạch
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="couponsstatus"/>
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
                                            <select className="form-select" size={7} aria-label="size 3 select example"
                                                    value={selectedCategory}
                                                    onChange={(e) => setSelectedCategory(e.target.value)}>
                                                {buildOptions(categories)}
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
                                                    <input type="text" className="form-control" value={totalQuantity}
                                                           readOnly/>
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
                                                    <input type="text" className="form-control" value={productName}
                                                           onChange={(e) => setProductName(e.target.value)}/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Số lượng</label>
                                                    <input type="number" className="form-control" min="0"
                                                           value={quantity} onChange={handleQuantityChange}/>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label">Mô tả Sản phẩm</label>
                                                    <ReactQuill theme="snow" value={description}
                                                                onChange={setDescription}/>
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
                                        <ImageUploader handleFileSelect={handleFileSelect} selectedFiles={selectedFiles}
                                                       handleRemoveFile={handleRemoveFile}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Row end */}
                    </div>
                </div>
            </div>
            <Notification/>
        </div>
    );
};

export default ProductEdit;
