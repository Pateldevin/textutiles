import React, { useState } from 'react'

export default function TextForms(props) {
    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleloclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleclearclick = () => {
        let newtext = ' '
        setText(newtext)
        props.showAlert("The text has been cleared", "success")
    }
    const handlecopy=()=>{
        let text = document.getElementById("myBox")
        text.select()
        text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard", "success")
    }
    const handleOnclick = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    return (
        <>
            <div className="container"  style={{color: props.mode === 'dark'? 'white':'black'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control mx-1" value={text} onChange={handleOnclick} style={{ backgroundColor: props.mode === 'dark' ? 'grey':'white',color: props.mode === 'dark'? 'white':'black' }}  id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleloclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear the text</button>
                <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy the text</button>
            <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'black'}} >
            <h2 >your text summary </h2>
            <p>{text.split(" ").length} word and {text.length} are charaters</p>
            <p>{0.008 * text.split(" ").length} are the minutes to read the word </p>
            <h3>preview</h3>
            <p>{text}</p>
            </div>
        </div >
            </>
    )
}
