import './App.css'

function App() {


  return (
    <Gallery />
  )
}

function Gallery() {


  return (
    <div>
      <h1>Gallery de photos</h1>
      <Photo />
      <Photo />
    </div>
  )
}

function Photo() {


  return (
    <a><img src="https://picsum.photos/500/300" /></a>
  )
}

export default App
