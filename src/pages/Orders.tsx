import {useContext} from 'react';
import AppContext from '../context/AppContext.tsx';
import Order from '../components/Order.tsx';
import '../styles/Order.css';

const Orders = () => {
	const {state} = useContext(AppContext);
	return (
		<div className="Orders">
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
				{state.cart.map(() =>(
				<Order/>
				))}
				</div>
			</div>
		</div>
	);
}

export default Orders;
