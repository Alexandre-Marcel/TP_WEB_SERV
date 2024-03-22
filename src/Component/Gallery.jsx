import Photo from './Photo.jsx'


function Gallery(props) {
    var size;
    return (
      <div>
        <h1>Gallery de photos</h1>
        {props.liste.map(info =>
        <Photo author = {info.author} id = {info.id} size={size = {width : info.width ,height : info.height}}/>)
        }
      </div>
    )
  }

  export default Gallery