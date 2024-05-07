import loginHandler from "./loginHandler"

import { combineReducers } from "@reduxjs/toolkit"

const loginReducer = combineReducers({
    loginHandler
});

export default loginReducer;