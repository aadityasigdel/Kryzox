import { createSlice } from "@reduxjs/toolkit";
const initialState={
    tournaments:[],
    isTyping:false,
    searchInput:null,
    // This oene is for storing filtered tournaments based on search input
    // global loading state
    tournamentLoading:false,
}
const tournamentSlices = createSlice({
    name:"tournamentslice",
    initialState,
    reducers:{
        setTournaments:(state,action)=>{
            state.tournaments=action.payload;
        },
        setSearchInput:(state,action)=>{
            state.searchInput=action.payload;
        },
        setTournamentLoading:(state,action)=>{
            state.tournamentLoading=action.payload;
        },
    },
});
export const {setTournaments,setSearchInput,setTournamentLoading}=tournamentSlices.actions;
export default tournamentSlices.reducer;