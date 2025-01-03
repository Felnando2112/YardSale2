import React, {useContext} from 'react';
import '../styles/ProductItem.css';
import AppContext from '../context/AppContext';
import cart from '../assets/icons/cart.svg';



const ProductItem = ({product} : { product: any}) => {
	const {addToCart} = useContext(AppContext);

	const handleClick = (item : any) => {
		addToCart(item);
		console.log(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.image} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={cart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
