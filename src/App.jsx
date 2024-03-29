import './App.css'
import Gallery from './Component/Gallery.jsx'
import List from './Component/Data.jsx'
import Search from './Component/Search.jsx'
import Hide from './Component/Hide.jsx'
import { useState } from 'react'
import Spinner from './Component/Spinner.jsx';
import ErrorMessage from './Component/ErrorMessage.jsx';
import axios from 'axios';


function App() {
  const [bookFilter, setBookFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = () => {
    axios
      .get(" https://picsum.photos/v2/list")
      .then((response) => {
        setBookFilter(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  getData();

  const handleChange = (event) => {
    let filtered = bookFilter.filter(item =>{
      return item.author.includes(event.target.value);
    });
    setBookFilter(filtered);
  }

  const [hideId, setHideId] = useState(true);
  const handleHideIdChange = (event) => {
    setHideId(event.target.checked);
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }
  
  return (
    <div>
      <Search onSearch = {handleChange}/>
      <Hide onHideIdChange={handleHideIdChange}/>
      <Gallery liste = {bookFilter} hideId={hideId}/>
    </div>
  )
}

export default App
