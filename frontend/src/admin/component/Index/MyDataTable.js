import React from 'react';
import $ from 'jquery';
import  '../../assets/plugin/bootstrap-select/css/bootstrap-select.css.map';

const MyDataTable = () => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="dataTables_length" id="myDataTable_length">
                <label>Show
                    <select name="myDataTable_length" aria-controls="myDataTable"
                            className="form-select form-select-sm">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select> entries
                </label>
            </div>
            <div id="myDataTable_filter" className="dataTables_filter">
                <label>Search:
                    <input type="search" className="form-control form-control-sm" placeholder=""
                           aria-controls="myDataTable"/>
                </label>
            </div>
        </div>
    );
};

export default MyDataTable;
