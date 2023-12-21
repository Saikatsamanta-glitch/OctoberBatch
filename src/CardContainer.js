import { useState, useEffect } from "react";
import axios from "axios";
import ProCard from "./productCard";
// hooks: manipulate date in react js
function Cardcontainer() {
        const [product,setproduct] = useState([])

        async function fetchdata(){
                const response =await axios('https://fakestoreapi.com/products');
                setproduct(response.data)
        }
        useEffect(fetchdata,[])


        return (
                <div className="container d-flex flex-wrap gap-5 justify-content-center">
                {
                        product.map(v=>{
                                return <ProCard data={v}/>
                        })
                }
                        
                </div>
        )
}

export default Cardcontainer;