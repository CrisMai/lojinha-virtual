import api from "../../service/api";
import { addProduct, addProducts } from "../ducks/products";

export const getALLProducts = () => {
  return (dispatch) => {
    api
      .get("/products")
      .then((res) => {
        dispatch(addProducts(res.data));
      })
      .catch(console.log);
  };
};

export const saveProduct = product => {
    return (dispatch) => {
      api 
        .post("/products", product)
        .then((res) => {
          dispatch(addProduct(res.data));
        })
        .catch(console.log);
    };
  };
  
