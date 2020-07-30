import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom'
//import TotalPrice from './TotalPrice'
import EmptyCart from './EmptyCart'

const Bcart = () => {
    const {
        state: { cart },
        RemoveItem,
    } = useContext(CartContext);
    return (
        <>
            <div className="row">
                <div class="col-7 mt-4">
                    <div className=" container " style={{ border: '1px solid white' }}>
                        {(cart.length == 0) ? <EmptyCart /> : (
                            <>
                                {cart.map(({ name, image, price, quantity }, index) => (
                                    <div class="card mb-2 mt-2" style={{
                                        height: '200px',
                                        width: '700px'
                                    }} >
                                        <div class="row no-gutters">
                                            <div class="col-md-4">
                                                <img height="200px" src={image} class="card-img" alt="..." />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">{name}</h5>
                                                    <p class="card-text"><small class="text-muted"><b>MRP : ${price}</b></small></p>
                                                    <div className="d-flex justify-content-between mt-5 ">

                                                        <span class="badge badge-success pt-2 mt-3" style={{ height: '30px' }} >Qty : {quantity}</span>
                                                        <button
                                                            className="btn  btn-danger mt-2" style={{ height: 'fit-content' }} onClick={() => RemoveItem(index)}>REMOVE</button></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                                }
                            </>
                        )}
                    </div>
                </div>

            </div>
        </>
    )
}
export default Bcart

