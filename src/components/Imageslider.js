import pic1 from '../assets/aktuell/IMG_5462.JPG'
import pic2 from '../assets/aktuell/IMG_5463.JPG'
import pic3 from '../assets/aktuell/IMG_5744.JPG'
import pic4 from '../assets/aktuell/IMG_5747.JPG'
import pic5 from '../assets/aktuell/IMG_5748.JPG'
import pic6 from '../assets/nachher/46.JPG'

import ImageItem from './ImageItem'

const images = [ pic1,pic2,pic3,pic4,pic5, pic6]



function Imageslider () {

        const openHandler = ()=> {
            const gallerypage = document.getElementById("galleryid")
            const opened = gallerypage.classList.contains("gallerypage")
            if (opened) {
                gallerypage.classList.remove("gallerypage")
            }
            else {
                gallerypage.classList.add("gallerypage")
                window.scrollTo(0,0)
            }
        }

    return(
        <div style={{textAlign:'center'}}>
            <div id='gallery' className="slider">
                {images.map((img,key)=> <ImageItem url={img} key={key}></ImageItem>)}
            </div>      
            <div onClick={openHandler} className='morebtn'>Mehr...</div>
        </div>
    )
}

export default Imageslider