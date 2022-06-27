import React, { useState } from "react";
import Accordion from "./componets/Accordion";
import Search from "./componets/search";
import Dropdown from "./componets/Dropdown";
import Traslate from "./componets/Translate";

const items = [
    {
        tittle:'Who is the Best Footballer in the World?',
        content:'Messi'
    },
    {
        tittle:'who win the Fifa world cup 2022 ?',
        content:'Argentina'
    },
    {
        tittle:'who is the most ballond,Dor winner?',
        content:'Messi'
    }
];

const options = [
    {
        label:'The blood color',
        value:'red'
    },
    {
        label:'The natural color',
        value:'green'
    },
    {
        label:'Color of sky',
        value:'blue'
    }
];


export default () => { 
  //  const [selected,setSelected]= useState(options[0]);
   // const [showDropdown, setShowDropdown]= useState(true);
    return <div>
        {/* <Accordion item={items}/>  
        <Search/> 

        <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle DopDown</button>
        {showDropdown ?
        <Dropdown 
            selected={selected}
            onSelectedChange={setSelected}
            options={options}/> :null
        }  */}
        <Traslate/>
    </div>;
};