import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

// New function components
const ContextProvider = (props) => {
  /*
  const [input,setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompts, setPrevPrompts] = userState([]);
  */


  const onSent = async (prompt) => { // function defined to call API with input prompt
    await runChat(prompt); // async function, need time for operations, so await the runChat (API function)
  };

  // holds shared values/functions that you want to expose to the app
  const contextValue = {};

  /*
  What it does: Wraps your app (via props.children) in the Context.Provider, and passes it the contextValue object.
  Why it's used: This allows any component inside your app to access values from the context using useContext(Context).
  */
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
