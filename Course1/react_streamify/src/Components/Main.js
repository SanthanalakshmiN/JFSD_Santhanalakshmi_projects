import { useState } from "react"
import MyContext from "./Context"
import Header from "./Header"
import Movies from "./Movies";
import Genre from "./Genre";
import Footer from "./Footer";



function Main() {
 
    
    return (
        <div>
           
         <Movies />
          
<Footer/>
        </div>
    )
}

export default Main