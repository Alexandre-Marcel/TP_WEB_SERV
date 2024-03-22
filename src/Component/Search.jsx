import { useState } from "react";
const Search = (props) => {
    const [searchTerme,setSearchTerme] = useState('');
    const handleChange = (event) => {
        setSearchTerme(event.target.value);
        props.onSearch(event);
    };
    return (
      <div>
        <label htmlFor="search">Search by author</label>
        <input type="text" placeholder="Search ..." onChange={handleChange}/>

      </div>
    )
  }

  export default Search