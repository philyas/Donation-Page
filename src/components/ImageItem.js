const styles = {
    main: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:300,
        height:250,
        overflow:'hidden',
        borderRadius:2,
        borderColor:'white',
        borderStyle:'solid',
        borderWidth:2
    },
    item: {
        width:'100%',
        aspectRatio:'25/30'
    }
}

const ImageItem = ({url})=> {
    return(
    <div style={styles.main}>
             <img className="pic" src={url} style={styles.item}></img>
    </div>
    )
}

export default ImageItem