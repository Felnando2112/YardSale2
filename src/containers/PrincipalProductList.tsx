import {useState,useEffect} from 'react';
import '../styles/ProductList.css';
import ProductItem from '../components/ProductItem';
import axios from 'axios';

const API = 'https://fakestoreapi.com/products';

const PrincipalProductList = (father : any) => {
	const [products, setProducts] = useState([]);
	const [busqueda,setBusqueda] = useState("");


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


    const handleBusqueda = (e:any) => {
        setBusqueda(e.target.value);
    }
	
	var preview = [];

	if(!(busqueda.length >= 1)){
		preview = products;
	}else{
		preview = products.filter((product : {title: string}) => {
			const title = product.title.toLowerCase();
			const textoBusqueda = busqueda.toLowerCase();
			return title.includes(textoBusqueda);
		})
	}

	return (
		<section className="main-container">
			<div className="SearchBar-div">
                <input type="search" className="SearchBar" value={busqueda} onChange={handleBusqueda}></input>
                <button className="SearchBar-button">Search</button>
            </div>
			{ father.tense === undefined ? <h1>Lo ultimo en la tienda</h1> : <h1>{father.tense}</h1>}
			<div className="ProductList">
				{father.category === 'Home' ? 
				preview.map((product : {id: number}) =>(
					<ProductItem product={product} key={product.id} />

				)) : father.category === 'Clothes' ? preview.map((product : {id: number, category: string}) => product.category.includes('clothing') || product.category.includes('jewelery') ? (
					<ProductItem product={product} key={product.id} />

				) : null) : father.category === 'Electronics' ? preview.map((product : {id: number, category: string}) => product.category.includes('electronics')? (
					<ProductItem product={product} key={product.id} />

				) : null) : father.category === 'Furnitures' ? preview.map((product : {id: number, category: string}) => product.category.includes('furnitures')? (
					<ProductItem product={product} key={product.id} />

				) : null) : father.category === 'Toys' ? preview.map((product : {id: number, category: string}) => product.category.includes('toys')? (
					<ProductItem product={product} key={product.id} />

				) : null) : preview.map((product : {id: number, category: string}) =>(
					<ProductItem product={product} key={product.id} />
				)) 
				}
			</div>
		</section>
	);
}

export default PrincipalProductList;
