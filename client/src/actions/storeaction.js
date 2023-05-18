import axios from "axios";

// import swal from "sweetalert";




export const addNewStore = (store) => async (dispatch) => {

    dispatch({ type: "ADD_NEW_STORE_REQUEST" });

    try {

        const res = await axios.post("/api/store/addstore", store);

        console.log(res);

        dispatch({ type: "ADD_NEW_STORE_SUCCESS" });

    } catch (error) {

        dispatch({ type: "ADD_NEW_STORE_FAIL", payload: error });

    }

};




export const getAllStores = () => async (dispatch) => {

    dispatch({ type: "GET_STORES_REQUEST" });

    try {

        const response = await axios.get("/api/store/getallstores");

        // console.log(response.data);

        dispatch({ type: "GET_STORES_SUCCESS", payload: response.data });

    } catch (err) {

        dispatch({ type: "GET_STORES_FAIL", payload: err });

    }

};




export const deleteStore = (storeid) => async (dispatch) => {

    try {

        await axios.post("/api/store/deletestore", { storeid });

        alert("Store Deleted Succss!", "success");

        window.location.reload();

        // console.log(res);

    } catch (error) {

        alert("Errro While Deleteing Store");

    }

};