import { useContext } from "react";
import "../Css/style.css"
import MyContext from "./Context";





function Header() {

   
    const { text, setText } = useContext(MyContext);

  


    return (



        <div>
            <header>






                <form id="form">




                    <input type="text" id="search" placeholder="Search Movies" className="search"
                        onChange={e => setText(e.target.value)} />



                </form>
            </header>




        </div>
    )

}

export default Header;