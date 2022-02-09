import React from "react";

export default function ItemCart({ item, removeItemCarrinho }) {
  return (
    // <div className="col-sm-3 mt-3">
    //   <div className="card text-white bg-primary mb-3">
    //     <div className="card-header">{item.title}</div>
    //     <div className="card-body" style={{ padding: 1 }}>
    //       <img src={item.image} alt={item.title} style={{ width: "100%" }} />
    //     </div>
        // <button
        //   onClick={() => removeItemCarrinho(item.id)}
        //   className="btn btn-danger"
        //   style={{ width: 50, position: "absolute", bottom: 15, right: 15 }}
        // >
        //   <i className="fa fa-trash fa-2x" />
        // </button>
    //   </div>
    // </div>

    <tbody>
      <tr>
        <th scope="row">{item.id}</th>
        <td><img src={item.image} alt={item.title} style={{ heigth: "30px", width: "30px" }} /></td>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>   <button
          onClick={() => removeItemCarrinho(item.id)}
          className="btn btn-danger"
        >
          <i className="fa fa-trash fa-1x" />
        </button></td>
      </tr>
    </tbody>
  );
}
