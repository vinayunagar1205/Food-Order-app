import {createContext,useContext} from 'react'

const CartContext = createContext({
   item: [],
   totalAmount: 0,
   addItem : (item) =>{},
   removeItem: (id) =>{}
})

export default CartContext;
