import React, {useState} from "react";


const Search = ({data, appDataHandler}) => {
    const [userInput, setUserInput] = useState('')
    const {filteredResult, setFilteredResult} = useState('')

    const formSubmit = (e) => {
        e.preventDefault()


        appDataHandler(filteredResult)
    }

    const inputHandler = (e) => {
        setUserInput(e.target.value)

         const filteredData = data.filter(
            (item) =>
                item.toLowerCase().indexOf(userInput.toLowerCase()) !== -1
        );
        setFilteredResult(filteredData)
    }

    return (
        <form onSubmit={formSubmit}>
            <input value={userInput} onChange={inputHandler}/>
            <button type="submit">Search</button>
            {filteredResult ? filteredResult : "enter text and press search"}
        </form>
    )
}

export default Search;