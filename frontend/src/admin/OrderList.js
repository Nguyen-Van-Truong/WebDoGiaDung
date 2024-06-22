import React, {useEffect, useState} from 'react';
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Pagination from "./component/Index/Pagination"; // Make sure this is the right path
import {formatCurrency, shortenProductName} from "./utils/utils";
import Pagination2 from "./component/Index/Pagination2";
import {useDispatch, useSelector} from "react-redux";
import {fetchOrders} from "./redux/actions/OrderActions";
import {setCurrentPage} from "./redux/actions/CurrentPageAction";
import {useNavigate} from "react-router-dom";

const Orderlist = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {orders, totalPages, loading, error} = useSelector(state => state.orderReducer);

    const currentPage = useSelector(state => state.page.currentPage);

    useEffect(() => {
        dispatch(fetchOrders(currentPage, 5));
    }, [dispatch, currentPage]);

    const handlePageClick = (data) => {
        const selectedPage = data.selected;
        dispatch(setCurrentPage(selectedPage));
    };

    const handleRowClick = (order) => {
        navigate(`/order-details-admin/${order.orderId}`);
    };


    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;

    return (
        <div id="ebazar-layout" className="theme-blue">
            <Sidebar/>
            <div className="main px-lg-4 px-md-4">
                <Header/>
                <div className="body d-flex py-3">
                    <div className="container-xxl">
                        <div className="row align-items-center">
                            <div className="border-0 mb-4">
                                <div
                                    className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                    <h3 className="fw-bold mb-0">Danh sách đơn hàng</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3 mb-3">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <table id="myDataTable" className="table table-hover align-middle mb-0"
                                               style={{width: '100%'}}>
                                            <thead>
                                            <tr>
                                                <th style={{width: '1%'}}>Id</th>
                                                <th style={{width: '33%'}}>Items</th>
                                                <th> TÊN KHÁCH HÀNG</th>
                                                <th>NGÀY ĐẶT HÀNG</th>
                                                <th>TỔNG CỘNG</th>
                                                <th>TRẠNG THÁI</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {orders.map(order => (
                                                <tr key={order.orderId} onClick={() => handleRowClick(order)}>
                                                    <td><a
                                                        href={`order-details.html?orderId=${order.orderId}`}><strong>{order.orderId}</strong></a>
                                                    </td>
                                                    <td>
                                                        {order.orderDetails.map((item, index) => (
                                                            <div key={index} className="item-details">
                                                                <img src={item.product.imageUrl}
                                                                     className="avatar lg rounded me-2" alt="product"/>
                                                                <span>{shortenProductName(item.product.productName)} - Số lượng: {item.quantity} - Tổng giá: {formatCurrency(item.price)} VNĐ</span>
                                                            </div>
                                                        ))}
                                                    </td>
                                                    <td>{order.user.fullName}</td>
                                                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                                                    <td>${order.total.toFixed(2)}</td>
                                                    <td><span
                                                        className="badge bg-warning">{order.status || 'Pending'}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                        <Pagination2 onPageChange={handlePageClick} pageCount={totalPages}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orderlist;
