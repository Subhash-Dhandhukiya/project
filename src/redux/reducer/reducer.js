import axios from "axios";

const initialState=false;

const changeLoading=(state=initialState,action)=>{
    switch(action.type){
        case "LOADING_START":
            return true;
        case "LOADING_STOP":
            return false;
        case "CHANGE_COLOR":
            return (
                axios.get('http://www.colr.org/json/color/random')
                    .then((response)=>{
                        console.log(response.data)
                    })
            )
        default:
            return state;
    }
}

export default changeLoading;