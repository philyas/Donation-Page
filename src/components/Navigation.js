import famlogo from '../assets/famlogo.png'
import {useState} from 'react';

const Navigation = ()=> {
    const [navColor, setNavColor] = useState("transparent")

    const changeColor = ()=> {
       if ( window.scrollY > 120 ) {
            setNavColor("black")
       } 
       else {
        setNavColor("transparent")
    }
    }

    window.addEventListener("scroll", changeColor)

    return(
        <div style={{width:'100%', height:"58px",zIndex:2, color:"white", display:'flex', justifyContent:'space-between',
        alignItems:'center', position:"fixed", top:0,left:0, background:navColor, transition:'0.4s'
        }}>
            <div style={{height:"58px", width:"58px", marginLeft:"15px"}}><img style={{height:"58px"}} src={famlogo}></img></div>
            <ul className="ul_class">
                 <a href='#home'><li>Home</li></a>
                 <a href='#aboutus'><li>Über uns</li></a>
                 <a href='#gallery'><li>Bilder</li></a>
                 <a href='#contact'><li>Kontakt</li></a>
            </ul>
        </div>
    )
}

export default Navigation