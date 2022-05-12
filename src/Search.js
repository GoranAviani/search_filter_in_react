import React, {useState} from "react";


const Search = ({data, appDataHandler}) => {
    const [userInput, setUserInput] = useState('')
    const [filterList, setFilterList] = useState(data);

    const handleSearch = (event) => {
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
                Search: <input name="query" type="text" value={userInput} onChange={handleSearch}/>
            </div>
            {filterList &&
                filterList.map((item) => (
                    <div>{item}</div> //Display each item
                ))}
        </form>
    );
}

export default Search;