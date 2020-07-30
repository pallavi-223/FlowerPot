
const Reducer = (state, action) => {
    const { type, payload } = action
    const { boqute, Anniversary, Birthday, Congrats, Sympathy, Love, Thankyou,

        GreenPlants, Orchids, Cacti, Succulents, cart } = state

    switch (type) {
        case 'UPDATE_DATA': {
            return {
                ...state,
                ...payload
            }
        }




        case 'ITEM': {

            const { name } = payload
            return {
                ...state,
                item: [...boqute.filter(i => i.name == name)],

            }

        }
        case 'ITEMDETAILS': {

            const { name } = payload
            return {
                ...state,
                itemdetails: [...boqute.filter(i => i.name == name)],
            }
        }

        case 'CART': {

            const { name } = payload
            return {
                ...state,
                cart: [...cart, ...boqute.filter(i => i.name == name)],

            }

        }
        case 'REMOVE_ITEM': {

            const { index } = payload

            return {
                ...state,
                cart: [...cart.filter((i, ind) => ind != index)],

            }
        }


        case 'ADD_A_ITEM': {

            const { index } = payload

            return {
                ...state,
                Anniversary: [...Anniversary],

            }
        }

        case 'ADD_B_ITEM': {

            const { index } = payload

            return {
                ...state,
                Birthday: [...Birthday],

            }
        }

        case 'ADD_C_ITEM': {

            const { index } = payload

            return {
                ...state,
                Congrats: [...Congrats],

            }
        }

        case 'ADD_L_ITEM': {

            const { index } = payload

            return {
                ...state,
                Love: [...Love],

            }
        }

        case 'ADD_S_ITEM': {

            const { index } = payload

            return {
                ...state,
                Sympathy: [...Sympathy],

            }
        }

        case 'ADD_T_ITEM': {

            const { index } = payload

            return {
                ...state,
                Thankyou: [...Thankyou],

            }
        }

        case 'ADD_G_ITEM': {

            const { index } = payload

            return {
                ...state,
                GreenPlants: [...GreenPlants],

            }
        }

        case 'ADD_O_ITEM': {

            const { index } = payload

            return {
                ...state,
                Orchids: [...Orchids],

            }
        }

        case 'ADD_c_ITEM': {

            const { index } = payload

            return {
                ...state,
                Cacti: [...Cacti],

            }
        }

        case 'ADD_SC_ITEM': {

            const { index } = payload

            return {
                ...state,
                Succulents: [...Succulents],

            }
        }



        default: {
            return state

        }

    }
}
export default Reducer
