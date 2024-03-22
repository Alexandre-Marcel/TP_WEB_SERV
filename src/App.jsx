import './App.css'
import Gallery from './Component/Gallery.jsx'
import List from './Component/Data.jsx'
import Search from './Component/Search.jsx'
import Hide from './Component/Hide.jsx'
import { useState } from 'react'


function App() {
  const [bookFilter, setBookFilter] = useState(List);
  const handleChange = (event) => {
    let filtered = List.filter(item =>{
      return item.author.includes(event.target.value);
    });
    setBookFilter(filtered);
  }

  const [hideId, setHideId] = useState(true);
  const handleHideIdChange = (event) => {
    setHideId(event.target.checked);
  };
  
  return (
    <div>
      <Search onSearch = {handleChange}/>
      <Hide onHideIdChange={handleHideIdChange}/>
      <Gallery liste = {bookFilter} hideId={hideId}/>
    </div>
  )
}

export default App
