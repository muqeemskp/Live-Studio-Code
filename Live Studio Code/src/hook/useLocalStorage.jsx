//to store data on local storage

import React, { useEffect, useState } from "react";

const PREFIX = 'LS-Code-' //a name to store our data

export default function useLocalStorage(key){
    const prefixedKey = PREFIX + key; //key=html etc. prefixedKey = LS-Code-html, it is storing data

    const [value, setValue] = useState(() =>{

        //initially, value is a function here

        const jsonValue = localStorage.getItem(prefixedKey); //getting value from our prefixedKey
        if(jsonValue != null) return JSON.parse(jsonValue) //if value is not null, the data will be parsed and returned

    })

    useEffect(()=>{
        localStorage.setItem(prefixedKey, JSON.stringify(value)) //whenever prefixedkey & value is changed, it will be set to local storage
    }, [prefixedKey, value])

    return [value, setValue]
    //all data written is stored in value, it will be returned at the place of hook & setValue works as setHtml etc. and set value to html, css etc
}