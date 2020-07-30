import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom'
const Congrats = () => {
    const {
        state: { Congrats },
        item, cart
    } = useContext(CartContext);
    return (
        <>
            <div class="container mt-3">
                <div className="row">
                    {Congrats.map(({ name, image, price }, index) => (
                        <div class="col-3 mt-2 mb-3">
                            <div class="card w-100" style={{ height: '330px' }}>
                                <Link to='/ItemDetails' onClick={() => item(name)}>  <img src={image} height="200px" class="card-img-top " /></Link>
                                <div class="card-body">
                                    <Link to='/ItemDetails' onClick={() => item(name)}> <h5 class="card-title p-2">{name}</h5></Link>
                                    <p class="card-text float-left ml-2 mr-5">${price}</p>

                                </div>
                                <Link to='/Bcart'> <button className="btn btn-primary btn-sm m-4" onClick={() => cart(name)} >
                                    Buy Now</button> </Link>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Congrats