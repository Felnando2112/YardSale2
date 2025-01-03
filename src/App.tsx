import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './containers/Layout.tsx';
import Home from './pages/Home';
import Login from './pages/Login';
import PasswordRecovery from './pages/PasswordRecovery';
import SendEmail from './pages/SendEmail';
import NewPassword from './pages/NewPassword';
import MyAccount from './pages/MyAccount';
import CreateAccount from './pages/CreateAccount';
import Checkout from './pages/Checkout.tsx';
import Orders from './pages/Orders';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState.js'
import NotFound from './pages/NotFound';
import Others from './pages/Others';
import Clothes from './pages/Clothes';
import Electronics from './pages/Electronics';
import Furnitures from './pages/Furnitures';
import Toys from './pages/Toys';

function App() {
  const initialState = useInitialState();
  

  return (
    <AppContext.Provider value={initialState} >
    	<BrowserRouter >
			<Layout>
				<Routes>
					<Route index element={<Home/>}  />
					<Route path="/others" element={<Others/>} />
					<Route path="/Clothes" element={<Clothes/>} />
					<Route path="/Electronics" element={<Electronics/>} />
					<Route path="/Furnitures" element={<Furnitures/>} />
					<Route path="/Toys" element={<Toys/>} />
					<Route path="/login" element={<Login/>} />
					<Route path="/password-recovery" element={<PasswordRecovery/>} />
					<Route path="/send-email" element={<SendEmail/>} />
					<Route path="/new-password" element={<NewPassword/>} />
					<Route path="/account" element={<MyAccount/>} />
					<Route path="/signup" element={<CreateAccount/>} />
					<Route path="/checkout" element={<Checkout/>} />
					<Route path="/orders" element={<Orders/>} />
					<Route path="*" element={<NotFound/>} />
				</Routes>
			</Layout>
		</BrowserRouter>
	</AppContext.Provider>
  )
}

export default App
