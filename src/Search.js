import React, {useState} from "react";


const Search = ({data, appDataHandler}) => {
    const [userInput, setUserInput] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()

        const filteredData = data.filter(
            (item) =>
                item.toLowerCase().indexOf(userInput.toLowerCase()) !== -1
        );


        appDataHandler(filteredData)


    }

    const inputHandler = (e) => {
        setUserInput(e.target.value)
    }

    return (
        <form onSubmit={formSubmit}>
            <input value={userInput} onChange={inputHandler}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search;