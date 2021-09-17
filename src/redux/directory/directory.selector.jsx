import {createSelector} from "reselect";

const selectDirectory = state => state.directory;

export const  directorySection = createSelector(
    [selectDirectory],
    (directory) => directory.sections
)