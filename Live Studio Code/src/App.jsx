import React, { useState, useEffect } from 'react'
import './App.css'
import useLocalStorage from './hook/useLocalStorage'

import Editor from './Components/editor'

function App() {

  // const [html, setHtml] = useState('')
  // const [css, setCss] = useState('')
  // const [js, setJs] = useState('')

  //if we use simple useState hook, and we refresh the page the data will be lost
  //we created useLocalStorage hook, which store the data in the local storage and if we refresh, our data willbe saved
  //see useLocal... to see its working
  //we are using, local storage, so there should be something stored/written all the times becaue we are not using backend
  //if nothing is written and we run the app, it will give error

  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')

  const [srcDoc, setSrcDoc] = useState('')


  
    // this is combining html, css, jsandmaking the output
    // whenever html, css, js is changes, the codewill be compiled in 250millisec
    //and before goingoutfrom the useEffect thetimout willbe cleared

    useEffect(() => {
      const timeout = setTimeout(() => {
          setSrcDoc(
        `
          <html>
              <body>${html}</body>
              <style>${css}</style>
              <script>${js}</script>
          </html>
        `
          )
      }, 250);
      return () => clearTimeout(timeout);
  }, [html, css, js])


  return (
    <>

    <div className="divs-container">
    <h2>Live Code Studio</h2>
      <div className="top-div pane">
        <Editor displayname="HTML" language="xml" value={html} onChange={setHtml}/>
        <Editor displayname="CSS" language="css" value={css} onChange={setCss}/>
        <Editor displayname="JS" language="javascript" value={js} onChange={setJs}/>
      </div>
      <div className="bottom-div pane">
      <h2 className='output'>Output</h2>

        <iframe
        srcDoc={srcDoc}
        title='output'
        sandbox='allow-scripts'
        frameBorder="0"
        width="100%"
        height="100%"
        
        />
      </div>
    <p>Created by Muqeem Malik using CodeMirror</p>
    </div>
    </>
  )
}

export default App
