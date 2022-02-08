import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, removeAllProducts } from "../../store/ducks/cart";
import ItemCart from "../../components/ItemCart";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import "./styles.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function removeItemCart(id) {
    dispatch(removeItem(id));
    console.log(id);
  }

  function removeAll() {
    console.log("removeAll()");
    dispatch(removeAllProducts());
  }

  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid">
        {cart.length > 0 ? <div className="remove-all">
          <label className="text-warning" >Remover todos os produtos</label>
          <button
            onClick={() => removeAll()}
            className="btn btn-primary btn-remove-all"
          >
            <i className="fa fa-trash fa-2x" />
          </button>
        </div> : ''}
        <div className="row">
          {cart.length === 0 ? (
            <p className="col-sm-12 mt-5 text-warning text-center">
              Sem produtos no Carrinho...
            </p>
          ) : (
            <React.Fragment>
              {cart.map((item) => (
                <ItemCart
                  key={item.id}
                  item={item}
                  removeItemCarrinho={removeItemCart}
                />
              ))}
            </React.Fragment>
          )}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
