import { createContext } from "react";
import runChat from "../config/gemini";
import { useState } from "react";

export const Context =createContext();

const ContextProvider = (props) => {
    
    const [input, setInput] = useState ("")
    const [recentPromt, setRecentPromt] = useState("")
    const [prevPromts, setPrevPromts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPromt(input)
        const response = await runChat(input)
        setResultData(response)
        setLoading(false)
        setInput("")

    }

    const contextValue = {
        prevPromts,
        setPrevPromts,
        onSent,
        setRecentPromt,
        recentPromt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider