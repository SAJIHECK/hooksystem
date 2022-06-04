import React, { useState } from "react";
import Accordion from "./componets/Accordion";
import Search from "./componets/search";
import Dropdown from "./componets/Dropdown";

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
    const [selected,setSelected]= useState(options[0]);
    return <div>
        {/* <Accordion item={items}/>  
        <Search/>  */}
        <Dropdown 
            selected={selected}
            onSelectedChange={setSelected}
            options={options}/>
    </div>;
};