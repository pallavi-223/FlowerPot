import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

const Thankyou = () => {
    const {
        state: { Thankyou },
        item, cart
    } = useContext(CartContext);
    return (
        <>
            <div class="container mt-3">
                <div className="row">
                    {Thankyou.map(({ name, image, price }, index) => (
                        <div class="col-3 mt-2 mb-3">
                            <div class="card w-100" style={{ height: '330px' }}>
                                <Link to='/ItemDetails' onClick={() => item(name)}>  <img src={image} height="200px" class="card-img-top " /></Link>
                                <div class="card-body">
                                    <Link to='/ItemDetails' onClick={() => item(name)}> <h5 class="card-title p-2">{name}</h5></Link>
                                    <p class="card-text float-left ml-2 mr-5">${price}</p>

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
export default Thankyou
