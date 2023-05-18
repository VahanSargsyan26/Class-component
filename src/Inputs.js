import React, { useState } from "react";


export default function ProductList({onAdd}) {
    const [text, setText] = useState("")
    const [price, setPrice] = useState()
    return (
        <form onSubmit={(evt) => {
            evt.preventDefault();
            onAdd(text, price);
            setText("")
            setPrice("")
        }}>
            <span>
                <input type="text" placeholder="name" value={text} onChange={(evt) => {
                    setText(evt.target.value);
                }}/>
                <input type="text" placeholder="price" value={price} onChange={(evt) => {
                    setPrice(evt.target.value);
                }}/>
            </span>
            <button type="submit" className="btn">Submit</button>
        </form>       
    )
}