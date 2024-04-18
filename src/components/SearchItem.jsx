import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { items } from './Data/Data';
import Products from './products/Products';

const SearchItem = (cart,setCart) => {
  const {item} = useParams();
  const [filterData, setFilterData] = useState([])

  useEffect(()=>{
    const filteredData = () =>{
      const data = items.filter((e)=> e.title.toLowerCase().includes(item.toLowerCase()))
      setFilterData(data);
    }
    filteredData();
  },[item])

  return (
    
      <Products cart={cart} setCart={setCart} abc={filterData} />
    
  )
}

export default SearchItem
