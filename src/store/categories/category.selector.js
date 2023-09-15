import {
    createSelector
} from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    // array of inputs selectors
    [selectCategoryReducer],
    //the output selector
    (categoriesSlice) => categoriesSlice.categories
)
//creating memoiz selector
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const {
            title,
            items
        } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
)