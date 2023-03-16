import bgpic from '../assets/Maras-Earthquake.png'

const Background =()=> {
    return(
        <div className={"bg"} style={{left:0, top:0,margin:0,position:'fixed',width:'100vw',zIndex:-1, height:'100vh', background:'black'}}>
            <img className="bgimg" src={bgpic}></img>
        </div>
    )
}

export default Background;