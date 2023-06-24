import {LoginType} from "../actionType"

const block={
    loading:false,
    error:"",
    sucess:"",
}
const initialState={
    initialTable:{
        ...block,
        tabledata:[],
    },
};
export default (state=initialState,action) => {
    switch (action.type) {
    case LoginType.LOGIN_REQUEST:
            return{
                ...state,
                initialTable:{
                    ...state.initialTable,
                    loading:true,
                },
            };
    case LoginType.LOGIN_SUCESS:
        return{
            ...state,
            initialTable:{
                ...state.initialTable,
                tabledata:[...action.payload],
                loading:false,
            },
        };
    case LoginType.LOGIN_ERROR:
        return{
            ...state,
            initialTable:{
                ...state.initialTable,
                tabledata:[],
                loading:false,
            }
        }
        default:
           return state;
    }
}