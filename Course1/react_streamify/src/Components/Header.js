import { useContext } from "react";
import "../Css/style.css"
import MyContext from "./Context";
import { NavDropdown } from "react-bootstrap";


function Header() {



    const { text, setText } = useContext(MyContext);

    return (



        <div>
            <header>
              <NavDropdown title="Dropdown" id="nav-dropdown" className="nav" >

              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
              </NavDropdown>

                <form id="form">




                    <input type="text" id="search" placeholder="Search Movies" className="search"
                        onChange={e => setText(e.target.value)} />



                </form>
            </header>




        </div>
    )

}

export default Header;