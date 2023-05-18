export const cartReducer=(state={cartItems : []},action)=>{

    
    console.log(... state.cartItems)

    switch (action.type)
    {
        case 'ADD_TO_CART' :
        const alreadyExits = state.cartItems.find(item=>item._id==action.payload._id)
        if(alreadyExits)
        {
          
          return {
                 ...state ,
                 cartItems : state.cartItems.map(item=>item._id===action.payload._id ? action.payload : item)
                 
          }              
        }
        else{
        return{
              
            ...state ,
            cartItems:[...state.cartItems, action.payload]
            
        }
        
    }
    // console.log(state)
    case 'DELETE_FROM_CART' : return{

        ...state ,
        cartItems : state.cartItems.filter(item=> item._id !==action.payload._id)
    }
        default : return state
        

    }
}