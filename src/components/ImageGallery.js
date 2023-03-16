// aktuell
import aktuell1 from '../assets/aktuell/IMG_5743.JPG'
import aktuell2 from '../assets/aktuell/IMG_5744.JPG'
import aktuell3 from '../assets/aktuell/IMG_5745.JPG'
import aktuell4 from '../assets/aktuell/IMG_5746.JPG'
import aktuell5 from '../assets/aktuell/IMG_5747.JPG'
import aktuell6 from '../assets/aktuell/IMG_5748.JPG'

//vorher
import vorher1 from '../assets/vorher/IMG_5488.JPG'
import vorher2 from '../assets/vorher/IMG_5489.JPG'
import vorher3 from '../assets/vorher/IMG_5490.JPG'
import vorher4 from '../assets/vorher/IMG_5491.JPG'
import vorher5 from '../assets/vorher/IMG_5492.JPG'
import vorher6 from '../assets/vorher/IMG_5493.JPG'
import vorher7 from '../assets/vorher/IMG_5494.JPG'
import vorher8 from '../assets/vorher/IMG_5495.JPG'
import vorher9 from '../assets/vorher/IMG_5496.JPG'
import vorher10 from '../assets/vorher/IMG_5497.JPG'
import vorher11 from '../assets/vorher/IMG_5498.JPG'
import vorher12 from '../assets/vorher/IMG_5500.JPG'
import vorher13 from '../assets/vorher/IMG_5501.JPG'
import vorher14 from '../assets/vorher/IMG_5502.JPG'
import vorher15 from '../assets/vorher/IMG_5616.JPG'
import vorher16 from '../assets/vorher/IMG_5634.JPG'
import vorher17 from '../assets/vorher/IMG_5637.JPG'
import vorher18 from '../assets/vorher/IMG_5650.JPG'
import vorher19 from '../assets/vorher/IMG_5651.JPG'

// nachher

import nachher2 from '../assets/nachher/2.JPG'
import nachher3 from '../assets/nachher/3.JPG'
import nachher4 from '../assets/nachher/4.JPG'
import nachher5 from '../assets/nachher/5.JPG'
import nachher6 from '../assets/nachher/6.JPG'
import nachher7 from '../assets/nachher/7.JPG'
import nachher8 from '../assets/nachher/8.JPG'
import nachher9 from '../assets/nachher/9.JPG'
import nachher10 from '../assets/nachher/10.JPG'
import nachher11 from '../assets/nachher/11.JPG'
import nachher12 from '../assets/nachher/12.JPG'

import nachher14 from '../assets/nachher/14.JPG'

import nachher16 from '../assets/nachher/16.JPG'
import nachher17 from '../assets/nachher/17.JPG'

import nachher19 from '../assets/nachher/19.JPG'
import nachher20 from '../assets/nachher/20.JPG'
import nachher21 from '../assets/nachher/21.JPG'
import nachher22 from '../assets/nachher/22.JPG'
import nachher23 from '../assets/nachher/23.JPG'
import nachher24 from '../assets/nachher/24.JPG'
import nachher25 from '../assets/nachher/25.JPG'
import nachher26 from '../assets/nachher/26.JPG'
import nachher27 from '../assets/nachher/27.JPG'
import nachher28 from '../assets/nachher/28.JPG'
import nachher29 from '../assets/nachher/29.JPG'



const beforeImages = [
    vorher1,vorher2,vorher3,vorher4,vorher5,vorher6,vorher7,vorher8,vorher9,
    vorher10,vorher11,vorher12,vorher13,vorher14,vorher15,vorher16,vorher17,vorher18,vorher19
]

const currentImages = [
    aktuell1,aktuell2,aktuell3,aktuell4,aktuell5,aktuell6,
]

const afterImages = [
    nachher2,nachher3,nachher4,nachher5,nachher6,nachher7, nachher8,nachher9,
    nachher10,nachher11,nachher12,nachher14,nachher16,nachher17,nachher19,nachher20,nachher21,nachher22,nachher23,nachher24,nachher25,
    nachher26, nachher27, nachher28, nachher29
]

const ImageGallery = ()=> {
    const closeHandler = ()=> {
        const gallerypage = document.getElementById("galleryid")
        const opened = gallerypage.classList.contains("gallerypage")
        if (opened) gallerypage.classList.remove("gallerypage")
        else gallerypage.classList.add("gallerypage")
    }

    return(
        <div id="galleryid">
                <div onClick={closeHandler} className='backbtn'>{"<< Zurück"}</div>
                <h1>Vorher</h1>
                <div className='slider'>
                    {beforeImages.map((img,index)=> (
                        <div key={index} style={{width:300, height:200, 
                        borderRadius:1, borderStyle:'solid', borderWidth:2, borderColor:'white'
                        }} >
                            <img loading='lazy' src={img} style={{width:'100%', height:'100%'}}></img>
                        </div>
                    )
                    )}
                </div>

                <h1>Aktuell</h1>
                <div className='slider'>
                    {currentImages.map((img,index)=> (
                        <div key={index} style={{width:300, height:200, 
                        borderRadius:1, borderStyle:'solid', borderWidth:2, borderColor:'white'
                        }} >
                            <img loading='lazy' src={img} style={{width:'100%', height:'100%'}}></img>
                        </div>
                    )
                    )}
                </div>

                <h1>Nachher</h1>
                <div className='slider'>
                    {afterImages.map((img,index)=> (
                        <div key={index} style={{width:300, height:200, 
                        borderRadius:1, borderStyle:'solid', borderWidth:2, borderColor:'white'
                        }} >
                            <img loading='lazy' src={img} style={{width:'100%', height:'100%'}}></img>
                        </div>
                    )
                    )}
                </div>
        </div>
    )
}

export default ImageGallery