import React from "react";
import Accordion from "./componets/Accordion";
import Search from "./componets/search";

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


export default () => { 
    return <div>
        {/* <Accordion item={items}/>  */}
        <Search/>
    </div>;
};