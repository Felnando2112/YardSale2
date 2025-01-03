import React,{useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.css';
import close from '../assets/icons/icon_close.png'




const OrderItem = ({product} : {product:any}) => {
	const { removeFromCart } = useContext(AppContext);
	const handleRemove = (item:any) => removeFromCart(item);
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.image} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" onClick={() => handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;
