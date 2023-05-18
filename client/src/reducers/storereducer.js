// export const addNewStoreReducer = (state = {}, action) => {

//     switch (action.type) {

//         case "ADD_NEW_STORE_REQUEST":

//             return {

//                 ...state,

//                 loading: true,

//             };

//         case "ADD_NEW_STORE_SUCCESS":

//             return {

//                 success: true,

//                 loading: false,

//             };

//         case "ADD_NEW_STORE_FAIL":

//             return {

//                 loading: false,

//                 error: action.payload,

//             };

//         default:

//             return state;

//     }

// };




// export const getAllStoresReducer = (state = { store: [] }, action) => {

//     switch (action.type) {

//         case "GET_STORES_REQUEST":

//             return {

//                 ...state,

//                 loading: true,

//             };

//         case "GET_STORES_SUCCESS":

//             return {

//                 stores: action.payload,

//                 loading: false,

//             };

//         case "GET_STORES_FAIL":

//             return {

//                 error: action.payload,

//                 loading: false,

//             };

//         default:

//             return state;

//     }

// };



