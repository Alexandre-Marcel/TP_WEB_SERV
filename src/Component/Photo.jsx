
function Photo(props) {
    const source =  "https://picsum.photos/id/"+(props.id)+"/"+(props.size.width)+"/"+(props.size.height);
    const auteur = (props.author);
    const id = (props.id);
    return (
      <div>
        <div class = "oui">
      <p>{auteur} </p>{props.hideId ? null : <p> #{id}</p>}
        </div>
      <a><img src={source} /></a>
      </div>
    )
  }
  
  export default Photo