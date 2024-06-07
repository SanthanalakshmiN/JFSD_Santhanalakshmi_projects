import logo from './logo.svg';
import './App.css';


import Main from './Components/Main';
import { useSelector } from 'react-redux';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Genre from './Components/Genre';

function App() {
  let data = useSelector(gv=>gv.genres);
 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={  <Main />}>
        
        </Route>
        </Routes>
       
          {
            data.map( p =>  <Routes key={p.id}>
<Route  path={'/'+p.id+'/'+p.name} element={  <Genre /> } />
        
</Routes>
            )
          }
        
       
        
        </BrowserRouter>
    
    </div>
  );
}

export default App;
