import api from "../../service/api";
import { addProduct, addProducts } from "../ducks/products";
import { addUser } from "../ducks/users";

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

  export const saveUser = user => {
    console.log("saveUser()")
    console.log(user)
    return (dispatch) => {
      api 
        .post("/users", user)
        .then((res) => {
          console.log("saveUser()")
          console.log(res.data)
        })
        .catch(console.log);
    };
  };
  
