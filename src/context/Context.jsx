import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

// New function components
const ContextProvider = (props) => {
  // state variables
  const [input, setInput] = useState(""); // used to save input
  const [recentPrompt, setRecentPrompt] = useState(""); // input field data will be saved in here
  const [prevPrompts, setPrevPrompts] = useState([]); // store input history
  const [showResults, setShowResults] = useState(false); // if true, hide all the cards and show results
  const [loading, setLoading] = useState(false); // true, loading animation
  const [resultData, setResultData] = useState(""); // display result on the page

  const onSent = async (prompt) => {
    // function defined to call API with input prompt

    setResultData("");
    setLoading(true);
    setShowResults(true);
    setRecentPrompt(input);
    const response = await runChat(input); // async function, need time for operations, so await the runChat (API function)
    setResultData(response);
    setLoading(false);
    setInput("");
  };

  // holds shared values/functions that you want to expose to the app
  const contextValue = {
    // pass state variables in contextvalue so main and sidebar comp can use it
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResults,
    loading,
    resultData,
    input,
    setInput,
  };

  /*
  What it does: Wraps your app (via props.children) in the Context.Provider, and passes it the contextValue object.
  Why it's used: This allows any component inside your app to access values from the context using useContext(Context).
  */
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
