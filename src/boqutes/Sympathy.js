import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
//import ItemDetails from './ItemDetails'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
const Sympathy = () => {

    const {
        state: { Sympathy }, item, cart,

    } = useContext(CartContext);
    return (
        <>
            <div class="container mt-3">
                <div className="row">
                    {Sympathy.map(({ name, image, price }) => (
                        <div class="col-3 mt-2 mb-3">
                            <div class="card w-100" style={{ height: '330px' }}>
                                <Link to='/ItemDetails' onClick={() => item(name)}>  <img src={image} height="200px" class="card-img-top " /></Link>
                                <div class="card-body">
                                    <Link to='/ItemDetails' onClick={() => item(name)}> <h5 class="card-title p-2">{name}</h5></Link>
                                    <p class="card-text float-left ml-2 mr-5"><span class="badge badge-warning">MRP</span>${price}</p>

                                </div>
                                <Link to='/Bcart' onClick={() => cart(name)}> <button className="btn btn-primary btn-sm m-4" >
                                    Buy Now</button> </Link>

                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </>
    )
}

export default Sympathy