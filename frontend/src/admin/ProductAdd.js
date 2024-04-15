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
import {addProduct} from "./Api/ProductApi";
import {fetchCategories} from "./Api/CategoryApi";
import {showNotification} from "./redux/actions/NotificationsActions";
import Notification from "./component/Notification";

const notificationIconUrl = "https://e7.pngegg.com/pngimages/711/621/png-clipart-warning-icon-error-computer-icons-orange-error-icon-miscellaneous-angle-thumbnail.png";


const ProductAdd = () => {
        // dispatch action
        const dispatch = useDispatch();

        const [productName, setProductName] = useState('');
        const [description, setDescription] = useState('');
        const [price, setPrice] = useState('');
        const [stockQuantity, setStockQuantity] = useState('');
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
            }, [categories]
        );

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
        // Xử lý tạo sản phẩm
        const handleSubmit = async (e) => {
            e.preventDefault();

            let errors = [];

            if (!productName.trim()) errors.push('Tên sản phẩm là bắt buộc.');
            if (!price) errors.push('Giá sản phẩm là bắt buộc.');
            if (stockQuantity === '' || stockQuantity < 0) errors.push('Số lượng sản phẩm là bắt buộc và phải là số dương.');
            if (!selectedCategory) errors.push('Bạn phải chọn một danh mục.');
            if (!selectedFiles.length) errors.push('Ít nhất một hình ảnh sản phẩm là bắt buộc.');

            if (errors.length > 0) {
                dispatch(showNotification(errors.join(' '), 'warning'));
                return;
            }

            const productData = JSON.stringify({
                productName,
                description,
                price: parseFloat(price),
                stockQuantity: parseInt(stockQuantity, 10),
                categoryId: parseInt(selectedCategory, 10),
            });

            const formData = new FormData();
            formData.append("product", new Blob([productData], {type: "application/json"}));

            selectedFiles.forEach(file => {
                formData.append("files", file.file);
            });

            try {
                const responseData = await addProduct(formData);
                console.log('Product added successfully:', responseData);

                // hiển thị thông báo
                dispatch(showNotification('Sản phẩm đã được thêm thành công!', 'success'));


                // Làm sạch form
                setProductName('');
                setDescription('');
                setPrice('');
                setStockQuantity('');
                // setSelectedCategory('');
                setSelectedFiles([]);

            } catch (error) {
                console.error('Failed to add product:', error);
                dispatch(showNotification('Failed to add product: ' + error.message, 'error'));

            }
        };


// dùng thư viện react-quill để tạo trình soạn thảo
        const handleDescriptionChange = (content, delta, source, editor) => {
            setDescription(editor.getHTML());
        };

        const handleFileSelect = (event) => {
            const newFiles = Array.from(event.target.files).map(file => ({
                file,
                id: Date.now() + Math.random()
            }));
            setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]);
        };

        const handleRemoveFile = (fileId) => {
            setSelectedFiles(prevFiles => prevFiles.filter(file => file.id !== fileId));
        };


        return (<div>
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

                            {/* form  */}
                            <form onSubmit={handleSubmit}>

                                <div className="row align-items-center">
                                    <div className="border-0 mb-4">
                                        <div
                                            className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                            <h3 className="fw-bold mb-0">Thêm sản phẩm</h3>
                                            {/* Input fields and other form controls */}
                                            <button type="submit" className="btn btn-primary">Thêm</button>
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
                                                            <label className="form-label">Giá sản phẩm</label>
                                                            <input type="number" className="form-control" value={price}
                                                                   onChange={(e) => setPrice(e.target.value)}/>
                                                        </div>
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
                                                    <select
                                                        className="form-select"
                                                        size={7}
                                                        aria-label="size 3 select example"
                                                        value={selectedCategory}
                                                        onChange={e => setSelectedCategory(e.target.value)}
                                                    >
                                                        {buildOptions(categories)}
                                                    </select>
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
                                                                   value={stockQuantity}
                                                                   onChange={(e) => setStockQuantity(e.target.value)}/>

                                                        </div>
                                                        <div className="col-md-12">
                                                            <label className="form-label">Mô tả Sản phẩm</label>

                                                            <ReactQuill
                                                                theme="snow"
                                                                value={description}
                                                                onChange={handleDescriptionChange}
                                                                placeholder={"Mô tả sản phẩm"}
                                                            />

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
                                                            {/*<input type="file" id="input-file-to-destroy"*/}
                                                            {/*       className="dropify"*/}
                                                            {/*       data-allowed-formats="portrait square"*/}
                                                            {/*       data-max-file-size="2M" data-max-height={2000}/>*/}

                                                            <input type="file" multiple onChange={handleFileSelect}/>
                                                            <ul>
                                                                {selectedFiles.map(({file, id}) => (
                                                                    <li key={id}>
                                                                        {file.name}{" "}
                                                                        <button
                                                                            onClick={() => handleRemoveFile(id)}>Remove
                                                                        </button>
                                                                    </li>
                                                                ))}
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Row end  */}
                            </form>
                            {/* Form end  */}


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
                    {/* Modal Cropper*/}
                    <div className="modal docs-cropped" id="getCroppedCanvasModal" tabIndex={-1} aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Cropped</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"/>
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

                    <Notification/>


                </div>
            </div>
        </div>);
    }
;

export default ProductAdd;