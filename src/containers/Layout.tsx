import {ReactNode} from 'react';
import Header from '../components/Header';


interface Props {
    children?: ReactNode
    // any props that come into the component
}


const Layout = ({ children }: Props) => {
	
	return (
		<div className="Layout">
			<Header />
			{children}
		</div>
	);
}

export default Layout;
