

import i18n from '../i18n';
import {createSlice} from "@reduxjs/toolkit";

const languageReducer = createSlice({
    name: 'language',
    initialState: 'vi',
    reducers: {
        changeLanguage: (state, action) => {
            const newLanguage = action.payload;
            i18n.changeLanguage(newLanguage);
            return newLanguage;
        },
    },
});

export const { changeLanguage } = languageReducer.actions;
export default languageReducer.reducer;
