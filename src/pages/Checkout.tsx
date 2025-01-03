import React, {useContext,useEffect} from 'react';
import OrderItem from '../components/OrderItem.tsx';
import AppContext from '../context/AppContext';
import '../styles/Checkout.css';

const Checkout = () => {
	const {state,getCart} = useContext(AppContext);

	useEffect(() => {
		getCart();
	},[]);

	var totalPrice = state.cart.reduce(
		(accumulator, currentValue) => accumulator + currentValue.price,
		0,
	  );
	var articlesNumber = state.cart.length;

	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{state.date.getDate()}. {state.date.getMonth()+1}. {state.date.getFullYear()}</span>
							<span>{articlesNumber} articles</span>
						</p>
						<p>${totalPrice}</p>
					</div>
				</div>
				{state.cart.map(product =>(
				<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
			</div>
		</div>
	);
}

export default Checkout;
