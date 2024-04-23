// frontend/src/admin/ProductEdit.js
import React, {useEffect, useRef, useState} from 'react';
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
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
import {
    setDescription, setPrice, setProductDetails,
    setProductName,
    setQuantity,
    setSelectedCategory, setStockQuantity,
    setTotalQuantity
} from "./redux/actions/ProductActions";
import {fetchCategories} from "./Api/CategoryApi";
import {showNotification} from "./redux/actions/NotificationsActions";
import Notification from "./component/Notification";
import ImageUploader from "./component/ImageUploader";
import {addProduct, fetchProductDetails} from "./Api/ProductApi";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const ProductEdit = () => {
    // dispatch action
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {productId} = useParams();

    const totalQuantity = useSelector((state) => state.productAdmin.totalQuantity);
    const [baseQuantity, setBaseQuantity] = useState(0);

    const productName = useSelector(state => state.productAdmin.productName);
    const description = useSelector(state => state.productAdmin.description);
    const price = useSelector(state => state.productAdmin.price_reducer);
    const stockQuantity = useSelector(state => state.productAdmin.stockQuantity);
    const selectedCategory = useSelector(state => state.productAdmin.selectedCategory);
    const categories = useSelector((state) => state.category.categories);
    const mediaUrls = useSelector(state => state.productAdmin.mediaUrls);

    const [newPrice, setNewPrice] = useState('');

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [filesToDelete, setFilesToDelete] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        dispatch(fetchCategories());
        fetchProductDetails(productId).then(productDetails => {
            dispatch(setProductDetails(productDetails));
            setBaseQuantity(productDetails.stock_quantity);//luu so luong san pham co san trong kho

            if (productDetails.mediaUrls) {
                const initialImages = productDetails.mediaUrls.map(url => ({
                    id: url,
                    url: url,
                }));
                setSelectedFiles(initialImages);
            }

        }).catch(error => {
            setError('Failed to load product details');
            dispatch(showNotification(`Failed to load product details: ${error.message}`, 'error'));
        }).finally(() => {
            setLoading(false);
        });
    }, [dispatch, productId]);

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
        dispatch(setTotalQuantity(baseQuantity + inputQuantity));

        dispatch(setStockQuantity(event.target.value));
    };

    const prepareFormData = () => {
        const productData = {
            productName,
            description,
            price: newPrice ? parseFloat(newPrice) : parseFloat(price),
            stockQuantity: parseInt(totalQuantity, 10),
            categoryId: parseInt(selectedCategory, 10),
        };

        const formData = new FormData();
        formData.append("product", new Blob([JSON.stringify(productData)], {type: "application/json"}));

        selectedFiles.forEach(file => {
            if (file.file) { // This ensures we are dealing with new files
                formData.append('files', file.file);
            }
        });

        if (filesToDelete.length > 0) {
            filesToDelete.forEach(file => {
                formData.append('filesToDelete', file);
            });
        }

        return formData;
    };

    const logFormData = (formData) => {
        for (let [key, value] of formData.entries()) {
            if (value instanceof Blob) {
                // For Blob data, log its type and size for better readability
                console.log(`${key}: Blob with type ${value.type} and size ${value.size}`);
                // If it's a JSON Blob, you might want to read it and log its contents
                if (value.type === "application/json") {
                    const reader = new FileReader();
                    reader.onload = function () {
                        console.log(`${key}: JSON content -`, JSON.parse(reader.result));
                    };
                    reader.readAsText(value);
                }
            } else {
                // Directly log the value if it's not a Blob
                console.log(`${key}:`, value);
            }
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = prepareFormData();
        logFormData(formData);
        await submitProductUpdate(formData);
    };

    const submitProductUpdate = async (formData) => {
        const config = {
            headers: {'Content-Type': 'multipart/form-data'}
        };

        try {
            setLoading(true);
            const response = await axios.put(`/api/products/update/${productId}`, formData, config);
            dispatch(showNotification('Sản phẩm đã cập nhật thành công', 'success'));


            // clearForm();
            // navigate('/product-list'); // Navigate to product list page
        } catch (error) {
            console.error('Failed to update product:', error);
            dispatch(showNotification(`Failed to update product: ${error.response?.data?.message || error.message}`, 'error'));
        } finally {
            setLoading(false);
        }
    };

    const clearForm = () => {
        dispatch(setProductName(''));
        dispatch(setDescription(''));
        dispatch(setPrice('')); // Consider if you need to reset the original price
        setNewPrice('');  // Reset new price
        dispatch(setStockQuantity(''));
        setSelectedFiles([]);
        setFilesToDelete([]);
    };



    const validateForm = (productName, price, stockQuantity, selectedCategory, selectedFiles) => {
        let errors = [];
        if (!productName.trim()) errors.push('Tên sản phẩm là bắt buộc.');
        if (!price) errors.push('Giá sản phẩm là bắt buộc.');
        if (stockQuantity === '' || stockQuantity < 0) errors.push('Số lượng sản phẩm là bắt buộc và phải là số dương.');
        if (!selectedCategory) errors.push('Bạn phải chọn một danh mục.');
        if (!selectedFiles.length) errors.push('Ít nhất một hình ảnh sản phẩm là bắt buộc.');
        return errors;
    };


// dùng thư viện react-quill để tạo trình soạn thảo
    const handleDescriptionChange = (content, delta, source, editor) => {
        dispatch(setDescription(editor.getHTML()));
    };

    const handleFileSelect = (event) => {
        console.log("handleFileSelectEdit");

        const newFiles = Array.from(event.target.files).filter(file => file.type.startsWith('image/')).map(file => ({
            file,
            id: Date.now() + Math.random()
        }));
        setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]);
        console.log(newFiles);
        console.log("selectedFiles:" + selectedFiles);
    };

    const handleRemoveFile = (fileId) => {
        setSelectedFiles(prevFiles => prevFiles.filter(file => file.id !== fileId));
        console.log("handleRemoveFile:" + selectedFiles);

    };

    const removeExistingFile = (fileId) => {
        setFilesToDelete(prev => [...prev, fileId]); // Add to deletion list
        setSelectedFiles(prevFiles => prevFiles.filter(file => file.id !== fileId));
        console.log("removeExistingFile:" + selectedFiles);

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
                                            <h3 className="fw-bold mb-0">Chỉnh sửa sản phẩm</h3>
                                            {/* Input fields and other form controls */}
                                            <button type="submit" className="btn btn-primary">Lưu</button>
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

                                                        <div className="row g-3 align-items-center">
                                                            <div className="col-md-12">
                                                                <label className="form-label">Giá sản phẩm hiện
                                                                    tại</label>
                                                                <input type="text" className="form-control"
                                                                       value={price} readOnly/>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <label className="form-label">Giá sản phẩm mới</label>
                                                                <input type="text" className="form-control"
                                                                       value={newPrice}
                                                                       onChange={(e) => setNewPrice(e.target.value)}/>
                                                            </div>

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
                                                        onChange={e => dispatch(setSelectedCategory(e.target.value))}
                                                    >
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
                                                            <label className="form-label">Tổng số lượng hàng tồn
                                                                kho</label>
                                                            <input type="text" className="form-control"
                                                                   value={totalQuantity}
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
                                                            <input type="text" className="form-control"
                                                                   value={productName}
                                                                   onChange={(e) => dispatch(setProductName(e.target.value))}/>

                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="form-label">Số lượng thay đổi</label>
                                                            <input type="number" className="form-control"
                                                                   value={stockQuantity}
                                                                   onChange={handleQuantityChange}/>

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
                                                                removeExistingFile={removeExistingFile}
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
        </div>
    );
};

export default ProductEdit;
