import React from 'react';
import $ from 'jquery';
import  '../../assets/plugin/datatables/dataTables.bootstrap5.min.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

const MyDataTable = () => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div  >
                <label style={{marginRight :"10px"}} >Show</label>
                <label>
                    <select name="myDataTable_length" aria-controls="myDataTable"
                            className="form-select form-select-sm">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </label>
                <label style={{marginLeft :"10px"}}>entries</label>
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
