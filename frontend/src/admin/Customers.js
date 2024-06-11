import React, { useEffect, useState } from 'react';
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Pagination2 from "./component/Index/Pagination2"; // Updated import
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./redux/actions/CustomerActions";
import { setCurrentPage } from "./redux/actions/CurrentPageAction";
import {useLocation, useNavigate} from "react-router-dom";
import Select from 'react-select';
import removeAccents from 'remove-accents';

const Customers = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);

    const customers = useSelector(state => state.customer.customers);
    const currentPage = useSelector(state => state.page.currentPage);
    const totalPages = useSelector(state => state.customer.totalPages);

    const [searchKeyword, setSearchKeyword] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (!initialized) {
            dispatch(setCurrentPage(0));
            setInitialized(true);
        }
    }, [dispatch, initialized]);

    useEffect(() => {
        if (initialized) {
            dispatch(fetchCustomers(currentPage, 10, searchKeyword));
        }
    }, [dispatch, currentPage, searchKeyword, initialized]);

    const handlePageClick = (data) => {
        dispatch(setCurrentPage(data.selected));
    };

    const handleNavigateCustomerDetail = (customerId) => {
        navigate(`/customer-detail/${customerId}`);
    };

    const handleSearchChange = (inputValue) => {
        dispatch(setCurrentPage(0));
        const value = inputValue || '';
        setSearchKeyword(value);

        if (value.length >= 1) {
            const filteredSuggestions = customers
                .filter(customer => removeAccents(customer.email).toLowerCase().includes(removeAccents(value).toLowerCase()))
                .map(customer => customer.email)
                .slice(0, 3);
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSearchSelect = (selectedOption) => {
        const value = selectedOption ? selectedOption.value : '';
        setSearchKeyword(value);
        setSuggestions([]);
        dispatch(setCurrentPage(0));
    };

    const searchOptions = suggestions.map(suggestion => ({ value: suggestion, label: suggestion }));

    const customStyles = {
        control: (provided) => ({
            ...provided,
            height: '50px',
            fontSize: '16px',
            minWidth: '300px'
        }),
        option: (provided) => ({
            ...provided,
            fontSize: '16px',
            padding: '10px',
            minWidth: '300px'
        }),
        menu: (provided) => ({
            ...provided,
            minWidth: '300px'
        })
    };
    return (
        <div id="ebazar-layout" className="theme-blue">
            {/* sidebar */}
            <Sidebar />
            {/* main body area */}
            <div className="main px-lg-4 px-md-4">
                {/* Body: Header */}
                <Header />
                {/* Body: Body */}
                <div className="body d-flex py-lg-3 py-md-2">
                    <div className="container-xxl">
                        <div className="row align-items-center">
                            <div className="border-0 mb-4">
                                <div
                                    className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                    <h3 className="fw-bold mb-0">Thông tin khách hàng</h3>
                                    <div className="d-flex">
                                        <Select
                                            options={searchOptions}
                                            onChange={handleSearchSelect}
                                            onInputChange={handleSearchChange}
                                            value={searchOptions.find(option => option.value === searchKeyword)}
                                            isClearable
                                            placeholder="Tìm kiếm email"
                                            className="me-2"
                                            styles={customStyles} // Áp dụng các tùy chỉnh CSS
                                        />
                                        <button type="button" className="btn btn-primary" onClick={() => dispatch(fetchCustomers(0, 10, searchKeyword))}>
                                            Tìm kiếm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Row end */}
                        <div className="row clearfix g-3">
                            <div className="col-sm-12">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <table id="myProjectTable" className="table table-hover align-middle mb-0" style={{width: '100%'}}>
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
                                                        <a onClick={() => handleNavigateCustomerDetail(customer.user_id)}>
                                                            <span className="fw-bold ms-1">{customer.full_name || "Unknown"}</span>
                                                        </a>
                                                    </td>
                                                    <td>{new Date(customer.created_at).toLocaleDateString()}</td>
                                                    <td>{customer.email}</td>
                                                    <td>{customer.total_orders || 0}</td>
                                                    <td>{customer.is_admin ? "Admin" : "Khách hàng"}</td>
                                                    <td>
                                                        <div className="btn-group" role="group">
                                                            <button type="button" className="btn btn-outline-secondary" onClick={() => handleNavigateCustomerDetail(customer.user_id)}>
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
