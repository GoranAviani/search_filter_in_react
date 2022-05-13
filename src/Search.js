import React, {useState} from "react";


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
        <form onSubmit={submitFormHandler}>
            <div>
                Search: <input value={userInput} onChange={inputHandler}/>
            </div>
            {filterList ? filterList.map((item)=><p>{item}</p>) : "No results found"}
            <button type="submit">Search</button>
        </form>
    );
}

export default Search;