export const registerUserReducer =(state={}, action)=>{


    switch(action.type)
    {
        case 'USER_REGISTER_REQUEST': return{
            laoding:true
        }
        case 'USER_REGISTER_SUCESS': return{
            laoding:false,
            sucess:true
        }
        case 'USER_REGISTER_FAILED': return{
            laoding:false,
            error:action.payload
        }
        default : return state;

    }
}

export const loginUserReducer =(state={}, action)=>{


    switch(action.type)
    {
        case 'USER_LOGIN_REQUEST': return{
            laoding:true
        }
        case 'USER_LOGIN_SUCESS': return{
            laoding:false,
            sucess:true,
            currentUser:action.payload
        }
        case 'USER_LOGIN_FAILED': return{
            laoding:false,
            error:action.payload
        }
        default : return state;

    }
}
export const getAllUsersReducer =(state={users : []}, action)=>{

    switch(action.type)
    {
        case 'GET_USERS_REQUEST' : return{
            loading: true,
            ...state

        }
        case 'GET_USERS_SUCESS' : return{
            loading: false,
            users : action.payload
        }
        case 'GET_USERS_FAILED' : return{
            error : action.payload,
            loading: false   
        }
        default : return state



    }
} 
