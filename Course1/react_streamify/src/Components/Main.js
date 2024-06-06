import { useState } from "react"
import MyContext from "./Context"
import Header from "./Header"
import Movies from "./Movies";


function Main() {
    const [text, setText] = useState("");
    return (
        <div>
            <MyContext.Provider value={{ text, setText }}>
                <Header />
                <Movies />
            </MyContext.Provider>

        </div>
    )
}

export default Main