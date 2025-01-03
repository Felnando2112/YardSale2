import React, {useState,useEffect} from 'react';
import '../styles/ProductList.css';
import ProductItem from '../components/ProductItem';
import axios from 'axios';

const API = 'https://fakestoreapi.com/products';

const ProductList = (father : any) => {
	const [products, setProducts] = useState([]);


	const peticionesGet = async () =>{
		await axios.get(API).then(Response => {
			setProducts(Response.data);
		}).catch(error => {
			console.log(error);
		})
	}
	
	useEffect(()=>{
	peticionesGet();
	},[])


	

	return (
		<section className="main-container">
			{ father.tense === undefined ? <h1>Lo mas vendido</h1> : <h1>{father.tense}</h1>}
			<div className="ProductList">
				{father.category === 'Home' ? 
				products.map((product : {id: number}) =>(
					<ProductItem product={product} key={product.id} />

				)) : father.category === 'Clothes' ? products.map((product : {id: number, category: string}) => product.category.includes('clothing') || product.category.includes('jewelery') ? (
					<ProductItem product={product} key={product.id} />

				) : null) : father.category === 'Electronics' ? products.map((product : {id: number, category: string}) => product.category.includes('electronics')? (
					<ProductItem product={product} key={product.id} />

				) : null) : father.category === 'Furnitures' ? products.map((product : {id: number, category: string}) => product.category.includes('furnitures')? (
					<ProductItem product={product} key={product.id} />

				) : null) : father.category === 'Toys' ? products.map((product : {id: number, category: string}) => product.category.includes('toys')? (
					<ProductItem product={product} key={product.id} />

				) : null) : products.map((product : {id: number, category: string}) =>(
					<ProductItem product={product} key={product.id} />
				)) 
				}
			</div>
		</section>
	);
}

export default ProductList;