import React, { useState } from "react";
import './editor.css'

//coming from codemirror
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

import 'codemirror/mode/xml/xml' //to work with html/xml
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'

//coming from react-codemirror2
import { Controlled as MyEditor } from "react-codemirror2"; //to create the code editor

export default function Editor(props){


    const {displayname, language, value, onChange} = props;

    const [open, setOpen] = useState(true)

    function handleChange(editor, data, value){
        onChange(value);
    }


    return(
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {displayname}
                <button className='expand-collapse-button' onClick={() => setOpen(!open)}>
                    <i className={`fas ${open ? 'fa-close' : 'fa-paper-plane'}`}></i>
                </button>
            </div>
            <MyEditor
            onBeforeChange={handleChange} //work same as onChange
            value={value}
            className="code-mirror-wrapper"
            options={{
                lineWrapping : true,
                mode: language, //the language which willbe used in the edtor, coming from props
                lineNumbers: true,
                theme: "material" //dark theme
            }}
            />
        </div>
    )
}