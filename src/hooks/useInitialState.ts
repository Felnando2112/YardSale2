import { useState } from "react";

export interface Usuario {username: string, email: string, password: string};
type usuario = {
    username: string, email: string, password: string
}

export interface Product {id: number, title: string, price: number, description: string, category: string, img: string };
type product = {
    id: number, title: string, price: number, description: string, category: string, img: string
}


export interface Nombre {user: Usuario, cart : Array<product>, date: Date};


const initialState : Nombre  = {
    user: {
        username: '',
        email: '',
        password: ''
    },
    cart: [],
    date: new Date(),
}

const useInitialState = () => {
    const [state,setState] = useState(initialState);


    const createUser = (usuario : usuario) => {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        setState({...state,user: {username: usuario.username,email: usuario.email, password: usuario.password}})
    };

    const getUser = () => {
        var data : usuario = JSON.parse(localStorage.getItem("usuario") || '""');
        if(typeof data !== 'string'){
            setState({...state,user: {username: data.username,email: data.email, password: data.password}});
        }else{
            setState({...state,user: {username: '',email: '', password: ''}});
        }
    };

    const removeUser = () => {
        localStorage.setItem("usuario", JSON.stringify({
            username: '',
            email: '',
            password: ''
        }));
        setState({...state,user: {username: '',email: '', password: ''}});
    };

    const addToCart = (payload : product) => {
        setState({
            ...state,
            cart: [ ...state.cart , payload]
        });
        
    };

    const addToCart1 = () => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }
    const removeFromCart = (payload : product) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id),
        });
    }

    const getCart = () => {
        var data : product[] = JSON.parse(localStorage.getItem("cart") || '""');
        setState({
            ...state,
            cart: data
        });
    };

    return{
        state,
        createUser,
        getUser,
        addToCart,
        removeFromCart,
        getCart,
        addToCart1,
        removeUser
    }

}




export default useInitialState;