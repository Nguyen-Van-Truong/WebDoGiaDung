import React, { useEffect, useState } from 'react';
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import { useParams } from "react-router-dom";
import { formatCurrency } from "./utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderDetails, updateOrderStatus } from "./redux/actions/OrderActions";

const OrderDetails = () => {
    const { orderId } = useParams();
    const dispatch = useDispatch();
    const { orderDetails, loading, error } = useSelector(state => state.orderReducer);
    const [orderStatus, setOrderStatus] = useState('');
    const statusOptions = ["Chưa xác nhận", "Đã xác nhận", "Đang giao", "Đã giao", "Đã hủy"];

    useEffect(() => {
        dispatch(fetchOrderDetails(orderId));
    }, [dispatch, orderId]);

    useEffect(() => {
        if (orderDetails) {
            setOrderStatus(orderDetails.status);
        }
    }, [orderDetails]);

    const handleStatusChange = (e) => {
        setOrderStatus(e.target.value);
    };

    const handleUpdateStatus = () => {
        dispatch(updateOrderStatus(orderId, orderStatus));
    };

    const order = orderDetails;

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
                                <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                    <h3 className="fw-bold mb-0">Chi tiết đơn hàng: #{order?.orderId}</h3>
                                </div>
                            </div>
                        </div>
                        {/* Row end  */}
                        <div className="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
                            <div className="col">
                                <div className="alert-success alert mb-0">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar rounded no-thumbnail bg-success text-light">
                                            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true" />
                                        </div>
                                        <div className="flex-fill ms-3 text-truncate">
                                            <div className="h6 mb-0">Ngày đặt hàng</div>
                                            <span className="small">{new Date(order?.orderDate).toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="alert-danger alert mb-0">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar rounded no-thumbnail bg-danger text-light">
                                            <i className="fa fa-user fa-lg" aria-hidden="true" />
                                        </div>
                                        <div className="flex-fill ms-3 text-truncate">
                                            <div className="h6 mb-0">Khách hàng</div>
                                            <span className="small">{order?.user?.fullName || 'N/A'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="alert-warning alert mb-0">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar rounded no-thumbnail bg-warning text-light">
                                            <i className="fa fa-envelope fa-lg" aria-hidden="true" />
                                        </div>
                                        <div className="flex-fill ms-3 text-truncate">
                                            <div className="h6 mb-0">Email</div>
                                            <span className="small">{order?.user?.email || 'N/A'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="alert-info alert mb-0">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar rounded no-thumbnail bg-info text-light">
                                            <i className="fa fa-phone-square fa-lg" aria-hidden="true" />
                                        </div>
                                        <div className="flex-fill ms-3 text-truncate">
                                            <div className="h6 mb-0">Contact No</div>
                                            <span className="small">{order?.user?.phone || 'N/A'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Row end  */}
                        <div className="row g-3 mb-3 row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 row-deck">
                            <div className="col">
                                <div className="card auth-detailblock">
                                    <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                        <h6 className="mb-0 fw-bold">Địa chỉ giao hàng</h6>
                                        <a href="#" className="text-muted">Edit</a>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label className="form-label col-6 col-sm-5">Địa chỉ:</label>
                                                <span><strong>{order?.shippingAddress || 'N/A'}</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-xxl-4">
                                <div className="card mb-3">
                                    <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                        <h6 className="mb-0 fw-bold">Trạng thái đơn hàng</h6>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row g-3 align-items-center">
                                                <div className="col-md-12">
                                                    <label className="form-label">Tình trạng đặt hàng</label>
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        value={orderStatus}
                                                        onChange={handleStatusChange}
                                                    >
                                                        {statusOptions.map((status, index) => (
                                                            <option key={index} value={status}>
                                                                {status}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn btn-primary mt-4 text-uppercase"
                                                onClick={handleUpdateStatus}
                                            >
                                                Cập nhật
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Row end  */}
                        <div className="row g-3 mb-3">
                            <div className="col-xl-12 col-xxl-12">
                                <div className="card">
                                    <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                        <h6 className="mb-0 fw-bold">Chi tiết các đơn hàng</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="product-cart">
                                            <div className="checkout-table table-responsive">
                                                <table id="myCartTable" className="table display dataTable table-hover align-middle" style={{ width: '100%' }}>
                                                    <thead>
                                                    <tr>
                                                        <th>SẢN PHẨM</th>
                                                        <th className="quantity">SỐ LƯỢNG</th>
                                                        <th className="price">GIÁ</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {order?.orderDetails?.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={item.product?.imageUrl} className="avatar rounded me-2" alt="product" />
                                                                    {item.product?.productName || 'N/A'}
                                                                </div>
                                                            </td>
                                                            <td>{item.quantity || 'N/A'}</td>
                                                            <td>{formatCurrency(item.price || 0)}</td>
                                                        </tr>
                                                    )) || <tr><td colSpan="3">No order details found</td></tr>}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="checkout-coupon-total checkout-coupon-total-2 d-flex flex-wrap justify-content-end">
                                                <div className="checkout-total">
                                                    <div className="single-total">
                                                        <p className="value">Giá phụ:</p>
                                                        <p className="price">{formatCurrency(0)}</p>
                                                    </div>
                                                    <div className="single-total">
                                                        <p className="value">Chi phí vận chuyển (+):</p>
                                                        <p className="price">{formatCurrency(0)}</p>
                                                    </div>
                                                    <div className="single-total">
                                                        <p className="value">Giảm giá (-):</p>
                                                        <p className="price">{formatCurrency(0)}</p>
                                                    </div>
                                                    <div className="single-total">
                                                        <p className="value">Thuế (0%):</p>
                                                        <p className="price">{formatCurrency(0)}</p>
                                                    </div>
                                                    <div className="single-total total-payable">
                                                        <p className="value">Tổng số tiền phải trả:</p>
                                                        <p className="price">{formatCurrency(order?.total || 0)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Row end  */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
