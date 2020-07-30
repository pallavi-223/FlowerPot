import ItemDetails from './ItemDetails'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'


const Menu = () => {
    const {
        state: { boqute }, item, cart,

    } = useContext(CartContext);
    return (
        <>
            <div className="container mt-4" style={{ border: '1px solid #151617' }}>
                <div className="row">
                    {boqute.map(({ name, image, price }, index) => (
                        <div className="col-3 mt-2 mb-3">
                            <div className="card w-100" style={{ height: '340px' }}>
                                <Link to="/ItemDetails"> <img src={image} onClick={() => item(name)} height="200px" className="card-img-top " /></Link>
                                <div className="card-body">
                                    <Link to='/ItemDetails'><h5 className="card-title " onClick={() => item(name)}>{name}</h5></Link>
                                    <div className="d-flex justify-content-between">

                                        <p className="card-text "><span className="badge badge-warning">MRP</span> : {price} <span>&#8377;</span></p>
                                    </div>
                                    <Link to='/Bcart'> <button className="btn btn-primary btn-sm m-4" onClick={() => cart(name)} >
                                        Buy Now</button> </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Menu
