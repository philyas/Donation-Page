import paypallogo from '../assets/paypallogo-removebg-preview.png'


const Header =()=> {
    return(
        <div id="home" style={{color:'white', textAlign:'center', height:'100dvh', display:'flex', justifyContent:'center', 
        alignItems:'center', flexDirection:'column'
        }}>
            <h1 className="header">Spendenaktion Erdbeben in Kahramanmaras</h1>
            <a style={{textDecoration:'none', margin:"20px auto", padding:"0 25px"}} target="_blank" href="https://www.paypal.com/pools/c/8Sqdv1N2N5" className="spendbtn">SPENDENLINK<span style={{marginBottom:"7px"}} className="material-symbols-outlined">
            volunteer_activism
            </span>  <span><img style={{width:"70px"}} src={paypallogo}></img></span></a>
        </div>
    )
}

export default Header;