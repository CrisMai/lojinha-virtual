import React from "react";

export default function ItemCart({ item, removeItemCarrinho }) {
  return (
    <div className="col-sm-3 mt-3">
      <div className="card text-white bg-primary mb-3">
        <div className="card-header">{item.title}</div>
        <div className="card-body" style={{ padding: 1 }}>
          <img src={item.image} alt={item.title} style={{ width: "100%" }} />
        </div>
        <button
          onClick={() => removeItemCarrinho(item.id)}
          className="btn btn-danger"
          style={{ width: 50, position: "absolute", bottom: 15, right: 15 }}
        >
          <i className="fa fa-trash fa-2x" />
        </button>
      </div>
    </div>
  );
}
