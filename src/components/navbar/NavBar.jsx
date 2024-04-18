import React, { useState } from 'react'
import { Link,useLocation, useNavigate} from 'react-router-dom'
import { items } from '../Data/Data'
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Products from '../products/Products';


const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'Fashion'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'Shirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'Jacket'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'Mobiles'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'Laptops'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'Shoes'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'Home'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'Books'
    },
    {
      image: "./images/window.png",
      name: 'ALL'
  }
]

function NavBar({setData,cart}) {

    const navigate = useNavigate()
    const location = useLocation()
    
    const [searchValue, setSearchValue]= useState()

    const filterBycategory = (category) =>{

      if (category === "ALL"){
        return setData(items)
      }
        const element = items.filter((e)=>e.category === category)
        setData(element)
    }
    const filterById = (id) =>{

        const element = items.filter((e)=>e.id === id)
        setData(element)
    }

    // const filterByPrice = (price) => {
    //     const element = items.filter((e)=> e.price <= price)
    //     setData(element)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchValue}`);
        setSearchValue("");
    }

  return (
    <>
    {/* Nav Part - 1 */}
        <div className='nav-bar bg-warning'>
            <Link to={"/"} className='logo'>E-com <br/>Logo</Link>
            <form onSubmit={handleSubmit} className='search-bar'>
            <FaSearch style={{   fontSize:'1.75rem', background:'white',padding:'2px'}}/>
                <input type="text" placeholder='Search Here......' 
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}/>
            </form>
            <Link to={"/cart"} className='cart'>

                <button type="button" className="btn position-relative bg-dark text-warning">
                <FaShoppingCart style={{fontSize:'1.5rem'}}/>
                <span className="position-absolute top-0 start-100  translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                    <span className="visually-hidden">unread messages</span>
                </span>
                </button>

            </Link>
        </div>
        {/* Nav Part-2 Category */}


        {/* {
            location.pathname == "/" && <div>
            <div className="nav-bar-wrapper bg-dark text-light">
                <div className="item" onClick={()=>setData(items)}>All</div>
                <div className="item" onClick={()=>filterBycategory("mobiles")}>Mobile</div>
                <div className="item" onClick={()=>filterBycategory("laptops")}>Laptop</div>
                <div className="item" onClick={()=>filterBycategory("tablets")}>Tablet</div>
                <div onClick={()=>filterByPrice(29999)} className="item">Less than 29999</div>
                <div onClick={()=>filterByPrice(39999)} className="item">Less than 39999</div>
                <div onClick={()=>filterByPrice(49999)} className="item">Less than 49999</div>
                <div onClick={()=>filterByPrice(59999)} className="item">Less than 59999</div>
            </div>
        </div>
        } */}


    
      { location.pathname == "/" &&
      <div className="cate" >{
        category.map((e)=>{
          return(
            <>

             
            <div className="cate-inner" onClick={()=>filterBycategory(e.name)}>
                <img src={e.image} alt=""/>
                <p>{e.name}</p>
                
            </div>
            </>
          )
        })} 
        </div>
      }

    {/* {location.pathname == "/" && <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Link to={`/product/${5}`}>
      <img src="./images/img 1.webp" className="d-block w-100" alt="..." onClick={()=>{filterById(5)}}/>
      </Link>
    </div>

    <div className="carousel-item">
      <img src="./images/img 2.webp" className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./images/img 3.webp" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
    } */}



         
    </>
    
  )
}



export default NavBar
