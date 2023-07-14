import { createSlice } from '@reduxjs/toolkit';
import toast, { Toaster } from 'react-hot-toast';

const initialState = {
    open: false,
    selectedItems:  localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [],
    totalQTY: localStorage.getItem("totalQTY")? JSON.parse(localStorage.getItem("totalQTY")): 0,
    totalPrice : localStorage.getItem("totalPrice")? JSON.parse(localStorage.getItem("totalPrice")): 0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
            openCart: (state,action)=>{
                return {
                    ...state, 
                    open: true
                }
            },
            closeCart: (state)=>{
                return{
                    ...state,
                    open: false
                }
            },
            addItem: (state, action)=>{               
                const item = state.selectedItems.find((item)=>{
                    return item.id === action.payload.id
                })
                if (item){
                    item.quantity +=1
                    toast.success(`${item.title} quantity increase`)
                    
                }else{
                   let new_item = {...action.payload, quantity: 1};
                    state.selectedItems.push(new_item);
                    toast.success(`${new_item.title} added to cart` )
                    
                }
                let newItem = JSON.stringify(state.selectedItems);
                localStorage.setItem("cartItems", newItem)      
            },
            removeItem: (state, action)=>{
                const item = state.selectedItems.find((item)=>{
                    return item.id === action.payload.id
                })
                const newItems = state.selectedItems.filter((itemObj)=>{
                    return itemObj.id !== item.id
                })
                state.selectedItems = newItems;

                let newItem = JSON.stringify(state.selectedItems);
                localStorage.setItem("cartItems", newItem)  
            },
            
            clearItems: (state, action)=>{
                state.selectedItems = []
            },
           getTotals: (state)=>{
            const {totalQuantity, totalPrice}= state.selectedItems.reduce((cartTotal, cartItem)=>{
                const {price, quantity} = cartItem;
                const totalCartPrice = price * quantity;
                cartTotal.totalPrice += totalCartPrice
                cartTotal.totalQuantity += quantity
                return cartTotal;
            }, {
                totalQuantity:0,
                totalPrice :0 
            })
            state.totalQTY = totalQuantity;
            state.totalPrice = totalPrice;
            localStorage.setItem("totalQTY",JSON.stringify(state.totalQTY) )
            localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice))
           },

           increaseQTY:(state, action)=>{
                state.selectedItems = state.selectedItems.map((item)=>{
                    if (item.id === action.payload.id){
                        item.quantity += 1
                        return item
                    }
                    else{
                        return item
                    }
                })

                localStorage.setItem("cartItems",JSON.stringify(state.selectedItems) )
           },
           
           decreaseQTY:(state,action)=>{
            state.selectedItems = state.selectedItems.map((item)=>{
                if (item.id === action.payload.id){
                    if (item.quantity > 1){
                        item.quantity -= 1
                         return item
                    }else{
                        return item
                    }
                }
                else{
                    return item
                }
            })

            localStorage.setItem("cartItems",JSON.stringify(state.selectedItems) )
           }

    }
});

export default cartSlice.reducer;
export const {openCart, closeCart, addItem, removeItem, clearItems, totalQuantity, getTotals,increaseQTY,decreaseQTY} = cartSlice.actions;
export const selectCartState = (state)=>state.cart.open;
export const selectSelectedItems = (state)=>state.cart.selectedItems;
export const selectTotalQuantity = (state)=>state.cart.totalQTY;
export const selectTotalPrice = (state)=>state.cart.totalPrice;


