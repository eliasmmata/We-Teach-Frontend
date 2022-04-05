import React, { useState } from 'react'

function SearchBar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);

    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase())
        });
        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }
    return (
        <div className='search'>
            <div className='searchInputs'>
                <div className='searchIcon'>
                    {filteredData.length === 0 ?
                        <i className="pi pi-search"></i>
                        :
                        <i className="pi pi-times" id="clearBtn" onClick={clearInput}></i>
                    }
                </div>
                <input type='text' placeholder={placeholder} value={wordEntered} onChange={handleFilter}></input>
            </div>
            {filteredData.length != 0 && (
                <div className='dataResult'>
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <a key={key} className='dataItem' href={value.url} target='_blank' rel='noreferrer'>
                                <p>{value.title}</p>
                            </a>
                        )
                    })}
                </div>)}
        </div>
    )
}

export default SearchBar