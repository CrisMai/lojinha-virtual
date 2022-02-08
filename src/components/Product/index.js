import React from 'react';

import './styles.css';

export default function Product({ product, addItemCart }) {
	return (
		<div className="col-sm-3 mt-3 mb-3">
			<div className="card">
				<div className='card-header'>
					<span data-tooltip={product.title}><h5 className="card-title">{product.title}</h5></span>
					<h5 className="card-title price">R$ {product.price}</h5>
				</div>
				<div className="card-body">
					<div className="ratio ratio-16x9">
						<img src={product.image} className="card-img-top" alt={product.title} />
					</div>
				</div>
				<button className="btn btn-primary" onClick={() => addItemCart(product)}>
					<i className="fa fa-cart-plus fa-2x" aria-hidden="true" />
				</button>
			</div>
		</div>
	);
}
