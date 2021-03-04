import React from 'react';
import {Multiselect} from "multiselect-react-dropdown"

const SearchBar = ({keyword,setKeyword}) => {
    const BarStyling = {width:"80%",background:"#F2F1F9", border:"2px solid grey",borderRadius:"4px", padding:"0.8rem", margin:"0 auto",marginTop:"30px"};
    return (
        <input
            style={BarStyling}
            key="random1"
            value={keyword}
            placeholder={"Podaj fragment notki"}
            onChange={(e) => setKeyword(e.target.value)}
        />
    );
}

export default SearchBar