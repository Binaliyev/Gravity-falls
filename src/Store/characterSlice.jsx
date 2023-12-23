import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    characters: []
}
const characterSlice = createSlice({
    name:"character",
    initialState,
    reducers:{
        fechFromCharacter:(state, action) => {
            state.characters = action.payload
        }
    }
})

export const { fechFromCharacter } =  characterSlice.actions
export const RenderCharacters = (option) => async (dispatch) => {
    try{
        const response = await axios.get(`https://rest-ful-api-beryl.vercel.app/characters?${option}`)
        if (response.status === 200) {
            dispatch(fechFromCharacter(response.data))
        }
    }catch(error){
        console.log(error);
    }
}

export default characterSlice.reducer