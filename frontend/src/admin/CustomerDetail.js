import React, {useEffect} from 'react';
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Pagination from "./component/Index/Pagination";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchDetailCustomer} from "./redux/actions/CustomerActions";

const CustomerDetail = () => {
    const dispatch = useDispatch();
    const {customerId} = useParams();

    const customer = useSelector(state => state.customer.detailCustomer);

    useEffect(() => {
        if (customerId) {
            dispatch(fetchDetailCustomer(customerId));
        }
    }, [customerId, dispatch]);


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
                        <div className="row g-3 mb-xl-3">
                            <div className="col-xxl-4 col-xl-12 col-lg-12 col-md-12">
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
                                                            className="text-muted small">ID : {customer.user_id}</span>
                                                    </div>
                                                </div>
                                                <div className="profile-info w-100">
                                                    <h6 className="mb-0 mt-2 fw-bold d-block fs-6 text-center">{customer.full_name}</h6>

                                                    <span
                                                        className="py-1 fw-bold small-11 mb-0 mt-1 text-muted text-center mx-auto d-block">{customer.is_admin ? "Admin" : "Khách hàng"}</span>
                                                    <div className="row g-2 pt-2">
                                                        <div className="col-xl-12">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-email"/>
                                                                <span className="ms-2">{customer.email}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-address-book"/>
                                                                <span className="ms-2">{customer.address}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-8 col-xl-12 col-lg-12 col-md-12">
                                <div className="card">
                                    <div
                                        className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                        <h6 className="mb-0 fw-bold ">Customer Order</h6>
                                    </div>
                                    <div className="card-body">
                                        <table id="myProjectTable" className="table table-hover align-middle mb-0"
                                               style={{width: '100%'}}>
                                            <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Item</th>
                                                <th>Payment Info</th>
                                                <th>Order Date</th>
                                                <th>Price</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-78414</strong></a></td>
                                                <td><img src="assets/images/product/product-1.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span> Oculus VR </span>
                                                </td>
                                                <td>Credit Card</td>
                                                <td>June 16, 2021</td>
                                                <td>
                                                    $420
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-58414</strong></a></td>
                                                <td><img src="assets/images/product/product-2.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Wall Clock</span>
                                                </td>
                                                <td>Debit Card</td>
                                                <td>June 16, 2021</td>
                                                <td>
                                                    $220
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-48414</strong></a></td>
                                                <td><img src="assets/images/product/product-3.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Note Diaries</span>
                                                </td>
                                                <td>Debit Card</td>
                                                <td>June 16, 2021</td>
                                                <td>
                                                    $250
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-38414</strong></a></td>
                                                <td><img src="assets/images/product/product-4.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Flower Port</span>
                                                </td>
                                                <td>Credit Card</td>
                                                <td>June 16, 2021</td>
                                                <td>
                                                    $320
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-28414</strong></a></td>
                                                <td><img src="assets/images/product/product-1.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Oculus VR</span>
                                                </td>
                                                <td>Debit Card</td>
                                                <td>June 17, 2021</td>
                                                <td>
                                                    $20
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-18414</strong></a></td>
                                                <td><img src="assets/images/product/product-2.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Wall Clock</span>
                                                </td>
                                                <td>Debit Card</td>
                                                <td>June 18, 2021</td>
                                                <td>
                                                    $820
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-11414</strong></a></td>
                                                <td><img src="assets/images/product/product-3.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Note Diaries</span>
                                                </td>
                                                <td>Bank Emi</td>
                                                <td>March 16, 2021</td>
                                                <td>
                                                    $620
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-27414</strong></a></td>
                                                <td><img src="assets/images/product/product-5.jpg"
                                                         className="avatar lg rounded me-2"
                                                         alt="profile-image"/><span>Bag</span></td>
                                                <td>Debit Card</td>
                                                <td>June 18, 2021</td>
                                                <td>
                                                    $820
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="order-details.html"><strong>#Order-78514</strong></a></td>
                                                <td><img src="assets/images/product/product-6.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Rado Watch</span>
                                                </td>
                                                <td>Bank Emi</td>
                                                <td>March 16, 2021</td>
                                                <td>
                                                    $620
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <Pagination/>

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