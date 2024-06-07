
import Header from "./Header";
import Genrelist from "./Genrelist";
import Footer from "./Footer";
import { useState } from "react";
import MyContext from "./Context";

function Genre()
{
    
  const [text, setText] = useState("");
    
  return (
      <div>
          <MyContext.Provider value={{ text, setText }}>
       <Header />
       <Genrelist />
          </MyContext.Provider>
<Footer />

      </div>
  )
    
}

export default Genre;