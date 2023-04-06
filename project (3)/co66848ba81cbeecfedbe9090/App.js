import React from "react"
import Navbar from "./Navbar"
import Cards from "./Cards"
import data from "./data"
export default function App(){
     const DataFile = data.map(data =>{
         return(
             <Cards
             key = {data.id}
              data = {data}
             /> 
         )
     })
    return(
        <>
        <Navbar />
            <div className="total">
               {DataFile}
            </div>
        </>
    )
}