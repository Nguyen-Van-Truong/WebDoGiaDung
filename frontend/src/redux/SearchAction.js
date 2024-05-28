
export const SET_SEARCH_ITEMS ="SET_SEARCH_ITEMS "
export const  CLICK_SEARCH_SUCCESS ="CLICK_SEARCH_SUCCESS";
export const set_search_items = (keyword) => (
    {
        type : SET_SEARCH_ITEMS,
        payload : keyword

    })
    export const click_search_success=()=>({
        type: CLICK_SEARCH_SUCCESS
    }
)
