import { useReducer, useEffect } from "react";
import Reducer from '../Reducers/Reducer'
const useAPI = () => {

    const INIT_STATE = {


        TotalAmount: 0,
        cart: [],
        item: [],
        boqute: [],
        Anniversary: [],
        Birthday: [],
        Congrats: [],
        Sympathy: [],
        Love: [],
        Thankyou: [],
        GreenPlants: [],
        Orchids: [],
        Succulents: [],
        Cacti: [],
        itemdetails: [],
        cart: [],




    }
    const [state, dispatch] = useReducer(Reducer, INIT_STATE)
    const { boqute } = state
    useEffect(() => {
        fetch('https://jsonblob.com/api/a0bc69a1-cc9f-11ea-ad1c-af8e710e5457').
            then(response => response.json()).
            then(json => {

                dispatch({
                    type: 'UPDATE_DATA',
                    payload: {
                        boqute: [...json],
                        Anniversary: [...json.filter(A => A.category == 'Anniversary')],
                        Birthday: [...json.filter(A => A.category == 'Birthday')],
                        Congrats: [...json.filter(A => A.category == 'Congrats')],
                        Sympathy: [...json.filter(A => A.category == 'Sympathy')],
                        Love: [...json.filter(A => A.category == 'Love')],
                        Thankyou: [...json.filter(A => A.category == 'Thank You')],
                        GreenPlants: [...json.filter(B => B.category == "GreenPlants")],
                        Orchids: [...json.filter(B => B.category == "Orchids")],
                        Cacti: [...json.filter(B => B.category == "Cacti")],
                        Succulents: [...json.filter(B => B.category == "Succulents")],
                    }
                })
            })
    }, []);

    useEffect(() => {
        dispatch({})
    });


    const additem = (Category) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: { Category }


        })
    }

    const RemoveItem = (index) => {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: { index }
        })

    }


    const Item = (name) => {
        dispatch({
            type: 'ITEM',
            payload: { name }
        })
    }
    const item = (name) => {
        dispatch({
            type: 'ITEMDETAILS',
            payload: { name }
        })
    }

    const cart = (name) => {
        dispatch({
            type: 'CART',
            payload: { name }
        })
    }

    const TotalAmount = (name) => {
        dispatch({
            type: 'TOTAL_AMOUNT',
            payload: { name }
        })
    }


    {/*const reset = () => {
        dispatch({
            type: 'RESET'
        })
    }*/}

    const addSitem = (index) => {
        dispatch({
            type: 'ADD_S_ITEM',
            payload: { index }
        })
    }
    const addAitem = (index) => {
        dispatch({
            type: 'ADD_A_ITEM',
            payload: { index }
        })
    }
    const addBitem = (index) => {
        dispatch({
            type: 'ADD_B_ITEM',
            payload: { index }
        })
    }
    const addCitem = (index) => {
        dispatch({
            type: 'ADD_C_ITEM',
            payload: { index }
        })
    }
    const addTitem = (index) => {
        dispatch({
            type: 'ADD_T_ITEM',
            payload: { index }
        })
    }
    const addLitem = (index) => {
        dispatch({
            type: 'ADD_L_ITEM',
            payload: { index }
        })
    }

    const addGitem = (index) => {
        dispatch({
            type: 'ADD_G_ITEM',
            payload: { index }
        })
    }
    const addOitem = (index) => {
        dispatch({
            type: 'ADD_O_ITEM',
            payload: { index }
        })
    }
    const addcitem = (index) => {
        dispatch({
            type: 'ADD_c_ITEM',
            payload: { index }
        })
    }
    const addSCitem = (index) => {
        dispatch({
            type: 'ADD_SC_ITEM',
            payload: { index }
        })
    }

    return {
        state,
        additem,
        addAitem,
        addBitem,
        addCitem,
        addTitem,
        addLitem,
        addSitem,
        Item,
        RemoveItem,
        addGitem,
        addOitem,
        addcitem,
        addSCitem,
        item,
        cart






    }
}
export default useAPI




