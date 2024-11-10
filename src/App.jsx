import { RouterProvider } from "react-router-dom";
import './App.css'
import { Router } from "./services/router/router";
import { useState } from "react";
import { LangProvider,ModeProvider} from './services/provider/context'


function App() {
  const [lang,setLang] = useState('en')
  const [mode,setMode] = useState('dark')


  return (
    
       <>
       <LangProvider value={{lang ,setLang}} >
       <ModeProvider value={{mode ,setMode}} >

      <RouterProvider router={Router} />

      </ModeProvider>
      </LangProvider>

    </>
  )
}

export default App
