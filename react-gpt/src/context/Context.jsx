import { createContext } from "react";
import runChat from "../config/gemini";

export const Context =createContext();

const ContextProvider = (props) => {

    const onSent = async (promt) => {
        await runChat(promt)
    }

    const contextValue = {

    }
    onSent("what is React JS?")

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider