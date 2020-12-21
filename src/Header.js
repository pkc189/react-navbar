import React ,{useState}from "react";
import "./Header.css";

import { VscThreeBars } from "react-icons/vsc";




export default () => {
const [nav,setNav] = useState(false);


let width = (window.innerWidth);
  return (
    <>
      <header className="Header">
        <a href="/">Logo</a>
        <p className="icon" onClick={()=>setNav(!nav)}>
       
          <VscThreeBars />
        
        </p>



{  nav && width<400?
        <nav className="Nav">
          <a href="/">Home</a>
          <a href="/">Articles</a>
          <a href="/">About</a>
          <button>Logout</button>
        </nav>
        
        :<nav className="Nav">
          
        </nav>
}



      </header>
    </>
  );
};
