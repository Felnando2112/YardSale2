import PrincipalProductList from '../containers/PrincipalProductList.tsx';
import ProductCarousel from '../components/ProductCarousel.tsx';
import ProductList from '../containers/ProductList.tsx';


const IMAGES = [
	{ url: 'https://github.com/WebDevSimplified/react-image-slider/blob/main/src/imgs/car-1.jpg?raw=true', alt: "Car One" },
	{ url: 'https://github.com/WebDevSimplified/react-image-slider/blob/main/src/imgs/car-2.jpg?raw=true', alt: "Car Two" },
	{ url: 'https://github.com/WebDevSimplified/react-image-slider/blob/main/src/imgs/car-3.jpg?raw=true', alt: "Car Three" },
	{ url: 'https://github.com/WebDevSimplified/react-image-slider/blob/main/src/imgs/car-4.jpg?raw=true', alt: "Car Four" },
	{ url: 'https://github.com/WebDevSimplified/react-image-slider/blob/main/src/imgs/car-5.jpg?raw=true', alt: "Car Five" },
  ]

const Clothes = () => {
	return (
		<>
			<PrincipalProductList category='Clothes'/>
			<div
      style={{
		position: "relative",
		left: "16%",
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
      }}
    >
			<ProductCarousel tense="Lo mas reciente" products={IMAGES}/>
	</div>	
	  		<ProductList category='Clothes' />
		</>
	);
}

export default Clothes;