import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const initialState = {
  isLoading: false,
  quotes: [],
  quotesIndex: 0,
};

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const fetchQuote = async () => {
    const res = await axios.get(
      "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand"
    );
    console.log(res.data);
    setState({
      ...state,
      quotes: res.data,
    });
  };

  const increaseQuoteIndex = () => {
    const currentIndex = state.quotesIndex;
    if (currentIndex === 9) {
      setState({
        ...state,
        quotesIndex: 0,
      });
    } else {
      setState({
        ...state,
        quotesIndex: currentIndex + 1,
      });
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        increaseQuoteIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
