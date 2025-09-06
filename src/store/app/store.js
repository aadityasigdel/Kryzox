import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../slices/auth.slice";
import tournamentSlice from "../slices/tournament.slice";
const store=configureStore({
    reducer:{
        auth:authSlice,
        tournament:tournamentSlice,
    }
});

export default store;