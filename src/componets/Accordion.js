import React from "react";
import '../css/style.css';



const Accordion =({item}) =>{

    const onTitleClick=(index) => {
        console.log('Title clicked',index);
    };

    const renderedItems=item.map((ItemObj,index) =>{
        return (
        <React.Fragment key={ItemObj.tittle}>
             <div className="title active"
             onClick={()=>onTitleClick(index)}
             
             >
                 <i className="dropdown icon"></i>
                  {ItemObj.tittle}
            </div>
            <div className="content active">
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