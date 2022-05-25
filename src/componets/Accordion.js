import React,{useState} from "react";
import '../css/style.css';



const Accordion =({item}) =>{

   const [activeIndex,setActiveIndex]=useState(null);


    const onTitleClick=(index) => {
       setActiveIndex(index);
    };

    const renderedItems=item.map((ItemObj,index) =>{
        const active =index === activeIndex ? 'active' : '';
        return (
        <React.Fragment key={ItemObj.tittle}>
             <div className={`title ${active}`}
             onClick={()=>onTitleClick(index)}
             
             >
                 <i className="dropdown icon"></i>
                  {ItemObj.tittle}
            </div>
            <div className={`content ${active}`}>
                 <p>{ItemObj.content}</p>
             </div>
        </React.Fragment>
        );
     });
    return (  
    <div id="headerStyle"> 
        <div className="ui styled accordion">
             {renderedItems}
        </div> 
    </div>);
};
export default Accordion;