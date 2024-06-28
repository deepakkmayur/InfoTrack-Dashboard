import { getData } from '../../api/apiServices';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../constants"


const fetchDataRequest = () => ({
   type: FETCH_DATA_REQUEST,
});

const fetchDataSuccess = (data) => ({
   type: FETCH_DATA_SUCCESS,
   payload: data,
});

const fetchDataFailure = (error) => ({
   type: FETCH_DATA_FAILURE,
   payload: error,
});


export const fetchData = () => async (dispatch) => {
   dispatch(fetchDataRequest());
   try {
      const data = await getData();
      dispatch(fetchDataSuccess(data));
   } catch (error) {
      dispatch(fetchDataFailure(error));
   }
};



