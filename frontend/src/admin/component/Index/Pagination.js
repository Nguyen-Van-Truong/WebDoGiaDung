import React from 'react';
import ReactPaginate from "react-paginate";

function Pagination() {

    const  handlePageClick =()=>{

    }
    return (
        <ReactPaginate
            nextLabel="Trang sau>"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={14}
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
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination ;