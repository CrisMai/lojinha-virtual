import React from 'react';

import './styles.css';

export default function Product({ car, addItemCart }) {
	return (
		<div className="col-sm-3 mt-3 mb-3">
			<div className="card">
				<div className='card-header'>
					<span data-tooltip={car.title}><h5 className="card-title">{car.title}</h5></span>
				</div>
				<div className="card-body">
					<div className="ratio ratio-16x9">
						<img src={car.image} className="card-img-top" alt={car.title} />
					</div>
				</div>
				<button className="btn btn-primary" onClick={() => addItemCart(car)}>
					<i className="fa fa-cart-plus fa-2x" aria-hidden="true" />
				</button>
			</div>
		</div>
	);
}
