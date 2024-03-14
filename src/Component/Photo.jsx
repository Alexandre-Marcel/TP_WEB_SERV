


function Photo(props) {
    const source =  "https://picsum.photos/id/"+(props.id)+"/"+(props.size.width)+"/"+(props.size.height)
    return (
      <a><img src={source} /></a>
    )
  }
  
  export default Photo