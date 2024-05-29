

export const  CURRENT_PAGE = 'CURRENT_PAGE';
export  const  SET_CURRENT_PAGE ='SET_CURRENT_PAGE'
export  const  PAGE_COUNT = 'PAGE_COUNT'
export const  SET_PAGE_COUNT = 'SET_PAGE_COUNT'
export const  currentPage = () => ({
    type : CURRENT_PAGE
})
export  const  setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    payload : currentPage,
})
export const  pageCount =() =>({
    type : PAGE_COUNT
})
export  const  setPageCount = (pageCount)=> ({
    type : SET_PAGE_COUNT,
    payload: pageCount
})