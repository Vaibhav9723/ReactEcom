import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart,setCart}) => {
  return (
    <div className='container my-5' style={{width: "54%"}}>
      {
        cart.length==0 ?(
          <div className="emp-div text-center">
            <h1>Cart is Empty</h1>
            <Link to={"/"}className='btn btn-warning'>Continue Shopping...</Link>
          </div>
        ):
      cart.map((e)=>{
        return(
              <div className="card mb-3 my-5" style={{width: "700px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={e.imgSrc} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8 text-center">
                    <div className="card-body">
                      <h5 className="card-title">{e.title}</h5>
                      <p className="card-text">{e.description}</p>
                      <a href="#" className="btn btn-dark mx-3">₹ {e.price}</a>
                      <a href="#" className="btn btn-warning"> Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
        )
      })}
      {
        cart.length !=0 && (
          <div className='removeCart text-center my-5'>
            <button className='btn btn-warning mx-3'>Checkout</button>
            <button onClick={()=> setCart("")} className='btn btn-danger'>Clear Cart</button>
          </div>
        )
      }
      
    </div>
  )
}

export default Cart
