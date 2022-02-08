import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../../components/Product";
import { getALLProducts } from "../../store/fetchActions";
import { addItem } from "../../store/ducks/cart";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

export default function Products() {
  // const [produtos, setProdutos] = useState([]);
  // const [load] = useState(true);

  // Utilizando fetch
  // async function getProdutos() {
  //   await fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setProdutos(json);
  //       setLoad(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getALLProducts());
  }, [dispatch]);

  function addItemCart(product) {
    dispatch(addItem(product));
  }

  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid container">
        <div className="row">
          {products.map((car, index) => (
            <Product key={index} car={car} addItemCart={addItemCart} />
          ))}
        </div>
        {/* {load ? <div className="teste"></div> : ""} */}
      </div>
      <Footer />
    </React.Fragment>
  );
}
