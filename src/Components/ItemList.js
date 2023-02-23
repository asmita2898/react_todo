import React from "react";
import "../Components/ItemList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from 'react-flip-move';

function ItemList(props) {
    const items = props.items;
    const itemlist = items.map((item) => {
        return(
        <FlipMove>
        <div className="list" key={item.key}>
        <p>
        <input type="text" 
        id={item.key} 
        value={item.text}  
        onChange={
            (e) => {
                props.setUpdate(e.target.value, item.key)
            }
        }/>
        <span>
        <FontAwesomeIcon 
        className="faicons" 
        icon='trash'
        onClick={() => props.deleteItem(item.key)}/>
        </span>
        </p>
        </div>
        </FlipMove>
        );
    });
    return  <div>{itemlist}</div>
}

export default ItemList;
