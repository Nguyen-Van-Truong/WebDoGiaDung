import React, {useEffect} from 'react';
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Pagination from "./component/Index/Pagination";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCustomerDetailOrders} from "./redux/actions/CustomerActions";
import {formatCurrency, shortenProductName} from "./utils/utils";
import Pagination2 from "./component/Index/Pagination2";

const CustomerDetail = () => {
    const {userId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {detailCustomerData, detailCustomer, error, totalPages} = useSelector(state => state.customer);
    const orders = detailCustomer.orders || []; // Safe fallback

    useEffect(() => {
        if (userId) {
            dispatch(fetchCustomerDetailOrders(userId, 0, 5, 'desc', 'orderDate'));
        }
    }, [userId, dispatch]);

    if (error) return <div>Error: {error}</div>;
    if (!detailCustomerData) return <div>Loading...</div>;

    const handlePageClick = (data) => {
        const selectedPage = data.selected;
        dispatch(fetchCustomerDetailOrders(userId, selectedPage, 5, 'desc', 'orderDate'));
    };
    const handleOrderClick = (order) => {
        navigate(`/order-details-admin/${order.orderId}`);
    };
    console.log(orders);
    console.log(detailCustomer);
    // if (error) return <div>Error: {error}</div>;
    // if (!orders) return <div>Loading...</div>;

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
                                    <h3 className="fw-bold mb-0">Chi tiết khách hàng</h3>
                                </div>
                            </div>
                        </div>
                        {/* Row end  */}
                        <div className="row g-3 mb-xl-3 justify-content-center">
                            <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12">
                                <div
                                    className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-1 row-deck g-3">
                                    <div className="col">
                                        <div className="card profile-card">
                                            <div
                                                className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                <h6 className="mb-0 fw-bold ">Hồ sơ</h6>
                                            </div>
                                            <div className="card-body d-flex profile-fulldeatil flex-column">
                                                <div className="profile-block text-center w220 mx-auto">
                                                    <div
                                                        className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                                                        <span
                                                            className="text-muted small">ID : {detailCustomer.user_id}</span>
                                                    </div>
                                                </div>
                                                <div className="profile-info w-100">
                                                    <h6 className="mb-0 mt-2 fw-bold d-block fs-6 text-center">{detailCustomer.full_name}</h6>

                                                    <span
                                                        className="py-1 fw-bold small-11 mb-0 mt-1 text-muted text-center mx-auto d-block">{detailCustomer.is_admin ? "Admin" : "Khách hàng"}</span>
                                                    <div className="row g-2 pt-2">
                                                        <div className="col-xl-12">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-email"/>
                                                                <span className="ms-2">{detailCustomer.email}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-address-book"/>
                                                                <span className="ms-2">{detailCustomer.address}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-3 mb-3">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card mt-4">
                                        <div className="card-body">
                                            <table className="table table-hover align-middle mb-0">
                                                <thead>
                                                <tr>
                                                    <th>Order ID</th>
                                                    <th>Items</th>
                                                    <th>Customer Name</th>
                                                    <th>Order Date</th>
                                                    <th>Total</th>
                                                    <th>Status</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {detailCustomerData.flatMap(customer =>
                                                    customer.orders.map((order, idx) => (
                                                        <tr key={order.orderId} onClick={() => handleOrderClick(order)}>
                                                            <td><a
                                                                href={`order-details.html?orderId=${order.orderId}`}>{order.orderId}</a>
                                                            </td>
                                                            <td>
                                                                {order.orderDetails.map((item, itemIdx) => (
                                                                    <div key={itemIdx} className="item-details">
                                                                        <img src={item.product.imageUrl}
                                                                             className="avatar lg rounded me-2"
                                                                             alt="product"/>
                                                                        <span>{shortenProductName(item.product.productName)} - Số lượng: {item.quantity} - Tổng giá: {formatCurrency(item.price)} VNĐ</span>
                                                                    </div>
                                                                ))}
                                                            </td>
                                                            <td>{order.user.fullName}</td>
                                                            <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                                                            <td>{formatCurrency(order.total)}</td>
                                                            <td><span
                                                                className="badge bg-warning">{order.status || 'Pending'}</span>
                                                            </td>
                                                        </tr>
                                                    ))
                                                )}
                                                </tbody>
                                            </table>
                                            <Pagination2 onPageChange={handlePageClick} pageCount={totalPages}/>
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

export default CustomerDetail;
