import {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '../styles/MyOrder.css';
import { useNavigate } from 'react-router-dom';


const MyOrder = () => {
	const {state,addToCart1} = useContext(AppContext);
	const navigate = useNavigate();
	const handleClick = () => {
		addToCart1();
		navigate("/checkout");
	}
	const sumTotal = () => {
		const reducer = (acumulator : any, currentValue : any) => acumulator + currentValue.price;
		const sum = state.cart.reduce(reducer,0);
		return(sum);
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product : any) =>(
				<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button" onClick={handleClick}>Checkout</button>
			</div>
		</aside>
	);
}

export default MyOrder;
