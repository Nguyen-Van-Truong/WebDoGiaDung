import React from 'react';
import ReactPaginate from "react-paginate";
import '../../css/styles.css'

    function Pagination({ onPageChange, pageCount }) {
        return (
            <ReactPaginate

                nextLabel="Trang sau>"
                onPageChange={onPageChange}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< Trang trước"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination pagination-centered"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        );
    };

export default Pagination ;