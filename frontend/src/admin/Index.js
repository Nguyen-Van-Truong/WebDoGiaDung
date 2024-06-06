import React, {useState, useEffect, useRef} from 'react';
import $ from 'jquery';
import 'datatables.net-responsive';
import './assets/css/ebazar.style.min.css';
import './assets/plugin/datatables/responsive.dataTables.min.css';
import './assets/css/main.css'
import Sidebar from "./component/Sidebar";
import DashboardSummary from "./component/Index/DashboardSummary";
import MyDataTable from "./component/Index/MyDataTable";
import './assets/css/ebazar.style.min.css'
import Pagination from "./component/Index/Pagination";
import Header from "./component/Header";
import Pagination2 from "./component/Index/Pagination2";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchOrders, setCurrentPage} from "./redux/actions/OrderActions";
import {formatCurrency, shortenProductName} from "./utils/utils";
import {fetchStatistics} from "./redux/actions/statisticsActions";

const Index = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {orders, totalPages, loading, error} = useSelector(state => state.orderReducer);
    const currentPage = useSelector(state => state.page.currentPage);
    const statistics = useSelector(state => state.statisticsReducer.statistics);

    useEffect(() => {
        dispatch(fetchOrders(currentPage, 5));
        dispatch(fetchStatistics());
    }, [dispatch, currentPage]);

    const handlePageClick = (data) => {
        const selectedPage = data.selected;
        dispatch(setCurrentPage(selectedPage));
    };

    const handleRowClick = (order) => {
        navigate(`/order-details-admin/${order.orderId}`);
    };

    return (
        <div>
            <>
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
                                <div
                                    className="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
                                    <div className="col">
                                        <div className="alert-success alert mb-0">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar rounded no-thumbnail bg-success text-light">
                                                    <i className="fa fa-dollar fa-lg"/>
                                                </div>
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <div className="h6 mb-0">Doanh thu</div>
                                                    <span
                                                        className="small">{formatCurrency(statistics.totalRevenue)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="alert-danger alert mb-0">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar rounded no-thumbnail bg-danger text-light">
                                                    <i className="fa fa-credit-card fa-lg"/>
                                                </div>
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <div className="h6 mb-0">Tổng số sản phẩm đã bán</div>
                                                    <span className="small">{statistics.totalProductsSold}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="alert-warning alert mb-0">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar rounded no-thumbnail bg-warning text-light">
                                                    <i className="fa fa-smile-o fa-lg"/>
                                                </div>
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <div className="h6 mb-0">Tổng số đơn đặt hàng</div>
                                                    <span className="small">{statistics.totalOrders}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="alert-info alert mb-0">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar rounded no-thumbnail bg-info text-light">
                                                    <i className="icofont-shopping-cart fs-3 color-lavender-purple" aria-hidden="true"/>
                                                </div>
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <div className="h6 mb-0">Số giỏ hàng đang hoạt động</div>
                                                    <span className="small">{statistics.totalActiveCarts}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Row end  */}

                                <div className="row g-3">
                                    <div className="col-lg-12 col-md-12">
                                        <div
                                            className="tab-filter d-flex align-items-center justify-content-between mb-3 flex-wrap"></div>
                                        <DashboardSummary statistics={statistics} />

                                    </div>
                                </div>
                            </div>
                            {/* Row end  */}
                            <div className="row g-3 mb-3">
                                <div className="col-xl-12"></div>
                            </div>
                            {/* Row end  */}

                            <div className="row g-3 mb-3">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div
                                            className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                            <h6 className="m-0 fw-bold">Danh sách đơn hàng</h6>
                                        </div>
                                        <div className="card-body">
                                            <table id="myDataTable" className="table table-hover align-middle mb-0"
                                                   style={{width: '100%'}}>
                                                <thead>
                                                <tr>
                                                    <th style={{width: '1%'}}>Id</th>
                                                    <th style={{width: '33%'}}>Items</th>
                                                    <th>TÊN KHÁCH HÀNG</th>
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
                                                                         className="avatar lg rounded me-2"
                                                                         alt="product"/>
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

                            {/* Row end  */}
                        </div>
                    </div>
                </div>
                {/* Jquery Core Js */}
                {/* Plugin Js */}
                {/* Jquery Page Js */}
            </>

        </div>
    );
}

export default Index;
