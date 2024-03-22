import Search from './Search.jsx'

function Photo(props) {
    const source =  "https://picsum.photos/id/"+(props.id)+"/"+(props.size.width)+"/"+(props.size.height);
    const auteur = (props.author);
    return (
      <div>
      <p>{auteur}</p>
      <a><img src={source} /></a>
      </div>
    )
  }
  
  export default Photo