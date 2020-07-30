import React, { useEffect, useState } from 'react'
const Item = () => {
    const [item, setItem] = useState([])


    useEffect(() => {

        fetch('https://jsonblob.com/api/f79f35e9-bd49-11ea-a129-47cd7a506418')
            .then(response => response.json())
            .then(json => {

                setItem([...json])
            })

    }, []);


    return (
        < div style={{ height: '525px' }}>
            <div class="card mb-3 mt-5 ml-5" style={{ width: '550px', height: '180px' }} >
                {
                    item.map(({ name, image, price, quantity }) => (
                        <div class="row">
                            <div class="col-md-4">
                                <img src={image} class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body text-left text-dark mt-3" >
                                    <h5 class="card-title">{name}</h5>
                                    <p className="card-text "><span class="badge badge-warning">QTY</span> :{quantity}</p>
                                    <p className="card-text "><span class="badge badge-warning">MRP</span> : {price} <span>&#8377;</span></p>

                                    <i class="fa fa-map-marker" aria-hidden="true">Delivery Address</i>
                                    <i class="fa fa-calendar ml-3" aria-hidden="true">Delivery Date</i>
                                    <button className="btn btn-primary btn-sm m-5">Add to Cart
                               </button>


                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Item
