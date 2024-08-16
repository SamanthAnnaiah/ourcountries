import { createContext, useContext, useState } from "react";
let countrycontext = createContext();

export function CountryProvider({ children }) {
  let [visible, setvisible] = useState(false);
  let [active, setactive] = useState(false);

  let [searchterm, setsearchterm] = useState("");
  let [optionterm, setoptionterm] = useState("medname");
  let [countryresults, setcountryresults] = useState([]);
  let [sresult, setsresult] = useState({});

  return (
    <countrycontext.Provider
      value={{
        visible,
        setvisible,
        active,
        setactive,
        searchterm,
        setsearchterm,
        optionterm,
        setoptionterm,
        countryresults,
        setcountryresults,
        sresult,
        setsresult,
      }}
    >
      {children}
    </countrycontext.Provider>
  );
}

export function UsecountryContext() {
  let context = useContext(countrycontext);
  if (context === undefined) {
    throw new Error("Context is out of scope");
  } else {
    return context;
  }
}
