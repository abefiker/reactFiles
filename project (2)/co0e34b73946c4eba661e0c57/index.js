import React from "react"
import ReactDOM from "react-dom"
import Info from "./info/Info"
import Header from "./info/Header"
import Footer from "./Footer"
function Page(){
    return (
        <>
            <Header />
            <Info / >
            <Footer/>
        </>
    )
}
ReactDOM.render(<Page />,document.getElementById("root"))