import React from 'react';

import './styles.css';

export default function Product({ car, addItemCart }) {
	return (
		<div className="col-sm-3 mt-3 mb-3 card-total"> 
			<div className="card"> 
				<img src={car.image} className="card-img-top" alt={car.title} />
				<div className="card-body">
					<h5 className="card-title">{car.title}</h5>
					<button className="btn btn-primary" onClick={() => addItemCart(car)}>
						<i className="fa fa-cart-plus fa-2x" aria-hidden="true" />
					</button>
				</div>
			</div>
		</div>
	);
}
