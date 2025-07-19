import { createContext, useState } from "react";
import runChat from "../config/gemini";
import { marked } from "marked";
import DOMPurify from "dompurify";

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

  // function for typing animation
  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const startNewChat = () => {
    setLoading(false)
    setShowResults(false)
  }
  
  const onSent = async (prompt) => {
    // his function is triggered when the user sends a prompt, function defined to call API with input prompt
    // the set functions changes the state variables to change UI and fetch response from API
    setResultData("");
    setLoading(true);
    setShowResults(true);
    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);

      // Only add if it's not already in history
      setPrevPrompts((prev) => {
        if (prev.includes(prompt)) return prev;
        return [...prev, prompt];
      });
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      setInput("");
      response = await runChat(input);
    }

    // async function, need time for operations, so await the runChat (API function)

    // code block replaces all the different * ** // etc with correct html tags
    const htmlResponse = DOMPurify.sanitize(marked.parse(response));

    // setResultData(htmlResponse);

    // code block does the AI typing animation
    let htmlResponseArray = htmlResponse.split(" ");
    for (let i = 0; i < htmlResponseArray.length; i++) {
      const nextWord = htmlResponseArray[i];
      delayPara(i, nextWord + " ");
    }

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
    startNewChat
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
