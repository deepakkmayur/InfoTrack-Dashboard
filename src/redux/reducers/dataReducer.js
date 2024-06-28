import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from "../constants";

const initialState = {
  isLoading:false,
  error:null,
  data: [],
  selectedData: []
};

export const dataReducer = (state = initialState, action) => {
  console.log(action.payload,"reducer data");
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading:true
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading:false
      };

      case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading:false,
        error:action.payload
      };
    default:
      return state;
  }
};
