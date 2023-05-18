import React, { useState } from "react";
import NewItem from "./NewItem";

export default function ItemList({products}, {onDelete}){

    return (
        <ul>
            {
                products.map((item) => {
                    return (
                        <NewItem key={item.id} item={item} onDelete={onDelete}/>
                    )
                })
            }
        </ul>
    )
}