import './App.css'
import Gallery from './Component/Gallery.jsx'
import List from './Component/Data.jsx'
import Search from './Component/Search.jsx'
import { useState } from 'react'


function App() {
  const [bookFilter, setBookFilter] = useState(List);
  const handleChange = (event) => {
    let filtered = List.filter(item =>{
      return item.author.includes(event.target.value);
    });
    setBookFilter(filtered);
  }
  return (
    <div>
      <Search onSearch = {handleChange}/>
      <Gallery liste = {bookFilter}/>
    </div>
  )
}

export default App
