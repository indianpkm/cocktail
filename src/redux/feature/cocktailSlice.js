import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchCoktails=createAsyncThunk('cocktails/fetchCocktails',async()=>{
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((res)=>res.json())
})

export const fetchSingleCoktails=createAsyncThunk('cocktails/fetchSingleCocktails',async({id})=>{
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res)=>res.json())
})

export const fetchSearchCoktails=createAsyncThunk('cocktails/fetchSearchCocktails',async({searchText})=>{
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then((res)=>res.json())
})

const cocktailSlice = createSlice({
    name:'cocktails',
    initialState:{
        loading:false,
        cocktails:[],
        error:null,
        cocktail:[]
    },
    extraReducers:{
        [fetchCoktails.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchCoktails.fulfilled]:(state,action)=>{
            state.loading=false
            state.cocktails=action.payload.drinks
        },
        [fetchCoktails.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        [fetchSingleCoktails.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchSingleCoktails.fulfilled]:(state,action)=>{
            state.loading=false
            state.cocktail=action.payload.drinks
        },
        [fetchSingleCoktails.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        [fetchSearchCoktails.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchSearchCoktails.fulfilled]:(state,action)=>{
            state.loading=false
            state.cocktails=action.payload.drinks
        },
        [fetchSearchCoktails.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
    }
})

export default cocktailSlice.reducer;