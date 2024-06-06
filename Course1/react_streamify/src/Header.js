import  "./style.css"

function Header()
{
return (


    
    <div>
         <header>
         <form   id="form">
        
       

        
 <input type="text" class="form-control" id="search"  placeholder="Search Movies" className="search"/>
         

        
      </form>
      </header>

         <div id="tags"></div>
    <div id="myNav" class="overlay">

       
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      
       
        <div class="overlay-content" id="overlay-content"></div>
        
        <a href="javascript:void(0)" class="arrow left-arrow" id="left-arrow">&#8656;</a> 
        
        <a href="javascript:void(0)" class="arrow right-arrow" id="right-arrow" >&#8658;</a>

      </div>
        
    
    </div>
)

}

export default Header;