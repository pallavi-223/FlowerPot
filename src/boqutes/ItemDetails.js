import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom'

const ItemDetails = () => {
    const {
        state: { itemdetails }, cart
    } = useContext(CartContext);
    return (
        < div class="container" style={{ background: "#b3ecff" }}>
            <div class="row">

                {itemdetails.map(({ name, image, price, description, includes }) => (
                    <>
                        <div class="container-fixed bg-light">
                            <div class="col-lg-6 col-sm-12">
                                <img src={image} height="220" width="200"></img>
                            </div>
                        </div>

                        <div class="col-lg-6 col-sm-12">
                            <h5 class="title">{name}</h5>

                            <p ><span>&#8377;</span>  {price} </p>
                            <p>{includes}</p>
                            <p>Hand Delivery boqute</p>

                            <Link to='/Bcart'> <button className="btn btn-primary btn-sm m-4" onClick={() => cart(name)} >
                                Buy Now</button> </Link>

                        </div>


                        <div class="row ">
                            <div class="col-lg-12 col-sm-12">
                                <h5>Description</h5>
                                <p>{description}</p>
                            </div>
                        </div>

                    </>
                ))
                }
            </div>

        </div>
    )
}







export default ItemDetails
