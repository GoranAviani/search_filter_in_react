import React, {useState} from "react";
import './Search.css'


const Search = ({data, appDataHandler}) => {
    const [userInput, setUserInput] = useState('')
    const [filterList, setFilterList] = useState(data);

    const inputHandler = (event) => {
        setUserInput(event.target.value)
        if (userInput === "") {
            setFilterList(data);
            return;
        }
        const filteredValues = data.filter(
            (item) =>
                item.toLowerCase().indexOf(userInput.toLowerCase()) !== -1
        );
        setFilterList(filteredValues);
    };

    const submitFormHandler = (e) => {
        e.preventDefault()
        appDataHandler(filterList)
    }

    return (
        <form class="search-form" onSubmit={submitFormHandler}>

            <span class="search-row">
                <label>Search</label>
                <input value={userInput} onChange={inputHandler}/>
                <button type="submit">Search</button>
            </span>
            <span class="search-result">
                {filterList ? filterList.map((item)=><p>{item}</p>) : "No results found"}
            </span>
        </form>
    );
}

export default Search;