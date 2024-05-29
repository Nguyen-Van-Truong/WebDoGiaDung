import axios from 'axios';


export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';
export const  SELECTED_CATEGORY = 'SELECTED_CATEGORY';
export  const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';
export const selectedCategory =()=>({
    type : SELECTED_CATEGORY
})
export  const   setSelectedCategory =  (selectedCategory)=>({
    type : SET_SELECTED_CATEGORY,
    payload : selectedCategory
})


