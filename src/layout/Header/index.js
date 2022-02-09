import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import { useSelector } from 'react-redux';
import { CgProfile, CgLogOut, CgShoppingCart } from 'react-icons/cg';

export default function Header() {

	const length = useSelector(state => state.cart.length);

	return (
		<nav className="l-header navbar navbar-expand-lg navbar-dark header">
			<NavLink to="/products" activeClassName="active" className="navbar-brand header">
				Lojinha
			</NavLink>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink to="/products" activeClassName="active" className="nav-link header">
							Produtos
						</NavLink>
					</li>
				</ul>
			</div>
			<ul className="navbar-nav ml-md-auto">
				<NavLink to="/cart" activeClassName="active" className="nav-item">
					<i className="fa fa-shopping-cart fa-3x" aria-hidden="true">
						<span className="fa-counter">{length}</span>
					</i>
				</NavLink>
				<NavLink to="/login" activeClassName="active" className="nav-item logout">
					<i className="fa fa-3x" aria-hidden="true">
					<CgLogOut />
					</i>
				</NavLink>
			</ul>
		</nav>
	);
}
