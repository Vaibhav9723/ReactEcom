import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data/Data'
import Products from './products/Products'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProductDetail({cart,setCart}) {
    const {id} = useParams()
    const [product, setProduct]= useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);

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

    useEffect(()=>{
        const filterProduct = items.filter((e)=>e.id == id)
        setProduct(filterProduct[0])
        const category = items.filter((e)=>e.category == product.category)
        setRelatedProduct(category)
        // console.log(product.category)
    },[id,product.category])

    
  return (
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

    <div className='pdcontainer'>
        <div className="img">
            <img src={product.imgSrc} alt="" />   
        </div>
        <div className="text-center">
            <h1 className="card-title">{product.title}</h1>
            <p className="card-text">{product.description}</p>
            <a href="#" className="btn btn-dark mx-3">₹ {product.price}</a>
            <a onClick={()=>addToCart(product.id,product.imgSrc,product.title,product.description,product.price)} href="#" className="btn btn-warning text-white ">Add to Cart</a>
        </div>
    </div>



    <h1 className='text-dark text-center '>Realted Products</h1>
    <Products cart={cart} setCart={setCart} abc={relatedProduct}/>
    </>
  )
}

export default ProductDetail
