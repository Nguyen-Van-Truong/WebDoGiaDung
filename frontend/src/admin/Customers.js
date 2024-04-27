import React, {useEffect} from 'react';
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Pagination2 from "./component/Index/Pagination2"; // Updated import
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./redux/actions/CustomerActions";
import { setCurrentPage } from "./redux/actions/CurrentPageAction"; // Ensure this action exists

const Customers = () => {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customer.customers);
    const currentPage = useSelector(state => state.page.currentPage);
    const totalPages = useSelector(state => state.customer.totalPages);

    useEffect(() => {
        dispatch(fetchCustomers(currentPage, 10));
    }, [dispatch, currentPage]);

    const handlePageClick = (data) => {
        const selectedPage = data.selected;
        dispatch(setCurrentPage(selectedPage));
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
                <div className="body d-flex py-lg-3 py-md-2">
                    <div className="container-xxl">
                        <div className="row align-items-center">
                            <div className="border-0 mb-4">
                                <div
                                    className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                    <h3 className="fw-bold mb-0">Thông tin khách hàng</h3>
                                    <div className="col-auto d-flex w-sm-100">
                                        <button type="button" className="btn btn-primary btn-set-task w-sm-100"
                                                data-bs-toggle="modal" data-bs-target="#expadd"><i
                                            className="icofont-plus-circle me-2 fs-6"/>Add Customers
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Row end  */}
                        <div className="row clearfix g-3">
                            <div className="col-sm-12">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <table id="myProjectTable" className="table table-hover align-middle mb-0"
                                               style={{width: '100%'}}>
                                            <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Khách hàng</th>
                                                <th>Ngày đăng kí</th>
                                                <th>Mail</th>
                                                <th>Tổng đơn hàng</th>
                                                <th>QUYỀN</th>
                                                <th></th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            {customers.map(customer => (
                                                <tr key={customer.user_id}>
                                                    <td><strong>{customer.user_id}</strong></td>
                                                    <td>
                                                        <a href={`customer-detail/${customer.user_id}`}>
                                                            <span
                                                                className="fw-bold ms-1">{customer.full_name || "Unknown"}</span>
                                                        </a>
                                                    </td>
                                                    <td>{new Date(customer.created_at).toLocaleDateString()}</td>
                                                    <td>{customer.email}</td>
                                                    <td>{customer.total_orders || 0}</td>
                                                    <td>{customer.is_admin ? "Admin" : "Khách hàng"}</td>
                                                    <td>
                                                        <div className="btn-group" role="group">
                                                            <button type="button" className="btn btn-outline-secondary"
                                                                    data-bs-toggle="modal" data-bs-target="#expedit">
                                                                <i className="icofont-edit text-success"/>
                                                            </button>
                                                        </div>
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
                        {/* Row End */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;