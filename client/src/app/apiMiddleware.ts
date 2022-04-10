import axios from "axios";
import { MiddlewareAPI, AnyAction, Dispatch } from "redux";


const API_REQUEST = "API_REQUEST";
const API_URL = `http://localhost:4000/api/v1`;
const apiMiddleware = ({ dispatch }: MiddlewareAPI) => (
  next: Dispatch<AnyAction>
) => (action: AnyAction) => {
  next(action);

  if (action.type !== API_REQUEST) return;

  const { url, method, data, onSuccess, headers } = action.payload;

  axios.defaults.baseURL = API_URL;
  axios.defaults.headers.common["Content-Type"] = "application/json";

  axios
    .request({
      url,
      method,
      data,
      headers
    })
    .then(({ data }) => {
      dispatch(onSuccess(data));
    })
    .catch(error => {
      console.log(error);
    });
};

export default apiMiddleware;