import React from "react";

export default function NewItem(props, {onDelete}) {
    return (
    <div>
        <label className="items">
            <h3>{props.item.name}</h3> 
            <h3>{props.item.price}$</h3> 
            <button onClick={() => {
                // onDelete(props.item)
            }}>X</button>
        </label>
    </div>
       
    )
}