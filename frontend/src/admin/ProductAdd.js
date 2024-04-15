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
import ImageUploader from "./component/ImageUploader";


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
            console.log("handleFileSelectEdit");

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
                                                            <ImageUploader
                                                                selectedFiles={selectedFiles}
                                                                handleFileSelect={handleFileSelect}
                                                                handleRemoveFile={handleRemoveFile}
                                                            />
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
                    <Notification/>

                </div>
            </div>
        </div>);
    }
;

export default ProductAdd;