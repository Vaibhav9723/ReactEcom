import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = ({abc, cart, setCart}) => {
    const addToCart = (id,imgSrc,title,description,price) =>{
        const obj = {
            id,imgSrc,title,description,price
        }
        setCart([...cart, obj])
        
// Toastify Function
        toast.success('item added on cart!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            
            });
        
    }
return(
    <>

{/* Toastify */}
            <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            
            />
    
        <div className='container my-5'>
            <div className="row">
                
                    {abc.map((e)=>{
                        return(
                            <>
                            <div key={e.id}className='col-lg-4 col-md-6 my-3 text-center'>
                            <div className="card" style={{width: "18rem"}}>
                            <Link to={`/product/${e.id}`}
                            style={{
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <img src={e.imgSrc} className="card-img-top" alt="..."/>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p className="card-text">{e.description}</p>
                                <div className='d-flex justify-content-around '>
                                <a href="#" className="btn btn-dark">₹ {e.price}</a>
                                <a onClick={()=>addToCart(e.id,e.imgSrc,e.title,e.description,e.price)} href="#" className="btn btn-warning text-white ">Add to Cart</a>
                                </div>
                                
                            </div>
                            </div>
                            </div>
                            </>
                        )
                    })}
                    
                
            </div>
        </div>
    </>
)

}

export default Products
