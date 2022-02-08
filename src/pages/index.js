import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Add from './Add';
import Cart from './Cart';
import Login from './Login';
import Products from './Products';
import RegisterUser from './RegisterUser';

export default () => (
	<Switch>
		<Route path="/products" component={Products} />
		<Route path="/add" component={Add} />
		<Route path="/register-user" component={RegisterUser} />
		<Route path="/cart" component={Cart} />
		<Route path="/login" component={Login} />
		<Redirect path="/" to="/login" />
	</Switch>
);
